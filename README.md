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
├── _data/               # Content data files (edit these!)
│   ├── profile.yml      # Personal info, socials, quote, contact form
│   ├── experience.yml   # Work experience & education
│   ├── projects.yml     # Projects showcase
│   └── techstack.yml    # Tech stack & hobbies
├── _includes/           # Reusable components
│   ├── about.html
│   ├── contact.html
│   ├── experience-items.html
│   ├── hero.html
│   ├── hobbies-render.html
│   ├── mobile-header.html
│   ├── projects-grid.html
│   ├── quote-render.html
│   ├── resume.html
│   ├── sidebar.html
│   ├── sidebar-profile.html
│   ├── tech-stack.html
│   └── tech-stack-render.html
├── _layouts/            # Page layouts
│   ├── v2.html          # Main portfolio layout
│   ├── v2-default.html  # Default layout
│   └── v2-post.html     # Blog post layout
├── _posts/              # Blog posts
├── _site/               # Generated site (gitignored)
├── kana/                # Kana practice web app
├── res/                 # Resources/assets
│   ├── me.jpg           # Profile photo
│   ├── Ranara-Resume.pdf
│   ├── script.js        # Main JavaScript
│   └── style.css        # Main stylesheet
├── index.html           # Home page (SPA)
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

### Using This Template

This portfolio is designed to be easily customizable! You can fork this repository and make it your own by editing the **`_data/`** YAML files—no need to dig through HTML. All your personal information, work experience, projects, and more are stored in structured data files.

### Data Files Overview

All content is managed through `_data/` YAML files:

| File | Purpose | What to Edit |
|------|---------|--------------|
| `_data/profile.yml` | Personal info | Name, location, hero text, about me, contact info, socials, navigation, quote, resume PDF |
| `_data/experience.yml` | Work history | Job positions, companies, dates, responsibilities, tech stack, references |
| `_data/projects.yml` | Projects | Project name, year, description, tech stack, URLs, visibility |
| `_data/techstack.yml` | Skills & hobbies | Tech categories, skills, hobbies (max 4), icons |

### Quick Start Customization

1. **Fork this repository** to your GitHub account
2. **Edit `_data/profile.yml`**:
   ```yaml
   name: Your Name
   location: Your City, Country
   status: Your Status
   hero:
     title: Your Title
     headline: Your Headline
   socials:
     - platform: GitHub
       url: https://github.com/yourusername
       show: true
   resume:
     pdf_path: /res/Your-Resume.pdf
   quote:
     text: "Your favorite quote..."
     author: "Quote Author"
   contact_form:
     note_signature: "Your Name"
   ```
3. **Update `_data/experience.yml`** with your work history
4. **Update `_data/projects.yml`** with your projects
5. **Replace assets** in `/res/` (profile photo, resume PDF)
6. **Update `_config.yml`** with your domain and email

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

- **Site config**: Edit `_config.yml` for site metadata, domain, and build settings
- **Styling**: Modify `/res/style.css` CSS variables for theme colors
- **Content**: Edit `_data/` YAML files—all your content lives here!
- **Components**: Edit files in `_includes/` for reusable sections
- **Layouts**: Modify `_layouts/` for page structure changes

### Contact Form Setup

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your endpoint URL
3. Update `_data/profile.yml`:
   ```yaml
   contact_form:
     formspree_url: https://formspree.io/f/your-form-id
   ```

### Resume PDF

Place your resume PDF in `/res/` and update the path in `_data/profile.yml`:
```yaml
resume:
  pdf_path: /res/Your-Name-Resume.pdf
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## Contact

- **Email:** [banikaz@proton.me](mailto:banikaz@proton.me)
- **GitHub:** [@0xb01](https://github.com/0xb01)
- **LinkedIn:** [John Nicolas Ranara](https://www.linkedin.com/in/jnr01)
- **Location:** Tacloban City, Leyte, Philippines

## License

This project is open source and available under the [MIT License](LICENSE).
