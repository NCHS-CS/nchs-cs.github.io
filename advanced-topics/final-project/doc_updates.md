---
layout: default_dl
parent: Design Document
title: Final Updates
nav_order: 13
---
# Final Updates

As you finish your project, you will create a functional specification document with these sections: `Updated Design`, `Final Features`, and `Lessons Learned`.

This document should be named `func_spec.md` and located in the root folder of your GitHub project.

## Updated Design

You **must** update your class diagram from [Phase 3](doc_phase3#diagrams) to reflect the actual classes, methods, and relationships in your final implementation of your project. 

You will place your original class diagram into the functional specification and call this section `Class Diagram: Original`.

Create a new section `Class Diagram: Final` and do the following:

  - Add any new classes you created during development
  - Remove classes that were planned but not implemented
  - Update method signatures that changed
  - Correct relationships/associations between classes

You may also opt to update and include other diagrams (ex: Sequence/Flow Chart Diagrams) you made in the project, but this is not required.

Add one additional section `Class Diagram: Reflection`. This section will detail what you have learned from the changes between the old class diagram and what you actually implemented. This section should detail what you will take into account and do next time when you create a design for your next project.

## Final Features

Create a table of your expected "core features" (the ones you created from the [Core Features tab in Phase 1](doc_phase1#project-scope--features) of your Design Document) and a second column of your actual features implemented. 

You may `optionally` include stretch features if you were able to implement those in the table as well.

Example:

| Expected Core Features | Actual Features Implemented |
|----------------------|---------------------------|
| User registration & login | ✅ Complete registration and secure login with password hashing |
| Basic ride request & acceptance | ✅ Implemented with real-time location updates |
| In-app payments & fare estimation | ⚠️ Partially implemented - fare estimation works but payment is mocked |
| Ride scheduling & multi-stop trips | ❌ Not implemented - ran out of time |
| Driver & passenger ratings | ✅ Full rating system with comment features added |
| Real-time traffic-based routing | ✅ Implemented using Google Maps API integration |
| Emergency SOS button | ✅ Added with direct police contact functionality |

_Note that there may be more rows in one column depending on your implemented features._

## Lessons Learned

Using your original "Learning Targets and Goals" section from [Phase 1](doc_phase1#learning-targets-and-challenge-goals), copy those to a new table. Add a second column that is a summary of reaching your learning goals. 

Add a section `Lessons Learned: Goals`

Example:

| Original Learning Targets/Goals | Actual Goals Achieved |
|-------------------------------|----------------------|
| Learn GPS and mapping APIs | Successfully integrated Google Maps API but discovered the complexity of handling location updates in real-time. Event-driven programming was essential for this functionality. |
| Master concurrent programming | Implemented multi-threading for background location tracking and ride matching. Learned that proper synchronization is crucial to avoid race conditions when updating shared ride data. |
| Develop secure authentication | Implemented secure password storage with bcrypt and token-based authentication. Discovered that security requires constant vigilance and that robust error handling is essential. |
| Learn payment gateway integration | Created a mock payment system but learned about PCI compliance requirements. Realized that third-party payment processors are the safer option for handling sensitive financial data. |
| Implement real-time data synchronization | Used Firebase for real-time updates between riders and drivers. Learned that designing proper data structures upfront is critical for efficient real-time applications. |

_Note that there may be more rows in one column depending on the number of lessons learned._

Add an additional section `Lessons Learned: Our Story`

Both you and your partner will write a paragraph on your individual learnings from this project. You should identify the key resources that were the most helpful to you along with any repeating struggles you overcame. Writing "I learnt to code an arcade game" will not suffice here. Consider working from these sample questions to get you started; but you can choose to answer different ones:

- What were some unexpected setbacks? Were you able to overcome them?
- Is there any skills or concepts you hope to continue developing?
- Were there issues with balancing your work across tasks? Did you have to pivot at some points?
