---
layout: default
title: Resources - Educate & Grow
paginate: true
---
<section class="hero">
  <h1>Insights for Cannabis Operators</h1>
  <p>Guides, blogs, and webinars to navigate compliance and payments.</p>
</section>

<h2>Latest Posts</h2>
{% if paginate.posts.size > 0 %}
  {% for post in paginate.posts %}
    <article class="card">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt }}</p>
      {% if post.image %}<img src="{{ post.image | relative_url }}" alt="{{ post.title }}" width="100%">{% endif %}
      <small>{{ post.date | date: '%B %d, %Y' }}</small>
    </article>
  {% endfor %}
  {% include paginate.html %}
{% else %}
  <p>No posts yet—check back soon! <a href="/demo.html" class="cta">Request a Demo</a> for tips.</p>
{% endif %}

<h2>Downloads</h2>
<ul>
  <li><a href="{{ site.baseurl }}/assets/downloads/high-risk-checklist.pdf">High-Risk Processing Checklist</a></li>
</ul>

<h2>Webinars</h2>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_WEBINAR_ID" title="Past Webinar" frameborder="0" allowfullscreen></iframe>

<a href="https://formspree.io/mrcashdiscount@gmail.com" class="cta">Subscribe for Updates</a>
