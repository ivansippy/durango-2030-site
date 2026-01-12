import Link from "next/link"; // Use 'Link' for Next.js routing
import Image from "next/image";
import { acme } from "../fonts"; // Import the Oswald font

const Navbar = () => {
  return (
    <nav className="bg-gray-200/80 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Event Name */}
        <Link href="/" className="text-white text-2xl font-bold">
          <Image
            src="/assets/WebsiteWorlds.png" // Ensure you have a logo image at this path
            alt="Durango 2030 Logo"
            width={150}
            height={150}
            className="inline-block mr-2"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-10 text-xl">
          <Link
            href="/about"
            className={`${acme.className} text-white hover:text-blue-500 transition`}
          >
            About
          </Link>
          <Link
            href="/partners"
            className={`${acme.className} text-white hover:text-blue-500 transition`}
          >
            Partners
          </Link>
          <Link
            href="/updates"
            className={`${acme.className} text-white hover:text-blue-500 transition`}
          >
            Updates
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
