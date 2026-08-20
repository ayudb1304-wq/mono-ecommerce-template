"use client";

import { Star } from "lucide-react";
import { REVIEWS, TRIP } from "@/content/trip";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          aria-hidden
          className={i <= rating ? "fill-foreground text-foreground" : "text-border"}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const average = REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;

  return (
    <section id="reviews" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Verified Reviews
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            {TRIP.groom}, rated by the people who know him
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <Stars rating={Math.round(average)} />
            <span className="text-sm text-muted-foreground">
              {average.toFixed(1)} out of 5, based on {REVIEWS.length} reviews
            </span>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {REVIEWS.map((review) => (
            <figure
              key={review.author + review.title}
              className="flex flex-col rounded-2xl border border-border p-6 md:p-8"
            >
              <Stars rating={review.rating} />
              <figcaption className="mt-4 text-base font-medium leading-snug text-foreground">
                {review.title}
              </figcaption>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {review.body}
              </blockquote>
              <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                {review.author}
              </p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
