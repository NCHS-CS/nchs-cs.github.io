# <i class="fas fa-layer-group fa-fw"></i> Final Project - Tips

This section will provide helpful tips on how to create a good projects

## Table of Contents

```{tableofcontents}

```

---
layout: default
title: Table of Contents
---

# Table of Contents

{% for file in site.pages %}
  {% if file.path contains '.md' and file.path != 'index.md' %}
  - [{{ file.title | default: file.path }}]({{ file.url }})
  {% endif %}
{% endfor %}