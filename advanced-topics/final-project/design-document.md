---
layout: default
title: "Advanced Topics"
subtitle: "Final Project Design Document Template"
---

This document is a starting template you will use for your Design Document. You will complete each section separately in phases and grades. You may take this document and import it to a new google document if you want to create your design document in google, otherwise you may keep this in the doc folder with your github project (recommended).

You should delete the instructions as you fill in each section.

## Title Block

|     |     |
|-----|-----|
| **Project Title** |  |
| Name 1 | `First student name`  |
| Name 2 | `Second student name` |


## Proposal Phase 1

### Project Description

This description will vary in length and detail. It could be as short as 4 sentences, or as long as 1 page. Target about 2-4 paragraphs long. Describe what the project does with enough detail that another developer could implement the project for you and get it pretty close. Sections below will allow another developer to get it very close! 

Provide a brief description of your project idea (2-3 sentences). Explain what your program will do and how it will use Java Swing for graphical development.

**MVP** 

(Minimum Viable Product). Describe the absolute fewest pieces of functionality that defines success. If any part of an MVP feature is missing, the project is not worth shipping and is considered a failure. This is not your target set of functionality from above. It should describe the set of features you’re confident you can get done on time.

**Purpose & Motivation:**

Why did you choose this project? What do you hope to learn or accomplish?

**Project Scope & Features**

**Core Features:**

List at least **three main features** that your Java Swing application will include. Examples:

- Interactive buttons and menus
- Dynamic animations
- User input handling (e.g., keyboard/mouse events)

**Additional Features:**

What extra features or stretch goals are you planning to implement if time permits?

Stretch Features: List the features that are bonus and completely unnecessary. These will be added only as time permits. 

### Learning Targets and Challenge Goals

What do you need to know to be successful?  What technology or techniques are new to you that are likely to be difficult? What will you exercise and get better at because of this project? Bulleted list goes here.  You can list out Data Structures, Generics, and/or Interfaces that you intend to become more familiar with. List out algorithms and/or public libraries List out GUI components or things like: multi-threading, security, web services, GitHub, sound, Fast Fourier Transforms, double buffering, image processing, fly out menus, Trees, networking  Cannot say vague things like, “To learn how to code the project” 

### High Level Weekly Timeline

