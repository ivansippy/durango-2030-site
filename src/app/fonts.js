import { Inter, Oswald, Acme, Space_Grotesk } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export const acme = Acme({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-acme",
  weight: "400",
});

export const grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
});
