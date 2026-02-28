import Link from "next/link";
import Image from "next/image";
import { acme, grotesk } from "../fonts";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl py-4">
        <div className="flex items-center justify-between rounded-2xl bg-slate-100/35 backdrop-blur-md border border-white/15 shadow-lg px-6 py-3">

          {/* Logo */}
          <Link
            href="/"
            className={`${acme.className} flex items-center gap-2 hover:cursor-pointer`}
          >
            <Image
              src="/assets/LOGO - Recreation.png"
              alt="Durango Worlds 2030 Logo"
              width={180}
              height={100}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-black/90 text-lg">
            <Link
              href="/about"
              className={`${grotesk.className} hover:text-red-500 transition-colors`}
            >
              About
            </Link>

            <Link
              href="/partners"
              className={`${grotesk.className} hover:text-red-500 transition-colors`}
            >
              Partners
            </Link>

            <Link
              href="/updates"
              className={`${grotesk.className} hover:text-red-500 transition-colors`}
            >
              Updates
            </Link>

            {/* Donate button */}
            <a
              href="https://cfssc.fcsuite.com/erp/donate/create/fund?funit_id=3442"
              target="_blank"
              rel="noopener noreferrer"
              className={`${grotesk.className} bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors`}
            >
              Donate
            </a>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;