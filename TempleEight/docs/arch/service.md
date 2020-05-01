---
id: service
title: Service Architecture
sidebar_label: Service Architecture
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This section will describe the architecture of an individual service.
We'll use the `ExampleService` from the [Getting Started](../getting-started.md) guide to illustrate the core service architecture.
Once covered, we'll look at how optional features such as inter-service communication and metrics slot in.
Finally, there's an FAQ section to answer common questions about our architecture. 

## Libraries
Before we get started, here are the `go` libraries we're using:

- [gorilla/mux](https://github.com/gorilla/mux) - for routing requests
- [lib/pq](https://github.com/lib/pq) - for interfacing with the backing datastore
- [go-playground/validator](https://github.com/go-playground/validator) - for validating request body parameters
- [google/uuid](https://github.com/google/uuid) - for handling all things UUID

## Service File Tree
As a reminder, here is the `ExampleService` block from the [Getting Started](../getting-started.md) guide:

```templefile
ExampleService: service {
  foo: string;
  bar: int;
}
```

Here is the corresponding generated file tree:
```
├── Dockerfile
├── config.json
├── dao
│   ├── dao.go
│   ├── datastore.go
│   └── errors.go
├── example-service.go
├── go.mod
├── hook.go
├── setup.go
└── util
    └── util.go
```

We can ignore the `Dockerfile`, `go.mod` and `config.json` files for the purpose of illustrating the architecture.
This leaves us with files that fit into one of three packages:

 - `main` - sets up the server environment and handles incoming requests and outgoing responses
 - `dao` - provides a common interface to the backing datastore, abstracting implementation details
 - `util` - houses miscellaneous utility functions

## The `main` Package
This package, as you would expect, does most of the heavy lifting. In our example, it includes the following files at the service root directory:
```
├── example-service.go
├── hook.go
└── setup.go
```

The `example-service.go` contains the `main` function, the entrypoint to our service.
The `main` function's responsibility is to initialise the environment object and start the server.

### The `env` Object
This environment object is fundamental to the architecture, encapsulating the server behaviour.
It stores the interface with the DAO, the defined hooks (see [Business Logic & Hooks](../guide/hooks.md)), and the validator for validating incoming request arguments.
Optional features such as inter-service communication add interfaces to this object.

Defined on the environment object are the handler functions, for handling requests to the endpoints.
Before starting the server, the `main` function calls the `defaultRouter` function to route incoming requests to their corresponding handler.
The resulting router is then passed to the `setup` function in `setup.go`, as discussed in [Adding Endpoints](../guide/adding-endpoints.md), and then the server is finally started.

### Handlers
For each route/endpoint a corresponding handler is defined in `example-service.go`.
In our example, four endpoints are defined, one for each CRUD (`Create`, `Read`, `Update`, `Delete`) operation.
If enumeration is defined for the service, a `List` endpoint handler will be defined.
If authentication is defined for the service, an `Identify` endpoint handler will be defined.
See the guides for [Enumeration](../guide/enumeration.md) and [Authentication](../guide/authentication.md) respectively for instructions.
Furthermore, as you would probably expect, omitted endpoints will not have routes or handlers defined, see the [Omitting Endpoints](../guide/omitting-endpoints.md) guide for more details.

When a request comes in, the router directs the request to the corresponding handler. A handler is responsible for a number of tasks:
- Extracting the resource ID from the URL, if applicable (Read, Update, Delete operations)
- Extracting the auth ID from the authorization header token, if applicable (project uses authorization)
- Decoding and validating the incoming request body
- Calling the inter-service communication functions to check foreign keys, if applicable (see [Foreign Keys & Inter-Service Communication](../guide/foreign-keys.md))
- Checking authorization to perform the operation based on access control, if applicable (see [Access Control](../guide/access-control.md))
- Calling the before operation hooks
- Performing the DAO call to modify the datastore state
- Calling the after operation hooks
- Encoding the DAO response into JSON
- Responding to the request

If any task fails, the handler responds to the request with a suitable status code and error message.
To visualise this entire process, the following diagram shows the flow of a create request in our example service:

<p align="center">
<img alt="Create Handler Diagram" src={useBaseUrl('img/create-handler.png')} width="50%"/>
</p>

Though note that hooks have the ability to respond to the request themselves, as discussed in [Business Logic & Hooks](../guide/hooks.md).

## The `dao` Package
The DAO is responsible for changing the state of the backing datastore, following the principles of the [Data Access Object](https://en.wikipedia.org/wiki/Data_access_object) pattern.
It abstracts the implementation details, namely by being responsible for initialising and maintaining the datastore connection, and provides an interface for package users.
By default a DAO interface function is defined for each corresponding operation handler, declared in the `BaseDatastore` interface in `dao.go`.
However additional DAO functions can be added by modifying the `datastore` interface in `datastore.go`, see [Adding DAO Functions](../guide/adding-dao-functions.md) for instructions.

## Inter-Service Communication
If the service includes foreign key attributes, additional files are generated to facilitate inter-service communication.
For example, let us add a foreign key to our example service:

```templefile
ExampleService: service {
  foo: string;
  bar: int;
  another: AnotherExampleService;
}

AnotherExampleService: service {
  baz: bool;
}
```

Which will add the following to our service file tree:
```
└── comm
    └── handler.go
```

This, has you might have guessed, makes up the `comm` package, which provides an interface for making requests to other services. 
It is only created if foreign keys are defined for the service, see [Foreign Keys & Inter-Service Communication](../guide/foreign-keys.md).
The functions generated take a UUID as an argument, make a request to the target service, and return a boolean to the function caller depending on if a resource for that UUID exists.

In the future we anticipate providing a similar mechanism to that in the `dao` to allow you the user to extend the `Comm` interface found in `handler.go`. In the meantime these calls can be added to hooks.

## Metrics
If the project has metrics defined for it, additional files are generated to facilitate them.
For example, let us add metrics to our example service:

```templefile
ExampleProject: project {
  #language(go);
  #database(postgres);
  #provider(dockerCompose);
  #metrics(prometheus);
}

ExampleService: service {
  foo: string;
  bar: int;
  another: AnotherExampleService;
}

AnotherExampleService: service {
  baz: bool;
}
```

Which will add the following to our service file tree
```
└── metric
    └── metric.go
```

Which predictably makes up the `metric` package.
This simply provides predefined metric variables ready for invoking metric calls in the handlers, see [Metrics](../guide/metrics.md) for more details.

## FAQ

### Why didn't you use ORM (Object-Relation Mapping)?
We have a few reasons for this:
- They abstract most of the database code meaning it can be hard to implement certain queries
- They can be a bottleneck, by building our own database layer we can keep it simple and make future extensions easier
- Some languages don't have a good ORM solution
- It's yet another dependency, one you the developer may not want
