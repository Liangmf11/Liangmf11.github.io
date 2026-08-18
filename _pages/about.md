---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="home-hero">
  <h1 class="home-hero__name">Mengfei Liang <span class="home-hero__cn">梁萌飞</span></h1>
  <p class="home-hero__lead">Ph.D. student at CISPA Helmholtz Center for Information Security, working on trustworthy LLMs, LLM safety, and LLM agents.</p>
  <p class="home-hero__cta">
    <a class="hero-btn" href="mailto:mengfei.liang@cispa.de"><i class="fas fa-fw fa-envelope"></i> Email</a>
    <a class="hero-btn" href="https://scholar.google.com/citations?user=B0XSVsgAAAAJ"><i class="ai ai-google-scholar"></i> Scholar</a>
    <a class="hero-btn" href="https://github.com/Liangmf11"><i class="fab fa-fw fa-github"></i> GitHub</a>
    <a class="hero-btn" href="https://www.linkedin.com/in/mengfei-liang-456642293/"><i class="fab fa-fw fa-linkedin"></i> LinkedIn</a>
  </p>
</div>

## Biography

I am currently a Ph.D. student at [CISPA Helmholtz Center for Information Security](https://cispa.de), advised by [Dr. Yang Zhang](https://yangzhangalmo.github.io/). Before that, I obtained my Master's degree from University College London, advised by Prof. Philip Treleaven, and my Bachelor's degree from McMaster University.

## Research Interests

<div class="research-tags">
  <span class="tag">Trustworthy LLMs</span>
  <span class="tag">LLM Safety</span>
  <span class="tag">LLM Agents</span>
</div>

**I'm always excited to discuss new ideas and explore potential collaboration opportunities. Feel free to reach out if you'd like to chat about research or any other topics.**

## Education

<div class="timeline">
  <div class="timeline__item">
    <span class="timeline__date">2025 – Present</span>
    <span class="timeline__role">Ph.D. in Computer Science</span>
    <span class="timeline__where">CISPA Helmholtz Center for Information Security · Advisor: Dr. Yang Zhang</span>
  </div>
  <div class="timeline__item">
    <span class="timeline__date">2023 – 2024</span>
    <span class="timeline__role">M.Sc. in Computational Statistics and Machine Learning</span>
    <span class="timeline__where">University College London · Advisor: Prof. Philip Treleaven</span>
  </div>
  <div class="timeline__item">
    <span class="timeline__date">2019 – 2023</span>
    <span class="timeline__role">Honours B.Sc. in Mathematics &amp; Computer Science</span>
    <span class="timeline__where">McMaster University</span>
  </div>
</div>

## What's New

<div class="timeline news">
{% for item in site.data.news %}
  <div class="timeline__item">
    <span class="timeline__date">{{ item.date }}</span>
    <span class="timeline__text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}</span>
  </div>
{% endfor %}
</div>
