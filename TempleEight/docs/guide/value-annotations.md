---
id: value-annotations
title: Value Annotations
sidebar_label: Value Annotations
---

#### Property Metadata

The final thing we can see in the example Templefile is the `@serverSet` metadata on `Match` service's `matchedOn` field. Metadata beginning with `@` refer to a particular property, and tell us about this property's values and how they are accessed. 

In this example, the `@serverSet` metadata is used. This means that the `matchedOn` value isn't expected to be provided in the POST request that creates this `Match` entity, and is instead calculated by the server itself when the request arrives. 