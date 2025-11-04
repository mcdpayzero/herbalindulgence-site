---
layout: default
title: Resources - Educate & Grow
paginate: true  # Enables pagination here
---
<section class="hero">
  <h1>Insights for Cannabis Operators</h1>
  <p>Guides, blogs, and webinars to navigate compliance and payments.</p>
</section>

<h2>Latest Posts</h2>
<!-- Paginated blog grid -->
{% for post in paginate.posts %}
  <article class="card">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt }}</p>
    <img src="{{ post.image }}" alt="{{ post.title }}" width="100%">
  </article>
{% endfor %}
{% include paginate.html %}

<h2>Downloads</h2>
<ul>
  <li><a href="{{ site.baseurl }}/assets/downloads/high-risk-checklist.pdf">High-Risk Processing Checklist</a></li>
</ul>

<h2>Webinars</h2>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_WEBINAR_ID" title="Past Webinar" frameborder="0" allowfullscreen></iframe>


<a href="https://formspree.io/YOUR_EMAIL" class="cta">Subscribe for Updates</a>
