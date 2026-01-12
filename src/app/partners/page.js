import React from "react";
import Image from "next/image";
import { oswald } from "../fonts";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image: Ensure z-0 and object-cover */}
      <Image
        src="/assets/IMG_3630.JPG"
        alt="Background of cyclists"
        layout="fill"
        objectFit="cover"
        priority // Added priority to ensure it loads immediately as a background
        className="z-0"
      />

      {/* Content Overlay: Use z-10 and remove background colors from this container */}
      <main className="relative z-10 p-10 md:p-12">
        {/* Outer Wrapper for all rows */}
        <div
          className={`${oswald.className} flex flex-col gap-10 max-w-8xl mx-auto mt-8`}
        >
          {/* --- First Row of Boxes --- */}
          <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* Box 1.1 */}
            <div className="flex-1 bg-white/80 p-8 rounded-lg shadow-xl">
              {/* Flex container to hold Logo and Text side-by-side */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Logo Container */}
                <div className="flex-shrink-0 items-center justify-center">
                  <Link href="https://www.purgatoryresort.com/">
                    <Image
                      src="/assets/Purgatory_ Primary_Logo.png"
                      alt="Purgatory Resort Logo"
                      width={128} // Integer only (pixels), no "px"
                      height={128} // Required alongside width
                      className="object-contain"
                    />
                  </Link>
                </div>

                {/* Text Content Container */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    PURGATORY RESORT
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By leveraging its historic legacy as the site of the
                    first-ever 1990 World Championships, the resort is committed
                    to building new championship-caliber infrastructure to
                    support Durango’s upcoming global events.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 1.2 */}
            <div className="flex-1 bg-white/80 p-8 rounded-lg shadow-xl">
              {/* Flex container to hold Logo and Text side-by-side */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Logo Container */}
                <div className="flex-shrink-0 items-center justify-center">
                  <Link href="https://www.durangogov.org/">
                    <Image
                      src="/assets/dgologo.png"
                      alt="City of Durango Logo"
                      width={128} // Integer only (pixels), no "px"
                      height={128} // Required alongside width
                      className="object-contain"
                    />
                  </Link>
                </div>

                {/* Text Content Container */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    CITY OF DURANGO
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By providing essential public services and showcasing its
                    300+-mile trail network, the city ensures a lasting legacy
                    for residents while solidifying its status as North
                    America’s mountain biking capital.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Second Row of Boxes (New) --- */}
          <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* Box 2.1 */}
            <div className="flex-1 bg-white/80 p-8 rounded-lg shadow-xl">
              {/* Flex container to hold Logo and Text side-by-side */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Logo Container */}
                <div className="flex-shrink-0 items-center justify-center">
                  <Link href="https://www.uci.org/">
                    <Image
                      src="/assets/UCI_Logo_2015.svg"
                      alt="Union Cycliste Internationale (UCI) Logo"
                      width={128} // Integer only (pixels), no "px"
                      height={128} // Required alongside width
                      className="object-contain"
                    />
                  </Link>
                </div>

                {/* Text Content Container */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    UNION CYCLISTE INTERNATIONALE (UCI)
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By choosing Durango to host the 40th anniversary of the
                    first-ever sanctioned mountain bike championships, the UCI
                    partners with local organizers to validate the technical
                    excellence of our trails while bringing a massive
                    international audience to Colorado’s cycling heartland.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2.2 */}
            <div className="flex-1 bg-white/80 p-8 rounded-lg shadow-xl">
              {/* Flex container to hold Logo and Text side-by-side */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Logo Container */}
                <div className="flex-shrink-0 items-center justify-center">
                  <Link href="https://www.usacycling.org/">
                    <Image
                      src="/assets/USA Cycling_Color_USE THIS.png"
                      alt="USA Cycling Logo"
                      width={128} // Integer only (pixels), no "px"
                      height={128} // Required alongside width
                      className="object-contain"
                    />
                  </Link>
                </div>

                {/* Text Content Container */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    USA CYCLING
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By guiding the multi-year athlete development pipeline and
                    supporting Durango’s championship bid, USA Cycling ensures
                    the 2030 World Championships will showcase Americas best
                    talent while solidifying Durangos position as the national
                    leader in talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}