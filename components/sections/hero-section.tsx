"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Countdown } from "@/components/countdown";
import { TRIP } from "@/content/trip";

/** Swap these for real photos of the crew / Goa when you have them. */
const HERO_IMAGE = "/images/hero-mono.png";

const sideImages = [
  { src: "/images/hero-side-1.png", alt: "Goa coastline", position: "left" },
  { src: "/images/hero-side-2.png", alt: "Beach shack at golden hour", position: "left" },
  { src: "/images/hero-side-3.png", alt: "The crew, somewhere warm", position: "right" },
  { src: "/images/hero-side-4.png", alt: "Goa at night", position: "right" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - (scrollProgress / 0.2));

  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // Smooth interpolations - More balanced distribution
  const centerWidth = 100 - (imageProgress * 80); // 100% to 20% (same as each side image)
  const centerHeight = 100; // Always 100% height
  const sideWidth = imageProgress * 40; // 0% to 40% (20% per image, 2 images = 40%)
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100); // -100% to 0%
  const sideTranslateRight = 100 - (imageProgress * 100); // 100% to 0%
  const borderRadius = 0; // No border radius
  const gap = imageProgress * 8; // 0px to 8px

  // Vertical offset for side columns to move them up on mobile
  const sideTranslateY = -(imageProgress * 15); // Move up by 15% when fully expanded

  return (
    <section id="hero" ref={sectionRef} className="relative bg-background">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px` }}
          >

            {/* Left Column */}
            <div
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-full flex-1 overflow-hidden will-change-transform"
                  style={{ borderRadius: `${borderRadius}px` }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Hero Image - Center */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              {/* Text Behind - Fades out first */}
              <div
                className="absolute inset-0 z-0 flex items-center justify-center"
                style={{ opacity: textOpacity, transform: 'translateY(-200px)' }}
              >
                <h1 className="whitespace-nowrap text-[35vw] font-bold leading-[0.8] tracking-tighter text-black">
                  {TRIP.heroWord.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                        transition: 'all 1.5s',
                        transitionTimingFunction: 'cubic-bezier(0.86, 0, 0.07, 1)',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>

              <Image
                src={HERO_IMAGE}
                alt={`${TRIP.name} in ${TRIP.destination}`}
                fill
                className="absolute inset-0 z-10 object-cover"
                priority
              />
            </div>

            {/* Right Column */}
            <div
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-full flex-1 overflow-hidden will-change-transform"
                  style={{ borderRadius: `${borderRadius}px` }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Trip details, countdown and CTA - Fixed at bottom */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-10 px-6 pb-10 md:px-12 md:pb-14 lg:px-20 lg:pb-16"
        style={{ opacity: textOpacity }}
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
          <div>
            <p className="text-2xl leading-tight text-white md:text-3xl lg:text-[2.5rem] lg:leading-snug">
              {TRIP.name}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/70 md:text-sm">
              {TRIP.destination} &middot; {TRIP.dateRange}
            </p>
          </div>

          <Countdown targetDate={TRIP.startDate} />

          <Link
            href="/itinerary"
            className="pointer-events-auto rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-80"
          >
            See the itinerary
          </Link>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[200vh]" />
    </section>
  );
}
