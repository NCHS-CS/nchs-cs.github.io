---
layout: bare
title: "PMD"
permalink: /faq/pmd/
nav_exclude: true
search_exclude: true
---

## PMD

https://pmd.github.io/

### About PMD

PMD is an extensible multilanguage static code analyzer. It finds common programming flaws like unused variables, empty catch blocks, unnecessary object creation, and so forth. It's mainly concerned with Java and Apex, but supports 16 other languages. It comes with 400+ built-in rules. It can be extended with custom rules. It uses JavaCC and Antlr to parse source files into abstract syntax trees (AST) and runs rules against them to find violations. Rules can be written in Java or using a XPath query.

Currently, PMD supports Java, JavaScript, Salesforce.com Apex and Visualforce, Kotlin, Swift, Modelica, PL/SQL, Apache Velocity, JSP, WSDL, Maven POM, HTML, XML and XSL. Scala is supported, but there are currently no Scala rules available.

Additionally, it includes CPD, the copy-paste-detector. CPD finds duplicated code in Coco, C/C++, C#, CSS, Dart, Fortran, Gherkin, Go, Groovy, HTML, Java, JavaScript, JSP, Julia, Kotlin, Lua, Matlab, Modelica, Objective-C, Perl, PHP, PL/SQL, Python, Ruby, Rust, Salesforce.com Apex and Visualforce, Scala, Swift, T-SQL, Typescript, Apache Velocity, WSDL, XML and XSL.

### Main PMD Issues

Following are the main metrics that I use to assess class design and modularity. I do look at other metrics as well but these are the main ones that would affect your grade the most.

| Metric | Why it matters for your Rubric |
| --- | --- |
| `GodClass` | **Critical**. This is the #1 enemy of modularity. A "God Class" knows and does too much. If this number is anything above 0, you have a class that violates the Single Responsibility Principle. Fix this first. |
| `CyclomaticComplexity` | **Stability**. This measures how many paths exist through your code. High numbers = "spaghetti code" that is impossible to unit test effectively. This directly tanks your stability score. |
| `TooManyMethods` | **Modularity**. If a class has too many methods, it's not modular—it's bloated. This is often a symptom of failing to break a class down into smaller, focused helpers. |
| `DataClass` | **Design**. A Data Class is just a container for data with no real behavior (just getters/setters). In good OOD, objects should do things, not just hold things. |

### Rules Configuration

### How to Run at School

1. Save the rules.xml file [here](https://drive.google.com/open?id=12B00NeJ_HBTqrlu587H5YTfigfRKri-X) to your project.

2. Download the PMD files for windows to your computer (the rules above are using PMD version 7.24.0 but later versions should work too). You must use the following **powershell** for this download and it saves your files to your Downloads folder.

    ```powershell
    Invoke-WebRequest -Uri https://github.com/pmd/pmd/releases/download/pmd_releases%2F7.28.0/pmd-dist-7.28.0-bin.zip -OutFile  $env:USERPROFILE\Downloads\pmd.zip

    Expand-Archive -Path "$env:USERPROFILE\Downloads\pmd.zip" -DestinationPath "$env:USERPROFILE\Desktop"

    [Environment]::SetEnvironmentVariable("Path", "$([Environment]::GetEnvironmentVariable('Path', 'User'));$env:USERPROFILE\Desktop\pmd-bin-7.28.0\bin", "User")
    ```

3. Now to get this to load into your environment restart VS code.
4. To Run pmd on your project you just need to run the following (assuming your code is all in the src\main folder. The results will be visible in a new file “pmd_results.txt” (you may check this into your project if you like). You may also save this to run-pmd.ps1 and run this command from the terminal each time to check your work.

```bash
# Run from your project folder
pmd check -d .\src\main -R rules.xml -r pmd_results.txt 
```