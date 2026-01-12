// src/components/Footer.tsx
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { grotesk } from "../fonts";
import NewsletterFormEmbed from "./newsletter_form";

const Footer = () => {
  return (
    <footer className="bg-gray-200/80 text-white mt-auto py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-1">
        <div className="flex flex-col gap-30 sm:flex-row md:items-center sm:justify-between">
          {/* Left */}
          <div className="flex-1">
            <p className={`${grotesk.className} text-gray-700 mb-2`}>
              manager@durangocyclingchampionship.com
            </p>
            <p className={`${grotesk.className} text-gray-700 mb-2`}>
              coordinator@durangocyclingchampionship.com
            </p>
            <p className={`${grotesk.className} text-gray-700 mb-2`}>
              © 2026 Durango Cycling Championships. All rights reserved.
            </p>
          </div>

          {/* Middle (New Form) */}
          <div className="flex-1 flex justify-center">
            <NewsletterFormEmbed />
          </div>

          {/* Right */}
          <div className="flex-1 flex gap-6 justify-center md:justify-end">
            <Link
              href="https://www.instagram.com/durangoworlds/"
              className={`${grotesk.className} text-gray-700 hover:text-blue-500 transition-colors`}
            >
              Instagram
            </Link>
            <Link
              href="#"
              className={`${grotesk.className} text-gray-700 hover:text-blue-500 transition-colors`}
            >
              Facebook
            </Link>
            <Link
              href="#"
              className={`${grotesk.className} text-gray-700 hover:text-blue-500 transition-colors`}
            >
              Youtube
            </Link>
          </div>
        </div>
      </div>

      {/* MailerLite Universal Code (keep if you use other ML widgets; optional for the HTML embed) */}
      <Script id="mailerlite-script" strategy="afterInteractive">
        {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
        .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
        n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
        (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
        ml('account', '2025796');`}
      </Script>
    </footer>
  );
};

export default Footer;