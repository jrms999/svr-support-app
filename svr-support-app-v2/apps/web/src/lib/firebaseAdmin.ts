import admin from "firebase-admin";

function getServiceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function getAdminApp() {
  if (admin.apps.length) return admin.app();

  const serviceAccount = getServiceAccount();
  const projectId =
    process.env.FIREBASE_PROJECT_ID ||
    (serviceAccount && serviceAccount.project_id) ||
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

  if (!serviceAccount) {
    throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_JSON env var.");
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId,
  });

  return admin.app();
}

export function db() {
  getAdminApp();
  return admin.firestore();
}
