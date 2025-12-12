# Scottish Tech Army – Project Request Submission (Copy/Paste)

Use the Scottish Tech Army **Charity Help Request Form** to submit this project. citeturn0search1turn0search5

## Organisation
Scottish Veterans Residences (SVR) – supported accommodation for former members of the UK Armed Forces (three sites in Scotland).

## Primary contact
John Sutherland (resident liaison / product owner from user side)
Email: jrms999@gmail.com
Location: Glasgow

## The challenge / problem
SVR residents (often vulnerable, isolated, neurodiverse, or trauma-affected) currently rely on noticeboards, paper letters, and ad-hoc communication to access essential information and pay weekly utilities. This causes confusion, missed support, and preventable arrears.

## Proposed solution
A simple, secure, mobile-first **resident support hub (PWA)** that centralises:
- Health & wellbeing signposting (site-specific)
- Welfare & benefits guidance (plain English)
- Legal support signposting + template letters (information only)
- Local help directory per SVR site
- Notices (read-only MVP)
- Utilities: balance/status + “Pay now” using Stripe Checkout

## MVP scope (deliverable)
- Next.js PWA deployed on Vercel
- Stripe Checkout payment flow + webhook
- Firebase Firestore for content + utility account summaries
- Firestore security rules (role-based)
- Basic admin path for later (phase 2)

## Impact / outcomes
- Reduced utility arrears through clarity + easy payment
- Faster access to crisis contacts and local services
- Less staff time answering repetitive questions
- More consistent communication across all SVR sites

## What we need from STA
- UX review (trauma-informed / accessibility)
- Full-stack build support (Next.js + Firebase + Stripe)
- Guidance on data governance, safeguarding, and handover

## Constraints / risks
- Must store **no medical records**
- Keep the interface minimal and plain-English
- Ensure least-privilege security and clear disclaimers

## Evidence of readiness
We already have:
- Product brief + low-fi wireframes outline
- Starter GitHub repo with modules scaffolded
- Proposed data model + security rules
- Stripe Checkout + webhook skeleton code

## Links
SVR: https://www.svronline.org/
Repo: (insert your GitHub link after upload)
