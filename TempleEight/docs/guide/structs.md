---
id: structs
title: Structs
sidebar_label: Structs
---

Rather than using a separate service for each type of entity in your system, sometimes it makes sense to store multiple types of entity on the same database.
This is useful for implementing many-to-one relationships, providing a parallel to arrays.
Temple provides this functionality in the form of **structs**.
A struct block is expressed in the Templefile as a block within another service.

```templefile {11-14}
Example: project {
  #provider(kube);
  #authMethod(email);
}

Home: service {
  address: string;
  occupants: int(min: 0, precision: 1);
  #auth;

  Room: struct {
    name: string;
    #enumerable;
  };
}
```

Every struct entry has an implicit reference to an entity in the parent service.
In the example above, every room is part of a single home.

Structs may include metadata for specifying which endpoints are generated: [`#enumerable`](enumeration) and [`#omit[...]`](omitting-endpoints).
They may not include [access control](access-control) metadata (`#readable`/`#writable`): this is all inherited from the parent.
This means that, if a service is only writable by the creator, only the creator of the service entry may create a struct tied to this service entity.
The struct entry is likewise only readable (through the list/read endpoints) if the parent is readable.

## Many-to-many relationships

To make a many-to-many relationship, use a struct as a linking table.
Below are two examples of this.
Note that in the second example, `Follower` does not include a reference to the tweeter doing the following, as that is implicit: only the reference to the tweeter being followed is included.

```templefile {7}
ExampleNews: project {}

Subscriber: service {
  username: string @unique;

  Subscription: struct {
    topic: Topic;
    #enumerable;
  };
}

Topic: service {
  title: string @unique;
}
```

```templefile {7}
ExampleNetwork: project {}

Tweeter: service {
  username: string @unique;

  Follower: struct {
    otherTweeter: Tweeter;
    #enumerable;
  };
}
```

## Endpoint URLs

To emphasize that every struct is tied to a specific instance of the service, the ID of the parent is included in the URL of the entry.

Using the example above, the endpoints generated are as follows:

- Create: `POST /api/home/{parent-id}/room`
- Read: `GET /api/home/{parent-id}/room/{id}`
- Update: `PUT /api/home/{parent-id}/room/{id}`
- Delete: `DELETE /api/home/{parent-id}/room/{id}`
- List: `GET /api/home/{parent-id}/room/{id}/all`

For example, if we have a home with ID `82abd10c-8b90-11ea-bc55-0242ac130003`, we can create a room with a POST to `/api/home/82abd10c-8b90-11ea-bc55-0242ac130003/room`.
If this returns a room with ID `019103d4-8b96-11ea-bc55-0242ac130003`, we can read it with a GET to `/api/home/82abd10c-8b90-11ea-bc55-0242ac130003/room/019103d4-8b96-11ea-bc55-0242ac130003`.
