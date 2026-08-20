"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { STATS_VIDEO_SRC, TRIP_STATS } from "@/content/trip";

export function TripStatsSection() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    if (!videoRef.current) return;

    const rect = videoRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const videoTop = rect.top;
    const videoBottom = rect.bottom;

    // Progress from 0 (entering viewport) to 1 (exiting viewport)
    if (videoBottom > 0 && videoTop < windowHeight) {
      const progress = 1 - (videoTop + rect.height / 2) / (windowHeight + rect.height);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateParallax]);

  // Parallax effect: media moves up as you scroll down
  const parallaxY = (scrollProgress - 0.5) * 30; // -15px to +15px range

  return (
    <section id="stats" className="bg-background">
      {/* Full-width media with parallax. Drop the trip video into STATS_VIDEO_SRC. */}
      <div ref={videoRef} className="relative aspect-[16/9] w-full md:aspect-[21/9] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            WebkitTransform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
          src={STATS_VIDEO_SRC}
        />
      </div>

      {/* Trip stats */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {TRIP_STATS.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </p>
            <p className="font-medium text-foreground text-4xl md:text-5xl">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
