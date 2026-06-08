# bookstore-ui

React + Vite frontend for the Enterprise Book Store platform.

## Tech Stack

- **React 18** — UI library
- **Vite 5** — build tool & dev server
- **React Router 6** — client-side routing
- **Redux Toolkit** — global state management
- **Tailwind CSS 3** — utility-first styling

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file and fill in values
cp .env.example .env.local

# 3. Start the dev server (http://localhost:3000)
npm run dev
```

## Environment Variables

| Variable            | Description                            |
|---------------------|----------------------------------------|
| `VITE_API_URL`      | Base URL for the Django REST backend   |
| `VITE_ANALYTICS_URL`| Base URL for the FastAPI microservice  |

## Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Start development server             |
| `npm run build` | Production build → `dist/`           |
| `npm run lint`  | Run ESLint                           |
| `npm run preview` | Serve the production build locally |

## Deployment Target

**Vercel** — configuration in `vercel.json`.
All routes rewrite to `index.html` (SPA routing).

## Project Structure

```
src/
├── assets/          Static assets (images, fonts)
├── components/      Shared UI components
│   ├── common/      Generic reusables (Button, Input, Modal…)
│   ├── layout/      Structural pieces (Navbar, Footer, Sidebar…)
│   └── ui/          Design-system primitives
├── hooks/           Custom React hooks
├── layouts/         Page layout wrappers
├── pages/           Route-level page components
├── routes/          React Router configuration
├── services/        API client and service modules
├── store/           Redux store, slices, and thunks
├── types/           JSDoc type definitions
└── utils/           Pure utility/helper functions
```

## Phase 0 Status

Foundation skeleton only. No business logic implemented yet.
All pages render placeholder content with TODO comments.
