"use client";

import { useSyncExternalStore } from "react";
import { grotesk } from "../fonts";

const TARGET_DATE = new Date("2030-09-01T00:00:00Z").getTime();

interface YearMilestone {
  year: number;
  bullets: string[];
}

// Placeholder bullets — swap in the real milestones per year when available.
const MILESTONES: YearMilestone[] = [
  {
    year: 2026,
    bullets: [
      "UCI Site Visit",
      "Downhill/XCO/XCC course review with Durango World Cup Racers",
      "Durango 2030 “Riding into our Future” workshop",
      "Nonprofit and Enterprise Zone Designation",
      "Airport Wall display",
    ],
  },
  { year: 2027, bullets: [
      "2028/2029 International Event announcement",
      "Course build round one (XCO/XCC)  Downhill course updates",
      "Branding and merchandise development",
      "Test races on all courses",
      "Local Organizing Committee buildout.",
  ] },
  { year: 2028, bullets: [
      "Final trail and venue infrastructure construction",
      "Final site visits from support organizations related to International events",
      "Community Services in place to serve spectators, teams, and riders",
      "September - Green flag drops on 2028 event",
  ] },
  { year: 2029, bullets: [
      "Course and venue refinements from 2028 event",
      "Ancillary event planning for 2030 World Championships ( Dual Slalom/Adaptive MTB, 40th Anniversary…)",
      "UCI Site visit for 2030 World Championships",
      "September - International race #2",
  ] },
  { year: 2030, bullets: [
      "Final course/venue refinements and changes",
      "Community planning in final stages",
      "Event menu complete including ancillary events",
      "August - The World Comes to Durango ~ 40th Anniversary.",
  ] },
];

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

  const startYear = MILESTONES[0].year;
  const startOfRange = new Date(startYear, 0, 1).getTime();
  const span = TARGET_DATE - startOfRange;
  const progress =
    now === null ? 0 : Math.min(100, Math.max(0, ((now - startOfRange) / span) * 100));
  const currentYear = now === null ? null : new Date(now).getFullYear();

  return (
    <div className="w-full">
      <div className="relative h-1.5 rounded-full bg-white/15 mb-8">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-red-600 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {MILESTONES.map(({ year, bullets }) => (
          <div
            key={year}
            className={`bg-white/10 backdrop-blur-md border rounded-2xl p-6 ${
              year === currentYear
                ? "border-red-500/60 ring-1 ring-red-500/40"
                : "border-white/15"
            }`}
          >
            <p
              className={`${grotesk.className} text-2xl font-bold ${
                year === currentYear ? "text-red-500" : "text-white"
              }`}
            >
              {year}
            </p>
            {year === currentYear && (
              <p className="text-xs font-medium uppercase tracking-widest text-red-500/80 mb-3">
                You are here
              </p>
            )}
            <ul
              className={`${grotesk.className} text-white/70 text-sm space-y-2 list-disc list-inside ${
                year === currentYear ? "" : "mt-3"
              }`}
            >
              {bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
