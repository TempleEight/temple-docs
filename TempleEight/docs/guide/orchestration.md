---
id: orchestration
title: Orchestration
sidebar_label: Orchestration
---
import useBaseUrl from '@docusaurus/useBaseUrl';


With distributed systems, equally important as the application is the way that it's orchestrated. 
Temple provides several industry standards methods of automatically deploying your services.

## Adding Orchestration to your Templefile

Orchestrating your project automatically requires only a single line of code in your Templefile.
Working from the example in the [Getting Started](../getting-started) guide:

```templefile {4}
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
We can see here that the Templefile features a `#provider` annotation in the project block.
This is how we specify that our project uses orchestration, the name in the argument specifies which framework we are generating for.

The currently supported frameworks are:

* Docker Compose

* Kubernetes

All of the frameworks are generated to share a common toolchain, so that usage is the same no matter which you choose.

## Kong API Gateway

An API Gateway is an infrastructure component designed to be the entry point to your application. 
It receives all requests from the user, performs actions like verifying their authentication, and then forwards the request to the correct microservice.

Temple makes use of the existing [Kong API Gateway](https://docs.konghq.com/2.0.x/getting-started/quickstart/) for this purpose, and automatically generates all the configuration it requires.

An API Gateway provides a single entry point into your project infrastructure, meaning it can direct requests to deployed services whether they are on a single machine or multiple machines.
To do this, requests need to be addressed to Kong's URL.
Temple's tooling automatically sets this URL into an environment variable called `$KONG_ENTRY`. 

As previously mentioned, Kong also handles some end-user authentication, when it's used in your project.
See the [Authentication](authentication) Guide for full details of this.

## Docker Compose

[Docker Compose](https://docs.docker.com/compose/) is a tool built into the Docker ecosystem for orchestrating containers.
We recommend using it for local development, as running your services this way has comparatively little overhead.
However it doesn't allow for some more advanced features like automatically replicating and distributing services across different machines out of the box.

When the `dockerCompose` provider is selected, Temple generates three important files, namely:

```shell
.
├── deploy.sh
├── docker-compose.yml
└── kong
    └── configure-kong.sh
```

First, we'll talk about `docker-compose.yml`.
This file acts to instruct Docker Compose on how to manage your services. 
It specifies, for each service, which Docker image should be used in the container, any volume mounts, and environment variables needed.
It also defines networking, allowing certain services to speak to others (for example, only one service should be able to communicate with each database).

`kong/configure-kong.sh` is a script that is ran once the docker-compose infrastructure is running.
It sends a series of `cURL` requests to the `Kong` API gateway which configures it to route requests it receives to the correct service, and to deal with any authentication required.
(see the [Authentication](authentication) Guide, and the [Kong Documentation](https://docs.konghq.com/2.0.x/getting-started/quickstart/)).

Finally the `deploy.sh` script is a shell script to automate starting your application.
This file performs all of the steps needed to get everything running correctly, including setting the `$KONG_ENTRY` and `$KONG_ADMIN` environment variables.
In order for these variables to remain set for the remainder of your terminal session, it needs to be run with the `source` command.

For example, start the Docker daemon (See the [Docker docs](https://docs.docker.com/)):

```shell 
❯❯❯ source deploy.sh
```

A lot of output will be presented, detailing each step of the deployment process, and any errors that occurred. 

Verify the system was configured correctly by checking the environment variables:

```shell
❯❯❯ echo $KONG_ENTRY 
localhost:8000

❯❯❯ echo $KONG_ADMIN
localhost:8001
```

Once you are finished with your infrastructure, everything can be cleanly shut down with:

```shell
❯❯❯ docker-compose down
```

## Kubernetes

Another common framework for orchestrating services is [Kubernetes](https://kubernetes.io/)(kube, k8s). 
It's a more heavyweight tool than Docker Compose, but has much more mature features and is generally seen as more 'production grade'.

By changing the `#provider` annotation in a Templefile's project block to read `#provider(kubernetes)`, 
Temple will generate the required config to run your services in k8s. 

Changing the `example.temple` file from the [Getting Started](../getting-started) guide to use this `#provider` annotation and generating,
the configuration files generated are:

```shell
.
├── deploy.sh
├── kong
│   └── configure-kong.sh
├── kube
│   ├── deploy
│   │   ├── deploy-daemon-set.yaml
│   │   ├── deploy-replication-controller.yaml
│   │   └── deploy-service.yaml
│   ├── example-service
│   │   ├── db-deployment.yaml
│   │   ├── db-service.yaml
│   │   ├── db-storage.yaml
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   └── kong
│       ├── kong-db-deployment.yaml
│       ├── kong-db-service.yaml
│       ├── kong-deployment.yaml
│       ├── kong-migration-job.yaml
│       └── kong-service.yaml
└── push-image.sh
```

As you can see, there are a lot more files generated here than for Docker Compose.

The `deploy.sh` and `configure-kong.sh` scripts serve the same purpose here as they do in the Docker Compose example, 
although the mechanisms used to achieve this are different.

The `push-image.sh` script builds docker images from each service generated in your project.
Kubernetes requires all images used in your system to be hosted in a Docker [Registry](https://docs.docker.com/registry/). 
As such, to aide in local development Temple's Kubernetes infrastructure features it's own registry, hosted in the Kubernetes cluster itself.
This script pushes all of the built images to this registry for K8s to use.

The aforementioned registry has it's configuration files in the `kube/deploy` directory.
The rest of the `kube` directory features the configuration `yaml` files for each other service managed by Kubernetes, including Kong.

To run this example, we assume you're running a local [`minikube`](https://minikube.sigs.k8s.io/docs/) cluster.
See the Kubernetes documentation for a full reference on how to deploy your services into a production environment.

Run your application with the same methods as with Docker Compose:

```shell 
❯❯❯ source deploy.sh
```

Kubernetes infrastructure will take a lot longer to spin up, as it creates an entire Virtual Machine in `VirtualBox`.

Once everything is running, you can use the infrastructure in the exact same way as with Docker Compose.

In order to shut down your cluster and delete any config it's left behind, run:

```shell
❯❯❯ minikube delete
🔥  Deleting "minikube" in virtualbox ...
💀  Removed all traces of the "minikube" cluster.
```
