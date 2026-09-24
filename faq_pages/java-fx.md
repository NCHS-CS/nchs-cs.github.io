---
layout: custom_default
title: "General"
permalink: /hidden-page/
index: false
---

## Java FX - Installing on Another Computer

Download and install the Zulu FX Java FX SDK from [here](https://www.azul.com/downloads/?package=jdk-fx#zulu). Be sure to scroll down and select the Java FX SDK, not the default SDK. You can install the latest (v25) at this time.

**For windows**: use the "msi" file. Be sure to set the "JAVA_HOME" environment parameter during the install.

![Java FX Download](assets/images/faq/java-fx-download.png)

## Java FX - Missing Libraries

When trying to build you may find that VS code cannot locate the FX libraries. You'll need to point your visual studio to where the FX libraries are located.

Add the following to your `.vscode/launch.json` (add a new line right after projectname):

```json
"vmArgs": "--module-path \"${env:JAVA_HOME}\\lib\" --add-modules=javafx.controls,javafx.fxml --enable-native-access=javafx.graphics"
```

Or in your user settings (JSON):

```json
"java.debug.settings.vmArgs": "--enable-native-access=javafx.graphics --sun-misc-unsafe-memory-access=allow --module-path \"${env:JAVA_HOME}\\lib\" --add-modules=javafx.controls,javafx.fxml"
```

### Suppressing JavaFX Warnings

To suppress the following warnings:

```
WARNING: A restricted method in java.lang.System has been called
WARNING: java.lang.System::load has been called by com.sun.glass.utils.NativeLibLoader in module javafx.graphics (jrt:/javafx.graphics)
WARNING: Use --enable-native-access=javafx.graphics to avoid a warning for callers in this module
WARNING: Restricted methods will be blocked in a future release unless native access is enabled

WARNING: A terminally deprecated method in sun.misc.Unsafe has been called
WARNING: sun.misc.Unsafe::allocateMemory has been called by com.sun.marlin.OffHeapArray (jrt:/javafx.graphics)
WARNING: Please consider reporting this to the maintainers of class com.sun.marlin.OffHeapArray
WARNING: sun.misc.Unsafe::allocateMemory will be removed in a future release
```

Add this line to your user settings.json (`CTRL-SHIFT-P` → User Settings (JSON)):

```json
"java.debug.settings.vmArgs": "--enable-native-access=javafx.graphics --sun-misc-unsafe-memory-access=allow"
```

Or open User Settings (UI) and search for vmargs and add:

```
--enable-native-access=javafx.graphics --sun-misc-unsafe-memory-access=allow
```
![Vmargs Photo](assets/images/faq/vmargs.png)

{% endtab %}

{% tab faq_sections CodeSpaces %}

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