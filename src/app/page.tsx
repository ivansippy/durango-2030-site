import Image from "next/image";
import { grotesk } from "./fonts";
import Link from "next/link";
import CountdownTimer from "./components/countdown";
import TimelineBar from "./components/timeline";
import NewsSection from "./components/news-section";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "2030 UCI Mountain Bike World Championships",
  startDate: "2030-09-01",
  endDate: "2030-09-07",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Purgatory Resort",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Durango",
      addressRegion: "CO",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Southwest Colorado Local Organizing Committee",
    url: "https://durangoworlds.com",
  },
  url: "https://durangoworlds.com",
  description:
    "The 2030 UCI Mountain Bike World Championships return to Durango, Colorado — 40 years after the first ever MTB Worlds were held at Purgatory Resort in 1990.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      {/* Background Image covers the full page height (as the page grows) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/7-8-23 _ BME_Day1©ChristianRidings-4.jpg"
          alt="Background of cyclists"
          fill
          priority
          className="object-cover opacity-70"
        />
        {/* Optional overlay for readability (recommended) */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* TIMELINE */}
      <TimelineBar />
      {/* HERO */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="min-h-screen pt-20 flex flex-col items-center justify-center text-center py-24">
          <h1
            className={`${grotesk.className} text-6xl sm:text-7xl text-white/90 font-bold`}
          >
            Durango 2030
          </h1>
          <p
            className={`${grotesk.className} mt-4 text-lg sm:text-xl max-w-xl text-white/90`}
          >
            Back where it all began.
          </p>
        </section>

        {/* COUNTDOWN */}
        <section className="pb-24 text-center">
          <h2
            className={`${grotesk.className} text-2xl sm:text-3xl font-semibold text-white mb-4`}
          >
            Days Until Durango 2030
          </h2>
          <CountdownTimer />
        </section>
        {/* 1990 LEGACY CALLOUT */}
        <section className="pb-24">
          <div className="mx-auto max-w-4xl bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-10 text-center shadow-2xl">
            <p
              className={`${grotesk.className} text-white/80 text-sm uppercase tracking-widest mb-3`}
            >
              40 Years in the Making
            </p>
            <h2
              className={`${grotesk.className} text-4xl font-bold text-white mb-4`}
            >
              Back Where It All Began
            </h2>
            <p
              className={`${grotesk.className} text-white/80 text-lg max-w-2xl mx-auto`}
            >
              Durango hosted the first ever UCI Mountain Bike World
              Championships in 1990. In 2030, we bring it home again — 40 years
              later, on the same mountain.
            </p>
          </div>
        </section>
        {/* IN THE NEWS */}
        <NewsSection />
      </main>
    </div>
  );
}
