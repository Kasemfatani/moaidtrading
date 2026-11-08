import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moaid Trading | Strategic Marketing Partner",
  description:
    "Moaid Trading supports brands with market research, strategy, branding, content, SEO, and performance reporting.",
  icons: { icon: "/logo-removebg-preview.png" },
  other: {
    "domain-verification": "836893a52b807a11e51751af432fdc5588253c82e333a59b5c15dd98fe5b1721",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
