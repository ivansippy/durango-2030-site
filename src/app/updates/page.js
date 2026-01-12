import React from "react";
import Image from "next/image";
import { oswald } from "../fonts";
import { acme } from "../fonts";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image: Ensure z-0 and object-cover */}
      <Image
        src="/assets/PA_WorldChamps2025_XCOWE_USAC-48.jpg"
        alt="Background of cyclists"
        layout="fill"
        objectFit="cover"
        priority // Added priority to ensure it loads immediately as a background
        className="z-0 object-cover opacity-40"
      />

      {/* Content Overlay: Use z-10 and remove background colors from this container */}
      <main className="relative z-10 p-6 md:p-12">
        {/* Outer Wrapper: Centered column with a max width */}
        <div
          className={`${oswald.className} flex flex-col gap-10 max-w-4xl mx-auto mt-8`}
        >
          {/* Heading */}
          <div className="w-full text-center md:text-left">
            <h1 className="text-5xl font-bold text-white drop-shadow-md">
              Find the Latest Updates
            </h1>
          </div>

          {/* Single Column Updates List */}
          <div className="flex flex-col gap-6 w-full">
            {/* Update Box 1 */}
            <div className="bg-white/80 p-8 rounded-lg shadow-xl w-full">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Durango Officially Gets 2030 Worlds
              </h3>
              <iframe
                src="/assets/Press Release Durango Worlds 2030_vFNL.pdf#toolbar=0"
                className="w-full h-[600px] rounded-md border"
                title="PDF Document"
              >
              </iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
