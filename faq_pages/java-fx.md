---
layout: custom_default
title: "Java FX"
permalink: /faq/java-fx/
nav_exclude: true
search_exclude: true
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