---
layout: page
title: CS 61A Spring 2018
permalink: cs61a/
category: cs61a
tag: current
---

<div class="container-fluid">

### **TA:** {{ site.owner }} ([&#106;&#101;&#114;&#114;&#121;&#046;&#099;&#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117;](<mailto:&#106;&#101;&#114;&#114;&#121;&#046;&#099;&#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117;>))
(Please include "CS 61A" in the subject line of emails.)
<div class="jumbotron">

{% for n in site.data.cs61a.sp18.notes %}

- {{ n }}

{% endfor %}

<!--<a href="http://tiny.cc/jerrydisc" class="btn btn-raised btn-success"> Discussion Attendance </a>-->
</div>

## Discussion Resources

| \# | Description                | Downloads |
|:---|:---------------------------|:----------|{% for r in site.data.cs61a.sp18.resources %}
| {{ r.number }} | {{ r.description }} | {% for d in r.downloads %} <a href="{{ d.link }}" class="btn btn-raised btn-default">{{ d.name }}</a>{% endfor %} {% endfor %}
{: .table .table-striped .table-hover #resources}

## Teaching Locations/Hours

| Type           | Time           | Location           |
|:---------------|:---------------|:-------------------|{% for loc in site.data.cs61a.sp18.locations %}
| {{ loc.type }} | {{ loc.time }} | {{ loc.location }} |{% endfor %}
{: .table .table-hover #resources}

<p class="post-continue">
<a href="/cs61a/archive">Resources from Past Semesters &rarr;</a>
</p>
</div>