Create your task list from [this template](https://docs.google.com/spreadsheets/d/1F2ba3ekH2hg-wLWOCXHkyzi8Q8jizi4QHmhfRdichcU/edit?usp=sharing) (You may modify but you should keep this as the minimum required information for a task list)

### Approval

You must receive teacher approval to continue to Phase 2.

**Students Signatures:** __________________________________________________________________


**Date:** _________________________________________



**Teacher Approval:** __________________________________________________________________


**Date:** _________________________________________


## Proposal Phase 2

This section of the proposal will add more detail as well as Storyboard Sketches (You should revise the previous sections if needed and add storyboard sketches)

### User Experience: Input/Output and Wireframes

- Hand drawn or rough wireframe sketches and UI flow diagram.
- Any user input/output that is needed to control your application including mouse and keyboard interaction (should be part of wireframe flow as well)

### Task Schedule Phase 2

Revise your weekly goals with a new Task schedule that includes at least 3-5 subtasks for each week.

## Design Document Details - Phase 3

__More information and updates to the following sections are pending__

The following section includes detailed design document (Something every engineer will spend a lot of time on. Often the more time spent here the less time it takes to get the project work complete as you will save time by avoiding creating project elements that you may just have to throw out or redo)

### Detailed Schedule

This is an ordered list of major pieces of functionality created in an intentional order to help you incrementally create a larger project that works. Each deliverable is a significant piece of functionality that should be completed before the next deliverable starts. While it is often true that one deliverable must be delivered before another can be accomplished, deliverables do not have to have dependencies on one another. This means that two deliverables can be developed in parallel by different members of a team.

Recall how we developed projects during the first semester. The table below is an **example** set of deliverables for the Shunting Yard GUI calculator. You should replace it with your own set of deliverables.

Oftentimes we will discover more deliverables along the way. This is fine. It is difficult (sometimes impossible) to know everything at the start of a project. Discovered work will be added to the Task Worksheet.

You should take your previous weekly schedule and add sub-tasks that are well defined, with time estimates and assigned to each team member. Following are some examples of the level of detail needed. These would be sub-elements of the previous weekly schedule.

| Deliverable | Notes |
| :---- | :---- |
| A GUI with functional buttons and text display (provided for you) | No calculations necessary. Event handlers hooked up. |
| Event handlers implemented basic calculator functionality. | No order of operations. Changes display with calculated values. |
| Post-Fix evaluator class that calculates the value of an expression in post-fix. | Unit Tests included. Uses Stacks/Queues. |
| Shunting yard class that implements the algorithm to convert in-fix to post-fix. | Unit Tests included. Uses Stacks/Queues. |
| Full Shunting Yard Calculator. | All components are integrated together to make a fully functional calculator. |
| Extra operators. | If time, more buttons and operations are added. Example: modulus, square root, log, exponentiation.  |

### User Stories

You should add user stories to your project in the following format. These help you identify any missing tasks or functionality. You can track that you satisfy all your user stories by adding identifiers to each user story and referencing them in your task list with the user stories column.

As a `who` I want to `behavior` so that I can `benefit`.

- `who` provides the customer: context and perspective
- `behavior` describes what is to be delivered
- `benefit` helps define why want to do it, as well as what “done” means. It allows us to validate that we achieved it.

**Examples**

- As a Developer I want to have my game board saved in a file so that I can be data driven and design multiple boards that work without having to change the code.
- As a Player I want the avatar character to respond to the arrow keys so that I can move my avatar on the screen.

### Testing Strategy

Define how you are going to test that your code is working correctly, how you will test edge conditions or errors happening and so forth. Make sure to build time in your schedule to get this done.



### High Level Architecture - Summary

This section will most likely be hard to create.

See [this document](https://drawio-app.com/blog/3-diagrams-every-computer-science-student-should-know) on some high level architecture diagrams that you can consider creating. We'll review and go over some of these in class as well. Feel free to add other **standard** software design diagrams as appropriate to your project.

Ask yourself, “What is the difficult part about the project? How will I solve that problem?” If there is nothing difficult about the project, then the project may not be complex enough. If you don’t know how to solve the problem, ask, “How will I learn to solve that problem?” Explain all of that here.

Lastly, consider what classes you will create, their roles & responsibilities, how your classes will interface with one another, where data will come from, and what data structures will be used. If there are lots of data sources and paths, making a diagram can help add clarity. Many projects will not require a Data Flow Diagram.

#### Diagrams

You should consider at a minimum to create the following diagrams:

**Class Diagram**: This diagram illustrates the static structure of a system by showing its classes, attributes, operations, and the relationships among objects. It provides a clear blueprint of the system's architecture, essential for understanding how different components interact. 

**Sequence Diagram**: Depicting the sequence of messages exchanged among objects, sequence diagrams detail how operations are carried out, including the order of interactions. They are instrumental in modeling the dynamic behavior of a system, especially for complex processes. 

**Use Case Diagram**: This diagram captures the functional requirements of a system by illustrating the interactions between users (actors) and the system itself. It helps in identifying and organizing system requirements, ensuring that all user interactions are considered during development. You may decide on a different diagram to this one if your application has minimal user interaction.

#### Class Roles & Responsibilities

Builing on the diagrams you created in the last section you should expand on the details for as many of your classes that you can identify and their roles & responsibilities. It could be that that will be enough. If you cannot list off at least three classes, the project is not complex enough.

| Class name | Roles & Responsibilities |
| :---- | :---- |
|  |  |
|  |  |
|  |  |

#### Important Algorithms/Functionality

