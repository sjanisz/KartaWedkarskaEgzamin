# Polish Fishing Exam App

A study aid for candidates preparing for the Polish fishing licence exam (karta wędkarska).

**Live app:** https://imekx.github.io/KartaWedkarskaEgzamin/

## Features

- **Fish gallery** — browse all fish with questions and reveal answers on click
- **Alphabetical / random order** — toggle sort mode
- **Expandable fish list panel** — side panel with all fish, dockable in 50/50 split view
- **Keyboard navigation** — use ← → arrow keys to switch fish
- **Reveal all answers** — checkbox to keep all answers permanently visible
- **Useful links** — curated links to exam materials and practice tests

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/) (v18 or higher)

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

App available at **http://localhost:5173**.  
Changes hot-reload automatically (HMR).

### Stop the server

Press `Ctrl+C` in the terminal running `npm run dev`.

## Available commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server (localhost:5173) |
| `npm run build` | Build for production into the `dist/` folder |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

## GitHub Pages deployment

The app is configured for GitHub Pages at `/KartaWedkarskaEgzamin/` (set via `base` in `vite.config.js`).

### First-time setup

1. Install the deploy tool (already done if `gh-pages` is in devDependencies):
   ```bash
   npm install --save-dev gh-pages
   ```

2. Ensure `package.json` has these scripts (already configured):
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. In your GitHub repo → **Settings** → **Pages**:
   - Source: **Deploy from a branch**
   - Branch: `gh-pages` / `/ (root)`
   - Save

### Deploy / redeploy

```bash
npm run deploy
```

Builds the app and pushes `dist/` to the `gh-pages` branch automatically.  
The site will be live at `https://imekx.github.io/KartaWedkarskaEgzamin/`.

> **Note:** The `gh-pages` branch only contains built output — never edit it manually.  
> It will always be behind `main` in commit history — this is expected.

### Force redeploy (no code changes)

If GitHub Pages didn't pick up the latest push:

```bash
npx gh-pages -d dist --message "Force redeploy"
```

Or go to repo → **Settings** → **Pages**, switch branch away and back to `gh-pages`.

## Adding fish images

Place images in `public/images/` and update the `image` field in `src/data/fishes.js`:

```js
image: '/images/filename.JPG',
```

## Project structure

```
ui/
├── public/images/        # Fish images (served as static assets)
├── src/
│   ├── App.jsx           # Root component, tab routing
│   ├── components/
│   │   └── Navbar.jsx    # Top navigation bar
│   ├── pages/
│   │   ├── GaleriaRyb.jsx    # Fish gallery (main page)
│   │   └── PrzydatneLinki.jsx # Useful links page
│   └── data/
│       └── fishes.js     # Fish data (source of truth)
├── vite.config.js
└── package.json
```

