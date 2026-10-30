# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # React + TypeScript + Vite (with Tailwind, shadcn, Redux Toolkit)

  This template is a minimal, practical starting point for building React apps with Vite and TypeScript. It includes opinionated defaults for styling and state management so you can focus on building UI quickly:

  - Vite for fast dev server and bundling
  - TypeScript for type safety
  - Tailwind CSS for utility-first styling
  - shadcn-style component workflow (components.json present) for UI components that integrate with Tailwind
  - Redux Toolkit for predictable state management (store and hooks scaffolded)

  ## Quick start

  Prerequisites: Node 18+ and pnpm (or use npm/yarn if you prefer). From the project root:

  ```bash
  pnpm install
  pnpm dev    # start dev server with HMR
  pnpm build  # produce production build
  pnpm preview # preview production build locally
  ```

  If you use npm instead of pnpm, replace `pnpm` with `npm run` (or `npm install` where appropriate).

## What this template wires up

  - Vite dev server with React + TypeScript
  - Tailwind CSS utility classes are available in the project styles (see `src/index.css`) and ready to be customized
  - A basic Redux Toolkit store is scaffolded at `src/app/store.ts` and typed hooks are in `src/app/hooks.ts`
  - A sample feature slice is included at `src/features/sample-feature/sample-feature-slice.ts` to show how to structure slices
  - `components.json` is present for shadcn-style component configuration (useful when following the shadcn/ui workflow)

## Tailwind CSS

  Tailwind is configured and the base directives live in `src/index.css`. To customize Tailwind, look for the Tailwind config file at the project root (e.g. `tailwind.config.*`) — if present — and update the theme, plugins, or content paths.

  Common tasks:

  - Add new utility classes or extend the theme in the Tailwind config
  - Ensure component files (JS/TSX) are included in the `content` paths so Tailwind can tree-shake unused styles

## shadcn (component workflow)

  This template includes `components.json` which is commonly used with the shadcn/ui component workflow to manage component scaffolding and configuration. If you're using shadcn's tooling or generating UI components:

  - Keep generated components under `src/components` (or `src/ui`) to make them discoverable by your Tailwind config
  - Use the official shadcn/ui docs for generation commands and theming tips — the template is already structured to accept those components

  Note: this repo doesn't force a particular UI component directory — adapt paths to your preference.

## Redux Toolkit

  Redux Toolkit is set up with a small example. Key files:

  - `src/app/store.ts` — the configured Redux store
  - `src/app/hooks.ts` — typed `useAppDispatch` and `useAppSelector` hooks for convenience
  - `src/features/sample-feature/sample-feature-slice.ts` — example slice demonstrating `createSlice` and selectors

  Example usage in a component:

  ```tsx
  import { useAppDispatch, useAppSelector } from './app/hooks'
  import { increment } from './features/sample-feature/sample-feature-slice'

  const count = useAppSelector((s) => s.sampleFeature.value)
  const dispatch = useAppDispatch()

  // dispatch(increment())
  ```

  Add new slices under `src/features/your-feature` and register their reducers in `src/app/store.ts`.

## Project structure (key files)

  - `index.html` — app entry HTML
  - `src/main.tsx` — React entry point
  - `src/index.css`, `src/App.css` — global and app styles (Tailwind directives live here)
  - `src/app/store.ts` and `src/app/hooks.ts` — Redux Toolkit store and typed hooks
  - `src/features/*` — feature slices and local logic
  - `src/lib` — utilities
  - `components.json` — shadcn component configuration (if you use shadcn tooling)

## Linting & Type-checked rules

  The project includes an ESLint config. For type-aware linting in bigger apps, enable the type-checked ESLint configs and point parserOptions.project to `./tsconfig.app.json` and `./tsconfig.node.json` as shown in typical ESLint setups.

## Tips & next steps

  - If you plan to add more shadcn components, create `src/components` and update your Tailwind `content` paths
  - Write feature tests around slices in `src/features/*` when adding new Redux logic
  - If you need stricter linting, switch to type-checked ESLint rules and run the type-aware lint step in CI
