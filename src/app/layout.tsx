import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { acme, inter, oswald } from "./fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://durangoworlds.com"),
  title: {
    default: "Durango 2030 | UCI Mountain Bike World Championships",
    template: "%s | Durango 2030",
  },
  description:
    "The 2030 UCI Mountain Bike World Championships are coming to Durango, Colorado at Purgatory Resort — 40 years after the very first MTB Worlds.",
  keywords: [
    "Durango 2030",
    "UCI Mountain Bike World Championships",
    "MTB Worlds 2030",
    "Purgatory Resort",
    "mountain biking Colorado",
    "UCI MTB",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://durangoworlds.com",
    siteName: "Durango 2030",
    title: "Durango 2030 | UCI Mountain Bike World Championships",
    description:
      "The 2030 UCI Mountain Bike World Championships are coming to Durango, Colorado at Purgatory Resort.",
    images: [
      {
        url: "/assets/WebsiteWorlds.png",
        width: 1200,
        height: 630,
        alt: "Durango 2030 UCI Mountain Bike World Championships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Durango 2030 | UCI Mountain Bike World Championships",
    description:
      "The 2030 UCI MTB World Championships are coming to Durango, Colorado.",
    images: ["/assets/WebsiteWorlds.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${acme.variable}`}>
      <body>
        <main><Navbar />{children}<Analytics /></main>
        <Footer />
      </body>
    </html>
  );
}
