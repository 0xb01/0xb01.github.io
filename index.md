---
layout: default
title: Portfolio
---

{% include header.html %}

<section id="summary">
    <p class="summary-text">
        Solution-oriented programmer with 10 years of experience in creating software for desktop platforms, mobile development, and hardware.<span class="cursor"></span>
    </p>
</section>

<section id="blog-posts">
    <h2>Latest Blog Posts</h2>
    <div class="posts-list">
        {% for post in site.posts limit:3 %}
        <div class="post-item">
            <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
            <div class="post-date">{{ post.date | date: "%B %d, %Y" }}</div>
            <p>{{ post.excerpt }}</p>
        </div>
        {% endfor %}
    </div>
    <div class="view-all-posts">
        <a href="/blog/" class="view-all-link">View all posts →</a>
    </div>
</section>

{% include footer.html %}