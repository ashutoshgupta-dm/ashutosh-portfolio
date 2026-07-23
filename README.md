# Ashutosh Gupta Portfolio

Clean, read-only Vite + React portfolio.

## Local run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vercel settings:
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Admin panel
Open `/admin` on the deployed site. The owner credentials are checked in the browser using a SHA-256 password hash. Public visitors do not see an edit button.

Important: edits are stored in the current browser's localStorage. Use **Export JSON** to keep a backup; permanent changes for all visitors still require updating/redeploying the source code or connecting a backend.
