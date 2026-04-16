---
layout: default_dl
parent: Final Project
grand_parent: Advanced Topics
title: Rubrics
nav_order: 20
---

# Overview
{: .no_toc }

{: .notice }
There are three main rubric categories that are detailed in the following sections.

1. TOC
{:toc}

# Design Document (60)

## <a name='Rubric'></a>Phase 1 (20 pts)

| **Category**                           | **Excellent**                                                                                                                                                                                                                                                                                                                                                                                                              | **Standard**                                                                                                                                                                                                                                                     | **Poor**                                                                                                                                                                                                          | **Points** |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Project Description**                | Provides a clear, well-organized 2–4 paragraph overview. Thoroughly explains functionality so another developer could reasonably implement it. Clearly identifies and explains relevant JavaFX features used for graphical development.                                                                                                                                                                                    | Provides an overview but may lack clarity, detail, or organization. Functionality is somewhat understandable but missing key details. Mentions JavaFX features but explanation is limited.                                                                       | Overview is unclear, incomplete, or too brief. Functionality is vague or confusing. Little to no mention of JavaFX features.                                                                                      | 5          |
| **Features**                           | Clearly defines three feature levels (prototype, core, advanced). Features are realistic, achievable, and show strong understanding of iterative development. Clear progression between levels with meaningful distinctions. Prototype focuses on validation and essential functionality; core enhances usability and value; advanced meaningfully extends complexity.                                                     | Defines feature levels but distinctions may be unclear or uneven. Features are mostly realistic but may lack depth or clear progression. Some understanding of prototype vs. core functionality is demonstrated.                                                 | Feature levels are unclear, incomplete, unrealistic, or poorly distinguished. Little understanding of iterative development or feature progression.                                                               | 5          |
| **Purpose & Motivation**               | Clearly explains rationale for project choice. Articulates thoughtful learning objectives and personal or educational significance. Demonstrates meaningful reflection and intentionality.                                                                                                                                                                                                                                 | Provides general explanation of project choice and learning goals. Some reflection present but limited depth or clarity.                                                                                                                                         | Little or no explanation of rationale. Learning goals unclear or missing. Minimal reflection.                                                                                                                     | 3          |
| **Learning Targets & Challenge Goals** | Lists **at least three substantial learning targets** that are specific, measurable, and appropriately challenging. Targets go beyond basic functionality and include stretch goals (e.g., implementing advanced JavaFX features, optimizing performance, adding non-trivial algorithms, or extending beyond class examples). Clear success criteria are defined for each target so progress can be objectively evaluated. | Lists at least three learning targets that are mostly appropriate in scope. Targets include some level of challenge but focus primarily on core functionality rather than stretch goals. Measurability is present but success criteria may lack detail or rigor. | Fewer than three learning targets, or targets are vague, minimal, or easily achievable with little demonstrated challenge. Limited evidence of stretch or measurable growth. Success criteria unclear or missing. | 2          |
| **High Level Timeline**                | Clearly outlines 10–11 weeks with logical sequencing. Includes 7 well-defined development milestones that are demonstrable, measurable, and checkable each Friday. Proper formatting (no time estimates or individual assignments).                                                                                                                                                                                        | Timeline provided but sequencing or clarity may be uneven. Milestones are present but may lack specificity, measurability, or clarity. Minor formatting issues.                                                                                                  | Timeline incomplete, poorly organized, or missing milestones. Milestones not demonstrable or improperly formatted.                                                                                                | 5          |

##  <a name='Rubric'></a>Phase 2 (15 pts)


| **Category**               | **Criteria**                                                                         | **Points** |
|----------------------------|--------------------------------------------------------------------------------------|------------|
| **User Experience** | - Develop Wireflow.<br>- At least 5 different screen layouts<br>- Screen Layouts show connections and annotations to explain how transitions or changes are effected by mouse or keyboard input.<br>- Includes every possible screen for your prototype, core and stretch features<br>-You must show with coloring or a code which part of each screen is prototype, core and stretch. You will be graded that your wireflow can be `understood`. For this to be true it must be legible and descriptive so that someone could write the logic and code for your vision. | 10         |
| **Testing** | - Provided a test strategy (overview) for the project and detailed test cases for each test category for prototype, manual and automated testing. You must convince me that your program will behave as you expect by having sufficient details on the testing. For manual testing you provided some detailed steps on the tests you will run through. | 5 |


