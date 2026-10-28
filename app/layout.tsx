import type { Metadata, Viewport } from "next";
import { Marcellus } from "next/font/google";

import { seo } from "@/content/villa";
import { site } from "@/lib/site";
import "./globals.css";

// One serif for headings; body text uses the system font stack, so it costs no download.
const marcellus = Marcellus({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-marcellus" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Meher Villa Lonavala",
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: seo.ogTitle, description: seo.ogDescription },
};

export const viewport: Viewport = {
  themeColor: "#3a2417",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={marcellus.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
