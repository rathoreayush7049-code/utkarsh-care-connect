import { useState } from "react";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { business, services, waLink, type Service } from "@/lib/site-data";

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="bg-secondary/60 py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Our Services"
          title="Tests, panels and packages we offer"
          subtitle="Routine pathology, specialised panels and preventive health packages — with home sample collection across Ujjain. Availability of individual tests can be confirmed over call or WhatsApp."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.name}
              className="lift flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                <Icon name={s.icon} className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => setActive(s)}>
                  Learn More <ArrowRight />
                </Button>
                <Button asChild variant="hero" size="sm">
                  <a
                    href={waLink(`Hello ${business.name}, I would like to book: ${s.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarCheck /> Book Now
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="rounded-3xl sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-navy">
              {active ? <Icon name={active.icon} className="size-5 text-primary" /> : null}
              {active?.name}
            </DialogTitle>
            <DialogDescription>{active?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              Preparation, fasting requirement and current pricing are confirmed at the time of
              booking. Sample can be given at the lab or collected from your home.
            </p>
            <p className="rounded-2xl bg-secondary p-3 text-xs">
              Note: test details on this website are indicative. Please follow your doctor's advice.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="hero">
              <a
                href={waLink(`Hello ${business.name}, I would like to book: ${active?.name ?? ""}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarCheck /> Book on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" onClick={() => setActive(null)}>
              <a href="#home-collection">Home collection form</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
