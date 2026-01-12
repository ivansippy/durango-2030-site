// src/app/fonts.ts
import { Inter, Oswald, Acme } from "next/font/google"; // Import the names from Google

// Configure your primary font (e.g., body text)
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Create a CSS variable
});

// Configure a secondary font for headings
export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald", // Create another CSS variable
});

export const acme = Acme({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-acme",
  weight: "400",
});
