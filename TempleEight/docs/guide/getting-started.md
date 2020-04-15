---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Welcome to the complete Temple getting started guide!

This tutorial will walk you through developing your own applications with Temple, from start to finish.

We're going to assume you've already installed the Temple CLI, as per the [Installation Guide](../installation). 
> If you'd like to verify this, run `temple --version`, output should be `temple X.X.X (c) 2020 TempleEight`


## Project Setup

Temple projects start their life as an empty directory. Let's make one for this tutorial:

```
~/Documents ❯❯❯ mkdir temple-tutorial
~/Documents ❯❯❯ cd temple-tutorial
~/Documents/temple-tutorial ❯❯❯
```

## Templefile 

The Templefile is the heart of the project, it contains all of the information the Temple CLI uses to build your application files.

A Templefile is any text file with the `.temple` extension. 

For a full reference of the Templefile language, check out the [Templefile Spec](../reference/templefile-spec).

We'll build an example Templefile from the ground up with minimal features, and add more over the rest of the guides.

The two top level entries in a Templefile are *projects* and *services*.
A Templefile has exactly one project block, and can have many service blocks.

### Project Block

```
ExampleProject: project {
  #language(go);
  #database(postgres);
  #provider(dockerCompose);
}
```

The first thing required in a Templefile is the project block. This instantiates the whole project to Temple and gives some project-level metadata.

At the top level, we write `ExampleProject: project`, which defines a new `project` called `ExampleProject`.
This is the name Temple uses for your project globally.

Then, inside the project block there are a number of metadata items that tell us things about the project on a global scale.

Metadata definitions begin with `#` characters and tell us something about a project or a service, and how it interacts with other services. 
For a full list of all valid metadata, see the [Templefile Spec](../reference/templefile-spec).

Here, we define the server language for all services to be Golang, and the database backing everything up to be Postgres.
While these two blocks are defined on the project level, they can also be overridden at the service level, if you for example wanted a certain service to be in a different language.
The final metadata item is the `#provider` block, which specifies that all of the services in this project should be orchestrated with `docker-compose`.
This is a project level item only, and can't be overridden at the service level.

### Service Blocks

```
ExampleService: service {
  foo: string;
  bar: int;
}
```

The next thing to add is a Service Block.
Each service block in a Templefile defines one generated microservice. 

The opening statement `TestService: service` defines a new service, named `ExampleService`, which is the name Temple will use to refer to this service.

Service block can contain two kinds of declarations: *Property definitions* and *metadata*. 

Property declarations tell us about the kind of data belonging to the entity this service describes. 
For example, here we say that `ExampleService` has a `foo`  which is a `string` property, and a `bar`, which is an `int` property. 
Property declarations can either be a [*primitive* datatype](../reference/primitives), or be a [*foreign key*](cross-service-coms) to another service.

Every service in Temple also has an implicit `id` property, which assigns a `UUID` to each entity stored in a service, used for foreign keys and authentication.

> Note: Variable names (project names, service names and property names) can clash with reserved keywords in the languages Temple generates into.
> To mitigate this, the Temple CLI will automatically rename any conflicting variables to `$projectName-$variableName`.


All together, our example Templefile is:

```
ExampleProject: project {
  #language(go);
  #database(postgres);
  #provider(dockerCompose);
}

ExampleService: service {
  foo: string;
  bar: int;
}
```

## Running The Example

Now that we have created our example Templefile, save it in a file named `example.temple`, in our `temple-tutorial` directory created earlier.

### Validating the Templefile

The Temple CLI contains a tool for validating your Templefile before generating any code. We can invoke this tool by running:

```
~/Documents/temple-tutorial ❯❯❯ temple validate example.temple
Templefile validated correctly
```

This means our Templefile is syntactically correct, and we can begin to generate all the code we need.

### Generating Code

At this point, we can begin to generate some code. Running the following will begin generating code: 

```
~/Documents/temple-tutorial ❯❯❯ temple generate example.temple
```

