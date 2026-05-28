import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HOME Foundation – Helping Others Meet Expectations",
  description:
    "The HOME Foundation preserves and expands access to safe, stable, and affordable housing for low- to middle-income individuals and families in Maryland.",
  openGraph: {
    title: "HOME Foundation",
    description:
      "Preserving affordable housing in Maryland through acquisition, rehabilitation, and long-term affordability preservation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#2F2F2F]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
