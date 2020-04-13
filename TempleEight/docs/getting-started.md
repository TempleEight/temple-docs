---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

Welcome to the complete Temple getting started guide!

This tutorial will walk you through developing your own applications with Temple, from start to finish.

We're going to assume you've already installed the Temple CLI, as per the [Installation Guide](installation.md). 
> If you'd like to verify this, run `temple --version` 

## Project Setup

Temple projects start their life as an empty directory. Let's make one for this tutorial:

``` shell
~/Documents ❯❯❯ mkdir temple-tutorial
~/Documents ❯❯❯ cd temple-tutorial
~/Documents/temple-tutorial ❯❯❯
```

## Templefile 

The Templefile is the heart of the project, it contains all of the information the Temple CLI uses to build your application files.

A Temple file is any text file with the `.temple` extension. 

For a full reference of the Templefile language, check out the [Templefile Spec](templefile-spec.md).

We're going to work from an example Templefile for this tutorial. It describes a very simple dating app with two microservices. Here it is:

```
DatingApp: project {
  #language(go);
  #database(postgres);
  #provider(dockerCompose);
}

User: service {
  // Implicit `id` field that matches Auth service `id` field
  firstName: string;
  lastName: string;
  dob: datetime;
  #auth(email); // Creates Auth service, which stores an `id`, `email` and `password` field
  #readable(by: all); // Anyone can GET any User
  // Implicit #writable(by: this), only creator can UPDATE and DELETE
}

Match: service {
  // Implicit `id` field
  // Implicit `created_by` field, which will be Auth/User ID of creator
  userOne: User;
  userTwo: User;
  matchedOn: datetime @serverSet;
  #enumerable; // Adds list endpoint, filters by `created_by`, only creator can GET
  // Implicit #readable(by: this), only creator can GET
  // Implicit #writable(by: this), only creator can UPDATE and DELETE 
}
```

Let's break this down section by section get a better understanding of what's going on.

### Project Block

```
DatingApp: project {
  #language(go);
  #database(postgres);
  #provider(dockerCompose);
}
```

The first thing required in a Templefile is the project block. This instantiates the whole project to Temple and gives some project-level metadata.

At the top level, we write `DatingApp: project`, which defines a new `project` called `DatingApp`. This is the name Temple uses for your project globally.

Then, inside the project block there are a number of metadata items that tell us things about the project on a global scale. Here, we define the server language for all services to be Golang, and the 
database backing everything up to be Postgres. While these two blocks are defined on the project level, they can also be overridden at the service level, if you for example wanted a certain service to be in
a different language. The final metadata item is the `#provider` block, which specifies that all of the services in this project should be orchestrated with `docker-compose`. This is a project level item only, 
and can't be overridden at the service level.

### Service Blocks

```
User: service {
  // Implicit `id` field that matches Auth service `id` field
  firstName: string;
  lastName: string;
  dob: datetime;
  #auth(email); // Creates Auth service, which stores an `id`, `email` and `password` field
  #readable(by: all); // Anyone can GET any User
  // Implicit #writable(by: this), only creator can UPDATE and DELETE
}
```

Each service block in a Templefile defines one generated microservice. 

The opening statement `User: service` defines a new service, named User, which is the name Temple will use to refer to this service.

> As `User` is a reserved keyword in the `PostgreSQL` query language, Temple will automatically rename this service internally to be `datingapp-user`, in order to mitigate naming clashes. The CLI will do this automatically with many variables that share name with generated reserved keywords.

Service block can contain two kinds of declarations: *Property definitions* and *metadata*. 

Property declarations tell us about the kind of data belonging to the entity this service describes. For example, here we say that a `User` has a `firstName` and a `lastName`, which are both `string` properties, and a date of birth (`dob`), which is a `datetime` property. Property declarations can either have a [*primative* datatype](primitives), or be a *foreign key* to another service.

Every service in Temple also has an implicit `id` property, which assigns a `UUID` to each entity stored in a service, used for foreign keys and authentication.

Metadata definitions begin with `#` characters and tell us something about the service, or how it interacts with other services. For a full list of all valid metadata, see the [Templefile Spec](templefile-spec).

#### Auth Blocks

The first piece of metadata in the `User` service is the `#auth` block. Having an auth block in a service means that an end user of the application can log into the system *as a* `User`, given their `email`. This defines a `User` as an identifiable entity in the service, meaning they can create other objects and hold ownership of them (i.e. A `User` could have `Pictures` in an image service that belong to them, and not other `Users`). 

