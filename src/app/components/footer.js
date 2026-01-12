// src/components/Footer.tsx
import Link from "next/link";
import Script from "next/script";
import { oswald } from "../fonts"; // Import the Acme font
const Footer = () => {
  return (
    <footer className="bg-gray-200/80 text-white mt-auto py-8">
      <div className="flex flex-row gap-8 justify-between items-center px-4">
        <div className="flex-1">
          <p className={`${oswald.className} text-gray-700 mb-2`}>
            manager@durangocyclingchampionship.com
          </p>
          <p className={`${oswald.className} text-gray-700 mb-2`}>
            coordinator@durangocyclingchampionship.com
          </p>
          <p className={`${oswald.className} text-gray-700 mb-2`}>
            © 2026 Durango Cycling Championships. All rights reserved.
          </p>
        </div>
        <div className="flex-1">
          <div className="ml-embedded" data-form="GcFzYp"></div>
        </div>
        <div className="flex-1 flex gap-4 justify-center">
          <Link
            href="https://www.instagram.com/durangoworlds/"
            className={`${oswald.className} text-gray-700 hover:text-blue-500`}
          >
            Instagram
          </Link>
          <Link
            href="#"
            className={`${oswald.className} text-gray-700 hover:text-blue-500`}
          >
            Facebook
          </Link>
          <Link
            href="#"
            className={`${oswald.className} text-gray-700 hover:text-blue-500`}
          >
            Youtube
          </Link>
        </div>
      </div>
      {/* Begin MailerLite Universal Code */}
      <Script id="mailerlite-script" strategy="afterInteractive">
        {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '2025796');`}
      </Script>
      {/* End MailerLite Universal Code */}
    </footer>
  );
};

export default Footer;