---
id: lockdown-shopping
title: Lockdown Shopping
sidebar_label: Lockdown Shopping
---

The following Templefile is for a system that would allow those who are self-isolating to request others in the community to deliver shopping to their doorstep.

```templefile
LockdownShopping: project {
   #language(go);
   #database(postgres);
   #authMethod(email);
   #provider(dockerCompose);
   #metrics(prometheus);
}

// Since the project has auth, #readable and #writable for all services default to (by: this)

// Shoppers take Customer's orders and deliver them to their houses
Shopper: service {
  firstName: string;
  lastName: string;
  #auth;
  #readable(by: all);
  
}

// Customers place orders for Shoppers to deliver
Customer: service {
  firstName: string;
  lastName: string;

  addressLine1: string;
  addressLine2: string;
  town: string;
  county: string;
  postcode: string;

  #auth;
  #readable(by: all);
}

Shop: service {
  name: string;

  address: string;
  addressLine2: string;
  town: string;
  county: string;
  postcode: string;

  #auth;
  #enumerable;
  #readable(by: all);
}

// Products are items that can be purchased from a Shop
Product: service {
  name: string;
  price: float;
  shop: Shop;

  Picture: struct {
    image: data(5M);
    #enumerable;
  }

  #enumerable;
  #readable(by: all);
  // Enforce only creatable by the relevant shop in the beforeCreate hook
}

// An order contains a series of items associated with a given customer on a given date
Order: service {
  customer: Customer;
  orderDate: date;
  fulfilled: bool;
  requestedDeliveryDate: date;

  // OrderItem is a join table between Orders and Products (many to many)
  OrderItem: struct {
    product: Product;
    #enumerable;
  }

  #omit[delete];
  #enumerable;
  #readable(by: all);
}
```