##  <a name='Rubric'></a>Phase 3 (25 pts)

| **Category**               | **Criteria**                                                                         | **Points** |
|----------------------------|--------------------------------------------------------------------------------------|------------|
| **Detailed Design**    | - Class Design & Data Structures are well-structured with appropriate attributes, methods with key parameters and return types.<br>- Explains how classes communicate, share data, and interact within the system.<br>- Includes a minimum of a class and sequence diagram.<br>- Satisfies requirements in the Detailed Design Template (design diagrams etc) | 15      |
| **Detailed Schedule (baseline)**    | - All weekly goals have a subset of at least 4 tasks that will be individually assigned and estimated (assignments not required)<br>- All tasks have reasonable initial estimates<br>- Initial estimates with multiplier fits within a reasonable range of a weeks work in class.<br>- Actual times can be recorded to calculate the teams velocity each week to adjust future work estimates. | 5      |
| **Algorithms** | - Clearly documents key algorithms (If your project has approval for no algorithms, your detailed design will be weighted with these points) | 5 |

# Project Completion (100 pts)

## Code Quality, Design and Testing (50 pts)

This will be evaluated on your project code complete date. You may still work on features and code after this date for your final presentation and class evaluation but that code will not be evaluated.

| Criteria | Exemplary | Proficient | Developing |
| :--- | :--- | :--- | :--- |
| **Project Complexity & Scope** | **High technical ambition**; project reflects a full semester of collaborative effort. Successfully integrates **complex algorithms** (e.g., custom Trees, Maps, Queues) or advanced JavaFX features. | **Appropriate difficulty** for a semester-long project. Features a functional, well-designed JavaFX GUI and "complex enough" logic to be achievable yet challenging. Demonstrates sustained learning over the term. | **Lack of significant learning** or technical difficulty. Project scope feels more like an individual or short-term assignment; lacks the "sophisticated" depth expected for this level of study. |
| **Testing Requirements** | **20+ functional tests** covering multiple categories such as Smoke, Logic, Interaction, and Simulated Input. Includes **Negative Testing** and edge cases. Code coverage for testing is 80% or greater. | 10–15 tests covering 2-3 categories. Tests core mechanics and the "Happy Path" with specific assertions. | Fewer than 10 tests; logic coverage is limited to basic use cases with weak assertions. |
| **Code Guidelines & Style** | 100% adherence to Java naming conventions. **All** external code (from AI or internet) is clearly attributed in the README. Code is highly readable (aka neatly formatted and sensible variable naming) with professional javadoc comments for all classes and public methods. | Follows standard Java style. Required javadoc comments and source attributions for external code are present. | Inconsistent style or naming; missing or incomplete attribution for external code snippets. |
| **Class Design, Modularity & Stability** | **Strong use of all: abstraction, encapsulation, inheritance, and polymorphism**. Uses optimal data structures and has **no major bugs or glitches**. Logic is highly modular. | Good use of inheritance and encapsulation. Reasonable set of classes and mostly appropriate data structure choices. Only minor bugs present. | Classes used but poorly encapsulated; logic is over or under-designed. Significant bugs or poor data structure choices impact performance. |

## Functional Specification (20 pts)

This rubric evaluates the final design artifacts, including the comparison of your original plan against the final product.

| Criteria | Exemplary | Proficient | Developing |
| :--- | :--- | :--- | :--- |
| **Updated Class Diagram** | Highly detailed and **accurate** diagram reflecting the final class structure, including all public attributes, methods, and relationships. | Accurate diagram of the final code, though it may lack some minor attributes or specific relationship types. | Diagram is outdated, missing classes, or does not match the final implementation of the code. |
| **Functional Table (Planned vs. Actual)** | **Comprehensive comparison table** that maps every original planned feature to its actual final state, including pivots and improvements. | Complete table showing planned vs. actual features, though some nuances of the "Actual" implementation may be brief. | Incomplete table; does not clearly show the relationship between the original plan and the final product. |
| **Learning Journal Summary** | A **minimum one-page summary** that connects specific code sections to weekly learnings and skills gained (e.g., Maps, Anonymous Classes, Trees). | One-page summary detailing general technical growth and weekly progress, but with fewer links to specific code. | Summary is less than a page or lacks specific examples of technical skills and experiences gained. |

