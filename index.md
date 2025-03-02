# NCHS-CS Main Page

## IDP

### IDP Final Project

[Main Page](final-project)

---
layout: default
title: Table of Contents
---

# Documentation

{% for doc in site.final-project %}
  - [{{ doc.title | default: doc.path }}]({{ doc.url }})
{% endfor %}

# Guides

{% for guide in site.guides %}
  - [{{ guide.title | default: guide.path }}]({{ guide.url }})
{% endfor %}