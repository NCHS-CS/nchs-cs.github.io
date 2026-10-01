---
layout: custom_default
title: "Java"
permalink: /faq/java/
nav_exclude: true
search_exclude: true
---

## Remove Redundant Launch Configurations

Every time you hit the "play" button on a java file VS code creates a new project name specific to the computer you are on. You get a message that the project name is not a valid project if you try and run the configuration from Run and Debug too:

(Insert photo here)

Edit your launch.json and simply remove the **projectName** setting; it's not necessary.

## Coding Style Guidelines

As we dive into Java development, we will be adhering to the [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html). We could have picked guidelines from other large companies to follow but this one was the most popular in the search results right now. This guide isn't just about making code "look pretty"; it is an industry standard for creating professional, maintainable, and readable software. By following these rules, you ensure that your code is "in Style," covering everything from naming conventions to how we handle braces and imports.

### Why Use a Coding Guide?

If you're wondering why we don't just let everyone code their own way, here are five key reasons:

- **Readability**: Code is read much more often than it is written. A consistent style allows team members (and your instructors) to understand your logic at a glance without being distracted by unusual formatting.
- **Maintainability**: Standardized code is easier to debug and update. When everyone follows the same rules, "ownership" of the code shifts from the individual to the team.
- **Reduced Cognitive Load**: You shouldn't have to spend brainpower deciding where to put a curly brace. A style guide makes these decisions for you, letting you focus entirely on solving the actual problem.
- **Error Prevention**: Rules like always using braces for if and else blocks help prevent common logic bugs that occur when code is modified later.
- **Professionalism**: Learning to follow a style guide prepares you for the real world. Almost every major tech company enforces a specific style to ensure high-quality software across thousands of developers.

### Tooling: Automated Formatting

To make following these rules effortless, we will use an automated formatter. This ensures your code is corrected every time you save.

#### Install the Extension

1. Open **VS Code**.
2. Go to the **Extensions** view (click the square icon on the left or press `Ctrl+Shift+X`)
3. Search for and install: `josevseb.google-java-format-for-vs-code`.

#### Configure Settings

To ensure the extension works correctly, update your workspace settings. Create or open the `.vscode/settings.json` file in your project folder and add the following configuration to the existing configuration there.

```json
{
  "java.format.settings.url": "https://raw.githubusercontent.com/google/styleguide/gh-pages/eclipse-java-google-style.xml",
  "java.format.settings.profile": "GoogleStyle",
  "[java]": {
    "editor.defaultFormatter": "josevseb.google-java-format-for-vs-code",
    "editor.formatOnSave": true,
    "editor.insertSpaces": true,
    "editor.tabSize": 2
  }
}
```

### Applying Style to an Existing Project

If you already have a project full of code, you will need to open every file manually to fix the formatting. Open each file and save the file to trigger an update in formatting.

#### Commit the Changes

Once the formatter has touched your files, your Source Control tab will show several modified files. To keep your history clean, commit these as a single "style update":

1. Go to the **Source Control** tab (the branch icon on the left).
2. Stage all changes by clicking the **+** (plus) icon next to "Changes".
3. In the message box, type: `style: apply google-java-format to project`
4. Click **Commit**.

By committing formatting changes separately from logic changes, you make it much easier for others to review your "real" code work later!

## Running Java Apps Standalone (jar files)

### Create your JAR

1. Go to visual studio
2. Press `CTRL+SHIFT+P`
3. Type "export jar"
4. Select your "Main" class (whatever your main is in)

![Jar File Image](assets/images/faq/export-jar.png)

Your "jar" file is created in your root folder

You shouldn't need add additional javafx libraries to your jar files for other students to be able to run it because we have the Zulu FX SDK installed on school computers to support all the FX libraries.

### Test your JAR

#### If you are using codespaces

Download from codespaces to your local computer and run the jar from there.

#### If you are using visual studio

