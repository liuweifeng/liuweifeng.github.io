---
layout: default
title: "巍峰笔记"
---
{% include JB/setup %}

<div class="page-header">
  <h1>{{ site.title }} - {{ site.tagline }}</h1>
</div>

<ul class="posts nav nav-pills nav-stacked">
  {% for post in site.posts %}
    <li><span>{{ post.date | date: "%Y-%m-%d" }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
    <!-- <p>{{ post.content | truncatehtml:2000 }}</p> -->
  {% endfor %}
</ul>
{% if paginator.previous_page && paginator.next_page%}
<div class="pagination pagination-centered">
  <ul data-maxPage="{{paginator.total_pages}}" data-curentPage="{{paginator.page}}">
    {% if paginator.previous_page %}
        {% if paginator.previous_page == 1 %}
        <li class="active"><a href="/">前一页</a></li>
        {% else %}
        <li><a href="/page{{paginator.previous_page}}">前一页</a></li>
        {% endif %}
    {% else %}
        <li class="disabled"><a href="javascript:void(0);">前一页</a></li>
    {% endif %}
    {% for count in (2..paginator.total_pages) limit:8 %}
        <li><a href="/page{{count}}"{% if count == paginator.page %} class="active"{% endif %}>{{count}}</a></li>
    {% endfor %}
    {% if paginator.next_page %}
        <li><a href="/page{{paginator.next_page}}">下一页</a></li>
    {% else %}
        <li class="disabled"><a href="javascript:void(0);">下一页</a></li>
    {% endif %}
  </ul>
</div>
{% endif %}