---
id: cross-service-coms 
title: Cross-Service Communication
sidebar_label: Cross-Service Communication
---


#### Foreign Keys

Also visible in the `Match` service is an example of a foreign key service property. A match is a relationship made between two `User`s, and their `id`s are stored in the respective fields. Using a foreign key will cause Temple to perform cross-service communication in order to verify the existence of any entities referred to, before this entity is created. For example, when the `/match` endpoint is invoked with a POST request for `User`s `1` and `2`, the Match service will first check with the `User` service that those `User`s actually exist, before creating the `Match`.
