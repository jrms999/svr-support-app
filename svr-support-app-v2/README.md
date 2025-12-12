# SVR Support App (Starter Repo)

Mobile-first PWA to support residents of Scottish Veterans Residences (SVR).

## Modules (MVP)
- Health & wellbeing directory (site-specific)
- Welfare & benefits guidance
- Legal support resources + templates
- Local help directory (per SVR site)
- Utilities: status + pay via Stripe Checkout
- Notices (read-only)

## Tech
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Firebase (Auth + Firestore)
- Stripe Checkout + Webhook (server-side)

## Local dev
From repo root:
```bash
npm install
npm run dev
```

Create `apps/web/.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...

STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
FIREBASE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}
FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Deploy
See `docs/vercel-deploy.md`.
