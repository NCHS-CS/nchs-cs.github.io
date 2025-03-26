---
layout: default_dl
parent: AT - Final Project
title: Design Document
nav_order: 10
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

(Minimum Viable Product). Describe the absolute fewest pieces of functionality that defines success. See the section below that describes more details on the different feature __levels__. This is not your target set of functionality from above. It should describe the set of features you’re confident to complete by midway through your project timeline.

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

The difference between **Minimum Viable Product (MVP) features** and **core features** lies in their purpose, scope, and timing in product development.

### **MVP Features**  
- **Definition:** The minimum set of features required to make a product functional and deliver value to early adopters.  
- **Purpose:** To validate an idea, test market demand, and gather user feedback with minimal effort. You can use this step of development to try out some of your ideas on your fellow classmates _well before the final project due date._
- **Scope:** Limited to essential functionalities that solve the primary problem.  
- **Timing:** Released in the earliest stage of development to test hypotheses.  
- **Examples:**  
  - A ride-sharing app MVP might only allow users to request a ride and drivers to accept it (without payment integration or advanced route optimization).  

### **Core Features**  
- **Definition:** The fundamental and defining features of a product that provide its long-term value.
- **Purpose:** To sustain and grow the product, enhancing user experience and differentiation. This should be your goal for the finished product.
- **Scope:** A broader set of functionalities beyond the MVP, including optimizations, competitive advantages, and scalability.  
- **Timing:** Developed and refined after MVP validation, often as part of iterative improvements.  
- **Examples:**  
  - In the same ride-sharing app, core features may include fare estimation, surge pricing, driver ratings, and in-app payments.  

{: .notice-title }
> Key Difference
> 
> MVP features focus on quick validation (often to allow changes to the product specification to adjust to user testing), while core features focus on delivering a complete, competitive, and sustainable product.

### Learning Targets and Challenge Goals

What do you need to know to be successful?  What technology or techniques are new to you that are likely to be difficult? 

What will you exercise and get better at because of this project? 

Bulleted list goes here.

You can:

- List out Data Structures, Generics, and/or Interfaces that you intend to become more familiar with. 
- List out algorithms and/or public libraries List out GUI components or things like: multi-threading, security, web services, GitHub, sound, Fast Fourier Transforms, double buffering, image processing, fly out menus, Trees, networking.

{: .alert}
Do not say vague things like, “To learn how to code the project” 

### High Level Weekly Timeline

Create your task list from [this template](https://docs.google.com/spreadsheets/d/1F2ba3ekH2hg-wLWOCXHkyzi8Q8jizi4QHmhfRdichcU/edit?usp=sharing) (You may modify but you should keep this as the minimum required information for a task list)

1. Task - A short description of a task. Keep tasks as simple as you can and avoid mixing tasks across multiple things. If you need to later you can cross out this task and split it into multiple items as you learn more (keeping your original estimate)
2. Owner - Who you plan to have work on this task.
3. Status - So you know if your partner is finished or actively working on this or hasn't started.
4. Initial Estimate - What's your best guess on time for this? If you have a task that is large that's fine but it's a good indication that you will need to split this up into multiple tasks on the week you decide to work on it. You won't change this after your initial design document is created.
5. Expected Time - Use your previous teams multiplier to get a # hours for this.
6. Week#	- Which week is this planned for? You can turn on week numbers in most calendars and use this for planning.
7. Actual Time - You'll record this as you finish tasks.
8. User Story ID(s) - You'll have [user stories](https://www.atlassian.com/agile/project-management/user-stories) in your design document with identifiers you can reference here. 
9. Notes - Any other stuff you want to put in to help coordinate on tasks.

: .notice}
Each week we have a little less than 4 hours of class time. Given other interruptions and activities, if you schedule more than 3 hours pp (per person) for a week you can expect you'll need to work outside of regular class hours on it.

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

### Detailed Schedule

Revise your weekly goals with a new Task schedule that includes at least 3-5 subtasks for each week.

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

## Design Document Details - Phase 3

The following section includes detailed design document (Something every engineer will spend a lot of time on. Often the more time spent here the less time it takes to get the project work complete as you will save time by avoiding creating project elements that you may just have to throw out or redo)

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

---

### Important Algorithms/Functionality

Clearly documenting key algorithms is essential for ensuring a well-structured and efficient implementation of your project. This section should highlight any complex or critical algorithms that will be developed, such as game loops, AI decision-making, pathfinding, data processing, or physics simulations.  

**Why is this important?**  
- It helps identify potential challenges early, allowing for better planning and problem-solving before coding begins.  
- Ensures consistency in implementation, especially when working in a team, by providing a shared understanding of how key functionalities will operate.  
- Serves as a reference throughout development, reducing confusion and making debugging more efficient.  
- Helps prevent scope creep by defining the complexity of features in advance.  

**How detailed should this section be?**  
- Provide a high-level explanation of what the algorithm does and why it’s needed.  
- Include a brief outline of the logic or steps involved (pseudocode or flowcharts can be useful but should remain concise).  
- If applicable, mention key considerations like efficiency, potential bottlenecks, or alternative approaches.  
- Avoid excessive detail—this is not a full implementation but rather a roadmap for development.  

For example:  
**Example: AI Pathfinding**  
_The AI will use A* pathfinding to navigate around obstacles. The algorithm will work by evaluating possible movement nodes based on a heuristic function (estimated distance to the goal) and the actual movement cost. This ensures the AI finds the shortest path efficiently. We will precompute walkable areas and optimize performance by limiting path recalculations._  

This level of detail provides enough guidance without overwhelming the design document with unnecessary complexity.