**NOTE**: To test you should copy your jar file to a different location (otherwise it still has access to your other files, which it won't when you copy and share it).

### Run a JAR file

Test out running it with these steps to run someone else's "jar" file:

1. Go to the command prompt: (You can right click in explorer and select to Open in Terminal)
2. Type `java -jar <filename.jar>`

For example:
```
java -jar myfungame.jar
```

### Common Gotchas

**NOTE**: You need to change image reading (or any other "file" access) to the following API instead:

```java
BufferedImage img = ImageIO.read(getClass().getResourceAsStream("/path/img.png"));
```

You can't use exists or other direct File access (except for things like save game files etc that you truly want as files on the destination computer).

## How to Create and View Javadocs

Javadocs are required for most homework assignments. They are an industry standard practice for Java coding and often at most companies you will be required to have sufficient Javadoc commenting in place for the work you do to be accepted. So for this course we will make sure we get into the practice of always creating our javadocs for each project.

### Commenting your Code for Javadoc

The first step you must take is to include javadoc comments in your code. A javadoc comment begins with `/**` and ends with `*/`. At a minimum your javadoc comments should include a description of each method, the parameters (@params) and any return parameter (@return) described - typically with a single line comment. You may use html markup such as `<a>` or `<p>` tags in the example below, but is not required. The items in bold below are required for most comments. It's not required to comment more details than necessary (e.g. for a getter or setter, the function is obvious so often you may skip the description).

```java
/**
 * Returns an Image object that can then be painted on the screen.
 * The url argument must specify an absolute {@link URL}.
 * The name argument is a specifier that is relative to the url argument.
 * <p>
 * This method always returns immediately, whether or not the
 * image exists. When this applet attempts to draw the image on
 * the screen, the data will be loaded. The graphics primitives
 * that draw the image will incrementally paint on the screen.
 *
 * @param url an absolute URL giving the base location of the image
 * @param name the location of the image, relative to the url argument
 * @return the image at the specified URL
 * @throws Exception any exception that may be thrown by this method
 */
```

See this [guide](https://www3.cs.stonybrook.edu/~cse214/Javadoc.htm) for a beginners guide to the documentation on javadoc parameters and [the full javadoc 23 specification](https://docs.oracle.com/en/java/javase/23/javadoc/).

### VS Code Tools to Help

You may install VS Code tools to help with your documentation. The javadoc tool helps you out by putting javadoc comments (stubs) for your public methods - you'll still need to fill in the details of the methods.

#### Building the Javadocs

**Standard Java**

**Note**: This will not work for Java FX projects (see section below)

To build javadocs you must run a command to export/create the javadoc html files from your comments. The best way to create your javadocs is just to run the javadoc command on the terminal/command line directly like this (Note; you must be in the parent directory of all of your java files)

**For linux/codespaces:**
```bash
javadoc -d docs $(find . -name "*.java")
```

**For windows/VS Code:**
```powershell
javadoc -d docs (Get-ChildItem -Recurse -Filter *.java).FullName
```

This will likely generate a number of errors/warnings. You should go through these and fix as many as you can to make sure you've fully commented on your project.

**Java FX**

For Java FX we have set up a build task to create javadocs on most projects. You can run the task to build your javadocs with `CTRL-SHIFT-B` or `CTRL-P` + "Run Build Task" (this is only set up for our specific github classroom assignment). After running you should see a docs folder.

#### Downloading and Viewing the Javadocs

**From VS Code/Codespaces:**
Install the following extension

![Live Preview Extension](assets/images/faq/live-preview.png)

After you install an HTML preview extension you can right click on the `docs/index.html` file and "Open Preview". Note that in codespaces you will need to reload the window for it to work the first time.
![Live Preview Show Preview](assets/images/faq/show-preview.png)

**For codespaces**: You may also download the files from your codespace to your local computer. Right click on the "docs" folder and select to download that directory. You'll get all the files downloaded locally (likely to your "Downloads" folder). You don't need to do this if you are working in windows locally with VS code.

Once you have the files on your computer you can view the files locally. Find the location of your index.html file by right clicking on the file in the toolbar and selecting "Show in Explorer" (Or if you downloaded the files just find them directly). From there you can just double click the **index.html** file to open the javadoc content → confirm that all your expected comments show up including the class comments and public method comments.

## PMD

https://pmd.github.io/

### About PMD

PMD is an extensible multilanguage static code analyzer. It finds common programming flaws like unused variables, empty catch blocks, unnecessary object creation, and so forth. It's mainly concerned with Java and Apex, but supports 16 other languages. It comes with 400+ built-in rules. It can be extended with custom rules. It uses JavaCC and Antlr to parse source files into abstract syntax trees (AST) and runs rules against them to find violations. Rules can be written in Java or using a XPath query.

Currently, PMD supports Java, JavaScript, Salesforce.com Apex and Visualforce, Kotlin, Swift, Modelica, PL/SQL, Apache Velocity, JSP, WSDL, Maven POM, HTML, XML and XSL. Scala is supported, but there are currently no Scala rules available.

Additionally, it includes CPD, the copy-paste-detector. CPD finds duplicated code in many languages including C, C++, C#, Java, JavaScript, Kotlin, Python, Ruby, and others.

### Main PMD Issues

Following are the main metrics that I use to assess class design and modularity. I do look at other metrics as well but these are the main ones that would affect your grade the most.

| Metric | Why it matters for your Rubric |
| --- | --- |
| `GodClass` | **Critical**. This is the #1 enemy of modularity. A "God Class" knows and does too much. If this number is anything above 0, you have a class that violates the Single Responsibility Principle. Fix this first. |
| `CyclomaticComplexity` | **Stability**. This measures how many paths exist through your code. High numbers = "spaghetti code" that is impossible to unit test effectively. This directly tanks your stability score. |
| `TooManyMethods` | **Modularity**. If a class has too many methods, it's not modular—it's bloated. This is often a symptom of failing to break a class down into smaller, focused helpers. |
| `DataClass` | **Design**. A Data Class is just a container for data with no real behavior (just getters/setters). In good OOD, objects should do things, not just hold things. |

### Rules Configuration

Here are the rules I am using in 2025 for reviewing the final projects:

```xml
<?xml version="1.0"?>
<ruleset name="Custom PMD Rules" xmlns="http://pmd.sourceforge.net/ruleset/2.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://pmd.sourceforge.net/ruleset/2.0.0 https://pmd.sourceforge.io/ruleset_2_0_0.xsd">

    <description>
        Custom ruleset for code metrics and Javadoc checks
    </description>

    <rule ref="category/java/design.xml/NPathComplexity"/>
    <rule ref="category/java/design.xml/CyclomaticComplexity"/>
    <rule ref="category/java/design.xml/TooManyFields"/>
    <rule ref="category/java/design.xml/TooManyMethods"/>
    <rule ref="category/java/design.xml/GodClass"/>
    <rule ref="category/java/design.xml/DataClass"/>

    <!-- Documentation rules for Javadoc comments -->
    <rule ref="category/java/documentation.xml/CommentRequired">
        <properties>
            <property name="classCommentRequirement" value="required"/>
            <property name="fieldCommentRequirement" value="ignored"/>
            <property name="protectedMethodCommentRequirement" value="ignored"/>
            <!-- This is set required in grading but is for teacher info only -->
            <property name="publicMethodCommentRequirement" value="required"/>
        </properties>
    </rule>
</ruleset>
```

[Download this file: rules.xml](https://github.com/NCHS-CS/nchs-cs.github.io/raw/main/faq.md)

### How to Run at School

1. Save the above rules.xml file to your project.

2. Download and extract the PMD files for windows to your computer (the rules above are using PMD version 7.24.0 but later versions should work too). You must use the following **powershell** for this download and it saves your files to your Downloads folder.

```powershell
Invoke-WebRequest -Uri https://github.com/pmd/pmd/releases/download/pmd_releases%2F7.24.0/pmd-dist-7.24.0-bin.zip -OutFile $env:USERPROFILE\Downloads\pmd.zip
```

3. Now run the following example command (note you'll need to replace the path for where your unzipped pmd is). You'll need to run this from a command prompt (not powershell) otherwise the window will come up and disappear immediately.

```bash
# Run from your project folder
"C:\Users\jrukman\Downloads\pmd\pmd-bin-7.24.0\bin\pmd" check -d .\src\main -R rules.xml -r pmd_results.txt
```