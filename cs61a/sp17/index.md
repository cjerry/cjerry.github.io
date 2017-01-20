---
layout: page
title: CS 61A Spring 2017
permalink: cs61a/
category: cs61a
tag: current
---

<div class="jumbotron">

**TA:** {{ site.owner }}

**Email:** [{{ site.email }}](<mailto:{{ site.email }}>)
(Please include "CS 61A" in the subject line.)

<a href="http://tiny.cc/jerrydisc" class="btn btn-raised btn-success">Discussion
Attendance</a>
<!--<a href="http://bit.do/jerrylabfb" class="btn btn-raised btn-warning">Lab-->
<!--Feedback</a>-->
<!--<a href="http://bit.do/jerrydiscfb" class="btn btn-raised btn-warning">Discussion-->
<!--Feedback</a>-->
</div>

{% for n in site.data.cs61a.sp17.notes %}

### {{ n.date }}


{% for t in n.content %}
<p class="indent-1">
  {{ t.text }}
</p>
{% endfor %}

{% endfor %}

<hr>

## Discussion Resources

| \# | Description                | Downloads |
|:---|:---------------------------|:----------|{% for r in site.data.cs61a.sp17.resources %}
| {{ r.number }} | {{ r.description }} | {% for d in r.downloads %} <a href="{{ d.link }}" class="btn btn-raised btn-default">{{ d.name }}</a>{% endfor %} {% endfor %}
{: .table .table-striped .table-hover #resources}

## Teaching Locations/Hours

| Type           | Time           | Location           |
|:---------------|:---------------|:-------------------|{% for loc in site.data.cs61a.sp17.locations %}
| {{ loc.type }} | {{ loc.time }} | {{ loc.location }} |{% endfor %}
{: .table .table-hover #resources}
