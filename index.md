---
layout: default
lang: en
ref: home
---

<div class="hero">
  <h1>Movement Engineering Lab</h1>
  <p>Conducting research in biomechanics, motor control, movement rehabilitation, and innovative technologies for human movement digitalization at Universidad Católica del Uruguay.</p>
  <a class="button" href="contact">
    <i class="fa-solid fa-envelope"></i> Contact Us
  </a>
</div>

## Research Lines

{% include list.html data="projects" component="card" %}

{% include section.html %}

## Recent Publications

{% include list.html data="citations" component="citation" style="rich" limit=5 %}

[See all publications &rarr;](publications)

{% include section.html %}

## Team

{% include list.html data="members" component="portrait" %}

{% include section.html %}
