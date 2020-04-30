---
id: value-annotations
title: Value Annotations 
sidebar_label: Value Annotations 
---

In addition to restricting individual values with primitive parameters, Temple supports adding service-level constraints with annotations.
We'll start by considering the `ExampleService` from the [Getting Started](../getting-started) guide:

## Unique
By adding a `@unique` annotation to a property, at most one object stored by the service may have a particular value stored for that property.
For example adding a unique annotation to the `bar` attribute means that every entity stored must have store a diffferent value.

```templefile
ExampleService: service {
  foo: string;
  bar: int @unique;
}
```

Let's see an example of this, by attempting to create an object with the same value of `bar` twice:
```bash
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "value!", "bar": 10}'
{"id":"e24e6d58-83e7-11ea-b435-0242ac1d0003","foo":"value!","bar":10}

❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "another value!", "bar": 10}'
{"error":"Duplicate ExampleService found"}
```

One special use of the `@unique` attribute comes when combined with property-level [Value Constraints](value-constraints), which allows you to limit the total number of `ExampleService` objects that could exist at any one time.
For example:
```templefile
ExampleService: service {
  foo: string;
  bar: int(100, 1) @unique;
}
```

As there are only 100 possible values for the `bar` property and each one must be unique, there can only ever be at most 100 total `ExampleService` objects.

## Server
Annotating a property with `@server` allows you to indicate that a property will not be provided by a client, nor will it be returned in responses to the client, but it is still stored by the datastore.
This might be particularly useful if you want to store some data for server-side computation only, without giving this information back to the client.

For example, let's add a `@server` property to the `bar` attribute:
```templefile
ExampleService: service {
  foo: string;
  bar: int @server;
}
```

Now, when we make requests, we don't have to include the `bar` attribute, nor is it returned in the response:
```bash
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "value!"}'
{"id":"0906da4f-8958-11ea-b3bd-0242c0a87003","foo":"value!"}
```
You may wonder how you can set the value of `bar` before it is stored in the datastore.
To do this, you'll need to define a new hook for the `Create` and `Update` endpoints.
Information about how to do this can be found in the [Hooks](hooks) guide.

## ServerSet
Annotating a property with `@serverSet` allows you to indicate that the property will not be provided by a client, but it will be returned in response and stored in the data store.
This might be particularly useful if you want to do some server side computation before setting the value.

For example, let's add a `@serverSet` property to the `bar` attribute:
```templefile
ExampleService: service {
  foo: string;
  bar: int @serverSet;
}
```

Now, when we make requests, we don't have to include the `bar` attribute, but a value is returned in the response:
```bash
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "value!"}'
{"id":"ac98a3b1-8958-11ea-9cc0-0242c0a88004","foo":"value!","bar":0}
```
You may wonder how you can set the value of `bar` before it is stored in the datastore.
To do this, you'll need to define a new hook for the `Create` and `Update` endpoints.
Information about how to do this can be found in the [Hooks](hooks) guide.

## Client
Annotating a property with `@client` allows you to indicate that the property will be provided by the client, but it will not be included in the response, nor will it be stored.
This might be particularly useful if you want to do some server side computation, but don't need the value afterwards.

For example, let's add a `@client` property to the `bar` attribute:
```templefile
ExampleService: service {
  foo: string;
  bar: int @client;
}
```

Now, when we make requests, we have to include the `bar` attribute, but it will not be returned in the response, nor in any subsequent `READ` requests:
```bash
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "value!", "bar": 123}'
{"id":"2ef1876f-8959-11ea-9bac-0242c0a88003","foo":"value!"}

❯❯❯ curl -X GET $KONG_ENTRY/api/example-service/2ef1876f-8959-11ea-9bac-0242c0a88003
{"id":"2ef1876f-8959-11ea-9bac-0242c0a88003","foo":"value!"}
```

You may wonder how you can use the value of `bar` during the request.
To do this, you'll need to define a new hook for the `Create` and `Update` endpoints.
Information about how to do this can be found in the [Hooks](hooks) guide.


## Summary
In summary, we have presented a series of annotations which allow you to vary the contents of requests and responses, depending on your specific use case.
A table summarising the usage of each annotation is given below:

|              | Request | Response | DAO |
|--------------|---------|----------|-----|
| `@server`    | N       | N        | Y   |
| `@serverSet` | N       | Y        | Y   |
| `@client`    | Y       | N        | N   |
