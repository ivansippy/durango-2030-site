"use client";
import { useEffect, useState } from "react";
import { grotesk } from "../fonts";

export default function CountdownTimer() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const target = new Date("2030-09-01").getTime();
    const diff = target - Date.now();
    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
  }, []);

  return (
    <div className="inline-block bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-16 py-8 shadow-2xl">
      <p className={`${grotesk.className} text-7xl font-bold text-white`}>{days}</p>
      <p className={`${grotesk.className} text-white/70 text-lg mt-2`}>days to go</p>
    </div>
  );
}