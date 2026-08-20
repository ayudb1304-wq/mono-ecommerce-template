import { PageShell } from "@/components/page-shell";
import { DAYS } from "@/content/trip";

// Placeholder. Part 2 replaces this with the Supabase-backed, PIN-editable itinerary.
export const metadata = { title: "Itinerary" };

export default function ItineraryPage() {
  return (
    <PageShell
      eyebrow="Itinerary"
      title="Hour by hour"
      description="The full plan lands here shortly. For now, the shape of it:"
    >
      <ul className="border-t border-border">
        {DAYS.map((day) => (
          <li key={day.day} className="flex flex-col gap-1 border-b border-border py-6 md:flex-row md:gap-10">
            <span className="w-40 shrink-0 text-sm uppercase tracking-widest text-muted-foreground">
              Day {day.day} &middot; {day.date}
            </span>
            <div>
              <h2 className="text-lg font-medium text-foreground">{day.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{day.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
