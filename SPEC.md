# Billy Joe Cruzada Portfolio - Design Specifications

## Concept & Vision

A bold, modern portfolio for **Billy Joe Cruzada**, a graphic designer specializing in brand identity, digital design, generative AI, and creative direction. The site features a striking dark theme with vibrant orange-to-pink gradient accents, creating a visually memorable experience. Includes NSFW content handling for generative AI projects.

## Design Language

### Color Palette

| Variable | Hex | Usage |
|----------|-----|-------|
| --bg-primary | #1A1A1A | Main background |
| --bg-secondary | #252525 | Card backgrounds |
| --bg-tertiary | #2A2A2A | Navigation, inputs |
| --text-primary | #FFFFFF | Headings, primary text |
| --text-secondary | #B0B0B0 | Body text |
| --accent-pink | #FF1493 | Gradient end, highlights |
| --accent-orange | #FF6B00 | Gradient start, icons |
| --accent-red | #E91E63 | Buttons, CTAs, NSFW |
| --accent-yellow | #FFA500 | Graphical elements |

### Gradient Definitions
```
--gradient-brand: linear-gradient(135deg, #FF6B00, #FF1493);
```

### Typography
- Headings: Poppins (600, 700, 800)
- Body: Roboto (400, 500)

## Layout & Structure

### Navigation (Floating Bar)
- Position: Fixed top center, 32px from top
- Style: Horizontal pill/bar with curved ends (border-radius: 50px)
- Items: Work | Showcases | Moodboard | About | Services | Contact (dropdown)
- Gradient border using --gradient-brand

### Page Sections
1. Hero - Full viewport, profile image, name, title, intro, stats
2. Featured Artworks - 6 curated pieces in grid
3. Project Showcases - Grid of project showcases with 2+1 image preview
4. Gallery/Moodboard - Filterable grid of photography works
5. About - Profile image, bio, experience highlights
6. Services - 4 service cards
7. Softwares & Tools - Icon grid of tools used
8. Contact - Form + social links
9. Footer - Social icons, copyright

## Features

### Project Showcases
- Grid layout with 3 columns (responsive)
- Each showcase: 2+1 image grid preview
- Title and tools badges displayed below each showcase
- Click opens lightbox with all images
- Show/Hide toggle per showcase
- NSFW projects are blurred with 🌶 +18 badge

### NSFW Content Handling
- Per-showcase NSFW flag
- Blurred thumbnails on main page
- 🌶 +18 badge overlay on NSFW showcases
- Clicking blurred showcase shows warning modal:
  - Title: "OFM AI Contents"
  - Warning message about explicit content
  - Checkbox: "Are you familiar with OFM/Fanvue related contents?"
  - Green "Proceed" button (disabled until checkbox ticked)
  - Red "Go Back" button
- Consent stored in sessionStorage (per session)

### Text Show/Hide Toggle
- Eye icon button next to editable text sections
- Click to toggle visibility
- State persisted in localStorage

### Gallery/Moodboard
- Filter tabs: All | Portraits | Food | Street | Sports
- Click opens lightbox modal
- 15 photography images

### Lightbox
- Full-screen image viewing
- Navigation arrows (previous/next)
- Keyboard support (Escape, Arrow keys)
- Tools badges displayed for showcase images
- Counter showing position (e.g., "1 / 9")

### Large Image Upload
- Support for up to 8MB per image
- Client-side compression (max 2000px width, 85% JPEG quality)
- Progress indicator

### Confirmation Modal
- Shows summary of changes before saving
- Cancel or Confirm options

## Softwares & Tools

| Tool | Display | Brand Colors |
|------|---------|-------------|
| Adobe Photoshop | SVG icon | Navy #001833 + Light Blue #31A8FF |
| Adobe Illustrator | SVG icon | Orange #FF9A00 |
| Adobe Premiere Pro | SVG icon | Purple #9999FF |
| Adobe Lightroom | SVG icon | Navy + Light Blue |
| DaVinci Resolve | SVG icon | Orange/Red gradients |
| Figma | Inline SVG | Multi-color |
| Higgsfield | SVG icon | Lime Green + Black |
| ComfyUI | SVG icon | Yellow #F0FF41 |
| Seedream | Text badge | Gradient brand color |
| Nano Banana | Text badge | Gradient brand color |
| Kling Motion | Text badge | Gradient brand color |

