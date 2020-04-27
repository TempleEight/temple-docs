---
id: orchestration
title: Orchestration
sidebar_label: Orchestration
---
import useBaseUrl from '@docusaurus/useBaseUrl';


With distributed systems, equally important as the application is the way that it's orchestrated. 
Temple provides several industry standards methods of automatically deploying your services.

## Templefile Changes

Orchestrating your project automatically requires only a single line of code in your Templefile.
Working from the example in the [Getting Started](../getting-started) guide:

```
ExampleProject: project {
  #language(go);
  #database(postgres);
  #provider(dockerCompose);
}

ExampleService: service {
  foo: string;
  bar: int;
}
```
We can see here that the Templefile features a `#provider` annotation in the project block.
This is how we specify that our project uses orchestration, the name in the argument specifies which framework we are generating for.

The currently supported frameworks are:

* Docker Compose

* Kubernetes

All of the frameworks are generated to share a common toolchain, so that usage is the same no matter which framework you choose.

## Docker Compose

[Docker Compose](https://docs.docker.com/compose/) is a tool built into the docker ecosystem for orchestrating containers.
We recommend using it for local development, as running your services this way has comparatively little overhead 