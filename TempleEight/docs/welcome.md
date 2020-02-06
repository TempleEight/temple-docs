---
id: welcome
title: Welcome!
sidebar_label: Welcome
---

### If you're here, it's because you want to know about Temple: 

> Know about Temple and just want to get going? Check out the [Getting Started guide](getting-started.md)



**Temple** is a software framework for automatically generating routine microservices based on a high level DSL, leaving you to focus on the business logic specific to your system.

Write a specification of your system in a **TempleFile**, and Temple will:

* Generate server code in a language of your choice for applying CRUD operations, for each service 👩‍💻

* Back up the services with datastores as required for your application 🗄

* Use standard containerisation techniques to encapsulate and orchestrate your services 🎼

* Generate target user client stubs in a number of frameworks 📲

* Handle routine tasks like authorisation and communication between services 🛑

All generated code is designed from the ground up to be human readable, extensible and editable. 

Decided that you need to change your Temple configuration half way through development? No problem! Temple supports diffing user code in order to enable continuous generation and development.



## Currently Supported

This software is in the pre-alpha stage and is still at the beginning of it's development process. 

Currently, we support generating code in:

#### Server-side

* [Go](http://golang.org)

#### Database

*  [PostgreSQL](https://www.postgresql.org/)

#### Client-side 

* _ 