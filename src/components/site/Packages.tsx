import { Check, Clock, Utensils, CalendarCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { business, packages, waLink } from "@/lib/site-data";

export function Packages() {
  return (
    <section id="packages" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Health Packages"
          title="Preventive health packages for every age"
          subtitle="Bundled panels designed for regular screening. Pricing shown below is a placeholder — confirm the current offer price with the lab before booking."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`lift relative flex flex-col rounded-3xl border bg-card p-6 shadow-soft ${
                p.featured ? "border-primary/40 ring-1 ring-primary/20" : "border-border"
              }`}
            >
              {p.featured ? (
                <span className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-[11px] font-bold text-primary-foreground shadow-soft">
                  <Sparkles className="size-3" aria-hidden="true" /> Most Booked
                </span>
              ) : null}

              <h3 className="font-display text-xl font-bold text-navy">{p.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.summary}</p>

              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-2xl font-extrabold text-primary">
                  {p.discountPrice}
                </span>
                <span className="pb-1 text-sm text-muted-foreground line-through">
                  {p.originalPrice}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {p.tests.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 space-y-2 rounded-2xl bg-secondary p-3 text-xs font-medium text-navy">
                <p className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" aria-hidden="true" /> Report time: {p.reportTime}
                </p>
                <p className="flex items-center gap-2">
                  <Utensils className="size-4 text-primary" aria-hidden="true" /> {p.fasting}
                </p>
              </div>

              <Button asChild variant="hero" className="mt-5 w-full">
                <a
                  href={waLink(
                    `Hello ${business.name}, I would like to book the ${p.name}. Please share the current price and preparation details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarCheck /> Book Now
                </a>
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Package inclusions and prices are placeholders pending confirmation from {business.name}.
        </p>
      </div>
    </section>
  );
}
