import Image from "next/image";
import { grotesk } from "../fonts";
import NewsletterForm from "../components/newsletter_form";

export const metadata = {
  title: "Stay Informed — Durango 2030",
  description: "Sign up for news and updates on the 2030 UCI Mountain Bike World Championships in Durango, Colorado.",
};

export default function Subscribe() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/7-8-23 _ BME_Day1©ChristianRidings-4.jpg"
          alt="Background of cyclists"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
        <p className={`${grotesk.className} text-white/70 text-sm uppercase tracking-widest mb-3`}>
          Durango 2030
        </p>
        <h1 className={`${grotesk.className} text-4xl sm:text-5xl font-bold text-white mb-3`}>
          Stay in the Loop
        </h1>
        <p className={`${grotesk.className} text-white/80 text-lg mb-10 max-w-md`}>
          Be the first to hear about tickets, athlete announcements, and event updates for the 2030 UCI Mountain Bike World Championships.
        </p>
        <NewsletterForm />
      </main>
    </div>
  );
}