## Presentation (30 pts)

There will be two sections to your presentation where you will be reviewed for completeness by the Teacher as well as a Peer assessment.

| Criteria | Exemplary | Proficient | Developing |
| :--- | :--- | :--- | :--- |
| **Content & Requirements** | Includes all 9 sections: **Introduction, Goals, Lessons Learned, Schedule Tracking, Biggest Changes, Challenges, Teamwork, Features, and Major Bugs**. | Includes most sections but may lack detail in areas like Schedule Tracking or Teamwork learnings. | Missing several key sections; fails to provide a complete picture of the project lifecycle. |
| **Demo & Feature Showcase** | Seamless demonstration of all final features. Clearly explains the "Biggest Changes" from the original plan and accounts for any **major bugs** still present. | Clear demonstration of core features. Mentions challenges and features but lacks depth on the evolution of the plan. | Demonstration is unorganized or buggy. Does not clearly showcase features or explain deviations from the plan. |
| **Learnings & Teamwork** | Deep reflection on **Lessons Learned** and **Teamwork**. Relates specific technical "ah-ha" moments to the development process and code. | Discusses general lessons and the teamwork experience with some specific examples. | Minimal insight into what was learned or how the team collaborated throughout the project. |
| **[Peer] Engagement & Delivery** | Presentation was captivating and highly professional. Peers felt fully engaged; slides were creative and easy to follow. | Presentation was clear and professional. Peers remained attentive and understood the project's purpose. | Presentation was difficult to follow or uninteresting. Peers struggled to stay engaged due to lack of clarity or preparation. |
| **[Peer] Perceived Effort & Completion** | Peers agree the project clearly reflects **6+ hours of work per week**. The app feels "complete" and "sophisticated" for a semester-long team project. | Project appears to meet the appropriate difficulty for the timeframe. Peers believe it shows consistent effort. | Project feels rushed or underscoped. Peers perceive a lack of dedication or effort compared to the semester timeframe. |
| **[Peer] Integrity & Originality** | Work is clearly "their own." Any AI or internet code was disclosed in the presentation. Team was able to answer all questions during Q&A. | Most work appears original. Attributions are present for external sources. Team shows a good understanding of the code's logic. | Peers suspect heavy use of AI or uncredited copying. Team struggles to explain how specific functions were implemented. |
| **[Peer] UI/UX & Polish** | The app's appearance is clean, professional, and creative. Peers found it intuitive to use with no visual or audio glitches. | Appearance is well-organized and neat. Minor UI glitches are present but do not hinder the user experience. | Appearance is poor or disorganized. Usage is difficult, and the interface lacks professional polish. |


# Ongoing

## <a name='Professionalism & Classwork'></a>Professionalism & Classwork

This section will be ongoing through the entire project lifecycle and count towards the final grade.

Both categories of professionalism and classwork will be graded as separated categories in the gradebook.

| **Criteria**               | **Exemplary (100%)** | **Satisfactory (80%)** | **Not Yet (60%)** | **Unassessable (0%)** |
|---------------------------|----------------------|------------------------|-------------------|------------------|
| **Classwork** | Clear achievements made during each demo. Clear plan for start of each sprint. Shared learning along with functionality. Tasklist is completely up to date. Class demos completed. | Some progress is demonstrated. Task List has some updates. | Progress is missing or too small. Worksheet is missing important information. | No progress is discernible. Class demos not completed. Worksheet is inadequate. |
| **Professionalism** | No instances of being off task. Asks for hints occasionally, independently researches, demonstrates problem-solving abilities. | 1 or 2 reminders needed to be on task. Needs help with difficult issues but demonstrates ability to debug and grow independently. | 3+ reminders to get back on task. Consistently unable to resolve (minor) issues without assistance. | Frequently off task. Cannot make progress without assistance. |
