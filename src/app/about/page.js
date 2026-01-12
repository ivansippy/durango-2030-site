import React from "react";
import Image from "next/image";
import { grotesk } from "../fonts";

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
          className={`${grotesk.className} pt-24 flex flex-col gap-10 max-w-8xl mx-auto mt-8`}
        >
          {/* --- First Row of Boxes --- */}
          <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* Box 1.1 */}
            <div className="flex-1 bg-white/80 p-8 rounded-lg shadow-xl">
              <h2 className={`text-3xl font-bold mb-4 text-gray-900`}>
                WE ARE READY
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The team is ready to deliver the highest level event. With its
                proximity to an international airport, numerous hotel rooms and
                friendly staff, Durango is an ideal destination for the 2030 UCI
                MTB World Championship.
              </p>
            </div>

            {/* Box 1.2 */}
            <div className="flex-1 bg-white/80 p-8 rounded-lg shadow-xl">
              <h2
                className={`${grotesk.className} text-3xl font-bold mb-4 text-gray-900`}
              >
                WORLD-CLASS FACILITY
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Purgatory Bike Park features race courses that create a
                world-class facility, built to UCI standards with many
                state-of-the-art amenities for both riders and spectators.
              </p>
            </div>
          </div>

          {/* --- Second Row of Boxes (New) --- */}
          <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* Box 2.1 */}
            <div className="flex-1 bg-white/80 p-8 rounded-lg shadow-xl">
              <h2
                className={`${grotesk.className} text-3xl font-bold mb-4 text-gray-900`}
              >
                EXPERIENCE
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Durango and Purgatory Resort have a long history of successfully
                hosting tens of thousands of athletes, coaches, support teams,
                and spectators for a variety of international athletic
                competitions, including BMX racing, cycling, soccer, tennis,
                lacrosse, softball, baseball, ski racing, running and more.
              </p>
            </div>

            {/* Box 2.2 */}
            <div className="flex-1 bg-white/80 p-8 rounded-lg shadow-xl">
              <h2
                className={`${grotesk.className} text-3xl font-bold mb-4 text-gray-900`}
              >
                PREMIER DESTINATION
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Located in Southwest Colorado, Durango offers a stunning mix of
                high desert landscapes and alpine beauty. Located 25 miles (40
                km) south of Purgatory Resort, this historic town serves as the
                gateway to world-class outdoor recreation. Purgatory Resort’s
                lift-assisted bike park and scenic singletrack make it a premier
                destination for mountain biking. Durango is easily accessible
                via Durango-La Plata County Airport, with additional regional
                options at Montrose Regional Airport and Telluride Regional
                Airport.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* Box 3.1 */}
            <div className="flex-1 bg-white/80 p-8 rounded-lg shadow-xl">
              <h2
                className={`${grotesk.className} text-3xl font-bold mb-4 text-gray-900`}
              >
                LEGACY
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Durango is home to seven current or former mountain bike World
                Champions, and at least one athlete from the town has
                represented Team USA at every Olympic Games since mountain
                bikings debut in 1996. Programs like Fort Lewis College Cycling
                and Durango Devo nurture talent, producing world- class athletes
                such as Sepp Kuss, Quinn Simmons, Riley Amos, and Christopher
                Blevins.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
