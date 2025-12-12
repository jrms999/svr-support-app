import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-4">
      <Link href="/" className="text-sm underline">← Back</Link>
      <h1 className="text-2xl font-bold">Welfare & Benefits</h1>
      <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
        <li>Plain-English guides (Universal Credit, housing support, etc.)</li><li>Signposting to Citizens Advice / council support</li><li>Veteran-specific entitlements and charities</li>
      </ul>
      <p className="text-xs text-gray-500">Demo content – replace with Firestore-driven resources.</p>
    </main>
  );
}