The first thing we'll see is the CLI prompting us to give some further generation details that are specific to the metadata selections made in our Templefile. 

```
~/Documents/temple-tutorial ❯❯❯ temple generate example.temple
What should the Go module name be? (expected format "github.com/username/repo")
```

We need to enter the name of the Golang module we'll be generating into for our project, this can be anything, but standards dictate it should be the GitHub URL of where this project will be hosted. 

For this example enter `github.com/temple/tutorial`. 

```
~/Documents/temple-tutorial ❯❯❯ temple generate example.temple
What should the Go module name be? (expected format "github.com/username/repo")
github.com/temple/tutorial
Generated project in /path/Documents/temple-tutorial
```

Now we can view the generated outputs of our project:

```
~/Documents/temple-tutorial ❯❯❯ ls -1
api
deploy.sh
docker-compose.yml
example-service
example-service-db
example.temple
kong
```

### Output Breakdown

We'll break these outputs down to understand what each one means. 

* `/example-service/` - This directory contains the Go code for the `ExampleService` we defined earlier.
A full description of this can be seen in the [Golang Reference](../reference/golang)

* `/example-service-db/` - This directory contains the SQL init scripts for the database backing the `ExampleService`.
These scripts manage the database schema and define which fields are stored.

* `/api/` -This directory contains the OpenAPI specification for the project, used for generating target application code.
Full details can be seen in the [OpenAPI Reference](../reference/openapi)

