"use client";

import Link from "next/link";
import { FadeImage } from "@/components/fade-image";
import { DAYS, type TripDay } from "@/content/trip";

function DayCard({ day }: { day: TripDay }) {
  return (
    <Link href={`/itinerary?day=${day.day}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
        <FadeImage
          src={day.image || "/placeholder.svg"}
          alt={day.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm">
          Day {day.day}
        </span>
      </div>

      {/* Content */}
      <div className="py-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-medium leading-snug text-foreground">
              {day.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {day.summary}
            </p>
          </div>
          <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
            {day.date}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function PlanSection() {
  return (
    <section id="plan" className="bg-background">
      {/* Section Title */}
      <div className="px-6 pt-20 pb-10 md:px-12 lg:px-20">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          The Plan
        </p>
        <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Four days, loosely supervised
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Tap a day for the full hour by hour breakdown.
        </p>
      </div>

      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {DAYS.map((day) => (
            <div key={day.day} className="flex-shrink-0 w-[75vw] snap-center">
              <DayCard day={day} />
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-12 lg:px-20">
          {DAYS.map((day) => (
            <DayCard key={day.day} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}
