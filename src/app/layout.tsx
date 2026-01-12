import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { acme, inter, oswald } from "./fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Durango 2030",
  description: "2030 UCI Mountain Bike World Championships: Durango, Colorado at Purgatory Resort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${acme.variable}`}>
      <body>
                {/* Always stays here */}
        <main><Navbar />{children}<Analytics /></main> {/* This is where page.tsx content appears */}
        <Footer />        {/* Always stays here */}
      </body>
    </html>
  );
}
