---
id: templefile-primitives
title: Templefile Primitives
sidebar_label: Templefile Primitives
---

TempleFile supports 8 primitive types, roughly aligned with those found in `SQL` style languages. Any property of a service can be of any of these types. 

```temple
bool
string(maxLength: int, minLength: int)
int(max: int, min: int = 0)
float(max: float, min: float = 0.0f, precision: int = 8)
date
time
datetime
data(maxSize: long)
```

## Parameters

Many types include optional parameterisations, which will be enforced as either column constraints on the database table, or as checks in server-side code.

All parameters are optional, and many have defaults that can be overridden.

## Primitives

### `bool`

Used for storing Boolean truthfulness.

Possible values: `[true, false]`



###`string(maxLength: int, minLength: int)`

Used for storing textual data, equivalent to the `TEXT` datatype in `SQL`. 

#### Parameters: 

* `maxLength: int`: The maximum number of characters allowable in the string
* `minLength: int`: The minimum number of characters allowable in the string

If only one parameter is provided, it defaults to `maxLength`.



### `int(max: int, min: int = 0)`

Used for storing Integral numbers, equivalent to the `INT` datatype in `SQL`.

#### Parameters:

* `max: int`: The highest value allowed to be stored

* `min: int = 0`: The lowest value allowed to be stored 

If one one parameter is provided, it defaults to `max`.
The default values for `max` and `min` are `INT_MAX` and `INT_MIN` respectively.



### `float(max: float, min: float = 0.0f, precision: int = 8)`

Used for storing Integral numbers, equivalent to the `INT` datatype in `SQL`.

#### Parameters:

- `max: float`: The highest value allowed to be stored
- `min: float = 0.0f`: The lowest value allowed to be stored 
- `precision: int = 8`: The number of bits used in the exponent of the floating point number. See [here](<https://en.wikipedia.org/wiki/Single-precision_floating-point_format>) for more information.

If one one parameter is provided, it defaults to `max`.
The default values for `max` and `min` are `FLOAT_MAX` and `FLOAT_MIN` respectively.



### `date`

Used for representing calendar dates. Stored in `YYYY-MM-DD` format with values in possible range of `0001-01-0`1 through `9999-12-31`.



### `time`

Used for representing times of day, but does not refer to one specific moment in time. Stored in `hh:mm:ss[.nnnnnnn]` format with values in possible range of `00:00:00.0000000` through `23:59:59.9999999`.



### `datetime`

Used for representing specific moments in time, with a particular timezone. Stored in `'YYYY-MM-DD HH:MM:SS+TZ'` format. `TZ` is the number of hours offset from `UTC+0`.



### `data(maxSize: long)`

Used for storing binary file objects.

#### Parameters:

* `maxSize: long`: The maximum file size allowable in bytes.
