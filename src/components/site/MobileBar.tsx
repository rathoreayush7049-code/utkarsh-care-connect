import { Phone, CalendarCheck, MessageCircle, MapPin } from "lucide-react";
import { business, tel, waLink, mapsUrl } from "@/lib/site-data";

export function MobileBar() {
  const items = [
    { icon: Phone, label: "Call", href: tel(business.phones[0]), external: false },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: waLink(`Hello ${business.name}, I would like to book a test.`),
      external: true,
    },
    { icon: CalendarCheck, label: "Book Test", href: "#home-collection", external: false },
    { icon: MapPin, label: "Directions", href: mapsUrl, external: true },
  ];

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
    >
      <ul className="grid grid-cols-4">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <it.icon className="size-5 text-primary" aria-hidden="true" />
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
