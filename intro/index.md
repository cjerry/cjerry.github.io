---
layout: minimal
title: Coding Intro
---

<div class="container-fluid">


### **Me:** {{ site.owner }} ([jerryjrchen@icloud.com](<mailto:jerryjrchen@icloud.com>))

Welcome to the course webpage!

## Resources

| Day \# | Description                | Downloads |
|:-------|:---------------------------|:----------|{% for r in site.data.intro.su18.resources %}
| {{ r.number }} | {{ r.description }} | {% for d in r.downloads %} <a href="{{ d.link }}" class="btn btn-raised btn-default">{{ d.name }}</a>{% endfor %} {% endfor %}
{: .table .table-striped .table-hover #resources}
