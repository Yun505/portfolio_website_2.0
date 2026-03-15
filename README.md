# Egg-Themed Portfolio

A delightful portfolio website inspired by my daily breakfast routine. I eat eggs every morning—scrambled, boiled, sunny side up, fried, you name it. Currently obsessed with boiled eggs, and my all-time favorite is "drug eggs" (Korean marinated eggs) that I make at home. Century eggs are still on my bucket list!

## Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool with HMR
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Netlify** - Hosting

## Project Structure
```
src/
├── assets/
│   └── images/          # Project images
│       └── index.js     # Image exports
├── components/
│   ├── Egg.jsx          # Egg button component
│   ├── EggGrid.jsx      # Portfolio grid
│   └── Tray.jsx         # Layout wrapper
├── pages/
│   ├── Landing.jsx      # Home with egg illustration
│   ├── About.jsx        # About me (egg-themed profile card)
│   └── Portfolio.jsx    # Project showcase
└── data/
    └── portfolio.json   # Project data
```

## Features

- Egg-shaped navigation buttons (Yolk, Egg Whites, Shell)
- Soft pastel egg-themed color palette
- Animated portfolio grid with fried egg cards
- Responsive design that works on all devices

## Local Development
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
npm run preview
```

## Deployment

Hosted on Netlify. In the future will add automatic deployments from the main branch. 

---

Built with React + Vite for fast HMR and optimized builds.
