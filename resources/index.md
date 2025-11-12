
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
{% for post in site.posts limit: 10 %}
  <article class="card">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
    {% if post.image %}<img src="{{ post.image | relative_url }}" alt="{{ post.title }}" style="width: 100%; height: auto; border-radius: 8px;">{% endif %}
    <small>{{ post.date | date: '%B %d, %Y' }}</small>
  </article>
{% else %}
  <div class="card">
    <p>No posts indexed—check YAML in _posts/. <a href="{{ site.baseurl }}/demo.html" class="cta">Request a Demo</a></p>
  </div>
{% endfor %}
<!-- Temp: Comment pagination -->
<!-- {% include paginate.html %} -->

<h2>Downloads</h2>
<ul>
  <li><a href="{{ site.baseurl }}/assets/downloads/high-risk-checklist.pdf">High-Risk Processing Checklist</a></li>
</ul>

<h2>Webinars</h2>
<iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_WEBINAR_ID" title="Past Webinar" frameborder="0" allowfullscreen loading="lazy"></iframe>

<a href="{{ site.baseurl }}/demo.html" class="cta">Subscribe for Updates</a>  <!-- Fixed here too, if subscribe links to demo -->

