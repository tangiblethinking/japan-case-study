# International Expansion: Japan — Case Study
**Christopher Kenreigh — Product Design Leadership**

React + Vite case study. Deploy to Vercel at `uxapex.com/japan`.

## Setup
```bash
npm install
npm run dev       # localhost:5173
npm run build     # production build
```

## Adding images
All image slots live in `/public/images/`. In `src/pages/JapanCaseStudy.jsx`, update each section's `thumbSrc` and `imageSrc`:
```js
thumbSrc: '/images/01-thumb.jpg',
imageSrc: '/images/01-competitive-analysis.jpg',
```
Recommended filenames are in the section data comments.

## Deploy to Vercel
1. Push to GitHub: `tangiblethinking/japan-case-study`
2. Import to Vercel → Framework: Vite → Build: `npm run build` → Output: `dist`
3. In your main `Appprotoneov002` `vercel.json`, add:
```json
{ "source": "/japan/:path*", "destination": "https://japan-case-study.vercel.app/:path*" }
```

## AI Persona proxy URL
Update `vercel.json` route when the second case study is ready:
```json
{ "src": "/persona-platform", "dest": "https://uxapex.com/case-studies/ai-persona-platform" }
```

## PDS Components used
- `PorscheDesignSystemProvider` — wraps app
- `PModal` pattern → WelcomeModal, Lightbox
- `PSheet` pattern → DetailSheet
- `PTabsBar` pattern → tabs (div-based, zero stroke)
- `PTag` pattern → leadership tag (fill only, zero stroke)
- `PButtonPure` pattern → see more, nav name
- `PDivider` pattern → ink-rule hairlines
- Tokens: `--p-color-*`, `--p-spacing-*`, `--p-motion-*`
