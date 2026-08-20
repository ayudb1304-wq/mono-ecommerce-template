"use client";

import { useEffect, useState } from "react";

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(target: number): Remaining {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

/**
 * Ticking countdown to the trip start.
 * Renders nothing on the server so the markup cannot mismatch on hydration.
 */
export function Countdown({
  targetDate,
  className = "",
}: {
  targetDate: string;
  className?: string;
}) {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    if (Number.isNaN(target)) return;

    setRemaining(getRemaining(target));
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = remaining
    ? [
        { label: "Days", value: remaining.days },
        { label: "Hours", value: remaining.hours },
        { label: "Mins", value: remaining.minutes },
        { label: "Secs", value: remaining.seconds },
      ]
    : [
        { label: "Days", value: null },
        { label: "Hours", value: null },
        { label: "Mins", value: null },
        { label: "Secs", value: null },
      ];

  const isHere = remaining !== null && remaining.days === 0 && remaining.hours === 0 &&
    remaining.minutes === 0 && remaining.seconds === 0;

  if (isHere) {
    return (
      <p className={`text-center text-sm uppercase tracking-[0.3em] text-white ${className}`}>
        It is happening
      </p>
    );
  }

  return (
    <div
      className={`flex items-start justify-center gap-4 sm:gap-8 md:gap-12 ${className}`}
      aria-label="Time until the trip starts"
    >
      {units.map((unit) => (
        <div key={unit.label} className="min-w-[3.5rem] text-center sm:min-w-[4.5rem]">
          <p className="font-medium leading-none text-white tabular-nums text-4xl sm:text-5xl md:text-6xl">
            {unit.value === null ? "--" : String(unit.value).padStart(2, "0")}
          </p>
          <p className="mt-2 text-[0.6rem] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
}
