---
layout: default
title: Resources - Educate & Grow
paginate: true
paginate_path: /pages/resources/page:num/
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
      <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
      {% if post.image %}<img src="{{ post.image | relative_url }}" alt="{{ post.title }}" style="width: 100%; height: auto; border-radius: 8px;">{% endif %}
      <small>{{ post.date | date: '%B %d, %Y' }}</small>
    </article>
  {% endfor %}
  {% include paginate.html %}
{% else %}
  <div class="card">
    <p>No posts yet—coming soon! Start with our <a href="/demo.html" class="cta">Free Demo</a> for compliance tips.</p>
  </div>
{% endif %}

<h2>Downloads</h2>
<ul>
  <li><a href="{{ site.baseurl }}/assets/downloads/high-risk-checklist.pdf">High-Risk Processing Checklist</a></li>
</ul>

<h2>Webinars</h2>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_WEBINAR_ID" title="Past Webinar" frameborder="0" allowfullscreen loading="lazy"></iframe>

<a href="https://formspree.io/mrcashdiscount@gmail.com" class="cta">Subscribe for Updates</a>

