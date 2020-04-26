---
id: foreign-keys 
title: Foreign Keys & Inter-Service Communication
sidebar_label: Foreign Keys & Inter-Service Communication
---

This guide will look at adding foreign keys to services.
We'll use the `ExampleService` from the [Getting Started](../getting-started.md) guide as a starting point.

## Foreign Keys
In the context of a Templefile, a foreign key is a service attribute that links that service to another service. For example, let us add another service alongside our example service, and add a foreign key.

```
ExampleService: service {
  foo: string;
  bar: int;
  another: AnotherExampleService;
}

AnotherExampleService: service {
  baz: bool;
}
```

Here, the `another` attribute of the `ExampleService` service is our foreign key, allowing us to store a reference to an object in the `AnotherExampleService` service. This means that to create an `ExampleService` object, we will need to pass in a UUID belonging to a `AnotherExampleService` object. Let's have a look.

First let's try passing a random UUID to the `another` field:
```bash
# Try to create an ExampleService object with a non-existent AnotherExampleService object reference
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "abcd", "bar": 8, "another": "43cc65f5-823c-11ea-9dc4-0242ac180003"}'
{"error":"Unknown AnotherExampleService: 43cc65f5-823c-11ea-9dc4-0242ac180003"}
```

Since an `AnotherExampleService` object does not exist with this UUID, the request returns an error. This time let's try create an `AnotherExampleService` object first, and use the returned UUID to pass into the `another` field:
```bash
# Create an AnotherExampleService object
❯❯❯ curl -X POST $KONG_ENTRY/api/another-example-service -d '{"baz": true}'
{"id":"842e9cb6-87d3-11ea-b556-0242ac120002","baz":true}

# Create an ExampleService object with the created AnotherExampleService object UUID
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "abcd", "bar": 8, "another": "842e9cb6-87d3-11ea-b556-0242ac120002"}'
{"id":"b12af831-87d3-11ea-b53f-0242ac130002","foo":"abcd","bar":8,"another":"842e9cb6-87d3-11ea-b556-0242ac120002"}
```

What a surprise, this time it works! But what's driving this under the hood?

## Inter-Service Communication
As discussed in the [Service Architecture](../arch/service.md) section, adding a foreign key like we have above to a service causes the `comm` package to be generated. This includes an interface for making requests to other services. So when the `ExampleService` gets a request, it takes the UUID passed in for the `another` field and makes a GET request to the `AnotherExampleService` to check it exists.

At the moment this is the extent of the generated inter-service communication we support, however there's nothing stopping you from making calls to other services from your hooks. Check out the [Business Logic & Hooks](hooks.md) guide for more details.
