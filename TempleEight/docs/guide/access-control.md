---
id: access-control
title: Access Control
sidebar_label: Access Control
---

#### Permission Metadata

Another type of metadata, present in every service are permission based metadata. These consist of `#readable`, `#writable`, and `#enumerable`. They define which other entities can read, write and enumerate respectively the values stored in this service. 

`#readable` has two options, `#readable(by: this)` is the default value when the service contains an auth block, and is `#readable(by: all)` when it doesn't. `by: this` defines that the only entity that can read the values stored in this entity, is this entity itself (i.e. The only `User` who can read `Bob's` date of birth, is `Bob` himself). This is opposed by `#readable(by: all)` which specifies that all `Users` can get information about all other users. 

`#writeable` follows the same logic as `#readable`, except refers to the permission to write the data stored in an entity, rather than reading.
