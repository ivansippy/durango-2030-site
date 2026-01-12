import Link from "next/link"; // Use 'Link' for Next.js routing
import Image from "next/image";
import { acme } from "../fonts"; // Import the Acme font
import { grotesk } from "../fonts";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl py-4">
        <div className="flex items-center justify-between rounded-2xl bg-slate-100/35 backdrop-blur-md border border-white/15 shadow-lg px-6 py-3">
          <div className="text-white font-semibold">
            <Link href="/">
              <div className={`${acme.className} flex items-center gap-2 hover:cursor-pointer`}>
                <Image
                  src="/assets/WebsiteWorlds.png"
                  alt="Durango Worlds 2030 Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          <div className="flex gap-15 text-black/90 text-3xl">
            <a className={`${grotesk.className} hover:text-red-500`} href="/about">About</a>
            <a className={`${grotesk.className} hover:text-red-500`} href="/partners">Partners</a>
            <a className={`${grotesk.className} hover:text-red-500`} href="/updates">Updates</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
