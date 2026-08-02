"use client";
import { useSyncExternalStore } from "react";
import { grotesk } from "../fonts";

const TARGET_DATE = new Date("2030-09-01").getTime();

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return Date.now();
}

function getServerSnapshot() {
  return null;
}

export default function CountdownTimer() {
  const now = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const days = now === null ? 0 : Math.floor((TARGET_DATE - now) / (1000 * 60 * 60 * 24));

  return (
    <div className="inline-block bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-16 py-8 shadow-2xl">
      <p className={`${grotesk.className} text-7xl font-bold text-white`}>{days}</p>
      <p className={`${grotesk.className} text-white/70 text-lg mt-2`}>days to go</p>
    </div>
  );
}
