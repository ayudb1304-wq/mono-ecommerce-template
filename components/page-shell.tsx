import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

/** Shared chrome for the non-landing pages, so they inherit the same nav and footer. */
export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="px-6 pt-32 pb-12 md:px-12 md:pt-40 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>

      <FooterSection />
    </main>
  );
}
