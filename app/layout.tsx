import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moaid Trading | Strategic Marketing Partner",
  description:
    "Moaid Trading supports brands with market research, strategy, branding, content, SEO, and performance reporting.",
  icons: { icon: "/logo-removebg-preview.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
