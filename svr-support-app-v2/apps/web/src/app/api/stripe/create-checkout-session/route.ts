import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { requiredEnv } from "@/lib/env";

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(requiredEnv("STRIPE_SECRET_KEY"), {
      apiVersion: "2024-06-20",
    });

    const body = await req.json();
    const uid = String(body?.uid || "");
    const amountPence = Number(body?.amountPence || 0);
    const description = String(body?.description || "SVR Utilities");

    if (!uid) return NextResponse.json({ error: "Missing uid" }, { status: 400 });
    if (!Number.isFinite(amountPence) || amountPence < 50) {
      return NextResponse.json({ error: "Invalid amountPence" }, { status: 400 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: { name: description },
            unit_amount: amountPence,
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/utilities?success=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/utilities?canceled=1`,
      metadata: { uid },
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
