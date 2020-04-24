---
id: enumeration
title: Enumeration
sidebar_label: Enumeration
---

As explained in the [Getting Started](../getting-started) guide, Temple generates 4 main endpoints for every service: `Create`, `Read`, `Update` and `Delete`.
Temple's architecture makes it easy to define your own endpoints, as discussed in the [Adding Endpoints](adding-endpoints) guide, or even omit endpoints, again as discussed in the [Omitting Endpoints](omitting-endpoints) guide.

In addition to the basic functionality provided with the CRUD endpoints, we offer an additional `list` endpoint, which has different effects depending the configuration of the rest of your Templefile.

We'll start with the most basic example, and then consider how the response changes, depending on access control and authentication settings.

## A Basic List Endpoint
In the [Getting Started](../getting-started) guide, we defined the following Templefile:

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

To add an additional `list` endpoint to our `ExampleService`, we can simply add the `#enumerable` metadata tag to that service:

```
ExampleProject: project {
  #language(go);
  #database(postgres);
  #provider(dockerCompose);
}

ExampleService: service {
  foo: string;
  bar: int;

  #enumerable;
}
```

This generates a new endpoint, accessible at `/api/example-service/all`, and this will return all stored elements as a JSON array.
Let's make some example requests to show it in action:

```bash
# Deploy the service locally
❯❯❯ source deploy.sh
...

# Create two new entities in that service
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "Hello", "bar": 123}'
{"id":"bb3bdc7f-857e-11ea-bd0b-0242ac130002","foo":"Hello","bar":123}
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "World", "bar": 456}'
{"id":"cc2e9d07-857e-11ea-bd0b-0242ac130002","foo":"World","bar":456}

# Read back both entries using the list endpoint
curl -X GET $KONG_ENTRY/api/example-service/all
{ 
  "ExampleServiceList":[
    {"id":"bb3bdc7f-857e-11ea-bd0b-0242ac130002","foo":"Hello","bar":123},
    {"id":"cc2e9d07-857e-11ea-bd0b-0242ac130002","foo":"World","bar":456}
  ]
}

```

## Enumerating Services When Using Authentication
Authenticating users is one of Temple's core offerings and is discussed in detail in the [Authentication](authentication) guide.
Here, we'll assume you understand what it means to be using the `#authMethod` and `#auth` metadata in your project and services.

One advantage of using authentication is that we can restrict the response of the list endpoint to only include relevant information to the authentication token provided.
This means that we can restrict responses to only include entities that the authentication token has created.

For example, let's add authentication to our `ExampleProject`, by including a `User` service, and using `email` as the `#authMethod`:

```
ExampleProject: project {
  #language(go);
  #database(postgres);
  #provider(dockerCompose);
  #authMethod(email);
}

ExampleUser: service {
  name: string;

  #auth;
}

ExampleService: service {
  foo: string;
  bar: int;

  #enumerable;
}
```

When making requests to the `ExampleService` we'll now need to include an authorization header.
To do this, we're going to first make a request to the `auth` service, and extract the token from the JSON response using [jq](https://stedolan.github.io/jq/).

Let's look at an example of this altogether listing:

```bash
# Deploy the project locally
❯❯❯ source deploy.sh
...

# Create two access tokens, extract them from the JSON response, and assign each to an environment variable
❯❯❯ TOKEN1=$(curl -X POST $KONG_ENTRY/api/auth/register -d '{"email": "temple1@temple.com", "password":"abcdefgh"}' | jq -r .AccessToken)
❯❯❯ TOKEN2=$(curl -X POST $KONG_ENTRY/api/auth/register -d '{"email": "temple2@temple.com", "password":"abcdefgh"}' | jq -r .AccessToken)

# Create two new entities in the example service, one for each token
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "Hello", "bar": 123}' -H "Authorization: Bearer $TOKEN1"
{"id":"b982212f-8584-11ea-ae7c-0242ac160003","foo":"Hello","bar":123}
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "World", "bar": 456}' -H "Authorization: Bearer $TOKEN2"
{"id":"cde88899-8584-11ea-ae7c-0242ac160003","foo":"World","bar":456}

# List all entities stored in the example service, using each token:
❯❯❯ curl -X GET $KONG_ENTRY/api/example-service/all -H "Authorization: Bearer $TOKEN1"
{
  "ExampleServiceList":[
    {"id":"b982212f-8584-11ea-ae7c-0242ac160003","foo":"Hello","bar":123}
  ]
}

❯❯❯ curl -X GET $KONG_ENTRY/api/example-service/all -H "Authorization: Bearer $TOKEN2"
{
  "ExampleServiceList":[
    {"id":"cde88899-8584-11ea-ae7c-0242ac160003","foo":"World","bar":456}
  ]
}
```

