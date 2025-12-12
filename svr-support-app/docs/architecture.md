# Architecture Overview

## Frontend
- Next.js PWA
- Route-based modules for each support area

## Backend
- Firebase Auth for authentication
- Firestore for content + utility data
- Cloud Functions for Stripe integration

## Payments
- Stripe Checkout redirect
- Webhook updates Firestore payment records

## Security
- Firestore security rules by role
- No sensitive health data stored
