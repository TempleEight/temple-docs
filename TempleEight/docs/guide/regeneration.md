---
id: regeneration
title: Regeneration
sidebar_label: Regeneration
---

In addition to generating code from a Templefile a single time at the beginning of project development, the Temple CLI also allows for regeneration of code later in the cycle.
This means that if you generate a project, but then want to later add an additional service, or a property on that service, Temple will allow you to regenerate code reflecting any changes to the original Templefile. 

During this process, Temple will regenerate _all_ project files, overwriting any existing ones, with a few key exceptions:

- The _setup_ source file, in any existing service

- The _datastore_ source file, in any existing service

- Any file that belongs to a service that has been deleted from the Templefile since the last generation event.

As the setup and datastore source files do not change based on the contents of the Service they're generated from, they can be safely omitted from the regeneration process without risk of breaking changes. 

This also allows the user to add their own custom business logic (as per the [Business Logic & Hooks](hooks) guide) in these two files, which persists between generation events.
However it is very possible that the business logic that exists may not be correct after regeneration, reflecting changes to the properties of a service, etc.

To invoke the regeneration process, simply run `temple generate` with an output directory that already contains an existing temple project.

For example, first generate the project the first time:

```bash
❯❯❯ temple generate example.temple
What should the Go module name be? (expected format "github.com/username/repo")
github.com/temple/tutorial
Generated project in /path/Documents/temple-tutorial
```

Then, make some changes to a setup or datastore source file. We'll change the `example-service/setup.go` file:

```go
package main

import (
	"fmt"

	"github.com/gorilla/mux"
)

func (env *env) setup(router *mux.Router) {
	// Add user defined code here
	fmt.Printf("Hello, World!\n")
}
```

Next, we're going to regenerate the project, but we'll notice that the changes we just made will persist.

```bash
❯❯❯ temple generate example.temple

What should the Go module name be? (expected format "github.com/username/repo")
github.com/temple/tutorial

The output directory already contains some files that are going to be generated.
This process will overwrite them.

These files will not be touched to preserve business logic:
➤ example-service/dao/datastore.go
➤ example-service/setup.go

Do you want to continue? (Y/N)
y
 ```

 If we check the file we changed earlier, we'll see that the changes we made are still present.

 ```go
package main

import (
	"fmt"

	"github.com/gorilla/mux"
)

func (env *env) setup(router *mux.Router) {
	// Add user defined code here
	fmt.Printf("Hello, World!\n")
}
 ```
