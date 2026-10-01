---
layout: custom_default
title: "Codespaces"
permalink: /faq/codespaces/
nav_exclude: true
search_exclude: true
---

## Codespace Usage

**Note: GitHub as of 08/31/2026 no longer supports codespace billing to a group organization. You must obtain GitHub Education approval to receive any codespace usage credits for free.**

## Setting up Codespaces for HW

For most assignments you can work with your GitHub code in either VS code or codespaces. To work in codespaces you may have some additional setup (e.g. see the sections below for setting up to run a GUI for Java FX for instance).

If your assignment has automated testing set up for it you can find the steps here that will help you set up a separate environment and the dependencies you are going to need to run it either on codespaces or your own separate environment.

## Java FX Codespace Issues (loaded in recovery mode)

If you are having codespace issues, I've found that the installation of the sound drivers for javafx seems to be causing problems. Open your `.devcontainer/setup-javafx.sh` file and change the apt-get install (around line 21) to the following to remove the sound drivers. Commit, Sync(Push) changes, and do a "Full Rebuild" on your container.

```bash
# disable sound install - issues with package names and won't use sound on codespace anyway
sudo apt-get install -y libgtk-3-0 libx11-6 libxtst6 libxrender1 libxi6 libgl1 >/dev/null
```

## Running Java FX from Codespaces

It is possible to run Java FX from codespaces instead of VS Code locally on your machine. You should be able to start a new codespace from github.com/codespaces and provide it your github url for your project, or you can create the codespace directly from your github repository.

![Codespaces Creation Image](assets/images/faq/codespaces-creation.png)

To do this follow these steps:

If this is not already in your `.devcontainer`, add the following directory to the root of your project: `.devcontainer` and add a new file `devcontainer.json` to this folder with the following:

```json
{
    "name": "Java Swing Development",
    "image": "mcr.microsoft.com/devcontainers/java:17",
    "features": {
        "ghcr.io/devcontainers/features/desktop-lite:1": {
            "password": "vscode"
        }
    },
    "forwardPorts": [
        6080
    ],
    "portsAttributes": {
        "6080": {
            "label": "Desktop (Web)"
        }
    }
}
```

Restart your codespace - you can do this with the directions in the help table on how to "Rebuild codespace".

After it restarts you should be able to go to the "ports" section and click the globe (open in browser).

![Ports](assets/images/faq/ports.png)

This should open up a browser tab to connect to VNC.

![noVNC Image](assets/images/faq/noVNC.png)

Click connect and you should now be able to run your GUI application from codespaces and have it come up in there.

![Calculator Proj Image](assets/images/faq/calculator-proj.png)