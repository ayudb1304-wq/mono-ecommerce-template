"use client";

import { useEffect, useRef, useState } from "react";
import { RULES } from "@/content/trip";

/** Word-by-word blur reveal, same treatment the template uses on dark sections. */
function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startOffset = windowHeight * 0.9;
      const endOffset = windowHeight * 0.1;

      const totalDistance = startOffset - endOffset;
      const currentPosition = startOffset - rect.top;

      setProgress(Math.max(0, Math.min(1, currentPosition / totalDistance)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="text-3xl font-semibold leading-snug text-white md:text-4xl lg:text-5xl"
    >
      {words.map((word, index) => {
        const appearProgress = progress * (words.length + 1);
        const wordAppearProgress = Math.max(0, Math.min(1, appearProgress - index));

        return (
          <span
            key={index}
            className="inline-block"
            style={{
              opacity: wordAppearProgress,
              filter: `blur(${(1 - wordAppearProgress) * 40}px)`,
              transition: 'opacity 0.1s linear, filter 0.1s linear',
              marginRight: '0.3em',
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}

export function RulesSection() {
  return (
    <section id="rules" className="bg-foreground px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/50">
          Rules of the Trip
        </p>

        <ScrollRevealText text="Six rules. Non-negotiable. Agreed by everyone except the groom." />

        <ol className="mt-14 border-t border-white/15">
          {RULES.map((rule, index) => (
            <li
              key={rule}
              className="flex items-start gap-6 border-b border-white/15 py-6 md:gap-10 md:py-8"
            >
              <span className="w-8 shrink-0 text-sm tabular-nums text-white/40 md:w-12 md:text-base">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg leading-snug text-white md:text-2xl">
                {rule}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
