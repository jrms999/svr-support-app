
import * as functions from "firebase-functions";

export const healthCheck = functions.https.onRequest((req, res) => {
  res.send("SVR Support App backend running");
});
