# Architecture Overview (MVP)

## Frontend
- Next.js (App Router) + TypeScript + Tailwind
- PWA via `public/manifest.json` and installable on mobile
- Module routes:
  - `/health`, `/welfare`, `/legal`, `/local`, `/notices`, `/utilities`

## Backend (MVP)
- Stripe Checkout handled via Next.js API routes:
  - `POST /api/stripe/create-checkout-session`
  - `POST /api/stripe/webhook`
- Firestore is the system of record for:
  - `resources` (directories / content)
  - `notices` (announcements)
  - `utilityAccounts` (per-resident summary)
  - `utilityPayments` (Stripe payment records)

## Payment flow
1. Resident taps “Pay now” → create Checkout Session
2. Stripe redirects resident to payment page
3. Stripe posts webhook `checkout.session.completed`
4. Webhook writes payment record to Firestore using Firebase Admin SDK

## Security
- Firestore rules allow:
  - Public reads of generic resources/notices (can be tightened)
  - Residents read only their own `utilityAccounts` + `utilityPayments`
  - Staff write resources/notices/utilityAccounts
- Webhook writes use Admin SDK (bypasses rules)

## Environment variables
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- FIREBASE_SERVICE_ACCOUNT_JSON
- FIREBASE_PROJECT_ID
- NEXT_PUBLIC_FIREBASE_* (client config)
- NEXT_PUBLIC_APP_URL (success/cancel URLs)
