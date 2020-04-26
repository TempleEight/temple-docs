---
id: deliveroo
title: Deliveroo
sidebar_label: Deliveroo
---

The following Templefile captures Deliveroo's core model, the food delivery service.

```
Deliveroo: project {
  #language(go);
  #database(postgres);
  #authMethod(email);
  #provider(dockerCompose);
  #metrics(prometheus);
}

// Since the project has auth, #readable and #writable for all services default to (by: this)

// Users order dishes, paid for with their billing account
User: service {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  billingAccount: Billing;
  #auth;
}

// Riders deliver orders, location included for the user to know where they are
Rider: service {
  firstName: string;
  lat: float(90.0, -90.0);
  long: float(180.0, -180.0);
  #auth;
}

// Restaurants make dishes to be picked up by riders
Restaurant: service {
  name: string;
  address: string;
  openTime: time;
  closeTime: time;
  #auth;
  #enumerable;
  #readable(by: all);
}

// An order marks a dish to be delivered by a rider from a restaurant to a user
Order: service {
  user: User;
  restaurant: Restaurant;
  rider: Rider;
  address: string;
  orderTime: datetime @serverSet;
  status: string;

  // An order can have many dishes
  OrderItem: struct {
      dish: Dish;
      #enumerable;
  }

  #omit[delete];
  #enumerable;
}

// A dish is made by a restaurant and is delivered to a user
Dish: service {
  name: string;
  description: string;
  price: float(0.0);
  restaurant: Restaurant;

  Img: struct {
      img: data(4M);
      #enumerable;
  }
  
  #enumerable;
  #readable(by: all)
}

// A billing account for a user, kept separately for security
Billing: service {
  creditCard: string(16,16); // creditCards must be exactly 16 chars long
  expiry: date;
  billingAddress: string;
}
```
