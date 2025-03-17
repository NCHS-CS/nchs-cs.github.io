---
layout: default
parent: IDP
title: Discovery
nav_order: 1
---

## Overview

You will deliver the following:

* A Google Document (described below). The main goal of this document is to create the "context and scope" of what you are answering. What is your "research topic" in 3 bullet questions.
* Submit to GitHub your folder of raw_data (or links to a Google Folder if over 1GB).  
* Target Challenge Goals

You do not need to have any code written yet, but you may want to use some code to help you learn about the data. For example, you may want to print out the columns or get some statistical information about the data using code.  

You can use Excel or other tools to view the data.  

Things NOT necessary for this deliverable:  

* web scraping  
* data clean up  
* unit testing  
* plots  
* report  
* presentation  

## Document Purpose 

It is a frequent student behavior to dive into a research project without fully understanding what data is available and challenges ahead. This deliverable is to assure that the student has the necessary data and has the understanding of the pending challenges.  

The Discovery Document's purpose is to:  

1. Illustrate that you have found **appropriate data**. The data must be:
 * Large enough (500 lines or more)  
 * Available for download (CSV file format)   
 * Has the necessary information to successfully conduct your research  
2. Present a few **questions** (about the data)  
 * This is the focal point of your research  
 * Express why your questions are of interest (motivation)  
3. Illustrate that you **understand the data**:  
 * Know how the data was sourced
 * Know how the data may be limited (reliability, accuracy, completeness, messy)  
 * Identify & explain relevant columns: names, format, units, ranges, cleanliness  
 * Issues or challenges in working with the data (e.g. too big, non-standard key formatting making cross-referencing difficult, missing information, too broad or narrow)  
4. Establish **Challenge Goals**:  
 * While this may change, it is important to consider what challenges you intend to take on. See below for more details.  


## Document Sections

Your document will have the following sections:  

* **Title and Author(s).** The title should reflect your specific research questions (not just “CSE 163 Project”).  
* **Summary of research questions.** Give a numbered list of 3 or more research questions and a brief description of what you will investigate. Each research question should have 1–3 sentences and propose something that can be definitively answered, not just a general topic or area of investigation.  
* **Motivation.** In one or two paragraphs, expand on your research questions by providing context about why you care, or why anyone should care. How does knowing the answers affect the world or our understanding of it?  
* **Dataset.** This is the MOST important part of this document. (more details below) You will do the following. 
  * Describe the real, existing dataset that you will use, including exact URLs.  
  * You may not use a dataset that has been used in a previous CSE 163 assignment, AP Research work, or competition (TSA, FBLA).  
  * The data must be real — neither you nor someone else may make up the data.  
  * The data must be large enough (500 lines or more).  
* **[Challenge goals](challenges)** 
  * Select at least 2 challenge goals that you are planning to meet.  
  * Justify why you think this challenge goal is a good fit for your project.  

## Dataset Section

You need to list out all your datasets, sources, caveats, important columns, data values, and relevent information. This section should contain multiple tables or other easy to read formats. While you may copy some information from your datasource, it is critical that you understand the data.

You should:  

1. List all datasets  
2. List important columns from each dataset  
3. Examine challenges with the data  

### Dataset Example 

<details markdown="1"><br>

`Here is a short example. Your dataset documentation is likely to be longer!`

**Datasets Summary:**

