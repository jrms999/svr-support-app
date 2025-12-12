# Deploy to Vercel (Click-through PWA demo)

## Prereqs
- A GitHub repo containing this project
- Vercel account
- Stripe account (test mode is fine)
- Firebase project (Firestore enabled)

## 1) Create Stripe keys + webhook secret
1. In Stripe Dashboard (Test mode):
   - Create an API key: `STRIPE_SECRET_KEY`
2. Create a webhook endpoint pointing to:
   - `https://<your-vercel-domain>/api/stripe/webhook`
3. Select events:
   - `checkout.session.completed`
4. Copy webhook signing secret:
   - `STRIPE_WEBHOOK_SECRET`

## 2) Firebase Admin credentials (for server-side writes)
Create a service account in Firebase:
- Project Settings → Service Accounts → Generate new private key

Set as a Vercel env var:
- `FIREBASE_SERVICE_ACCOUNT_JSON` = the entire JSON key (minified)

Also set:
- `FIREBASE_PROJECT_ID` (same as in the JSON)
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` (for client reads)
- Optional: `NEXT_PUBLIC_APP_NAME=SVR Support`

## 3) Configure Firestore rules
Copy `firestore.rules` into Firebase console (or deploy via Firebase CLI later).

## 4) Deploy on Vercel
1. Import the GitHub repo into Vercel
2. Root Directory: **apps/web**
3. Build command: `npm run build`
4. Output: Next.js default
5. Add env vars (above)
6. Deploy

## 5) PWA install
Open the deployed site on mobile → “Add to Home Screen”.
