---
title: ""
permalink: /publications/
author_profile: true
---

{% for year_group in site.data.publications %}
<h2 class="pub-year reveal" id="{{ year_group.year }}">{{ year_group.year }}</h2>

{% for publication in year_group.entries %}
<div class="pub-entry reveal">
  <h3 class="pub-title">
    {% assign paper = publication.links | where: "label", "Paper" | first %}
    {% if paper.url %}
    <a class="pub-title-text" href="{{ paper.url | escape }}" target="_blank" rel="noopener">{{ publication.title | escape }}</a>
    {% else %}
    <span class="pub-title-text">{{ publication.title }}</span>
    {% endif %}
  </h3>
  <p class="pub-meta">
    {{ publication.authors | replace: '<b>Mengfei Liang</b>', '<span class="pub-author-me">Mengfei Liang</span>' }}<br>
    <i>{{ publication.venue }}</i>
  </p>
  <div class="pub-links">
    {% for link in publication.links %}
    <a href="{{ link.url }}" class="pub-link {{ link.class }}" target="_blank" rel="noopener">{{ link.label }}</a>
    {% endfor %}
  </div>
</div>
{% endfor %}
{% endfor %}