Notice that when we use the listable endpoint this time, only the items created by that token are returned in the list response.
This is because when an auth service is present in a project, all services default to `#readable(by: this)`.
This only allows the token that created the entity to view it again.
More information about this access control can be found in the [Access Control](access-control) guide.

## Returning All Entities When Using Authentication
Sometimes it might be useful to return all entities that are stored, even when `#auth` is being used.
To do this, you can widen the readability of the service using the `#readable(by: all)` metadata.
If we apply this to our previous Templefile example:


```
ExampleProject: project {
  #language(go);
  #database(postgres);
  #provider(dockerCompose);
  #authMethod(email);
}

ExampleUser: service {
  name: string;

  #auth;
}

ExampleService: service {
  foo: string;
  bar: int;

  #readable(by: all);
  #enumerable;
}
```

Repeating the previous requests should result in all entities being returned when listing, using both access tokens:

```bash
# Deploy the project locally
❯❯❯ source deploy.sh
...

# Create two access tokens, extract them from the JSON response, and assign each to an environment variable
❯❯❯ TOKEN1=$(curl -X POST $KONG_ENTRY/api/auth/register -d '{"email": "temple1@temple.com", "password":"abcdefgh"}' | jq -r .AccessToken)
❯❯❯ TOKEN2=$(curl -X POST $KONG_ENTRY/api/auth/register -d '{"email": "temple2@temple.com", "password":"abcdefgh"}' | jq -r .AccessToken)

# Create two new entities in the example service, one for each token
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "Hello", "bar": 123}' -H "Authorization: Bearer $TOKEN1"
{"id":"596d62db-8587-11ea-9d77-0242ac160003","foo":"Hello","bar":123}
❯❯❯ curl -X POST $KONG_ENTRY/api/example-service -d '{"foo": "World", "bar": 456}' -H "Authorization: Bearer $TOKEN2"
{"id":"60e013cd-8587-11ea-9d77-0242ac160003","foo":"World","bar":456}

# List all entities stored in the example service, using each token:
❯❯❯ curl -X GET $KONG_ENTRY/api/example-service/all -H "Authorization: Bearer $TOKEN1"
{
  "ExampleServiceList":[
    {"id":"596d62db-8587-11ea-9d77-0242ac160003","foo":"Hello","bar":123},
    {"id":"60e013cd-8587-11ea-9d77-0242ac160003","foo":"World","bar":456}
  ]
}

❯❯❯ curl -X GET $KONG_ENTRY/api/example-service/all -H "Authorization: Bearer $TOKEN2"
{
  "ExampleServiceList":[
    {"id":"596d62db-8587-11ea-9d77-0242ac160003","foo":"Hello","bar":123},
    {"id":"60e013cd-8587-11ea-9d77-0242ac160003","foo":"World","bar":456}
  ]
}
```


### Enumerating on `#auth` services
:::important
Services which contain the `#auth` metadata are special, in that they provide a 1-to-1 mapping between an access token and an entity within that service.
This means that there can only be at most one entity for a given access token.

By default any service with an `#auth` block are implicitly `#readable(by: this)`, allowing only the access token that created the entity to read the information stored.

This means without overriding to `#readable(by:all)`, it is not possible to have an `#enumerable` tag on an `#auth` service, since this would only ever return the list containing the entity for that access token.

If you would like to add a list endpoint with your own logic for filtering the outputs, see the [Adding Endpoints](adding-endpoints) guide.
:::
