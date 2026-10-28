# Quick-Fold Laundry Sorting Mat

**Live website:** [tylerframpton07.github.io/Creative-Website](https://tylerframpton07.github.io/Creative-Website/)

A product-concept landing page for Quick-Fold, a portable laundry sorting mat designed to make folding more manageable in dorms, small apartments, shared laundry rooms, and busy households.

The page presents the product's core differentiators from the venture strategy: flexible folding panels, magnetic latches, an anti-slip surface, and a portable format. Its interactive demo walks through placing a garment, folding the sides, and latching the finished stack.

## Local development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run build
```

## GitHub Pages

The site deploys from `main` to [the live Creative Website](https://tylerframpton07.github.io/Creative-Website/). Vite uses the `/Creative-Website/` base path, and the GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys `dist` on pushes to `main`.
