import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-4">
      <Link href="/" className="text-sm underline">← Back</Link>
      <h1 className="text-2xl font-bold">Account</h1>
      <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
        <li>Accessibility preferences (phase 2)</li><li>Contact support</li><li>Log out</li>
      </ul>
      <p className="text-xs text-gray-500">Demo content – replace with Firestore-driven resources.</p>
    </main>
  );
}
