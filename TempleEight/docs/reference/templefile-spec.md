---
id: templefile-spec
title: Templefile Specification
sidebar_label: Templefile Specification
---

Temple determines what to generate by taking in a **Templefile**.
This is a text file containing a specification of the system to build.
It consists of a [project block](#project-block) and one or more [service blocks](#service-blocks).

## Syntax

Templefiles are not whitespace-sensitive (except to terminate single-line comments), and so indentation, spaces and line breaks are not required and may be inserted at any point between keywords, literals, punctuation, and identifiers.
Every declaration except for block declarations must end in a semicolon.

## Comments

Comments are a way of providing information to the human reader, and have no effect on the compiled version.
Any valid UTF-8 characters may be occur within the comment, except for the character sequence marking the end of the comment.
Comments may be used at any point where whitespace is valid.

- Line comments start with `//`, and end with a line break.
- Block comments start with `/*` and end with `*/`.
  Note that these may not be nested, e.g. `/* outer /* inner */ end */`.

```templefile
// line comment

/* block comment */

/*
block comment
*/

/* block
 * comment
 */
```

## Blocks

Blocks are a way of grouping declarations.
There are three block types: `project`, [`service`](#service-blocks) and `struct`.
A block is specified with a block name, a colon, a block type and then curly braces around the content of the block.
The block name is an alphanumeric string starting with a capital letter (e.g. `Booking`, `OrderItem` or `ABC2Schema`).

The block can then contain [attributes](#attributes), [metadata](#metadata) and more blocks, depending on the block type.

```templefile
Example: project {
  // metadata goes here
}
```

### Project Block

The project block is used for configuring an entire project.
It includes global configuration with [metadata](#metadata), some of which may be overwritten by the services and structs.
By convention this is the first entry in the file.
Its name is the name of the project.

```templefile
Example: project {
  #provider(kube);
}
```

### Service Blocks

Service blocks represent entire microservices.
They may contain attributes, structs (other database tables to be handled by the same service), and [metadata](#metadata).
By convention they are named in the singular, to identify a single entry, e.g. Home.

```templefile {5-8}
Example: project {
  #provider(kube);
}

Home: service {
  address: string;
  #auth;
}
```

### Struct Blocks

Struct blocks represent tables stored on the same server as the main service.
Every instance of a struct has an implicit reference its parent service, forming a many-to-one relationship.
They may contain attributes, and [metadata](#metadata).

```templefile {9-12}
Example: project {
  #provider(kube);
}

Home: service {
  address: string;
  #auth;

  Room: struct {
    name: string;
    #enumerable;
  };
}
```

## Attributes

Services and structs can contain attributes, which are pieces of information that will be stored about every entity of this type.

Attribute names are alphanumeric strings starting with a lower-case letter, for example `name`, `bookingID` or `what3WordsLocation`.
An attribute is specified by its name, a colon, its type and then any annotations, terminated by a semicolon.

Every attribute will have a type, which will either be a [primitive type](templefile-primitives) or a [reference to another service or _neighbor struct_](#foreign-attributes).
Primitive types may be parameterized.
All parameters are optional, and may be given in order or by name.
For example, a string can be specified in the following ways:

- `string` if no length constraints are needed
- `string(10)` or `string(maxLength: 10)` if only an upper bound is required.
- `string(10, 5)`,
  `string(maxLength: 10, minLength: 5)` or  
  `string(minLength: 5, maxLength: 10)` if both bounds are needed.

Annotations are given with an `@` followed by the name of the annotation, for example [`@server`](../guide/access-control) or [`@unique`](../guide/value-constraints).
They may be used in combination without any separators.

```templefile
ExampleService: service {
  firstName: string;
  lastName: string(20);
  handle: string @unique;
  score: int(min: 0) @server;
}
```

### Foreign attributes

Attributes may also be references to other services.
Additionally, you may reference _neighbor structs_ from inside a struct: this means structs inside the same service as the current struct.
Note that cycles and self-references are not legal, as it is impossible to initialize such a structure
Simply use the name of the service as the type.

```templefile {7}
Package: service {
  width: int;
  height: int;
}

Delivery: service {
  box: Package @unique;
  destination: string;
}
```

## Metadata

Blocks may contain metadata, identified by a leading `#`.
These are used to configure the block (the service/the project).
Some metadata takes parameters, with the same syntax as with attribute type parameters.
No block may include the same metadata item twice.

The parameters may be single words (e.g. `go`), or lists (e.g. `[delete, update]`).
There is a short-hand syntax for lists: `#omit[delete, update]` is the same as `#omit([delete, update])`.

### Types of metadata

#### `#provider(provider: prov)`

_Blocks_: Project

Specify the provider to use for orchestration code generated. If this is not given, no orchestration code is generated. See the guide on [orchestration](../guide/orchestration).

Possible values of `provider`:

- `kubernetes`/`kube`/`k8s`: Use [Kubernetes](https://kubernetes.io/).
- `dockerCompose`/`dc`: Use [Docker Compose](https://docs.docker.com/compose/).

#### `#metrics(metrics: m)`

_Blocks_: Project

Specify the provider to use for recording metrics on the project. If this is not given, no measurement code is generated. See the guide on [metrics](../guide/metrics).

Possible values of `m`:

- `prometheus`: Use [Prometheus](https://prometheus.io/).
- More providers are coming soon.

#### `#authMethod(method: auth)`

_Blocks_: Project

Enable authentication for this project, using the method provided. See the guide on [authentication](../guide/authentication.md).

Possible values of `auth`:

- `email`: Use email and password for login.
- More methods are coming soon.

#### `#language(language: lang)`

_Blocks_: Service and Project

Specify the language to generate the service server in.
If it is not specified, it will fall back to the value given in the project block (which also specifies the language to use for the [auth server](../guide/authentication)).

Possible values of `lang`:

- `go`: Use [Go](https://golang.org/) as the language for the server.
- More languages are coming soon.

#### `#database(database: db)`

_Blocks_: Service and Project

Specify the database engine to use for the service server.
If it is not specified, it will fall back to the value given in the project block (which also specifies the database engine to use for the [auth server](../guide/authentication)).

Possible values of `db`:

- `postgres`: Use [PostgreSQL](https://www.postgresql.org/) as the database for the server.
- More databases are coming soon.

#### `#enumerable`

_Blocks_: Service and Struct

Generate a list endpoint for this service/struct. See the [guide on enumeration](../guide/enumeration).

#### `#auth`

_Blocks_: Service

Mark this service as one tied to an account, so there is a 1:1 mapping between a login account and an entry in this service.

#### `#omit(endpoints: [endpoint])`

_Blocks_: Service and Struct

Do not generate the specified endpoints. See the guide to [omitting endpoints](../guide/omitting-endpoints).

Possible values of `endpoint`:

- `create`
- `read`
- `update`
- `delete`

#### `#readable(by: scope)`, `#writable(by: scope)`

_Blocks_: Project and Service

Specify who is allowed to perform read/write operations on this service. The fallback value can be given in the project block, otherwise it will be `this` for projects with auth, or `all` for projects without. See the guide on [access control](../guide/access-control).

Possible values of `scope`:

- `this` Only the creator of this service entry may read/edit it.
- `all` Anyone may read/edit it.
