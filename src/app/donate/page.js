import Image from "next/image";
import { grotesk } from "../fonts";
import Link from "next/link";

const DONATE_URL = "https://cfssc.fcsuite.com/erp/donate/create/fund?funit_id=3442";

export const metadata = {
  title: "Donate & Fundraising",
  description:
    "How the 2030 UCI Mountain Bike World Championships in Durango, Colorado are funded — private donations, grants, corporate sponsorship, and the Southwest Enterprise Zone tax credit.",
  openGraph: {
    title: "Donate & Fundraising | Durango 2030",
    description:
      "Learn how Durango 2030 is funded and how donors can earn a Colorado Enterprise Zone tax credit.",
  },
};

export default function Donate() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image: Ensure z-0 and object-cover */}
      <Image
        src="/assets/PA_WorldChamps2025CransMontana_USAC_TeamPhoto_Riders-2.jpg"
        alt="Background of cyclists"
        fill
        priority
        className="z-0 object-cover opacity-80"
      />

      {/* Content Overlay: Use z-10 and remove background colors from this container */}
      <main className="relative z-10 p-6 md:p-12">
        <div
          className={`${grotesk.className} pt-24 flex flex-col gap-10 max-w-4xl mx-auto mt-8`}
        >
          {/* Heading */}
          <div className="w-full text-center md:text-left">
            <h1 className="font-acme text-5xl font-bold text-white drop-shadow-md">
              Fund the Return of the World Championships
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl md:mx-0 mx-auto">
              The Durango 2030 World Championships effort — including the two
              international events in 2028 and 2029 — is funded through a
              combination of private donations, grants, corporate
              sponsorship, and merchandise/ticket sales.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            {/* FISCAL SPONSOR */}
            <div className="bg-white/80 p-8 rounded-lg shadow-xl w-full">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Our Fiscal Sponsor
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Durango Cycling Championships LLC, the organizing body for
                these global-scale events, has secured support from the{" "}
                <span className="font-semibold">
                  Community Foundation Serving Southwest Colorado
                </span>{" "}
                as the fiscal sponsor for all nonprofit-related efforts. They
                facilitate all private donations and nonprofit-related
                efforts and fiscal activities.
              </p>
              <Link
                href="http://swcommunityfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${grotesk.className} inline-block text-red-600 font-medium hover:text-red-700 transition-colors`}
              >
                More information at Community Foundation Serving SW CO &rarr;
              </Link>
            </div>

            {/* ENTERPRISE ZONE */}
            <div className="bg-white/80 p-8 rounded-lg shadow-xl w-full">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <Image
                    src="/assets/enterprise-zone-logo.png"
                    alt="Southwest Enterprise Zone Contribution Project Logo"
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    Southwest Enterprise Zone Project
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Durango Cycling Championships LLC and the Durango 2030
                    effort have been selected as a Southwest Enterprise Zone
                    Project.
                  </p>
                  <ul className="text-gray-700 leading-relaxed mb-4 list-disc list-inside space-y-1">
                    <li>
                      <span className="font-semibold">Cash donors</span> can
                      receive a{" "}
                      <span className="font-semibold">
                        25% Colorado tax credit
                      </span>
                      .
                    </li>
                    <li>
                      <span className="font-semibold">In-kind donors</span>{" "}
                      can receive a{" "}
                      <span className="font-semibold">
                        12.5% Colorado tax credit
                      </span>
                      .
                    </li>
                    <li>
                      To receive the credit, the donor must have a Colorado
                      tax liability.
                    </li>
                  </ul>
                  <Link
                    href="https://www.region9edd.org/enterprise-zone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${grotesk.className} inline-block text-red-600 font-medium hover:text-red-700 transition-colors`}
                  >
                    More information on the Enterprise Zone tax credit &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* DONATE CTA */}
            <div className="bg-white/80 p-8 rounded-lg shadow-xl w-full text-center">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Ready to Support Durango 2030?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-xl mx-auto">
                Every donation — cash or in-kind — helps bring the UCI
                Mountain Bike World Championships back to Durango.
              </p>
              <Link
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${grotesk.className} inline-block bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700 transition-colors`}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
