---
layout: default
lang: es
ref: home
---

<div class="hero">
  <h1>Laboratorio de Ingeniería del Movimiento</h1>
  <p>Desarrollamos investigación en biomecánica, control motor, rehabilitación del movimiento, y tecnologías innovadoras para la digitalización del movimiento humano en la Universidad Católica del Uruguay.</p>
  <a class="button" href="/es/contact">
    <i class="fa-solid fa-envelope"></i> Contáctenos
  </a>
</div>

## Líneas de Investigación

{% include list.html data="projects" component="card" %}

{% include section.html %}

## Publicaciones Recientes

{% include list.html data="citations" component="citation" style="rich" limit=5 %}

[Ver todas las publicaciones &rarr;](/es/publications)

{% include section.html %}

## Equipo

{% include list.html data="members" component="portrait" %}

{% include section.html %}
