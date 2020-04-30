---
id: templefile-primitives
title: Templefile Primitives
sidebar_label: Templefile Primitives
---

Templefile supports 8 primitive types, roughly aligned with those found in `SQL` style languages. Any attribute of a service can be of any of these types.

```temple-type
bool
string(maxLength: int, minLength: int)
int(max: int, min: int, precision: int = 4)
float(max: float, min: float, precision: int = 8)
date
time
datetime
data(maxSize: long)
```

## Parameters

Many types include optional parameters, which will be enforced as either column constraints on the database table, or as checks in server-side code.

All parameters are optional.

## Primitives

### `bool`

Used for storing Boolean truthfulness.

Possible values: `true`, `false`

### `string(maxLength: int, minLength: int)`

Used for storing textual data, equivalent to the `TEXT` datatype in `SQL`.

For a fixed-length string, provide the same parameter twice, e.g. `string(20, 20)`.
If a single argument is given, this is the upper bound.

#### Bool parameters

- `maxLength: int`: The maximum number of characters allowable in the string (inclusive)
- `minLength: int`: The minimum number of characters allowable in the string (inclusive)

### `int(max: int, min: int, precision: int = 4)`

Used for storing signed integers.

#### Int parameters

- `max: int`: The highest value allowed to be stored, inclusive.
- `min: int`: The lowest value allowed to be stored, inclusive.
- `precision: int = 4`: The precision argument is the number of bytes of precision to use.
  This must be between 1 and 8.
  E.g. if precision is 4, there are at least 4 bytes = 32 bits used to store the number, so the numbers -2<sup>31</sup> to 2<sup>31</sup>-1 will be storable.

### `float(max: float, min: float = 0.0, precision: int = 8)`

Used for storing real numbers.

#### Float parameters

- `max: float`: The highest value allowed to be stored
- `min: float`: The lowest value allowed to be stored
- `precision: int = 8`: The number of bytes used to store the floating point number.
  This must be between 1 and 8, and may be rounded up.
  See [here](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) for more information.

### `date`

Used for representing calendar dates. Stored in `YYYY-MM-DD` format with values in possible range of `0001-01-01` through `9999-12-31`.

### `time`

Used for representing times of day, but does not refer to one specific moment in time. Stored in `hh:mm:ss[.nnnnnnn]` format with values in possible range of `00:00:00.0000000` through `23:59:59.9999999`.

### `datetime`

Used for representing specific moments in time, with a particular timezone. Stored in `'YYYY-MM-DD HH:MM:SS+TZ'` format. `TZ` is the number of hours offset from `UTC+0`.

### `data(maxSize: long)`

Used for storing binary file objects.

#### Data parameters

- `maxSize: long`: The maximum file size allowable in bytes.
  Note that numeric literals may use the suffixes `k`, `M` and `G` as multipliers, for one 10<sup>3</sup>, 10<sup>6</sup> and 10<sup>9</sup> respectively.
