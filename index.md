---
layout: default
lang: en
ref: home
---

{% assign project_count = site.data.projects | size %}
{% assign member_count = site.members | size %}
{% assign publication_count = site.data.citations | size %}
{% assign internal_collab_count = site.data.collaborators | where: "type", "internal" | size %}
{% assign news_count = site.posts | size %}
{% assign featured_pub = site.data.citations | first %}

<div class="hero hero-home">
  <p class="hero-eyebrow">Movement Science at Universidad Catolica del Uruguay</p>
  <h1>Engineering Better Human Movement</h1>
  <p>We combine biomechanics, control, rehabilitation, and digital technologies to understand and improve how people move.</p>
  <div class="hero-actions">
    <a class="button" href="research">
      <i class="fa-solid fa-microscope"></i> Explore Research
    </a>
    <a class="button button-light" href="contact">
      <i class="fa-regular fa-envelope"></i> Contact the Lab
    </a>
  </div>
</div>

<section class="home-impact" aria-label="Lab Snapshot">
  <div class="impact-card">
    <p class="impact-value">{{ project_count }}</p>
    <p class="impact-label">Research Lines</p>
  </div>
  <div class="impact-card">
    <p class="impact-value">{{ member_count }}</p>
    <p class="impact-label">Active Members</p>
  </div>
  <div class="impact-card">
    <p class="impact-value">
      {% if publication_count > 0 %}{{ publication_count }}{% else %}Auto{% endif %}
    </p>
    <p class="impact-label">Publications Feed</p>
  </div>
  <div class="impact-card">
    <p class="impact-value">{{ internal_collab_count }}</p>
    <p class="impact-label">Internal Collaborating Groups</p>
  </div>
</section>

<section class="home-section">
  <div class="section-header">
    <h2>Research Highlights</h2>
    <a href="research" class="section-link">View all research <i class="fa-solid fa-arrow-right"></i></a>
  </div>
  {% include list.html data="projects" component="card" style="home-research-card" %}
</section>

{% include section.html %}

<section class="home-grid">
  <div class="home-panel">
    <div class="section-header">
      <h2>Featured Publication</h2>
      <a href="publications" class="section-link">See all <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    {% if featured_pub %}
      {% include citation.html item=featured_pub style="rich featured" %}
    {% else %}
      <div class="publication-empty">
        <h3>Publication feed is updating</h3>
        <p>Connect ORCID sources and rerun the citation sync to display the latest publications automatically.</p>
      </div>
    {% endif %}
  </div>

  <div class="home-panel">
    <div class="section-header">
      <h2>Latest News</h2>
      {% if news_count > 0 %}
      <a href="{{ site.posts.first.url | relative_url }}" class="section-link">Most recent <i class="fa-solid fa-arrow-right"></i></a>
      {% endif %}
    </div>
    {% if news_count > 0 %}
      {% include list.html data="posts" component="post-excerpt" limit=2 style="home-news-item" %}
    {% else %}
      <div class="publication-empty">
        <h3>No posts yet</h3>
        <p>Publish a short update to highlight grants, papers, or lab activities on the homepage.</p>
      </div>
    {% endif %}
  </div>
</section>

{% include section.html %}

<section class="home-section">
  <div class="section-header">
    <h2>Principal Investigators</h2>
    <a href="team" class="section-link">Meet the full team <i class="fa-solid fa-arrow-right"></i></a>
  </div>
  {% include list.html data="members" component="portrait" filters="role: pi" style="home-portrait-card" %}
</section>

<section class="home-cta">
  <div>
    <h2>Interested in collaborating or joining the lab?</h2>
    <p>We welcome students, clinicians, and researchers interested in biomechanics, motor control, and rehabilitation technology.</p>
  </div>
  <div class="home-cta-actions">
    <a class="button" href="contact"><i class="fa-solid fa-paper-plane"></i> Start a Conversation</a>
    <a class="button button-light" href="team"><i class="fa-solid fa-users"></i> View Team</a>
  </div>
</section>
