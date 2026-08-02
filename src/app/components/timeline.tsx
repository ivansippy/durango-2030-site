"use client";

import { useSyncExternalStore } from "react";
import { grotesk } from "../fonts";

const TARGET_DATE = new Date("2030-09-01T00:00:00Z").getTime();
const TARGET_YEAR = 2030;

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return Date.now();
}

function getServerSnapshot() {
  return null;
}

export default function TimelineBar() {
  const now = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  if (now === null) {
    return <div className="w-full pt-24 sm:pt-28" />;
  }

  const currentYear = new Date(now).getFullYear();
  const startOfYear = new Date(currentYear, 0, 1).getTime();

  const years: number[] = [];
  for (let y = Math.min(currentYear, TARGET_YEAR); y <= TARGET_YEAR; y++) {
    years.push(y);
  }
  if (years.length === 0) years.push(TARGET_YEAR);

  const span = TARGET_DATE - startOfYear;
  const elapsed = now - startOfYear;
  const progress = span > 0 ? Math.min(100, Math.max(0, (elapsed / span) * 100)) : 100;

  return (
    <div className="w-full bg-black/30 backdrop-blur-md border-b border-white/10 pt-24 sm:pt-28 pb-4">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative h-1.5 rounded-full bg-white/15">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-red-600 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {years.map((y) => (
            <span
              key={y}
              className={`${grotesk.className} text-xs sm:text-sm ${
                y === currentYear ? "text-red-500 font-bold" : "text-white/70"
              }`}
            >
              {y}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
