---
id: authentication
title: Service Authentication
sidebar_label: Service Authentication
---

#### Auth Blocks

The first piece of metadata in the `User` service is the `#auth` block. Having an auth block in a service means that an end user of the application can log into the system *as a* `User`, given their `email`. This defines a `User` as an identifiable entity in the service, meaning they can create other objects and hold ownership of them (i.e. A `User` could have `Pictures` in an image service that belong to them, and not other `Users`). 

In terms of implementation, having an `auth` block anywhere in a Templefile causes the Temple CLI to generate an extra service, called `Auth`, which a user must authenticate themselves with to get a valid [`JWT`](https://jwt.io/) in order to access other services. This authentication comes in the form of an email and password login system.