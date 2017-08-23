---
layout: default
title: Posts
category: personal
---
<ul class="post-list">
    {% for post in site.posts %}
      <li>
        <h2>
          <a href="{% if site.baseurl == "/" %}{{ post.url }}{% else %}{{ post.url | prepend: site.baseurl }}{% endif %}">{{ post.title }}</a>
        </h2>
        {% if post.description %}
        <h5>{{ post.description }}</h5>
        {% endif %}
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      </li>
    {% endfor %}
</ul>
