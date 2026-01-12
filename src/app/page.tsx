import Image from "next/image";
import { acme } from "./fonts";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image: Absolute position, cover the full area, lower z-index */}
      <Image
        src="/assets/7-8-23 _ BME_Day1©ChristianRidings-4.jpg" // Ensure you have an image at this path
        alt="Background of cyclists"
        layout="fill" // Fill the parent container
        objectFit="cover" // Cover the whole area without stretching
        className="absolute inset-0 z-0 opacity-40" // Apply opacity here
      />
      <main className="flex min-h-screen min-w-screen max-w-3xl flex-col items-center justify-between py-32 px-40 sm:items-start">
        <div className="flex flex-col items-center text-center">
          <h1 className={`${acme.className} text-6xl text-red-600 font-bold`}>
            Durango 2030
          </h1>
          <p className={`${acme.className} mt-4 text-xl max-w-md`}>
            Back where it all began.
          </p>
        </div>
        <section className="flex justify-center w-full py-12 px-6">
          <div className="w-full max-w-4xl px-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/i3aK7YlU0jk?si=yRku7u7EiSNV1tMn"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
