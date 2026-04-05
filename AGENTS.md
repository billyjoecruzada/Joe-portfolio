# Agent Guidelines for Billy Joe Cruzada Portfolio

## Project Overview

This is a portfolio website for **Billy Joe Cruzada**, a graphic designer. The project consists of multiple HTML, CSS, and JavaScript files with a dark theme and orange-to-pink gradient branding.

## File Structure

```
/
├── index.html          # Main portfolio (public)
├── admin.html         # Admin panel (opens in new tab)
├── styles.css         # Shared styles
├── script.js          # Main site functionality
├── admin.js           # Admin panel functionality
├── SPEC.md            # Design specifications
├── AGENTS.md          # This file
├── Billy ID.jpg       # Profile photo
└── images/           # User uploaded images folder
    └── .gitkeep
```

## Commands

### Local Development
```bash
# Serve the site locally
npx serve .
python3 -m http.server 8000

# Open in browser
open index.html         # macOS
xdg-open index.html     # Linux
start index.html        # Windows

# Admin panel (opens in new tab from main nav dropdown)
open admin.html
```

### Validation
```bash
# Check external resources
curl -sI https://fonts.googleapis.com | head -1
curl -sI https://picsum.photos | head -1
```

### Testing
Manual testing required:
1. Open `index.html` - test all navigation
2. Test gallery filters
3. Test lightbox (click gallery items and showcases)
4. Test contact form submission
5. Verify scroll animations
6. Test mobile responsive layout
7. Test admin panel login: `adminjoe` / `joeportfolio12`
8. Test showcase creation and editing
9. Test large image uploads (up to 25MB)
10. Test confirmation modal on save
11. Test text show/hide toggle

## Color Scheme

| Variable | Hex | Usage |
|----------|-----|-------|
| --bg-primary | #1A1A1A | Main background |
| --bg-secondary | #252525 | Card backgrounds |
| --bg-tertiary | #2A2A2A | Navigation, inputs |
| --text-primary | #FFFFFF | Headings |
| --text-secondary | #B0B0B0 | Body text |
| --accent-pink | #FF1493 | Gradient end |
| --accent-orange | #FF6B00 | Gradient start |
| --accent-red | #E91E63 | Buttons |
| --accent-yellow | #FFA500 | Icons |
| --gradient-brand | linear-gradient(135deg, #FF6B00, #FF1493) | Branding gradient |

## Admin Panel

### Access
- **URL**: `/admin.html` (linked in Contact dropdown, opens in new tab)
- **Credentials**: username: `adminjoe`, password: `joeportfolio12`
- **Auth persistence**: localStorage (persists across sessions)

### Admin Sections
- **Profile**: Name, title, bio, profile image upload
- **Social Links**: Instagram, LinkedIn, Behance, Gmail
- **Featured Artworks**: Add/remove featured pieces (up to 25MB images)
- **Showcases**: Create/edit/delete project showcases, add images, toggle visibility
- **Gallery**: Add/remove gallery images with category
- **Services**: Edit service titles and descriptions
- **About**: Quote, bio, location text, bio visibility toggle
- **Experience**: Add/edit/delete work history

### Admin Features
- Large image upload support (up to 25MB per image)
- Client-side image compression (resizes to max 2000px width)
- Upload progress indicator
- Confirmation modal before saving changes
- Toast notifications for actions
- Show/Hide toggle per showcase

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements (`<nav>`, `<section>`, `<main>`, `<footer>`)
- Always include `lang` attribute on `<html>`
- Use `aria-label` for accessibility on icon-only buttons
- Template literals for dynamic HTML generation in JavaScript

### CSS
- CSS custom properties for all colors, fonts, spacing
- Name variables in kebab-case: `--accent-color`
- Use `clamp()` for responsive typography
- Use `rem` for sizing, `em` for spacing
- Group related selectors; separate with blank lines
- Place media queries inline with relevant styles

### JavaScript
- Use `const` by default, `let` only when reassignment needed
- Avoid `var`
- Use strict equality (`===` and `!==`)
- Use template literals for string concatenation
- Use arrow functions for callbacks
- Use async/await for image processing

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| CSS classes | kebab-case | `.hero-content` |
| CSS variables | kebab-case | `--accent-color` |
| JS variables | camelCase | `profileImage` |
| JS functions | camelCase | `handleScroll` |
| HTML ids | kebab-case | `id="profile-upload"` |

## Data Storage

All portfolio data stored in localStorage:
- `portfolio_profile`: { name, title, bio, image }
- `portfolio_social`: { instagram, linkedin, behance, email }
- `portfolio_featured`: [{ id, src, title, category }]
- `portfolio_showcases`: [{ id, title, category, visible, images[] }]
- `portfolio_gallery`: [{ id, src, title, category }]
- `portfolio_services`: [{ title, description }]
- `portfolio_about`: { quote, bio, location, bioVisible }
- `portfolio_experience`: [{ company, role, period, description }]
- `portfolio_admin_auth`: boolean

## Image Handling

### Compression Settings
- Max width: 2000px
- JPEG quality: 85%
- Max file size: 25MB (before compression)

### Image Processing Flow
1. User selects file(s)
2. Check file size
3. If JPEG and under size limit, skip compression
4. Otherwise, resize and compress
5. Convert to base64 for localStorage
6. Show progress indicator

## Social Links

| Platform | URL |
|----------|-----|
| Instagram | https://www.instagram.com/ezii_yooow |
| LinkedIn | https://linkedin.com/in/iam-billycruzada/ |
| Behance | https://behance.net/billyjoeCrzGraphx |
| Gmail | billyjoecruzada12@gmail.com |

## Adding New Features

1. Read `SPEC.md` to understand the current design system
2. Ensure new styles use existing CSS custom properties
3. Follow the CSS structure guidelines
4. Test in multiple browsers (Chrome, Firefox, Safari)
5. Verify responsive behavior
6. Update `SPEC.md` with any new features
