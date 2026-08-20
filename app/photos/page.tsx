import { PageShell } from "@/components/page-shell";

// Placeholder. Part 3 replaces this with the Drive-backed uploader and gallery.
export const metadata = { title: "Photos" };

export default function PhotosPage() {
  return (
    <PageShell
      eyebrow="Photos"
      title="Upload everything"
      description="Uploads go straight to the shared Drive folder. This page is being wired up."
    >
      <div className="rounded-2xl border border-dashed border-border p-12 text-center">
        <p className="text-sm text-muted-foreground">
          Nothing here yet. Come back once the trip starts.
        </p>
      </div>
    </PageShell>
  );
}
