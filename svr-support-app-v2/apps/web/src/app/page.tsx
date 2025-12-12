import Link from "next/link";

const Tile = ({ href, title }: { href: string; title: string }) => (
  <Link
    href={href}
    className="rounded-2xl border p-4 shadow-sm active:scale-[0.99]"
  >
    <div className="text-base font-semibold">{title}</div>
    <div className="mt-1 text-sm text-gray-600">Open</div>
  </Link>
);

export default function Home() {
  return (
    <main className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">SVR Support</h1>
        <p className="text-sm text-gray-600">
          A simple resident hub for health, welfare, legal help, local services, notices, and utilities.
        </p>
      </header>

      <div className="rounded-2xl border p-3 text-sm">
        <div className="font-semibold">Alert</div>
        <div className="text-gray-600">Utility payment reminder (demo).</div>
      </div>

      <section className="grid grid-cols-2 gap-3">
        <Tile href="/health" title="Health & Wellbeing" />
        <Tile href="/welfare" title="Welfare & Benefits" />
        <Tile href="/legal" title="Legal Support" />
        <Tile href="/local" title="Local Help" />
        <Tile href="/utilities" title="Utilities & Payments" />
        <Tile href="/notices" title="Notices" />
      </section>

      <footer className="pt-2 text-xs text-gray-500">
        MVP demo – no sensitive health data stored.
      </footer>
    </main>
  );
}
