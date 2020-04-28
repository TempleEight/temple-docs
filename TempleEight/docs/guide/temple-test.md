---
id: temple-test
title: Temple Test
sidebar_label: Temple Test
---

In addition to automatic generation of microservice-based infrastructure, Temple also offers a tool for testing the generated code.

`temple test` has two main operating modes:

1. A full testing mode, where it will spin up the infrastructure locally, mock a request to each endpoint and then shut the infrastructure down

2. A request only mode, where the infrastructure is assumed to already be running, and only mock requests are sent to each endpoint.

This is particularly useful to mock some requests to your service, or to test a change you may have made in the business logic.

In this short guide, we'll show you how to use `temple test` with the project generated in the [Getting Started](../getting-started) guide.

## Full Testing Mode
To access full testing mode, simply run the following command from the directory you generated the project in:

```
❯❯❯ temple test example.temple
🐳 Spinning up Docker Compose infrastructure...
🦍 Configuring Kong
🧪 Testing ExampleService service
    ✅ ExampleService create
    ✅ ExampleService read
    ✅ ExampleService update
    ✅ ExampleService delete
    ✅ ExampleService readability
    ✅ ExampleService writablity
🎉 Everything passed
💀 Shutting down Docker Compose infrastructure...
```

As you can see from the output, this performs a request to each endpoint within each service, validating the request and response match the expected values.
It also makes a series of requests which validate the access control settings put in place, to ensure that an unauthorized user is unable to access entities it does not own.
More information about this can be found in our [Access Control](access-control) guide.


## Request Only Mode
Running in request only mode requires the addition of a flag to the `temple test` command.
This assumes that the infrastructure is running locally, and will not shut it down again after the test are completed:

```
❯❯❯ temple test --testOnly example.temple
🧪 Testing ExampleService service
    ✅ ExampleService create
    ✅ ExampleService read
    ✅ ExampleService update
    ✅ ExampleService delete
    ✅ ExampleService readability
    ✅ ExampleService writablity
🎉 Everything passed
```

## How Temple Test Works
The Temple test command works by mocking request bodies according to the attributes within the the Templefile.
It will randomly generate suitable values, using any upper or lower bounds provided as [Value Constraints](value-constraints), and populate a JSON object with these values.

After making the request, it will ensure that the response object matches what is expected, validating that any values passed in the request are also included in the response, removing any values with annotations. 
See the [Value Constraints](value-constraints) guide for more on these.
