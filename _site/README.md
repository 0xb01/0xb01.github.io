# Portfolio

This is my personal portfolio website built with Jekyll and hosted on GitHub Pages.

## Development Setup

To run this site locally, you'll need to have Ruby and Bundler installed.

1. Install the required Bundler version:
   ```bash
   gem install bundler -v 4.0.8
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

2. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

3. Open your browser to http://localhost:4000

## Dependencies

This project uses the following Ruby gems:

- **jekyll** (~> 3.9.0) - Static site generator
- **webrick** (~> 1.7) - Web server for local development
- **ffi** (~> 1.15.0) - Foreign Function Interface
- **kramdown-parser-gfm** (~> 1.1.0) - GitHub Flavored Markdown parser
- **csv**, **base64**, **bigdecimal** - Standard library gems

Jekyll plugins:
- **jekyll-feed** (~> 0.15.0) - RSS feed generator
- **jekyll-sitemap** (~> 1.4.0) - Sitemap generator
- **jekyll-seo-tag** (~> 2.7.0) - SEO metadata tags

## Project Structure

```
├── _config.yml          # Configuration file
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _posts/              # Blog posts
├── _site/               # Generated site (don't edit)
├── kana/                # Kana practice app
├── Gemfile              # Ruby dependencies
├── Gemfile.lock         # Locked Ruby dependencies
├── index.md             # Home page
├── about.html           # About page
├── blog.html            # Blog page
├── work.html            # Work page
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
