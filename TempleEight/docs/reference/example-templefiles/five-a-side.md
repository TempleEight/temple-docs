---
id: five-a-side
title: 5-a-Side
sidebar_label: 5-a-Side
---

The following Templefile is for a small sports company, that wants to provide their customers with a system for booking themselves onto 5-a-side football games. This could be extended to also provide a league/tournament system.

```templefile
FiveASide: project {
  #language(go);
  #database(postgres);
  #authMethod(email);
  #provider(dockerCompose);
}

// Since the project has auth, #readable and #writable for all services default to (by: this)

Staff: service {
  firstName: string;
  lastName: string;
  email: string;
  #auth;
}

Player: service {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: int;
  #auth;
}

EmergencyContact: service {
  player: Player;
  firstname: string;
  lastName: string;
  relation: string;
  email: string;
  phoneNumber: int;
  #readable(by: all); // Enforce only readable by the relevant player and staff in beforeRead hook
}

Game: service {
  pitchNumber: int;
  price: float;
  maxPlayers: int;
  start: datetime;
  end: datetime;
  #enumerable;
  #readable(by: all);
  // Enforce only creatable by staff in the beforeCreate hook
}

Booking: service {
  player: Player;
  game: Game;
  #enumerable;
  #readable(by: all);
  // Enforce only creatable if game max players has not been reached in beforeCreate hook
}
```
