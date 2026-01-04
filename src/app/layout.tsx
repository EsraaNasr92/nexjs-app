import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Blog",
  description: "Simple blog with Next.js + TypeScript"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <h2><Link href="/">{metadata.title}</Link></h2>
        </header>
        {children}
      </body>
    </html>
  );
}