* `/kong/` - Temple projects use [Kong](https://konghq.com/kong/) as an API Gateway, which routes traffic from outside of the application to the correct microservice internally. 
The `kong` directory contains a configuration script that needs to run after all services have been deployed. 
It informs Kong on the hostnames of the services and which API endpoints route to which services.
Full details are available in the [Ingress Guide](ingress).

* `/docker-compose.yml` - This file defines how to orchestrate all of the services in `docker-compose`, including Kong. 
If Kubernetes were used instead of `docker-compose` for orchestration, this file would be replaced with a `kube` folder. 
See the [Orchestration Guide](orchestration). 

* `/deploy.sh` - This shell script is an automated way to deploy the application **for local development** , including running all initialization steps and setting environment variables. 

> Run `source deploy.sh` to bring up your orchestrated services and set required environment variables to make requests.

## Application Description

What we've generated here is a microservice that exposes 4 API endpoints. 
Each endpoint performs one of the CRUD (Create, Read, Update, Delete) operations respectively, on valid data that matches the description given in the Templefile.

As all of the HTTP requests are routed through the Kong API Gateway (See the [Ingress Guide](ingress)), we address the requests in the form Kong requires.
This format is: `$KONG_ENTRY_URL/api/$service_name/$endpoint`. 
The `$KONG_ENTRY_URL` is set in an environment variable called `$KONG_ENTRY` automatically by the `deploy.sh` script.

The (very simple) architecture of our system is described in the below diagram: 

<img alt="Tutorial System Architecture" src={useBaseUrl('img/tutorial-architecture.png')} />

In our example, we have one microservice: `ExampleService`. 
It consists of a Go server, that listens for requests on 4 endpoints, processes the data, and interacts with it's database to serve the request appropriately.

These 4 endpoints are:

* `POST /api/example-service` - Create a new item in the example service.
The request should include data in JSON format, of a form that matches what we specified in the Templefile. That is:
```
{
  "foo": string,
  "bar": int
}
```
  This returns a confirmation from the server of the form:
  ```
  200 OK
  {
    "id": UUID,
    "foo": string,
    "bar": int
  }
  ```
  Showing that the request completed successfully. 
  The `id` returned can be used to make future queries on this data.

* `GET /api/example-service/{id}` - Query an existing item from the database with a given `id`.
If an item exists in the database with that `id`, it will be returned in the form:
```
200 OK
{
  "id": UUID,
  "foo": string,
  "bar": int
}
```
* `PATCH /api/example-service/{id}` - Update an existing item in the database with a given `id`.
The request should contain data in JSON format, containing the new values to update the entry to.
```
{
  "foo": string,
  "bar": int
}
```
If the entry exists in the database, the result will be:
```
200 OK
{
  "id": UUID,
  "foo": string,
  "bar": int
}
```
* `DELETE /api/example-service/{id}` - Delete an existing item in the database with a given `id`.
If the entry exist in the database, the result will be:
```
200 OK
```

> The OpenAPI specification generated in the `/api` project folder contains a full API Schema of every endpoint available in your application, their parameters and return data.

## Running the application

Now that we've generated some application code, we can run it and test that it works as we intended.

Make sure the Docker daemon is running ([installation instructions](https://docs.docker.com/get-docker/)) and follow along.

```
~/Documents/temple-tutorial ❯❯❯ source deploy.sh
```

The following output details all of the microservices being built with Docker, automatic waiting until all services are available, and then running the `kong` initialisation scripts.

Let's check that the services are running:

```
~/Documents/temple-tutorial ❯❯❯ docker ps --format '{{.Image}}'
kong:2.0.1
postgres:12.1
postgres:12.1
temple-tutorial_example-service
```

And everything seems to be looking good.

We can check that the entry point environment variables are set correctly:

```
~/Documents/temple-tutorial ❯❯❯ echo $KONG_ENTRY
localhost:8000
```

This address is the Kong entrypoint. By addressing all of our API requests here, Kong will automatically forward it on to the correct microservice.

### Making Requests

In order to make a request to the application, we send a HTTP request to the Kong entrypoint URL with the correct data. 

```
~/Documents/temple-tutorial ❯❯❯ curl -X POST  $KONG_ENTRY/api/example-service -d '{"foo" : "Hello Temple!", "bar" : 123}'
{"id":"e3621abe-7e40-11ea-9934-0242c0a88002","foo":"Hello Temple!","bar":123}
```

Shows that we have created a new entry in `ExampleService`, with the `foo` property set to "Hello Temple!" and the `bar` property set to 123. 
The response from the application also shows the `UUID` for this entity, automatically assigned by the service, which we can use to refer to this entity in further requests.

For example, sending a `GET` request to the service with the entity's `id`, returns us the data.

```
~/Documents/temple-tutorial ❯❯❯ curl -X GET $KONG_ENTRY/api/example-service/e3621abe-7e40-11ea-9934-0242c0a88002
{"id":"e3621abe-7e40-11ea-9934-0242c0a88002","foo":"v","bar":1689563322}
```

The full list of all generated endpoints is detailed in the [Ingress Guide](ingress).

## Automated Testing

Another tool contained in the Temple CLI is the automated testing tool.
Temple will take the data model defined in the Templefile, as well as the generated sources and will automatically make requests that meet the format of the data, verifying that the returned values is as expected. 
It can be a very useful way of end-to-end testing the application, verifying all components are functioning correctly.

```
~/Documents/temple-tutorial ❯❯❯ temple test example.temple
🐳 Spinning up Docker Compose infrastructure...
🧪 Testing ExampleService service
    ✅ ExampleService create
    ✅ ExampleService read
    ✅ ExampleService update
    ✅ ExampleService delete
🎉 Everything passed
💀 Shutting down Docker Compose infrastructure...
```

## Next Steps

This concludes our end to end walkthrough of the Temple ecosystem. For next steps, continue through the more advanced pages of the tutorial, or jump ahead:

* Add [Access Control](access-control) to your services, and learn to [Enumerate services by others](enumeration)
* Implement security policies through through the [Authentication Guide](authentication)
* Create complex relationships between entities with the [Cross-Service Communication Guide](cross-service-coms)
* Take a look at expanding the generated application with custom business logic in the [Business Logic Guide](business-logic)
* Constrain the values allowed to be stored by your services in the [Value Annotations Guide](value-annotations)
* Try different orchestration methods, described in the [Orchestration Guide](orchestration)
* Implement a metrics monitoring suite, detailed in the [Metrics Guide](metrics)
