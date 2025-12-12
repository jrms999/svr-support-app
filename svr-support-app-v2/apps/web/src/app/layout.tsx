import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVR Support",
  description: "Resident support hub for Scottish Veterans Residences",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-md p-4">{children}</div>
      </body>
    </html>
  );
}
