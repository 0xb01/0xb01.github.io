# Portfolio

This is my personal portfolio website built with Jekyll and hosted on GitHub Pages.

## Development Setup

To run this site locally, you'll need to have Ruby and Bundler installed.

1. Install dependencies:
   ```bash
   bundle install
   ```

2. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

3. Open your browser to http://localhost:4000

## Project Structure

```
├── _config.yml          # Configuration file
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _posts/              # Blog posts
├── _site/               # Generated site (don't edit)
├── .jekyll-cache/       # Cache files (don't edit)
├── Gemfile              # Ruby dependencies
├── Gemfile.lock         # Locked Ruby dependencies
├── index.html           # Home page
├── about.html           # About page
├── blog.html            # Blog page
├── projects.html        # Projects page
├── kana.htm             # Kana practice app
├── kana.py              # Kana practice app backend
└── style.css            # Stylesheet
```

## Adding Content

### Blog Posts

To add a new blog post, create a new file in the `_posts` directory with the following naming convention:

```
YYYY-MM-DD-title-of-post.md
```

At the top of each post, include the front matter:

```yaml
---
layout: default
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
author: John Nichols Ranara
---
```

### Pages

To add a new page, create an HTML or Markdown file in the root directory with the front matter:

```yaml
---
layout: default
title: Page Title
---
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Customization

Feel free to customize the design by modifying `style.css` or creating new layouts in the `_layouts` directory.
