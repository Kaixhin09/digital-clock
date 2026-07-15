# Digital Clock

Digital Clock is a small, modern clock built with Vite + React and styled with a responsive glassmorphism theme.

## Features
- Responsive, large numeric clock display
- Modern CSS design (variables, gradients, glass effect)
- Easy to extend (theme toggle, extra info chips)

## Quick Start

Prerequisites: Node.js (16+) and npm.

Install and run locally:

```bash
npm install
npm run dev
```

Open the URL shown by Vite (usually http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

- `index.html` — app entry
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — main UI wrapper
- `src/Clock.jsx` — clock component (time logic)
- `src/App.css` — main stylesheet (modern glass/gradient theme)
- `public/` — static assets

## Customization
- Edit `src/App.css` to change colors, spacing, or typography.
- `src/Clock.jsx` contains time formatting and display logic if you want to add locales, alarms, or seconds toggles.

## Deployment
This project builds to static assets. Deploy the `dist/` folder to Netlify, Vercel, GitHub Pages, or any static host.

## Contributing
Issues and PRs welcome. Keep changes focused and include a brief description of intent.

## License
MIT
