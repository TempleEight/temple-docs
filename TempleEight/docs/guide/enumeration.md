---
id: enumeration
title: Enumeration
sidebar_label: Enumeration
---

#### CreatedBy Attributes

As well as implicit `id` attributes, some services also get an implicit `createdBy` attribute generated. Those services are ones that do not contain an `#auth` block, but are contained in a Templefile where some service(s) do have an `#auth` block. An example of this can be seen in the second service block of the example `DatingApp` Templefile. The `Match` service stores an implicit `createdBy` attribute, which means that a `User` can enumerate all of their matches that have a `createdBy` attribute of their `id`. 

`#enumerable` means that the entities in this service can be listed, by the entity that created them. It generates the `/list/{id}` endpoint on the generated microservice, which when invoked, will return all entities stored in the service, that hold `createdBy` value of `id`.