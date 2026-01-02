import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Art & Design",
  description: "A modern portfolio showcasing digital artwork and creative projects",
  keywords: ["portfolio", "art", "design", "digital art", "creative"],
  authors: [{ name: "Portfolio" }],
  openGraph: {
    title: "Portfolio | Art & Design",
    description: "A modern portfolio showcasing digital artwork and creative projects",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

