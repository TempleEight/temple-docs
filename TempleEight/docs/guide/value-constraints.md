---
id: value-constraints
title: Value Constraints
sidebar_label: Value Constraints
---

Sometimes you need more control over the values that are acceptable in your data model.
For these cases Temple provides a suite of Value Constraints: extra metadata you can attach to properties that allow values to be restricted in some way.

## Primitive Restrictions

Many of Temple's primitive data types support optional parameters when you declare them, to give bounds on their values.

An example of this is when an integer is defined. We'll take the `ExampleService` from the [Getting Started](getting-started) guide:

```
ExampleService: service {
  foo: string;
  bar: int;
}
```

If, for example, we wanted to constrain the `bar` property to be only positive numbers, we could write:

```
ExampleService: service {
  foo: string;
  bar: int(min: 0);
}
```

If we wanted to restrict it between two numbers, for example 0 and 100, we'd write:

```
ExampleService: service {
  foo: string;
  bar: int(0, 100);
}
```

Notice that here we didn't provide the argument names to the `int` definitions, as they're optional.
However, when only a single argument is provided to the `int` definition, it defaults to the `max` argument.
By using the `min:` name, we can specify the `min` without the `max`.

Most of the primitives in Temple support similar parameters. 
The full list of parameters can be found in the [primitives](reference/primitives) section of the Templefile reference.

## Annotations

In addition to restricting individual values with primitive parameters, Temple supports adding service-level constraints with annotations.

Currently there is one supported annotation, with more being planned to be released in the future.

### Unique

By adding an `@unique` annotation to any property of a service, then at most one data object stored by the service may have a particular value stored in that property.
For example:

```
ExampleService: service {
  foo: string;
  bar: int @unique;
}
```

Means that the `bar` property on every `ExampleService` object must be unique.

One could create an ExampleService object with values `foo = "test"` and `bar = 3`, but then no other object could have the value `bar = 3`. 
We can test this by running:

```bash
~/Documents/temple-tutorial ❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "value!", "bar": 10}'
{"id":"e24e6d58-83e7-11ea-b435-0242ac1d0003","foo":"value!","bar":10}

~/Documents/temple-tutorial ❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "another value!", "bar": 10}'
{"error":"Something went wrong: pq: duplicate key value violates unique constraint \"example_service_bar_key\""}
```


When combined with property value level constraints, one could limit the total number of `ExampleService` objects that could exist at any one time.
For example:

```
ExampleService: service {
  foo: string;
  bar: int(1, 100) @unique;
}
```

As there are only 100 possible values for the `bar` property, and each one must be unique: there can only ever be at most 100 total `ExampleService` objects.
