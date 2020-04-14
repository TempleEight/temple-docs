---
id: installation
title: Installation Guide
sidebar_label: Installation Guide
---

Welcome to the Temple installation guide!

In order to get using Temple, you'll need to install the *Temple CLI*. 

## Prerequisites 

The Temple CLI requires [Java](https://java.com/en/download/help/download_options.xml) to run.

In order to build and orchestrate generated services, you'll need:

* [Docker](https://www.docker.com/)
* For projects orchestrated with Docker-Compose: 
    * [docker-compose](https://docs.docker.com/compose/)
* For projects orchestrated with Kubernetes:
    * [Minikube](https://minikube.sigs.k8s.io/docs/) for local development
    * [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#verifying-kubectl-configuration) for managing Kubernetes clusters


## Installation Instructions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="macos"
  values={[
    { label: 'MacOS', value: 'macos', },
    { label: 'Linux', value: 'linux', },
    { label: 'Windows', value: 'windows', },
  ]
}>
<TabItem value="macos">
Installation is via <a href="https://brew.sh/">Homebrew</a>.
To install, run:
<code> brew tap templeeight/temple</code>
<code>brew install temple</code>
</TabItem>
<TabItem value="linux">This is an orange 🍊</TabItem>
<TabItem value="windows">This is a banana 🍌</TabItem>
</Tabs>

## Confirmation

To confirm that the TempleCLI has been installed correctly, run:

```
~ ❯❯❯ temple --version
temple 0.1.0 (c) 2020 TempleEight
```