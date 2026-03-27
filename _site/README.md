# Banikaz Portfolio

Personal portfolio website of **John Nichols Ranara** — a solution-oriented programmer with 10 years of experience in desktop platforms, mobile development, and hardware. Built with Jekyll and hosted on GitHub Pages.

**Live Site:** [banikaz.online](http://banikaz.online)

## Features

- Responsive single-page portfolio with smooth navigation
- Work experience timeline with expandable sections
- Projects showcase with flip cards
- Blog section with Mermaid diagram support
- Contact form with CAPTCHA
- Mobile-friendly sidebar navigation
- SEO optimized with Open Graph tags
- RSS feed and sitemap auto-generation

## Tech Stack

- **Jekyll** (~3.9.0) - Static site generator
- **HTML5, CSS3, JavaScript** - Frontend
- **Font Awesome** - Icons
- **Mermaid** - Diagram rendering
- **ProggyVector** - Monospace font

### Ruby Gems

| Gem | Version | Purpose |
|-----|---------|---------|
| jekyll | ~3.9.0 | Static site generator |
| webrick | ~1.7 | Web server for local development |
| jekyll-feed | ~0.15.0 | RSS feed generator |
| jekyll-sitemap | ~1.4.0 | Sitemap generator |
| jekyll-seo-tag | ~2.7.0 | SEO metadata tags |
| kramdown-parser-gfm | ~1.1.0 | GitHub Flavored Markdown parser |

## Project Structure

```
0xb01.github.io/
├── _config.yml          # Site configuration
├── _includes/           # Reusable components
│   ├── footer.html
│   ├── header.html
│   ├── navigation.html
│   ├── sidebar.html
│   └── tech-stack.html
├── _layouts/            # Page layouts
│   ├── v2.html          # Main portfolio layout
│   ├── v2-default.html  # Default layout
│   └── v2-post.html     # Blog post layout
├── _posts/              # Blog posts
├── _site/               # Generated site (gitignored)
├── kana/                # Kana practice web app
├── res/                 # Resources/assets
├── index.html           # Home page (SPA)
├── script.js            # Main JavaScript
├── style.css            # Main stylesheet
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Development Setup

### Prerequisites

- Ruby 2.7+
- Bundler

### Installation

1. **Install Bundler** (if not already installed):
   ```bash
   gem install bundler
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run development server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser**: http://localhost:4000

## Usage

### Navigation

The portfolio uses a single-page application (SPA) design with the following sections:

- **Home** - Introduction and hero section
- **Work** - Work experience and education timeline
- **Blog** - Blog posts list
- **Contact** - Contact form and social links
- **Resume** - Full resume view

### Adding Blog Posts

1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-post-title.md`
2. Add front matter:
   ```yaml
   ---
   layout: v2-post
   title: "Your Post Title"
   date: 2026-03-28 12:00:00 -0800
   categories: [Category]
   tags: [tag1, tag2]
   author: John Nichols Ranara
   ---
   ```
3. Write content in Markdown. Mermaid diagrams are supported:
   ````markdown
   ```mermaid
   graph TD
       A --> B
   ```
   ````

### Customization

- **Site config**: Edit `_config.yml` for site metadata, social links, and build settings
- **Styling**: Modify `style.css` CSS variables for theme colors
- **Content**: Update `index.html` for main page content
- **Components**: Edit files in `_includes/` for reusable sections

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## Contact

- **Email:** [banikaz@proton.me](mailto:banikaz@proton.me)
- **GitHub:** [@0xb01](https://github.com/0xb01)
- **LinkedIn:** [John Nicolas Ranara](https://www.linkedin.com/in/jnr01)
- **Location:** Tacloban City, Leyte, Philippines

## License

This project is open source and available under the [MIT License](LICENSE).
