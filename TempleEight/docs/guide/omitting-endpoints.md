---
id: omitting-endpoints
title: Omitting Endpoints
sidebar_label: Omitting Endpoints
---

Whenever you define a new service in your `Templefile`, the following 4 endpoints are automatically generated:

1. `CREATE`: Create a new object with the provided attributes
2. `READ`: Read an existing object for a given ID
3. `UPDATE`: Update an existing object with the new provided attributes, using the ID
4. `DELETE`: Delete an object from the datastore, using the ID

Sometimes you might not want a particular endpoint at all, or might want to define your own custom implementation, as is shown in the [adding endpoints](adding-endpointsmd) guide.
To remove the endpoint from the generated code, you can include additional metadata within your Templefile.


## Removing specific endpoints
In the example from the [Getting Started](../getting-started) guide, we defined an `ExampleService` as follows:

```
ExampleService: service {
  foo: string;
  bar: int;
}
```

If we decide that we don't want the `DELETE` endpoint any more, we can simply omit it:

```
ExampleService: service {
  foo: string;
  bar: int;

  #omit([delete]);
}
```
The argument to the `#omit` metadata tag is a list of endpoints, from the options `create`, `read`, `update` or `delete`, meaning you are able to exclude multiple endpoints in a single command.

Furthermore, we allow the outer parentheses to be dropped, if you find this to be more readable: 

```
ExampleService: service {
  foo: string;
  bar: int;

  #omit[update, delete];
}
```

In addition to the CRUD endpoints that we generate, you are able to define your own endpoints for enumerating though multiple stored items, in a single query.
More information about these `list` endpoints can be found in the [enumeration](enumeration) guide.

Finally, an additional endpoint, `identify`, may be generated if your service contains the `#auth` metadata. 
Please note that with the current release, it is not possible to exclude the `identify` endpoint from your service.
More information about the `identify` endpoint can be found in the [authentication](authentication) guide.