## Social Links (Default)

| Platform | URL |
|----------|-----|
| Instagram | https://www.instagram.com/ezii_yooow |
| LinkedIn | https://linkedin.com/in/iam-billycruzada/ |
| Behance | https://behance.net/billyjoeCrzGraphx |
| Gmail | billyjoecruzada12@gmail.com |

## Admin Panel (admin.html)

### Access
- URL: /admin.html (opens in new tab from main nav dropdown)
- Credentials: username: adminjoe, password: joeportfolio12
- Auth persistence: localStorage (persists across sessions)

### Admin Dashboard Sections
- Profile: Name, title, profile picture upload, brief intro
- Social Links: Instagram, LinkedIn, Behance, Gmail
- Featured Artworks: Add/remove images (up to 8MB each)
- Showcases: Create/edit/delete showcases, add images, toggle visibility, mark as NSFW
- Gallery: Add/remove images with category (portrait, food, street, sports)
- Services: Edit service titles and descriptions
- About: Quote, bio, location, bio visibility toggle
- Experience: Add/edit/delete work history

### Showcase Creation Form
- Project Title input
- Category dropdown (Branding, Digital Art, Photography, Print, Editorial, Generative AI, Food Product Design, Health & Wellness, Other)
- Tools Used input (comma separated)
- Show on landing page toggle
- Mark as +18/NSFW toggle (content will be blurred on main page)
- Multiple image upload

## Data Storage

### localStorage Keys
- portfolio_profile: { name, title, bio, image }
- portfolio_social: { instagram, linkedin, behance, email }
- portfolio_featured: [{ id, src, title, category }]
- portfolio_showcases: [{ id, title, category, tools[], isNSFW, visible, images[] }]
- portfolio_gallery: [{ id, src, title, category }]
- portfolio_services: [{ title, description }]
- portfolio_about: { quote, bio, location, bioVisible }
- portfolio_experience: [{ company, role, period, description }]
- portfolio_admin_auth: boolean

### sessionStorage Keys
- nsfw_consent_{showcaseId}: boolean (per session NSFW consent)

## Image Sources

### Elements Folder Structure
```
Elements/
├── Photography/           # Moodboard images (21 images)
│   ├── DSCF6543.jpg
│   ├── DSCF6602.jpg
│   ├── Julia re processed...
│   ├── 1x1 format IG...
│   ├── 2x3 format IG...
│   ├── Food Samgy...
│   └── etc.
├── Designs/
│   ├── Food Product Design/
│   │   └── Kamote Chips branding (4 images)
│   ├── Health and Wellness/
│   │   └── Passiflora perfume (7 images)
│   └── Print Designs/
│       └── Nmax, shirts (6 images)
└── 🌶OFM - Generative AI (Explicit)/
    └── NSFW showcase images
```

## Technical Approach

### File Structure
- index.html - Main portfolio (public)
- admin.html - Admin panel (opens in new tab)
- styles.css - Shared styles
- script.js - Main site functionality
- admin.js - Admin panel functionality
- SPEC.md - Design specifications
- AGENTS.md - Agent guidelines
- Billy ID.jpg - Profile photo
- SVG Logos/ - Software icon SVGs
- Elements/ - Source images for portfolio
- images/ - Admin uploaded images

### Key CSS Classes
- .nsfw-modal - NSFW warning modal
- .nsfw-modal.active - Show modal
- .nsfw-blur - Blur filter for NSFW thumbnails
- .nsfw-badge-overlay - Badge overlay container
- .nsfw-badge-text - Badge text styling
- .showcase-tools - Tools badges container
- .showcase-tool-badge - Individual tool badge
- .tool-svg - SVG icon sizing
- .tool-text-badge - Text badge styling
- .lightbox-tool-badge - Lightbox tools display

### JavaScript Functions
- showNSFWModal(showcase) - Display NSFW warning modal
- hideNSFWModal() - Hide modal and reset state
- renderShowcases() - Render showcases with blur/badges
- compressImage(file) - Image compression for uploads
