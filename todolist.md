
- idp/static - lots of unused stuff - could be cleared out and just keep a few of the images needed.

- update ../../machine-learning/regression-distance for challenges
- add / update rubrics

Rubric todo for APt:

Testing Example Rubric:


| Criteria | Developing | Proficient | Exemplary |
| :--- | :--- | :--- | :--- |
| **Test Diversity** | Only 1 type of test (e.g., only Smoke Tests or only Physics). | Covers 2-3 distinct categories (e.g., Smoke + Logic + Interaction). | Covers **all 4 categories**: Smoke, Logic, Interaction, and Simulated Input. |
| **Assertion Quality** | Tests run but use "weak" assertions (e.g., just checking if an object is not null). | Tests use specific assertions (e.g., `assertEquals` for exact coordinates or health). | Uses "Negative Testing" (asserting things *don't* happen, like a player *not* moving when hitting a wall). |
| **Logic Coverage** | Only tests the "Happy Path" (everything working perfectly). | Tests core mechanics like gravity, scoring, and basic collisions. | Tests **Edge Cases** (e.g., jumping at the very edge of a platform, taking damage at 0 health, or boundary limits). |
| **Test Quantity** | Fewer than 8 tests total. | 10–15 functional tests total. | **20+ functional tests** total, covering multiple game states/entities. |
| **Reliability** | Tests are "flaky" (sometimes pass, sometimes fail depending on computer speed). | Tests are stable but require manual setup/cleanup. | Tests use `interact()` correctly and include `setUp/tearDown` for a clean slate every time. |

The following rubrics break out the assessment by different areas. 

## <a name='Updates'></a>Updates (10 Pts)

Your updates will be graded out of 10 points. You must submit your updated Design Document to match your finished project.

This update should include updates to your design diagrams and any changes on the algorithms that you actually ended up implementing. See the [Final Updates](doc_updates) page for more information.



## <a name='Functionality50'></a>Functionality (40 Pts)

{: .warning }
If you copy code (even small amounts) from the internet, from AI or other sources, you **MUST** attribute the origin of that code or you will receive an overall penalty on your grade. (Add the attribution links to your README.md file)

| **Criteria**               | **Exemplary (100%)** | **Satisfactory (80%)** | **Not Yet (60%)** | **Unassessable (0%)** |
|---------------------------|----------------------|------------------------|-------------------|------------------|
| **Quality (Bugs)** | No major bugs or glitches. Program does not crash. All basic use cases work as advertised. Only minor bugs present. | Few major bugs. Program does not crash. Behavior is mostly correct. | Some major bugs. Program seldom crashes. | Major bugs prevalent. Important behavior malfunctions. |
| **Polish/User Design(UI)** | Appearance is clean and professional. No visual or audio bugs. Great attention to detail and creativity. | Appearance is mostly well-organized and neat. No usage issues. Minor UI glitches. | Appearance is somewhat organized. Usage is somewhat difficult. | Appearance is poor. Usage is difficult. |
| **Quantity (Features)** | Completed all prototype features and then some. Code demonstrates many hours of focused work (6+ hours per week). | Completed all prototype features. Appropriate number of hours is evident (5 hrs/week). | Completed some prototype features. Shows a lack of effort and dedication (3-4 hrs/week). | A long way from appropriate effort and completion. |
| **Difficulty** | Difficult technology, algorithms, UI, and/or library integration. | Appropriate difficulty. | Lack of apparent or significant learning. | No demonstration of learning. |
| **Data Structures** | Appropriate in all cases. | Mostly good. | Some poor choices. | Poor choices abound. |
| **Class Design** | Strong use of all: abstraction, encapsulation, inheritance, polymorphism. | Use of inheritance and encapsulation is good. Reasonable set of classes. | Classes used, but not encapsulated well. Over or under-designed. | Few classes. Bad design. |

## <a name='Presentation'></a>Presentation (10 Pts)

You will be peer reviewed for your presentation but overall grade for the presentation will be assessed as follows below.

If you are not present on your presentation day you may present on the first day back to class for full credit but your partner will still need to present separately on the presentation day.


| **Criteria**               | **Exemplary (100%)** | **Satisfactory (80%)** | **Not Yet (60%)** | **Unassessable (0%)** |
|---------------------------|----------------------|------------------------|-------------------|------------------|
| **Formal Presentation** | Thorough presentation of project: functionality, learnings, and experience. Professional slides and/or presentation. | Demonstrates functionality and some insight into the development experience. No slides necessary. Reasonable quality of presentation. | Falls short of sharing functionality or experience. Presentation lacks quantity or quality. | Missing or woefully disorganized, lacking details. |

---
