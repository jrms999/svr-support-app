"use client";

import Link from "next/link";
import { useState } from "react";

export default function Utilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function payNow() {
    setLoading(true);
    setError(null);
    try {
      // In MVP demo we don't require auth; we pass a placeholder uid.
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: "demo-user",
          amountPence: 1500, // £15.00 demo
          description: "SVR Utilities (Demo)",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to create checkout session");
      window.location.href = data.url;
    } catch (e: any) {
      setError(e?.message || "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <main className="space-y-4">
      <Link href="/" className="text-sm underline">← Back</Link>
      <h1 className="text-2xl font-bold">Utilities & Payments</h1>

      <div className="rounded-2xl border p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Weekly charge</span>
          <span className="font-medium">£15.00 (demo)</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Current balance</span>
          <span className="font-medium">£0.00 (demo)</span>
        </div>
        <div className="text-sm">
          <span className="text-gray-600">Status:</span>{" "}
          <span className="inline-block rounded-full border px-2 py-0.5 text-xs">Paid (demo)</span>
        </div>
      </div>

      <button
        onClick={payNow}
        disabled={loading}
        className="w-full rounded-2xl border px-4 py-3 text-sm font-semibold shadow-sm disabled:opacity-60"
      >
        {loading ? "Redirecting to Stripe…" : "Pay now"}
      </button>

      {error && <div className="text-sm text-red-600">{error}</div>}

      <p className="text-xs text-gray-500">
        Demo only. In production this would show your real balance and payment history (from Firestore),
        and require login.
      </p>
    </main>
  );
}
