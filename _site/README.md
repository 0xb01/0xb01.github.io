# Banikaz • Engineering Portfolio & Terminal

> Modern, high-performance portfolio & technical journal of **John Nichols Ranara (Banikaz)** — Principal Software Engineer specializing in low-level automation, desktop application architectures, and robust backend systems.

[![Live Site](https://img.shields.io/badge/Live%20Site-banikaz.online-10b981?style=for-the-badge&logo=googlechrome&logoColor=white)](https://banikaz.online)
[![GitHub](https://img.shields.io/badge/GitHub-0xb01-38bdf8?style=for-the-badge&logo=github&logoColor=white)](https://github.com/0xb01)
[![License: MIT](https://img.shields.io/badge/License-MIT-fbbf24?style=for-the-badge)](LICENSE)

---

## ⚡ Key Highlights & Architecture

- **Option A Terminal Design System**: High-contrast OLED true pitch black (`#000000`) and clean light minimalist theme tokens powered by Vanilla CSS Custom Properties.
- **Modular SPA Hash Router**: Fast client-side routing supporting `#home`, `#experience`, `#projects`, `#blog`, `#post:<url>`, `#contact`, and full-width `#resume`.
- **Dynamic Client-Side PDF Generation**: Generates and downloads a clean, printable A4 resume PDF on demand (`John_Nichols_Ranara_Resume.pdf`) with zero static PDF upload requirements.
- **Live Activity Schedule Engine**: Evaluates active routines (e.g. *Working*, *Exercising*, *Lunch*, *Relaxing*, *Sleeping*) against `Asia/Manila` time with dynamic status indicators.
- **Real-Time Project Search & Filters**: Live search input with instant tag-based filtering and release year selectors.
- **Interactive Markdown & Mermaid**: Native diagram rendering for engineering deep-dives, architecture schemas, and workflow sequences.
- **Mobile First UX**: Sticky top app bar with avatar brand tag, slide-in drawer sidebars, and native-style bottom navigation tab dock.
- **Data-Driven Architecture**: 100% content separation into structured YAML data files under `_data/` for zero-code modifications.

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Core Engine** | Jekyll (Static Site Generator), Liquid Templating |
| **Frontend** | Vanilla HTML5, Vanilla CSS3 (Design Tokens), Vanilla JS (ES6+) |
| **Typography** | Inter, JetBrains Mono |
| **Icons & Media** | Font Awesome 6.5+, Custom SVG Badges |
| **Diagrams & PDF** | Mermaid.js 10.9+, html2pdf.js (Dynamic Loader) |
| **Hosting & CI/CD** | GitHub Pages, Custom Domain (`banikaz.online`) |

---

## 📁 Repository Structure

```text
0xb01.github.io/
├── _config.yml              # Site metadata, permalinks, and build configurations
├── _data/                   # Single source of truth for all content
│   ├── profile.yml          # Personal info, daily schedule, socials, and contact settings
│   ├── experience.yml       # Work experience timeline and references
│   ├── education.yml        # Academic history and achievements
│   ├── projects.yml         # Project showcase items, tech stacks, and repo links
│   └── techstack.yml        # Categorized technical skills, tools, and hobbies
├── _includes/               # Reusable modular UI components
│   ├── about.html           # About biography card
│   ├── contact.html         # Contact form and communication channels
│   ├── hero.html            # Terminal shell hero component
│   ├── experience-items.html# Expandable work experience timeline items
│   ├── education-items.html # Education history cards
│   ├── projects.html        # Projects showcase container and filters
│   ├── projects-grid.html   # Projects card grid with tag badges
│   ├── resume.html          # Full-width printable resume view
│   ├── sidebar.html         # Desktop and mobile profile navigation drawer
│   ├── sidebar-profile.html # Profile card, terminal brand tag, and contact list
│   ├── tech-stack.html      # Desktop and mobile tech stack drawer
│   ├── tech-stack-render.html # Clickable skill chips
│   ├── hobbies-render.html  # Hobbies grid cards
│   ├── quote-render.html    # Engineering quote card
│   ├── mobile-header.html   # Sticky mobile top app bar
│   └── mobile-bottom-nav.html # Mobile bottom navigation tab dock
├── _layouts/                # HTML layout shells
│   ├── v2.html              # Main portfolio SPA layout
│   ├── v2-default.html      # Default fallback layout
│   └── v2-post.html         # Technical blog article layout
├── _posts/                  # Markdown technical journal entries
├── res/                     # Static assets & scripts
│   ├── script.js            # Router, theme manager, filters, PDF engine & clock
│   ├── style.css            # Complete design system & responsive styling
│   └── me.jpg               # Profile avatar
├── index.html               # Main SPA entry point
├── Gemfile                  # Ruby gems and dependencies
└── README.md                # Repository documentation
```

---

## ⚙️ Content Configuration Guide

All content is configured through YAML files in `_data/` without editing core HTML structure:

### 1. Profile & Daily Schedule (`_data/profile.yml`)
```yaml
name: John Nichols Ranara
location: Tacloban City, Leyte
status: Open to opportunities
profile_image: /res/me.jpg

# Activity Schedule (Calculated in Asia/Manila)
schedule_config:
  timezone: Asia/Manila
  schedule:
    - start: "08:00"
      end: "11:30"
      status: "Working"
      emoji: "💻"
      type: "working"
    - start: "11:30"
      end: "12:30"
      status: "Lunch"
      emoji: "🍲"
      type: "lunch"
    - start: "18:00"
      end: "22:00"
      status: "Relaxing"
      emoji: "🎮"
      type: "relax"
    - start: "22:00"
      end: "05:00"
      status: "Sleeping"
      emoji: "😴"
      type: "sleep"
```

### 2. Work Experience (`_data/experience.yml`)
```yaml
experiences:
  - position: Principal Software Engineer
    company: Autonomous Systems Lab
    period: 2021 - Present
    present: true
    responsibilities:
      - Architected distributed low-latency automation pipelines.
      - Developed cross-platform desktop interfaces with real-time telemetry.
    tech_stack:
      - Go
      - Python
      - C++
```

### 3. Projects Showcase (`_data/projects.yml`)
```yaml
- name: "⚡ Syncthing Manager"
  year: 2026
  description: "Cross-platform daemon manager with system tray integration."
  visibility: public
  url: "https://github.com/0xb01/syncthing-manager"
  tech_stack:
    - Rust
    - GTK
    - SQLite
```

---

## 💻 Local Development Setup

### Prerequisites
- **Ruby** (2.7 or higher)
- **Bundler** (`gem install bundler`)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/0xb01/0xb01.github.io.git
   cd 0xb01.github.io
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Start local Jekyll development server:**
   ```bash
   bundle exec jekyll serve --livereload
   ```

4. **Open in browser:**
   ```text
   http://127.0.0.1:4000/
   ```

---

## 🚀 Deployment

The site automatically builds and deploys to **GitHub Pages** upon pushing commits to the `master` / `main` branch.

```bash
git add .
git commit -m "feat: modernize portfolio design and mobile architecture"
git push origin master
```

---

## 📄 License

Open-source under the [MIT License](LICENSE).
