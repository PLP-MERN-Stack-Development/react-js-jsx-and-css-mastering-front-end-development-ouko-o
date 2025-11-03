# PLP: React, JSX, and CSS — Mastering Front-End Development

This is my submission for the PLP assignment. The app is a simple Task Manager with dark mode, an API posts viewer (English content), reusable UI components, and Tailwind styling.

## Features
- Task management with localStorage persistence (add, complete, delete, filter)
- Dark/Light mode toggle (persisted)
- Posts feed with search and pagination (English dataset)
- Reusable components: `Button`, `Card`, `Navbar`, `Footer`, `Layout`
- Tailwind CSS styling with class-based dark mode

## Tech Stack
- React 18 + Vite
- Tailwind CSS 3
- ESLint

## Getting Started

### Prerequisites
- Node.js LTS and npm installed

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build
```bash
npm run build
```
The production build will be output to `dist/`.

## Project Structure
```
src/
  components/
    ApiDataDisplay.jsx
    Button.jsx
    Card.jsx
    Footer.jsx
    Layout.jsx
    Navbar.jsx
    TaskManager.jsx
  context/
    ThemeContext.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Screenshots
Add screenshots to demonstrate key features and reference them here.

- Screenshots directory suggestion: `public/screenshots/`
- Example embeds (replace with your actual files):

```md
![Home - Light](public/screenshots/home-light.png)
![Home - Dark](public/screenshots/home-dark.png)
![Tasks](public/screenshots/tasks.png)
![Posts](public/screenshots/posts.png)
```

## Deployment
You can deploy using Vercel, Netlify, or GitHub Pages. Vercel/Netlify is recommended for Vite apps.

### Deploy to Vercel (recommended)
1. Push your code to the GitHub Classroom repository.
2. Go to `https://vercel.com` and create/log in to your account.
3. Import Project ➜ Select your GitHub repo ➜ Framework Preset: "Vite".
4. Build Command: `npm run build`, Output Directory: `dist`.
5. Deploy and wait for the URL.

### Deploy to Netlify
1. Push your code to GitHub.
2. Go to `https://app.netlify.com` ➜ Add new site ➜ Import from Git.
3. Pick your repo. Build command: `npm run build`, Publish directory: `dist`.
4. Deploy and copy the site URL.

### Deploy to GitHub Pages (optional)
If you prefer GitHub Pages, you will need to serve the `dist` folder and may need to configure `vite.config.js` `base` if your repo is not at the root. Using Vercel/Netlify is simpler.

## Deployed URL
Paste your live URL here after deployment:

- Live Demo: <YOUR_DEPLOYED_URL>

## Autograding and Submission
- This repository contains all project files required by the assignment.
- The app builds successfully (`npm run build`).
- The README includes setup instructions, screenshots section, and the deployed URL.
- Push your commits; GitHub Classroom will run the autograder.

## Scripts
- `npm run dev` – start development server
- `npm run build` – build for production
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Notes
- API posts are fetched from DummyJSON (`https://dummyjson.com/posts`) to ensure English content.
- Dark mode is class-based and persisted in localStorage.
