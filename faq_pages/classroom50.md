---
layout: bare
title: "Classroom50"
permalink: /faq/classroom50/
nav_exclude: true
search_exclude: true
---

## Classroom50

Your teacher will provide you with the link for your specific assignments (The only exception here is for the IDP nchs-idp assignment below. You should see the following screen (if you are not yet signed into GitHub).

![Classroom50](assets/images/faq/classroom50.png)

Once you’ve accepted an assignment you will have your own private repository for this assignment.

### IDP
For IDP you can use the following assignment for your classwork and assignments:
https://classroom50.org/NCHS-CS/idp/assignments/nchs-idp/accept

![Classroom50](assets/images/faq/accept-assignment.png)

Once you accept this assignment you can clone the repository to your computer.

![Classroom50](assets/images/faq/clone-repo.png)

You can now work on the jupyter notebooks locally using VS Code (and read the lesson content). *See notes on running VS code from Anaconda here* [NCHS CS Help for FAQ](https://docs.google.com/document/d/1_pbLhVmvnMzIhO-ja_HQkc8UjtaZ4OkBJi2YwU3Vpf0/edit?tab=t.v1rbcnxswubf)

### Updating your assignment
At times I will make updates to the website and you will want to incorporate these into your repository. To do this you’ll need to follow a few more steps.

First - you need to add the original IDP website as an upstream repository. Note - you only need to do this once.

```bash
git remote add upstream https://github.com/NCHS-CS/cse163-nchs
```

You can now fetch and merge upstream changes.

```bash
git fetch upstream
-git merge upstream/main --allow-unrelated-histories
```

Gotchas:

1. The very first time you use git you may get an error for git user.name (go to the FAQ table!)
2. The command line git defaults to the editor “vi” and you get are stuck..: It’s a text editor when you get the merge commit and it’s just looking for your description to be saved. Press “Esc” to make sure you are in editor mode. Enter the text :x and press enter (the vi command to save a file).
3. If you get merge conflicts you can throw away your changes and accept the upstream version with (especially for jupyter notebook conflicts that can be hard to merge):

```bash
# How do throw out your changes and get the "upstream" file to your repo.
git checkout --theirs <file_name>
git checkout --ours <file_name> # to keep our file
```

Tip: Subscribe to notification and changes to the main [website](https://github.com/NCHS-CS/cse163-nchs) so you can decide when to update your local repository.
Go to the upstream repository and select to watch all notification in the UI:

![Classroom50](assets/images/faq/upstream-repo.png)

### Submitting your Assignment for Grading
In order for classroom50 to recognize your latest commit as the work that needs to be graded, you need to tag it. 

```bash
# First: Create a tag, and make sure it's titled 'submit/final'.
git tag -f submit/final
# This only updated the tag's location on your local system.
# In order to move it to the servers, you need to push it!
git push origin submit/final --force
```

Gotchas:

1. If you don't title the tag correctly, classroom50 will NOT grade it properly
2. Not forcing both commands will cause git to tell you that 'submit/final' already exists as a tag.
3. Make sure you place the --force command in the right place, so everything actually works correctly.