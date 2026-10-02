# SVR Support App

A mobile-first support-service prototype for residents of Scottish Veterans Residences (SVR).

## Repository status

This repository is an early portfolio prototype and is **not an official SVR service**. It must not be used for live resident, medical, welfare, identity, utility, or payment data.

The most recent implementation is in:

- `svr-support-app-v2/` — current Next.js/Firebase/Stripe prototype
- `svr-support-app/` — older starter scaffold retained for comparison

Keeping two application trees makes the repository harder to understand and maintain. The next consolidation should preserve the v2 history, move it to the repository root, and archive the older scaffold in a tag or separate legacy branch. No files have been removed as part of this documentation update.

## Intended MVP

- Site-specific health and wellbeing directory
- Welfare, benefits, and legal-support resources
- Local help directory
- Notices
- Utility status and payment workflow
- Accessible, mobile-first interface

## Safeguarding and security boundaries

Before any real-world pilot:

- Do not store medical records or sensitive case notes.
- Do not trust a user ID, resident ID, account ID, or payment amount supplied by the browser.
- Resolve identity and permitted accounts on the server from the authenticated session.
- Resolve payment amounts from a trusted server-side bill record.
- Verify Stripe webhook signatures and make webhook handling idempotent.
- Apply least-privilege Firestore rules and test them with the Firebase emulator.
- Separate staff and resident permissions and retain an audit trail for staff changes.
- Add privacy, retention, incident-response, and accessibility reviews.
- Use synthetic data only until governance and security approval exist.

## Recommended next steps

1. Consolidate the v2 application at the repository root without deleting history.
2. Disable or clearly mock payment creation until server-side identity and bill validation are complete.
3. Add an `.env.example` containing names only—never credentials.
4. Add automated tests for authorization, Firestore rules, payment tampering, and webhook replay.
5. Add CI for linting, type checking, tests, dependency review, and secret scanning.
6. Document exactly which screens and integrations are implemented versus planned.

## Original sprint outline

1. Authentication, site selection, and dashboard skeleton
2. Health, welfare, legal, and local content modules
3. Read-only notices and utility status
4. Stripe Checkout, webhook processing, and payment history
5. Accessibility, security rules, deployment, and handover

The separate [SVR repository](https://github.com/jrms999/SVR) currently holds concept and planning material. A later cleanup should choose one canonical project repository and link or archive the other rather than maintaining two competing entry points.
