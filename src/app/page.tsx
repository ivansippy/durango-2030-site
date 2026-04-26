import Image from "next/image";
import { grotesk } from "./fonts";
import Navbar from "./components/navbar";
import Link from "next/link";
import CountdownTimer from "./components/countdown";

export default function Home() {
  return (
    <div className="relative min-h-screen">
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
      <Navbar />
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

        {/* YOUTUBE VIDEO */}
        <section className="pb-24">
          <div className="mx-auto w-full max-w-4xl">
            <h2
              className={`${grotesk.className} text-2xl sm:text-3xl font-semibold text-white mb-6`}
            >
              Watch the Story
            </h2>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/i3aK7YlU0jk?si=yRku7u7EiSNV1tMn"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* COUNTDOWN */}
        <section className="pb-24 text-center">
          <h2
            className={`${grotesk.className} text-2xl sm:text-3xl font-semibold text-white mb-4`}
          >
            Days Until Durango 2030
          </h2>
          <p style={{color: 'white'}}>
  {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'URL loaded' : 'URL missing'}
</p>
<p style={{color: 'white'}}>
  {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'KEY loaded' : 'KEY missing'}
</p>
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

        {/* QUICK LINKS */}
        <section className="pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 text-center hover:bg-white/20 transition-colors"
            >
              <h3
                className={`${grotesk.className} text-white font-semibold text-xl mb-2`}
              >
                The Event
              </h3>
              <p className={`${grotesk.className} text-white/70 text-sm`}>
                Why Durango, why 2030
              </p>
            </Link>
            <Link
              href="/partners"
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 text-center hover:bg-white/20 transition-colors"
            >
              <h3
                className={`${grotesk.className} text-white font-semibold text-xl mb-2`}
              >
                Partners
              </h3>
              <p className={`${grotesk.className} text-white/70 text-sm`}>
                Who's making this happen
              </p>
            </Link>
            <Link
              href="/updates"
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 text-center hover:bg-white/20 transition-colors"
            >
              <h3
                className={`${grotesk.className} text-white font-semibold text-xl mb-2`}
              >
                Updates
              </h3>
              <p className={`${grotesk.className} text-white/70 text-sm`}>
                Latest news and press
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
