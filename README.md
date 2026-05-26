
# Shoplink | MaGi - Product Detail Page (Phase 1)

## Overview
Phase 1 delivers the initial layout and image gallery for a high-end fashion
product detail page template. The design is minimalist, mobile-first, and
production-ready, featuring a responsive split layout and interactive gallery.

## Quick Start
1. Open `index.html` directly in your browser.
2. Edit product text, prices, and image URLs inside `index.html` as needed.

## File Structure
- `index.html` - Semantic HTML for layout, gallery, and product details.
- `style.css` - CSS variables, layout system, and visual styling.
- `main.js` - Gallery interactions and Add to Cart demo logging.

## Design System
### Colors (CSS Variables)
- `--color-text`: #1F2937 (Deep Luxe Charcoal)
- `--color-accent`: #E11D48 (Rich Coral Gold)
- `--color-bg`: #FAFAFA (Pure Soft Cream)
- `--color-border`: #E5E7EB (Subtle borders)

### Typography
- Primary font: "Sora" (Google Fonts), modern sans-serif
- Responsive headings using `clamp()` for fluid scaling

### Spacing & Layout
- Mobile-first single column layout
- Desktop split layout at 768px breakpoint
- Generous spacing using a scale of CSS custom properties

## Gallery Behavior
- Clicking a thumbnail updates the main image
- Active thumbnail shows a highlighted border
- Smooth fade transitions on image change

## Customization
- Replace image URLs in the thumbnail `data-full` attributes
- Update product content in `index.html`
- Adjust colors in `style.css` under the `:root` variables

## Future Phases (Suggested)
- Size and color variant selectors
- Reviews and ratings module
- Related products carousel

