---
id: airbnb
title: Airbnb
sidebar_label: Airbnb
---

The following Templefile captures Airbnb's core model, the online marketplace for arranging and offering lodging.

```templefile
Airbnb: project {
  #language(go);
  #database(postgres);
  #authMethod(email);
  #provider(dockerCompose);
  #metrics(prometheus);
}

// Since the project has auth, #readable and #writable for all services default to (by: this)

Landlord: service {
  firstName: string;
  lastName: string;
  #auth;
  #readable(by: all);
}

Tenant: service {
  firstName: string;
  lastName: string;
  #auth;
}

Property: service {
  landlord: Landlord;
  address: string;
  city: string;
  postcode: string;
  description: string;
  pricePerNight: float;

  Photo: struct {
    image: data(5M);
    caption: string;
    #enumerable;
  }

  #enumerable;
  #readable(by: all);
}

Reservation: service {
  tenant: Tenant;
  property: Property;
  startTime: datetime;
  endTime: datetime;
}

Review: service {
  property: Property;
  tenant: Tenant;
  reservation: Reservation;
  stars: int(5, 0);
  review: string;
  #readable(by: all);
}
```
