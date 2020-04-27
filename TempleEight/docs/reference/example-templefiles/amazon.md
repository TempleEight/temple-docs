---
id: amazon
title: Amazon
sidebar_label: Amazon
---

The following Templefile captures Amazon's core e-commerce model, the online marketplace for goods.

```
Amazon: project {
  #language(go);
  #database(postgres);
  #authMethod(email);
  #provider(dockerCompose);
}

// Since the project has auth, #readable and #writable for all services default to (by: this)

Seller: service {
  firstName: string;
  lastName: string;
  #auth;
  #enumerable;
  #readable(by: all);
}

Customer: service {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  town: string;
  county: string;
  postcode: string;
  #auth;
}

ProductCategory: service {
  name: string;
  #enumerable;
  #readable(by: all);
}

Product: service {
  category: ProductCategory;
  seller: Seller;
  name: string;
  description: string;
  price: float;

  Picture: struct {
    image: data(5M);
    #enumerable;
  }

  #enumerable;
  #readable(by: all);
}

Order: service {
  customer: Customer;
  orderDate: datetime;

  // OrderItem is a join table between Orders and Products (many to many)
  OrderItem: struct {
    product: Product;
    #enumerable;
  }

  #omit[delete];
  #enumerable;
}
```