All the data can be found on this [Fake link to Google Folder](https://support.google.com/drive/answer/7166529?hl=en).  

This shows that we are using only three datasets.

|DataSet|Source|Size|Notes|
|-------|------|----|-----|
|Report_Card_Graduation_2018-19.csv| Your link must be a deep link that goes to the data like this:<br> [catalog.data.gov](https://catalog.data.gov/dataset/report-card-graduation-2018-19/resource/7ecfc182-8237-4c5f-a2d1-14377a249e4e)| 81,267 |Graduation information for washington state.|
|teachers_2014.csv|<a href="https://data.gov">data.gov</a>|48x10|Contains full-time teacher pay and benefits by school district|
|geo_wa_counties.json|[Natural Earth](https://www.naturalearthdata.com/downloads/50m-cultural-vectors/)|NA|Contains geometry data for the counties in Washington state|

**Graduation_2018.csv**  
This dataset contains graduation rates of high school students in the year 2018 only. The rates are by race and school district.

|Column|Description|
|------|-----------|
|DistrictName|string: The name of the school district|
|County|string: A list of county names that the school district is in. A district may span multiple counties|
|StudentGroup|string: The race of the students in this row. Races included are [`White`, `Hispanic/ Latino of any race(s)`, `Black/ African American`, `Asian`...]|
|GraduationRate|double: The percent of students of this race that graduated high school in four years.|

**Teachers_2014.csv**

This dataset contains salary & benefits information for full-time teachers by school district in the year 2014.  

|Column|Description|
|------|-----------|
|DNUM|integer: The number for the school district. For example, Northshore is 417.|
|PERV|integer: The number of personal vacation days that a teacher gets per year.|
|BASE|double: The Base salary of a full-time teacher.|
|HRPAY|double: The additional pay given to a teacher beyond their base salary for simply being a teacher.|
|SPST|double: The average additional pay (stipend) given to a teacher for coaching a sport.|
|APST|double: The additional pay (stipend) given to an AP Teacher.|

**Data Challenges**  
The datasets come from different years because we could not get accurate data for both sets during the same year. If we correlate the data across different years, we are not representing the true data. We need to highlight this!  

While the teacher pay dataset is extensive, there is no single column that gives a simple summary how much an "average" teacher makes. This is because we don't know how many teachers receive certain types of stipends.   

It would be valuable to track the changes of graduation rates over time as related to the changes of salary over time. I will be doing some extra work to find more datasets to allow graphing over time.  

The School Districts don't map easily across datasets. One dataset uses a number while the other uses a string. I may need to manually create a mapping dataset that allows me to join the two together.  

It would be good to geospatially plot graduation rates, but the geometry data that I've found so far is only by county while the school districts can span many counties. I may have to manually pick, or randomly guess, which county a school district mostly represents. Or, perhaps I can locate geometry for the school districts themselves. 

</details>

## Sources of Data
The best approach is to start with a problem that interests you, and then look for data. However, if you are creative and critical, you can go the other way around: start with the data and then identify areas of research.    

There are MANY sources of data and you can seek out anything and everything you can get your hands on. Google will be your friend for finding a dataset.Here are some sources for you to explore:  

### Sample datasets you may use for this project

2. [UCI Machine Learning Repository](http://archive.ics.uci.edu/ml/) Classic datasets for machine learning (e.g., Iris, Wine Quality). Structured and reliable.
3. [Google Dataset Search](https://datasetsearch.research.google.com/): A search engine for datasets from various sources. Helps students find project-specific data.
4. [Data.gov](https://data.gov/): U.S. government open data (e.g., education, climate). Authoritative and real-world focused.
5. [World Bank Data Catalog](http://data.worldbank.org/data-catalog): Global development data (e.g., GDP, health stats). Great for economic or social analyses.
6. [NASA Open Data Portal](https://data.nasa.gov/browse): Space, climate, and earth science data. Engaging for science enthusiasts.
7. [FiveThirtyEight](https://data.fivethirtyeight.com/): Datasets from articles on politics, sports, etc. Accessible and student-friendly.
8. [Pew Research Center](https://www.pewresearch.org/datasets/): Public opinion and demographic data. Useful for social science projects.
9. [UNdata](https://data.un.org/datamartinfo.aspx): United Nations stats on global issues (e.g., poverty, education). Broad and impactful.
10. [IMDb Datasets](https://developer.imdb.com/non-commercial-datasets/): Movie and entertainment data. Fun for media-related projects.
1. Kaggle Datasets (`Blocked at NCHS`): Thousands of datasets across domains (e.g., health, sports) with example notebooks. Ideal for beginners.

### Local Bonus:

* [Data.seattle.gov](https://data.seattle.gov) for Seattle open government data or [data.wa.gov](https://data.wa.gov): Seattle or Washington state data (e.g., transit, schools). Relevant for North Creek students.

* A variety of data sets are available from [UW Libraries](http://guides.lib.washington.edu/content.php?pid=135867&sid=1165959)  

### Other datasets you may find usueful

* [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets) - large variety of maintained data sets  

* [Baron Schwartz’s list of datasets](http://www.mysqlperformanceblog.com/2011/02/01/sample-datasets-for-benchmarking-and-testing/). Some of these are themselves rich lists of datasets, such as the Amazon AWS public data sets.  

* [Reddit Data Sets](https://www.reddit.com/r/datasets/)  

* [An archive of datasets distributed with the R statistical language](https://vincentarelbundock.github.io/Rdatasets/)

* [Office for National Statistics (UK)](http://www.statistics.gov.uk/default.asp) a repository of detailed statistics about Great Britain and Northern Ireland  

* [CDC NCHS Data](https://data.cdc.gov/) - CDC’s National Center for Health Statistics Data Access  
