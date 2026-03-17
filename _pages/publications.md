---
title: ""
permalink: /publications/
author_profile: true
---

<style type="text/css" rel="stylesheet">
.pub-entry {
margin: 0 0 1.4rem 0;
}

.pub-title {
margin: 0 0 0.25rem 0;
}

.pub-title-text {
color: rgb(39, 117, 182);
}

.pub-meta {
margin: 0;
font-size: 0.95em;
line-height: 1.35;
}

.pub-links {
display: flex;
align-items: center;
gap: 0.3rem;
margin: -0.05rem 0 0 0;
line-height: 1;
}

.pub-link {
display: inline-block;
padding: 0.05rem 0.35rem;
border-radius: 4px;
color: white;
text-decoration: none;
line-height: 1.15;
font-size: 0.9rem;
}

.pub-link:hover {
text-decoration: none;
opacity: 0.9;
}

.btn--paper {
background-color: lightseagreen;
}

.btn--arxiv {
background-color: tan;
}

.btn--code {
background-color: darkorange;
}
</style>

{% for year_group in site.data.publications %}
<h2 id="{{ year_group.year }}">{{ year_group.year }}</h2>

{% for publication in year_group.entries %}
<div class="pub-entry">
  <h3 class="pub-title">
    <span class="pub-title-text">{{ publication.title }}</span>
  </h3>
  <p class="pub-meta">
    {{ publication.authors }}<br>
    <i>{{ publication.venue }}</i>
  </p>
  <div class="pub-links">
    {% for link in publication.links %}
    <a href="{{ link.url }}" class="pub-link {{ link.class }}" target="_blank">{{ link.label }}</a>
    {% endfor %}
  </div>
</div>
{% endfor %}
{% endfor %}
