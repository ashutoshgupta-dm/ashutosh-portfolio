FINAL PORTFOLIO FIX

Public URL:
- Completely view-only.
- No Edit Projects or Admin Portal link is visible.

Owner editing:
- Open /admin manually after the live domain, for example:
  https://your-domain.vercel.app/admin
- Sign in with the authorized owner email.
- Firestore security rules still enforce owner-only writes.

Profile image:
- Uses object-fit: contain with internal padding and a dark circular background.
- This keeps the face, hair, neck and upper shoulders visible without zoom-cropping.

Deployment:
- Upload/replace the full project in GitHub.
- Keep package.json.
- Do not add bun.lock or an incompatible package-lock.json.
- Vercel: Framework Vite, Build Command npm run build, Output dist.
