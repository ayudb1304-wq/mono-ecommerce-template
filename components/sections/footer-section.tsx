import Link from "next/link";
import { DRIVE_FOLDER_URL, NAV_LINKS, PRACTICAL, TRIP } from "@/content/trip";

export function FooterSection() {
  return (
    <footer id="info" className="bg-background">
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/#hero" className="text-lg font-medium text-foreground">
              {TRIP.heroWord}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {TRIP.name}. {TRIP.destination}, {TRIP.dateRange}. Sending {TRIP.groom} off properly.
            </p>
          </div>

          {/* Where we are staying */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Base Camp</h4>
            <p className="text-sm text-muted-foreground">{PRACTICAL.accommodation.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {PRACTICAL.accommodation.address}
            </p>
            <a
              href={PRACTICAL.accommodation.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Open in Google Maps
            </a>
          </div>

          {/* If something goes wrong */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Emergency Contacts</h4>
            <ul className="space-y-3">
              {PRACTICAL.emergencyContacts.map((contact) => (
                <li key={contact.name} className="text-sm text-muted-foreground">
                  <span className="block">{contact.name}</span>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="text-foreground transition-opacity hover:opacity-70"
                  >
                    {contact.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={PRACTICAL.groupChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Group chat
                </a>
              </li>
              <li>
                {DRIVE_FOLDER_URL ? (
                  <a
                    href={DRIVE_FOLDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Shared photo folder
                  </a>
                ) : (
                  <span
                    className="text-sm text-muted-foreground/60"
                    title="Set NEXT_PUBLIC_DRIVE_FOLDER_URL to enable this link"
                  >
                    Shared photo folder (not set up yet)
                  </span>
                )}
              </li>
              {NAV_LINKS.filter((link) => link.label !== "Home").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <p className="text-center text-xs text-muted-foreground md:text-left">
          Built for {TRIP.groom}, by people who should know better.
        </p>
      </div>
    </footer>
  );
}
