# Project Bolt

A modern React + Vite + Tailwind CSS web application for live webinars, featuring a countdown timer, session details, and a signup modal.

## Features
- Responsive UI with Tailwind CSS
- Countdown timer for next live Q&A
- Session cards with language and price
- Signup form modal
- Custom SVG and branding assets

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository or download the project files.
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` (default Vite port).

### Building for Production
```sh
npm run build
# or
yarn build
```

### Linting
```sh
npm run lint
# or
yarn lint
```

## Project Structure
- `src/` - Main source code
  - `components/` - React components (e.g., `TopBar`, `CountdownTimer`, `SignupForm`)
  - `atoms/` - UI primitives (buttons, cards, etc.)
  - `assets/` - Images and SVGs
  - `screens/` - Page-level components
  - `lib/` - Utility functions
- `public/` - Static files
- `index.html` - Main HTML file
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS config

## Customization
- Update session data and timer in `CountdownTimer.tsx`.
- Modify branding assets in `src/assets/`.
- Adjust styles using Tailwind utility classes.

## License
This project is for educational/demo purposes. Please customize and use as needed.
