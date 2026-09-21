# pranavbhalerao.me

Personal website for Pranav Bhalerao, built with React + Vite.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

GitHub Actions deploys the `dist/` output to GitHub Pages using `.github/workflows/deploy.yml`.

Custom domain is preserved via:

- root `CNAME`
- `public/CNAME` (included in production build)
