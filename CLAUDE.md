# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple static portfolio website built with vanilla HTML and CSS. No build system, package manager, or JavaScript framework is used. The site is deployed on Netlify and features a modern, responsive design with a dark theme.

### Tech Stack
- **HTML5**: Single-page structure with semantic sections
- **CSS3**: Custom CSS with CSS Grid, Flexbox, and media queries
- **External CDN Resources**:
  - Google Fonts (Inter typeface)
  - Font Awesome 6.0.0 (icons)
- **Hosting**: Netlify

### Architecture

The portfolio follows a traditional static site structure:

```
modern-portfolio/
├── index.html          # Main HTML document with all content
├── styles.css          # Complete CSS styling with responsive breakpoints
├── public/             # Static assets (images, resume PDF)
│   ├── *.png          # Project screenshots and portfolio images
│   └── Diego_resume.pdf
└── README.md           # Basic project description
```

#### Layout Structure
- **Header**: Fixed left sidebar on desktop (sticky), top bar on mobile with navigation
- **Main Content**: Single-column layout with sections (About, Experience, Projects)
- **Footer**: Credits and scroll-to-top button
- **Responsive Design**:
  - Mobile (<640px): Simple stacked layout, navigation hidden
  - Tablet (640-1024px): Two-column grid layout begins
  - Desktop (≥1024px): Two-column layout with sticky sidebar header

#### Styling Approach
- CSS custom properties (variables) for theming in `:root`
- Mobile-first responsive design using `min-width` media queries
- Smooth scroll behavior (`scroll-behavior: smooth`)
- CSS Grid for overall page layout, Flexbox for component layouts
- Dark theme with teal/cyan accent color (`#5EEAD4`)

## Assistant Guidelines

When working in this repository, follow these behavioral guidelines:

- **Do not repeat yourself**: Do not restate information unnecessarily or duplicate content in your responses. Keep responses concise and avoid redundancy.
- **Provide minimal answers**: Be direct and to the point. Avoid lengthy explanations unless explicitly requested. Focus on actionable information.
- **Do not guess anything**: If you're uncertain about something, ask for clarification or verify through available tools. Do not make assumptions or provide speculative information.
- **Avoid follow-up questions**: Unless absolutely necessary for completing a task, do not ask questions that aren't critical to the immediate work. Trust your analysis and proceed.

These guidelines shape how to interact with users and approach tasks in this codebase.

## Common Development Tasks

### Viewing the Site
Since there is no build system, simply open `index.html` in a browser:
```bash
# Option 1: Direct file open
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows

# Option 2: Simple HTTP server (recommended for testing)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Making Changes
- **HTML structure**: Edit `index.html`
- **Styling**: Edit `styles.css`
- **Assets**: Add images to `public/` folder and reference them relatively (e.g., `./public/image.png`)
- **Content updates**: Update personal info, projects, experience directly in `index.html`

### Responsive Testing
Test the site at three breakpoints:
1. Mobile view (<640px): Navigation hidden, single column
2. Tablet view (640-1024px): Navigation visible, grid layout
3. Desktop view (≥1024px): Sticky sidebar header, two-column layout

### Adding New Content
- **New project**: Add a new `.project-card` div inside `<section id="projects">` following the existing pattern
- **New experience**: Add a new `.experience-card` div inside `<section id="experience">`
- **New social link**: Add a new `<a class="social-link">` in the header's `.social-link-container`

### Deployment
The site is deployed on Netlify. To redeploy:
1. Commit changes to the repository
2. Netlify will automatically rebuild and deploy
3. Or manually trigger deploy from Netlify dashboard

### Code Conventions
- **Naming**: Uses BEM-like class names with kebab-case (e.g., `project-card`, `anchor-text`, `sticky-header`)
- **CSS Order**: Base styles → Layout → Components → Responsive overrides
- **Images**: Stored in `public/` folder, referenced with relative paths
- **External resources**: Fonts and icons loaded via CDN in `<head>`
- **Semantic HTML**: Uses `<header>`, `<main>`, `<section>`, `<footer>`, etc.

### Performance Notes
- No JavaScript means minimal bundle size
- External CDN resources are cached by browsers
- Images are pre-optimized to reasonable sizes
- Consider compressing PNGs further if needed for faster loads

## Notes for Future Development
- To add interactivity (e.g., mobile menu toggle, animations), vanilla JavaScript can be added in a separate file or inline
- For a more scalable approach, consider migrating to a static site generator if content becomes too complex
- The CSS is all in one file; consider modularizing if styles grow significantly
- The portfolio currently mixes content and structure in HTML; separating content from markup would make updates easier
