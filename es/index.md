---
layout: default
lang: es
ref: home
---

{% assign project_count = site.data.projects | size %}
{% assign member_count = site.members | size %}
{% assign publication_count = site.data.citations | size %}
{% assign internal_collab_count = site.data.collaborators | where: "type", "internal" | size %}
{% assign news_count = site.posts | size %}
{% assign citations_sorted = site.data.citations | sort: "date" | reverse %}
{% assign featured_pub = nil %}
{% for citation in citations_sorted %}
  {% assign searchable = citation.title | append: " " | append: citation.description | downcase %}
  {% if searchable contains "movimiento" or searchable contains "movement" or searchable contains "marcha" or searchable contains "walking" or searchable contains "gait" or searchable contains "locomotion" or searchable contains "motor" or searchable contains "muscular" %}
    {% assign featured_pub = citation %}
    {% break %}
  {% endif %}
{% endfor %}
{% if featured_pub == nil %}
  {% assign featured_pub = citations_sorted | first %}
{% endif %}

<div class="hero hero-home">
  <p class="hero-eyebrow">Ciencia del Movimiento en UCU</p>
  <h1>Ingenieria para Mejorar el Movimiento Humano</h1>
  <p>Integramos biomecanica, control, rehabilitacion y tecnologias digitales para comprender y mejorar como se mueve la gente.</p>
  <div class="hero-actions">
    <a class="button" href="research">
      <i class="fa-solid fa-microscope"></i> Explorar Investigacion
    </a>
    <a class="button button-light" href="contact">
      <i class="fa-regular fa-envelope"></i> Contactar al Laboratorio
    </a>
  </div>
</div>

<section class="home-impact" aria-label="Resumen del Laboratorio">
  <div class="impact-card">
    <p class="impact-value">{{ project_count }}</p>
    <p class="impact-label">Lineas de Investigacion</p>
  </div>
  <div class="impact-card">
    <p class="impact-value">{{ member_count }}</p>
    <p class="impact-label">Integrantes Activos</p>
  </div>
  <div class="impact-card">
    <p class="impact-value">
      {% if publication_count > 0 %}{{ publication_count }}{% else %}Auto{% endif %}
    </p>
    <p class="impact-label">Feed de Publicaciones</p>
  </div>
  <div class="impact-card">
    <p class="impact-value">{{ internal_collab_count }}</p>
    <p class="impact-label">Grupos Colaboradores Internos</p>
  </div>
</section>

<section class="home-section">
  <div class="section-header">
    <h2>Destacados de Investigacion</h2>
    <a href="research" class="section-link">Ver toda la investigacion <i class="fa-solid fa-arrow-right"></i></a>
  </div>
  {% include list.html data="projects" component="card" style="home-research-card" %}
</section>

{% include section.html %}

<section class="home-grid">
  <div class="home-panel">
    <div class="section-header">
      <h2>Publicacion Destacada</h2>
      <a href="publications" class="section-link">Ver todas <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    {% if featured_pub %}
      {% include citation.html item=featured_pub style="rich featured" %}
    {% else %}
      <div class="publication-empty">
        <h3>El feed de publicaciones se esta actualizando</h3>
        <p>Conecte fuentes ORCID y vuelva a ejecutar la sincronizacion para mostrar automaticamente las publicaciones mas recientes.</p>
      </div>
    {% endif %}
  </div>

  <div class="home-panel">
    <div class="section-header">
      <h2>Ultimas Novedades</h2>
      {% if news_count > 0 %}
      <a href="{{ site.posts.first.url | relative_url }}" class="section-link">Mas reciente <i class="fa-solid fa-arrow-right"></i></a>
      {% endif %}
    </div>
    {% if news_count > 0 %}
      {% include list.html data="posts" component="post-excerpt" limit=2 style="home-news-item" %}
    {% else %}
      <div class="publication-empty">
        <h3>Todavia no hay noticias</h3>
        <p>Publique una breve actualizacion para destacar fondos, articulos o actividades del laboratorio.</p>
      </div>
    {% endif %}
  </div>
</section>

{% include section.html %}

<section class="home-section">
  <div class="section-header">
    <h2>Investigadores Principales</h2>
    <a href="team" class="section-link">Conocer al equipo completo <i class="fa-solid fa-arrow-right"></i></a>
  </div>
  {% include list.html data="members" component="portrait" filters="role: pi" style="home-portrait-card" %}
</section>

<section class="home-cta">
  <div>
    <h2>Le interesa colaborar o sumarse al laboratorio?</h2>
    <p>Recibimos estudiantes, clinicos e investigadores interesados en biomecanica, control motor y tecnologia para rehabilitacion.</p>
  </div>
  <div class="home-cta-actions">
    <a class="button" href="contact"><i class="fa-solid fa-paper-plane"></i> Iniciar Conversacion</a>
    <a class="button button-light" href="team"><i class="fa-solid fa-users"></i> Ver Equipo</a>
  </div>
</section>
