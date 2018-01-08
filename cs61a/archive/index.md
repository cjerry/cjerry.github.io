---
layout: page
title: Resources from Past Semesters
category: cs61a
---

### Spring 2016

| \# | Description                | Downloads |
|:---|:---------------------------|:----------|{% for r in site.data.cs61a.sp16.resources %}
| {{ r.number }} | {{ r.description }} | {% for d in r.downloads %} <a href="{{ d.link }}" class="btn btn-raised btn-default">{{ d.name }}</a>{% endfor %} {% endfor %}
{: .table .table-striped .table-hover #resources}

### Fall 2016

| \# | Description                | Downloads |
|:---|:---------------------------|:----------|{% for r in site.data.cs61a.fa16.resources %}
| {{ r.number }} | {{ r.description }} | {% for d in r.downloads %} <a href="{{ d.link }}" class="btn btn-raised btn-default">{{ d.name }}</a>{% endfor %} {% endfor %}
{: .table .table-striped .table-hover #resources}

### Spring 2017

| \# | Description                | Downloads |
|:---|:---------------------------|:----------|{% for r in site.data.cs61a.sp17.resources %}
| {{ r.number }} | {{ r.description }} | {% for d in r.downloads %} <a href="{{ d.link }}" class="btn btn-raised btn-default">{{ d.name }}</a>{% endfor %} {% endfor %}
{: .table .table-striped .table-hover #resources}

### Fall 2017

| \# | Description                | Downloads |
|:---|:---------------------------|:----------|{% for r in site.data.cs61a.fa17.resources %}
| {{ r.number }} | {{ r.description }} | {% for d in r.downloads %} <a href="{{ d.link }}" class="btn btn-raised btn-default">{{ d.name }}</a>{% endfor %} {% endfor %}
{: .table .table-striped .table-hover #resources}
