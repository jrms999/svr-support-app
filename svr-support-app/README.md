# SVR Support App

A mobile-first Progressive Web App (PWA) built to support residents of Scottish Veterans Residences (SVR).

## Purpose
Centralise access to:
- Health & wellbeing support
- Welfare & benefits guidance
- Legal resources
- Local help by SVR site
- Utility payments and status
- Notices from SVR staff

## Tech Stack
- Next.js (React, TypeScript)
- Firebase (Auth, Firestore, Cloud Functions)
- Stripe (utility payments)
- Tailwind CSS
- Hosted on Vercel + Firebase

## MVP Scope
Read-only support content, secure resident login, utilities payment via Stripe redirect.

## Getting Started
1. `npm install`
2. Add Firebase config to `.env.local`
3. `npm run dev`

## Safeguarding
No medical records stored. Least-privilege access by role.
