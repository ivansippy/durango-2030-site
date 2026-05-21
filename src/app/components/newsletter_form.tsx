"use client";

import { useState } from "react";
import { grotesk } from "../fonts";

export default function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const heading = dark ? "text-white/90" : "text-gray-700";
  const body = dark ? "text-white/70" : "text-gray-600";
  const input = dark ? "text-white/90 placeholder-white/50" : "text-gray-700 placeholder-gray-400";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/subscribers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({ first_name: name, email }),
        },
      );

      if (res.status === 409) {
        setStatus("error");
        setMessage("That email is already subscribed.");
        return;
      }

      if (!res.ok) throw new Error("Supabase error");

      setStatus("success");
      setMessage("You're in! We'll be in touch.");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 shadow-lg">
      {status === "success" ? (
        <div className="text-center">
          <h4 className={`${grotesk.className} text-xl font-bold ${heading} mb-2`}>
            Thank you!
          </h4>
          <p className={`${grotesk.className} ${body}`}>
            You have successfully joined our subscriber list.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4 text-center">
            <h4 className={`${grotesk.className} text-2xl font-bold ${heading} mb-1`}>
              Stay Informed
            </h4>
            <p className={`${grotesk.className} ${body} text-sm`}>
              Sign up for news and updates as we close in on the event!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${grotesk.className} w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 ${input} outline-none focus:border-white/40 transition-colors`}
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${grotesk.className} w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 ${input} outline-none focus:border-white/40 transition-colors`}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className={`${grotesk.className} w-full rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700 transition-colors disabled:opacity-60`}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>

            {message && status === "error" && (
              <p className={`${grotesk.className} text-center text-sm ${dark ? "text-red-300" : "text-red-400"}`}>
                {message}
              </p>
            )}
          </form>
        </>
      )}
    </div>
  );
}
