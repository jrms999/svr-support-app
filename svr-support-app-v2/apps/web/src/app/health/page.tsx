import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-4">
      <Link href="/" className="text-sm underline">← Back</Link>
      <h1 className="text-2xl font-bold">Health & Wellbeing</h1>
      <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
        <li>NHS 24 / urgent help links (site-specific)</li><li>Veterans mental health charities</li><li>Crisis contacts: Samaritans etc.</li><li>No medical records are stored in-app</li>
      </ul>
      <p className="text-xs text-gray-500">Demo content – replace with Firestore-driven resources.</p>
    </main>
  );
}
