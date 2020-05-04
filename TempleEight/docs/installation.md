---
id: installation
title: Installation
sidebar_label: Installation
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Welcome to the Temple installation guide!

In order to get using Temple, you'll need to install the *Temple CLI*. 

## Prerequisites

If installing locally, the Temple CLI requires [Java 11 or above](https://java.com/en/download/help/download_options.xml) to run.
We also support installation via a [Docker](https://www.docker.com) image.

In order to build and orchestrate generated services, you'll need:
* [Docker](https://www.docker.com/)
* For projects orchestrated with Docker-Compose: 
    * [docker-compose](https://docs.docker.com/compose/)
* For projects orchestrated with Kubernetes:
    * [Minikube](https://minikube.sigs.k8s.io/docs/) for local development
    * [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#verifying-kubectl-configuration) for managing Kubernetes clusters


## Installation Instructions
We currently support direct installation on MacOS and Linux, as well as through a Docker container.
Windows users are recommended to use the Docker container.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="macos"
  values={[
    { label: 'MacOS', value: 'macos', },
    { label: 'Linux', value: 'linux', },
    { label: 'Docker Image', value: 'docker', },
  ]
}>

<TabItem value="macos">
Installation is via <a href="https://brew.sh/">Homebrew</a>.
To install, run:
<code>❯❯❯ brew tap templeeight/temple</code>
<code>❯❯❯ brew install temple</code>
</TabItem>

<TabItem value="linux">
Install by grabbing the latest release from <a href="https://github.com/TempleEight/temple/releases">GitHub</a>:
<code>❯❯❯ wget -O /usr/bin/temple https://github.com/TempleEight/temple/releases/latest/download/temple-latest </code>
<code>❯❯❯ chmod +x /usr/bin/temple</code>
</TabItem>

<TabItem value="docker">
A Docker image is available on Docker Hub:
<code>❯❯❯ docker run templeeight/temple:latest </code>
</TabItem>
</Tabs>

## Confirmation

To confirm that the Temple CLI has been installed locally, run:

```
❯❯❯ temple --version
```

If you're using Docker, any commands you pass after the image name will be executed within the container. 
To invoke `temple --version`, run:

```
❯❯❯ docker run templeeight/temple:latest temple --version
```

## Additional Information for Docker Users
:::important
Since the Temple project involves the generation of code, you will need to mount a directory into the container so that files can be synchronised between the two environments.

To do this, use the `-v` flag in `docker run` to create a bind mount from your local directory system into the container.

For example, the following command mounts the directory `/Users/temple/project` into the container at the location `/home/project`, runs the Temple image, and invokes the temple binary with the flag `--version`.

```bash
docker run \
-v /Users/temple/project:/home/project:rw \
templeeight/temple:latest \
temple --version
```

This also means that any paths you provide to the Temple executable will need to be using the container's file system and not the host's:

```bash
docker run \
-v /Users/temple/project:/home/project:rw \
templeeight/temple:latest \
temple validate /home/project/example.temple
```
:::

## Installing the Syntax Highlighter
### VSCode
If you're using VSCode for Temple development, we have a syntax highlighter for Templefiles in the marketplace.
Simply [follow this link](https://marketplace.visualstudio.com/items?itemName=TempleEight.temple) or search "Templefile" in VSCode!


<p align="center">
<img alt="VSCode Syntax Highlighting" src={useBaseUrl('img/vscode-syntax.png')} />
</p>

### IntelliJ
We also support syntax highlighting in the IntelliJ suite of IDEs:
- Clone our syntax highlighting repository: https://github.com/TempleEight/temple.tmlanguage
- Within IntelliJ, open Preferences › Editor › TextMate Bundles, and click add - point this at the root of the `temple.tmlanguage` directory

