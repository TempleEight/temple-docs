---
id: value-constraints
title: Value Constraints
sidebar_label: Value Constraints
---

Sometimes you need more control over the values that are valid in your data model.
For these cases Temple provides a suite of Value Constraints: extra metadata you can attach to properties that allow values to be restricted in some way.

## Primitive Restrictions

Many of Temple's primitive data types support optional parameters when you declare them, to give bounds on their values.
An example of this is when an integer is defined. We'll take the `ExampleService` from the [Getting Started](getting-started) guide:

```templefile
ExampleService: service {
  foo: string;
  bar: int;
}
```

If, for example, we wanted to constrain the `bar` property to be only positive numbers, we could write:

```templefile
ExampleService: service {
  foo: string;
  bar: int(min: 0);
}
```

If we wanted to restrict it between two numbers, for example 0 and 100, we'd write:

```templefile
ExampleService: service {
  foo: string;
  bar: int(100, 0);
}
```

Notice that here we didn't provide the argument names to the `int` definitions, as they're optional.
However, when only a single argument is provided to the `int` definition, it defaults to the `max` argument.
By using the `min:` name, we can specify the `min` without the `max`.
Most of the primitives in Temple support similar parameters.
The full list of parameters can be found in the [Primitives](reference/primitives) section of the Templefile reference.