In terms of implementation, having an `auth` block anywhere in a Templefile causes the Temple CLI to generate an extra service, called `Auth`, which a user must authenticate themselves with to get a valid [`JWT`](https://jwt.io/) in order to access other services. This authentication comes in the form of an email and password login system.

#### Permission Metadata

Another type of metadata, present in every service are permission based metadata. These consist of `#readable`, `#writable`, and `#enumerable`. They respectfully define which other entities can read, write and enumerate the values stored in this service. 

`#readable` has two options, `#readable(by: this)` is the default value when the service contains an auth block, and is `#readable(by: all)` when it doesn't. `by: this` defines that the only entity that can read the values stored in this entity, is this entity itself (i.e. The only `User` who can read `Bob's` date of birth, is `Bob` himself). This is opposed by `#readable(by: all)` which specifies that all `Users` can get information about all other users. 

`#writeable` follows the same logic as `#readable`, except refers to the permission to write the data stored in an entity, rather than reading.

`#enumerable` means that the entities in this service can be listed, by the entity that created them. It generates the `/list/{id}` endpoint on the generated microservice, which when invoked, will return all entities stored in the service, that hold `createdBy` value of `id`.


```
Match: service {
  // Implicit `id` field
  // Implicit `created_by` field, which will be Auth/User ID of creator
  userOne: User;
  userTwo: User;
  matchedOn: datetime @serverSet;
  #enumerable; // Adds list endpoint, filters by `created_by`, only creator can GET
  // Implicit #readable(by: this), only creator can GET
  // Implicit #writable(by: this), only creator can UPDATE and DELETE 
}
```


#### CreatedBy Attributes

As well as implicit `id` attributes, some services also get an implicit `createdBy` attribute generated. Those services are ones that do not contain an `#auth` block, but are contained in a Templefile where some service(s) do have an `#auth` block. An example of this can be seen in the second service block of the example `DatingApp` Templefile. The `Match` service stores an implicit `createdBy` attribute, which means that a `User` can enumerate all of their matches that have a `createdBy` attribute of their `id`. 

#### Foreign Keys

Also visible in the `Match` service is an example of a foreign key service property. A match is a relationship made between two `User`s, and their `id`s are stored in the respective fields. Using a foreign key will cause Temple to perform cross-service communication in order to verify the existence of any entities referred to, before this entity is created. For example, when the `/match` endpoint is invoked with a POST request for `User`s `1` and `2`, the Match service will first check with the `User` service that those `User`s actually exist, before creating the `Match`.

#### Property Metadata

The final thing we can see in the example Templefile is the `@serverSet` metadata on `Match` service's `matchedOn` field. Metadata beginning with `@` refer to a particular property, and tell us about this property's values and how they are accessed. 

In this example, the `@serverSet` metadata is used. This means that the `matchedOn` value isn't expected to be provided in the POST request that creates this `Match` entity, and is instead calculated by the server itself when the request arrives. 

## Running The Example

Now that we have created our example Templefile, save it in a file named `dating-app.temple`, in our `temple-tutorial` directory created earlier.

### Validating the Templefile

The Temple CLI contains a tool for validating your Templefile before generating any code. We can invoke this tool by running:

```
~/Documents/temple-tutorial ❯❯❯ temple validate dating-app.temple
Templefile validated correctly
```

Which means our Templefile is syntactically correct, and we an begin to generate all the code we need.

### Generating Code

At this point, we can begin to generate some code. Running: 

```
~/Documents/temple-tutorial ❯❯❯ temple generate dating-app.temple
```

Begins the process. The first thing we'll see is the CLI prompting us to give some further generation details that are specific to the metadata selections made in our Templefile. 

```
~/Documents/temple-tutorial ❯❯❯ temple generate dating-app.temple
What should the Go module name be? (expected format "github.com/username/repo")
```

We need to enter the name of the Golang module we'll be generating into for our project, this can be anything, but standards dictate it should be the github URL of where this project will be hosted. 

For this example enter `github.com/temple/tutorial`. 

```
~/Documents/temple-tutorial ❯❯❯ temple generate dating-app.temple
What should the Go module name be? (expected format "github.com/username/repo")
github.com/temple/tutorial
github.com/temple/tutorial
Generated project in /path/Documents/temple-tutorial
```

Now we can view the generated outputs of our project:

```
~/Documents/temple-tutorial ❯❯❯ tree
.
├── api
│   └── dating-app.openapi.yaml
├── auth
│   ├── Dockerfile
│   ├── auth.go
│   ├── comm
│   │   └── handler.go
│   ├── config.json
│   ├── dao
│   │   ├── dao.go
│   │   └── errors.go
│   ├── go.mod
│   ├── hook.go
│   ├── metric
│   │   └── metric.go
│   ├── util
│   │   └── util.go
│   └── wait-for-kong.sh
├── auth-db
│   └── init.sql
├── dating-app-user
│   ├── Dockerfile
│   ├── config.json
│   ├── dao
│   │   ├── dao.go
│   │   └── errors.go
│   ├── dating-app-user.go
│   ├── go.mod
│   ├── hook.go
│   ├── metric
│   │   └── metric.go
│   └── util
│       └── util.go
├── dating-app-user-db
│   └── init.sql
├── dating-app.temple
├── deploy.sh
├── docker-compose.yml
├── kong
│   └── configure-kong.sh
├── match
│   ├── Dockerfile
│   ├── comm
│   │   └── handler.go
│   ├── config.json
│   ├── dao
│   │   ├── dao.go
│   │   └── errors.go
│   ├── go.mod
│   ├── hook.go
│   ├── match.go
│   ├── metric
│   │   └── metric.go
│   └── util
│       └── util.go
└── match-db
    └── init.sql

19 directories, 38 files
```

### Output Breakdown

We'll break these outputs down to understand what each one means. 

```
/auth/
/match/
/dating-app-user/
```

These directories contain the Go code for each microservice, one per folder. This includes the `auth` service, which was generated due to the `#auth` block in the `User` service.
A full description of these can be seen in the [Golang Reference](golang)

```
/auth-db/
/dating-app-user-db/
/match-db/
```

These directories contain the SQL init scripts for the databases on each service. These scripts manage the database schema and define which fields are stored.

```
/api/
```

This directory contains the OpenAPI specification for the project, used for generating target application code. Full details can be seen in the [OpenAPI Reference](openapi)

```
/kong/
```

Temple projects use [Kong](https://konghq.com/kong/) as an API Gateway, which routes traffic from outside of the application to the correct microservice internally. Kong also handles checking valid JWT tokens for authorisation required services. The `kong` directory contains a configuration script that needs to run after the services have been deployed. It informs Kong on the hostnames of the services and which API endpoints route to which services.
Full details are available in the [Ingress Guide](ingress).

```
/docker-compose.yml
```

This file defines how to orchestrate all of the services in `docker-compose`, including Kong. If Kubernetes were used instead of `docker-compose` for orchestration, this file would be replaced with a `kube` folder. See the [Orchestration Guide](orchestration). 

```
/deploy.sh
```

This shell script is an automated way to deploy the application **for local development** , including running all initialization steps and setting environment variables. 

> Run `source deploy.sh` to start the program, this includes setting the `$KONG_ENTRY` and `$KONG_ADMIN` environment variables

## Running the application

Now that we've generated some application code, we can run it and test that it works as we intended. 

Make sure the Docker daemon is running and follow along.

```
~/Documents/temple-tutorial ❯❯❯ source deploy.sh
```

The following output details all of the microservices being built with Docker, automatic waiting until all services are available, and then running the `kong` initialisation scripts.

Let's check that the services are running:

```
~/Documents/temple-tutorial ❯❯❯ docker ps

CONTAINER ID        IMAGE                             COMMAND                  CREATED             STATUS                             PORTS                                                                NAMES
eef436bb352b        kong:2.0.1                        "/docker-entrypoint.…"   14 seconds ago      Up 4 seconds (health: starting)    0.0.0.0:8000-8001->8000-8001/tcp, 0.0.0.0:8443-8444->8443-8444/tcp   temple-tutorial_kong_1
a324358ce197        postgres:12.1                     "docker-entrypoint.s…"   16 seconds ago      Up 13 seconds                      5432/tcp                                                             temple-tutorial_auth-db_1
65afe1e86072        postgres:12.1                     "docker-entrypoint.s…"   16 seconds ago      Up 13 seconds                      5432/tcp                                                             temple-tutorial_match-db_1
7fff3a9a7852        temple-tutorial_match             "./match"                16 seconds ago      Up 13 seconds                      0.0.0.0:1028->1028/tcp                                               temple-tutorial_match_1
98b61d029313        temple-tutorial_auth              "./wait-for-kong.sh …"   16 seconds ago      Up 13 seconds                      0.0.0.0:1024->1024/tcp                                               temple-tutorial_auth_1
6d222e902ee2        postgres:12.1                     "docker-entrypoint.s…"   17 seconds ago      Up 14 seconds                      5432/tcp                                                             temple-tutorial_dating-app-user-db_1
4591d65cd3e8        temple-tutorial_dating-app-user   "./dating-app-user"      17 seconds ago      Up 13 seconds                      0.0.0.0:1026->1026/tcp                                               temple-tutorial_dating-app-user_1
5f09054e5c93        postgres:12.1                     "docker-entrypoint.s…"   17 seconds ago      Up 14 seconds (health: starting)   5432/tcp                                                             temple-tutorial_kong-db_1
```

And everything seems to be looking good.

We can check that the entry point environment variables are set correctly:

```
~/Documents/temple-tutorial ❯❯❯ echo $KONG_ENTRY
localhost:8000
```

This address is the Kong entrypoint. By addressing all of our API requests here, Kong will automatically forward it on to the correct microservice.

### Making Requests

First we need to acquire a JWT by logging in to the auth service.

```
~/Documents/temple-tutorial ❯❯❯ curl -X POST $KONG_ENTRY/api/auth/register -d '{"email": "test@test.com", "password": "testpassword"}'
{"AccessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODY4NzI3MzQsImlkIjoiZTk3NWRkNTktN2Q4ZS0xMWVhLWFmYmUtMDI0MmFjMWYwMDAyIiwiaXNzIjoibnVxSmJZeWE5YnBWcTNDTnpYWUFTYWVPYzF5c2twOTAifQ.FvigKn3xf-EzQ5qSDdDdF_bySwA8o_uBQrdkkNOZauE"}
```

This registers as a new user. The JWT returned to us here needs to be included in all future requests made.

```
~/Documents/temple-turotial ❯❯❯ curl -X POST $KONG_ENTRY/api/dating-app-user -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODY4NzI3MzQsImlkIjoiZTk3NWRkNTktN2Q4ZS0xMWVhLWFmYmUtMDI0MmFjMWYwMDAyIiwiaXNzIjoibnVxSmJZeWE5YnBWcTNDTnpYWUFTYWVPYzF5c2twOTAifQ.FvigKn3xf-EzQ5qSDdDdF_bySwA8o_uBQrdkkNOZauE' -d '{"firstName": "John", "lastName": "Smith", "dob": "1996-12-19T16:39:57-08:00" }'

{"id":"e975dd59-7d8e-11ea-afbe-0242ac1f0002","firstName":"John","lastName":"Smith","dob":"1996-12-20T00:39:57Z"}
```

This creates a new `User` with name John Smith and a dob of 1996-12-19.

The full list of all generated endpoints is detailed in the [Ingress Guide](ingress).

### Automated Testing

Another tool contained in the Temple CLI is the automated testing tool. Temple will take the data model defined in the Templefile, as well as the generated sources and will automatically make requests that meet the format of the data, verifying that the returned values is as expected. It can be a very useful way of end-to-end testing the application, verifying all components are functioning correctly.

```
~/Documents/temple-turotial ❯❯❯ temple test dating-app.temple
🐳 Spinning up Docker Compose infrastructure...
🧪 Testing Auth service
    ✅ Auth register
    ✅ Auth login
🧪 Testing DatingAppUser service
    ✅ DatingAppUser create
    ✅ DatingAppUser read
    ✅ DatingAppUser update
    ✅ DatingAppUser delete
🧪 Testing Match service
    ✅ Match create
    ✅ Match read
    ✅ Match update
    ✅ Match delete
🎉 Everything passed
💀 Shutting down Docker Compose infrastructure...
```

## Next Steps

This concludes our end to end walkthrough of the Temple ecosystem. For next steps:

* Take a look at expanding the generated application with custom business logic in the [Business Logic Guide](business-logic)
* Try different orchestration methods, described in the [Orchestration Guide](orchestration)
* Implement a metrics monitoring suite, detailed in the [Metrics Guide](metrics)