---
id: templefile-spec
title: TempleFile Specification
sidebar_label: Templefile Specification
---

# TempleFile DSL Specification

## Primitives

```
bool
string(maxLength: int, minLength: int)
int(max: int, min: int = 0)
float(max: float, min: float = 0.0f, precision: int = 8)
date
time
datetime
data(maxSize: int)
```

## Annotations

```
@unique - This value is unique in this column throughout the datastore
@server - This value is inaccessible to the client API
@serverSet - This is set by the server, but returned in client responses 
@client - This value is communicated between the client and server, but not stored in the 	database

```

## Code Example @ Maximum Verbosity

```
UserBookings: project {
    #language(go);
    #provider(aws);
    #database(postgres);
}

DriverMobile: target {
    #language(swift);
    
    #auth (
    	services: [
            User
    	]
    );
}

User: service {
   username: string(maxLength: 3, minlength: 3) @unique;
   
    ratio: fixed(
    	max: 100,
    	min: 30,
        places: 4,
        precision: 4
     )  @unique;
    
    #auth(
    	login: username
    );
    
    #uses (
    	services: [
            Orders,
            Bookings
    	]
    );
    
    Pictures: subservice {
        name: string @unique;
        img: data(32M);
    }
    
    #language(python);
    #database(dynamo);
}

Bookings: service {
    user: User;
    
    createdAt: datetimetz @server;
    
    roomNumber: int;
}
```

### Other things to add

* Targets
* Access control external/internal services
* Inheritance of services

### Changelog

#### 2020-01-31

- remove primitive type `fixed(max: float, min: float, places: int = 2, precision: int = 0)`, because of poor language support

#### 2020-02-04

- rename datetimetz to datetime
- remove min and max from date and datetime