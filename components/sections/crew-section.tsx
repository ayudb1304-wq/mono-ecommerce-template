"use client";

import { FadeImage } from "@/components/fade-image";
import { CREW } from "@/content/trip";

export function CrewSection() {
  return (
    <section id="crew" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20">
        <div className="mx-auto mb-10 w-full max-w-7xl md:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The Crew
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            {CREW.length} people, one shared responsibility
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-7xl mx-auto auto-rows-[180px] md:auto-rows-[220px]">
          {CREW.map((member, index) => (
            <div
              key={member.name}
              className={`group relative overflow-hidden rounded-lg border border-border ${member.span}`}
            >
              <FadeImage
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fadeDelay={index * 40}
              />

              {/* Name plate */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-5">
                <h3 className="text-base font-medium leading-tight text-white md:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-[0.7rem] leading-snug text-white/70 md:text-xs">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
