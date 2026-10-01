---
layout: bare
title: "General"
permalink: /faq/general/
nav_exclude: true
search_exclude: true
---

| Problem | Try This |
| --- | --- |
| Installing Git - (if your lab computer does not have git installed) | Run this on the terminal: <br> <code>winget install --id Git.Git -e --source winget</code> <br>Note: You will need to restart VS code if it was running before you installed git (or restart the terminal) so windows can find the installed version of git. |
| Java tests do not appear, or the main class does not load or run. | Run **Clean Java Server Workspace**:<br><br>1. Press <code>CTRL+SHIFT+P</code>.<br>2. Enter <code>clean java server workspace</code>.<br>3. Select **Reload &amp; Delete**.<br>4. Repeat the process if necessary.<br>5. If you are using Codespaces, remove the temporary files by running <code>sudo rm -rf /tmp/\*</code>. |
| Java FX codespaces loading in recovery mode? | See how to disable the sound drivers from loading here. |
| Java FX won't run on codespaces: `Error: JavaFX runtime components are missing, and are required to run this application` | Open up and look at the file: *`.vscode/launch.json`* It's likely you have changed or created a different app that is missing the "linux" section that is needed to find the java fx libraries. Copy that section over to your current configuration so it can find the libraries again. You can usually tell if you see a "projectname" section that is not set to an empty string project name. You can safely delete this launch configuration and use the original one I set up for you instead. **"linux": { "vmArgs": "--module-path ...** |
| Codespaces shows error running the UI port window (x -Failed To Connect To Server) | Try "SHIFT-REFRESH" in your browser window for the VNC UI port. This will delete all cached data in the browser window and seems to fix this problem. |
| I don't know how to use Git/GitHub | There are video tutorials [here](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV) and we also have a set of tutorials hosted at the NCHS website [here](https://nchs-cs.github.io/idp/static/gitbranching/learnGitBranching/) |
| I am confused about codespaces | GitHub codespaces directions are [here](https://docs.github.com/en/codespaces/developing-in-a-codespace/developing-in-a-codespace). NCHS specific directions and help are in this doc below [here](https://docs.google.com/document/d/1_pbLhVmvnMzIhO-ja_HQkc8UjtaZ4OkBJi2YwU3Vpf0/edit?pli=1&tab=t.0). |
| Running Java UI from VS Code results in X11 display issue | This results from clicking to open the project directly to VS code with the "Open in VS code" from the classroom. (It's trying to run codespaces remotely but this doesn't work for Swing). Instead clone the repository from VS Code (create a new window and select to clone a repository and use the link for your github repository from GitHub to clone it). This will then run as expected in your local VS code. Alternatively run remotely and follow directions below for running in CodeSpaces. |
| GitHub complains you don't have user.name or user.email | `git config --global user.name "Your name"` <br> `git config --global user.email <id>@apps.nsd.org` |
| If you have an ssl issue in vscode saving your work | `git config --global http.sslVerify false` |
| When trying to clone a repository to a local machine: "SSL certificate problem: self-signed certificate in certificate chain" | If you are on Windows: enter this on the terminal to configure ssl correctly <br> `git config --global http.sslbackend schannel` <br> On linux/codespaces: <br> `git config --global http.sslbackend openssl` |
| "Sync" fails / conflict (when trying to submit) | Enter this into the terminal and sync again: <br> `git config set pull.rebase true` |
| "Commit" looks it's taking forever | Make sure you don't have the "COMMIT_MSG" file up and waiting for you to edit and close. Just close it and put your commit message in above the commit button. |
| Other random codespace error or message of something weird (aka rebuild codespace) | **Warning this will lose any changes you haven't pushed to your github repo** <br> Enter Ctrl-Shift-P for the command palette, type "Reb…" to get "Codespaces: Rebuild Container", select "Full Rebuild". |
| Trying to run java main isn't working (e.g. main is not found or perhaps the java run/play button is missing) | Check you have enabled the Microsoft java extension pack and not the oracle one. <br> This is correct: <br> <img src="assets/images/faq/java-extension-pack.png" alt="Extension Pack for Java" width="300"> <br> This doesn't fully support VS code use: <br> <img src="assets/images/faq/java.png" alt="Extension Pack for Java" width="300"> |