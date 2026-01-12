import Image from "next/image";
import { grotesk } from "./fonts";
import Navbar from "./components/navbar";

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
          <h1 className={`${grotesk.className} text-6xl sm:text-7xl text-white/90 font-bold`}>
            Durango 2030
          </h1>
          <p className={`${grotesk.className} mt-4 text-lg sm:text-xl max-w-xl text-white/90`}>
            Back where it all began.
          </p>
        </section>

        {/* YOUTUBE VIDEO */}
        <section className="pb-24">
          <div className="mx-auto w-full max-w-4xl">
            <h2 className={`${grotesk.className} text-2xl sm:text-3xl font-semibold text-white mb-6`}>
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
      </main>
    </div>
  );
}