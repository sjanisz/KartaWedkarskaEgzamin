This is UI app to preapre fishing exam candiates in Poland.

App provides a set of questions and answers to help users practice for the fishing exam.

The app includes only open questions without choice options.

App will be static app.

App language is polish.

Each functionality will be implemented in a separate page, pages can be switched using a top navigation bar menu (horizontal)

Functionalities below:
1. Gallery with fishes images with questions (in polish):
    - jak nazywa się ta ryba?
    - jaki jest okres ochronny tej ryby?
    - poniżej jakiego rozmiaru rybę należy wypuścić?
User can swap through gallery and if user clicks on image, the answer will be displayed below the image. Images will be stored in a local folder in the app.

---

## Developer conventions

- Code, comments, file names, variable names, and README must be written in **English**.
- UI text visible to the user must be in **Polish**.
- Keep changes minimal — do not refactor, add comments, or add features beyond what is requested.

## Tech stack

- **React 18** + **Vite 5** (static SPA, no backend)
- Plain CSS per component (no CSS framework, no CSS modules)
- No routing library — tab switching is handled via a `activeTab` state in `App.jsx`

## Project structure

```
ui/
├── index.html
├── vite.config.js
├── package.json
├── .gitignore
├── .gitattributes
├── README.md
└── src/
    ├── main.jsx          # React entry point
    ├── index.css         # Global reset and body styles
    ├── App.jsx           # Root component, tab state, renders active page
    ├── App.css
    ├── components/
    │   ├── Navbar.jsx    # Horizontal top navigation bar
    │   └── Navbar.css
    ├── pages/
    │   ├── GaleriaRyb.jsx   # Fish gallery page (functionality #1)
    │   └── GaleriaRyb.css
    └── data/
        └── fishes.js     # Fish data array (source of truth)
```

## Adding a new page / nav tab

1. Create `src/pages/MyPage.jsx` and `src/pages/MyPage.css`.
2. Add a new entry to the `tabs` array in `src/components/Navbar.jsx`.
3. Import the page in `src/App.jsx` and add a conditional render: `{activeTab === 'mypage' && <MyPage />}`.

## Fish data (`src/data/fishes.js`)

Each fish object has the following shape:

```js
{
  id: Number,
  image: null | '/images/filename.jpg',  // null until image is provided
  name: String,                           // Polish common name
  nazwaLacinska: String,                  // Latin name
  okresOchronny: String,                  // Protection period (Polish)
  wymiarOchronny: String,                 // Minimum size (Polish)
  informacjeDodatkowe: String,            // Extra exam-relevant info (Polish)
}
```

Fish images should be placed in `public/images/` and referenced as `/images/filename.jpg`.

Data source: Polish fishing regulations — Dz.U. 2018 poz. 2003 (§6 wymiary, §7 okresy), Dz.U. 2019 poz. 2168 (ustawa), Dz.U. 2016 poz. 2183 (ochrona gatunkowa).

## Dev server

```bash
npm install   # first time only
npm run dev   # starts at http://localhost:5173
```

