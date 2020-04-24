---
id: adding-dao-functions
title: Adding DAO Functions
sidebar_label: Adding DAO Functions
---

The DAO provides an interface between a datastore and application code.
Its main objective is to decouple the actual datastore interactions and business logic such as validation or JSON encoding.

As part of a `Temple` project, we generate a DAO for each service, so that regardless of datastore chosen, the handler logic will be the same. 
More information on this can be found in [Service Architecture](../arch/service).

Within the generated DAO you will find methods for performing the standard `Create`, `Read`, `Update`, `Delete`, `List` or `Identify` endpoints.
These queries are very simple: they perform the minimum the query required to extract all the data stored within the system.

There are times where these standard queries are not sufficient to perform the query you require, so we designed `Temple` to allow for additional DAO methods.
This guide will walk you through how to add new DAO functions to your project, using the `ExampleService` defined in the [Getting Started](../getting-started) guide.

## Adding a New DAO Function
The Templefile we defined in the [Getting Started](../getting-started) guide was as follows:

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

In the `example-service/dao` director, you will find 3 files:

```
example-service/dao
├── dao.go
├── datastore.go
└── errors.go
```

- `dao.go` contains the generate DAO functions. 
This might be useful to use as a reference for how to write additional DAO functions.

- `datastore.go` contains an interface which you can modify with additional datastore methods.

- `errors.go` contains errors that can be returned from the DAO.

Opening up `datastore.go`, you'll find an empty interface called `Datastore` which extends the `BaseDatastore` defined in `dao.go`:

```go
package dao

// Datastore provides the interface adopted by the DAO, allowing for mocking
type Datastore interface {
	BaseDatastore
}
```

By adding a method to the interface, and then providing an implementation of that interface on the object DAO, it will be accessible from [hooks](hooks) as well as from [custom handlers](custom-handlers).

For example, let's add a custom DAO method that will find the first row where `bar = 5`:

```go
package dao

// Datastore provides the interface adopted by the DAO, allowing for mocking
type Datastore interface {
	BaseDatastore
	ReadBar5() (*ExampleService, error)
}

// ReadBar5 returns the fist exampleService in the datastore where the value of foo is 5
func (dao *DAO) ReadBar5() (*ExampleService, error) {
	row := executeQueryWithRowResponse(dao.DB, "SELECT id, foo, bar FROM example_service WHERE bar = 5;")

	var exampleService ExampleService
	err := row.Scan(&exampleService.ID, &exampleService.Foo, &exampleService.Bar)
	if err != nil {
		return nil, err
	}

	return &exampleService, nil
}
```

We're doing 4 key things here:

1. Defining the method in the interface
2. Defining the method on the object DAO, which is an implementation of the `Datastore` interface
3. Populating the body using utility methods defined in `dao.go`
4. Returning the response or error to the caller

Any code you add in this file will not be removed if you need to regenerate the Temple project based on some updates to your Templefile.
However, this might mean that some of your custom queries may need to modified to deal with the addition, modification or removal of certain attributes.
