---
id: introduction
title: Introduction
sidebar_label: Introduction
---

### If you're here, it's because you want to know about Temple

> Know about Temple and just want to get going? Check out the [Getting Started](getting-started) guide

**Temple** is a software framework for automatically generating routine microservices based on a high level DSL, leaving you to focus on the business logic specific to your system.
Write a specification of your system in a **Templefile** and Temple will:

* Generate server code in a language of your choice for applying CRUD operations
* Spin up and initialise backing datastores
* Containerise and orchestrate your services
* Generate OpenAPI schemas for generating frontend APIs
* Handle routine tasks like authorisation, communication between services and configuring metrics

All generated code is designed from the ground up to be human readable, extensible and editable. 

Need to change your Templefile specification halfway through development? No problem! Temple supports regeneration, without losing your added changes.

## Get Going

1. First, make sure you've installed the Temple CLI by following the [Installation](installation) instructions
2. If you need some pointers in the right direction, check out the [Getting Started](getting-started) guide
3. For specific details about Templefiles, there's the [Templefile Specification](reference/templefile-spec)

## Supported Languages and Tools

Temple is in pre-alpha, please forgive the limited selection! We currently support:

#### Server-side

* [Go](http://golang.org)

#### Database

* [PostgreSQL](https://www.postgresql.org/)

#### Client-side

* Many target generation via [OpenAPI](https://swagger.io/docs/specification/about/)

#### Containerisation

* [Docker](https://www.docker.com/)

#### Orchestration

* [Docker Compose](https://docs.docker.com/compose/) for lightweight container orchestration
* [Kubernetes](https://kubernetes.io) for fully-featured production grade orchestration

#### Extras

* Service metrics aggregated and displayed with [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/)
