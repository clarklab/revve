# Revve - Financial AI Company Website

## Tech Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Project Structure
```
/revve
├── src/
│   ├── app/                    # Pages & layouts (App Router)
│   │   ├── layout.tsx          # Root layout (navbar, footer)
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Tailwind theme & global styles
│   │   ├── about/
│   │   ├── pricing/
│   │   └── privacy-policy/
│   └── components/
│       ├── elements/           # UI primitives (buttons, headings, etc.)
│       ├── icons/              # Icon components
│       └── sections/           # Page sections (heroes, footers, etc.)
├── public/
│   └── img/
│       ├── logos/              # Brand logos (SVG)
│       ├── avatars/            # Team/testimonial avatars
│       ├── photos/             # Marketing photos
│       └── screenshots/        # Product screenshots
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Key Files
- **Styles/Theme**: `src/app/globals.css` (fonts, colors)
- **Layout**: `src/app/layout.tsx` (navbar, footer, metadata)
- **Home**: `src/app/page.tsx`

## Fonts
- **Display** (headings): Instrument Sans
- **Body**: Inter

## Commands
```bash
npm install
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build
npm run start   # Start production server
```

## Images & Logos
Put images in `public/img/`:
- **Logos**: `public/img/logos/` - Brand logos in SVG format
- **Photos**: `public/img/photos/` - Marketing/hero images
- **Avatars**: `public/img/avatars/` - Team/testimonial headshots
- **Screenshots**: `public/img/screenshots/` - Product UI screenshots

Reference in code as `/img/logos/logo.svg` (no `public` prefix).

## CMS Integration Notes
Content is currently hardcoded in page components. Key places to connect CMS:
- `src/app/page.tsx` - Hero, features, testimonials, FAQs, pricing
- `src/app/about/page.tsx` - Team, company info
- `src/app/pricing/page.tsx` - Pricing tiers
- `src/app/layout.tsx` - Navigation links, footer content
