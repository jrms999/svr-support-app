import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { requiredEnv } from "@/lib/env";
import { db } from "@/lib/firebaseAdmin";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(requiredEnv("STRIPE_SECRET_KEY"), {
    apiVersion: "2024-06-20",
  });

  const signature = req.headers.get("stripe-signature");
  if (!signature) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      requiredEnv("STRIPE_WEBHOOK_SECRET")
    );
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const uid = session.metadata?.uid;
      const amountTotal = session.amount_total ?? null;

      if (uid) {
        const firestore = db();
        const paymentRef = firestore.collection("utilityPayments").doc(session.id);

        await paymentRef.set(
          {
            uid,
            stripeSessionId: session.id,
            amountPence: amountTotal,
            currency: session.currency,
            status: session.payment_status,
            createdAt: new Date().toISOString(),
          },
          { merge: true }
        );

        // Optional: update a per-user summary doc
        await firestore.collection("utilityAccounts").doc(uid).set(
          {
            lastPaymentSessionId: session.id,
            lastPaymentAt: new Date().toISOString(),
            lastPaymentAmountPence: amountTotal,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      }
    }

    return NextResponse.json({ received: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Webhook handler failed" }, { status: 500 });
  }
}
