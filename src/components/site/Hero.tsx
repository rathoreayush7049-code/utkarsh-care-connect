import { Phone, CalendarCheck, HomeIcon, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "./Icon";
import { business, tel, trustBadges } from "@/lib/site-data";
import heroLab from "@/assets/hero-lab.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-32 size-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft">
            <Star className="size-3.5" aria-hidden="true" />
            Pathology & Diagnostics in {business.city}, {business.state}
          </span>

          <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold text-navy sm:text-5xl lg:text-[3.4rem]">
            Accurate Testing. Timely Reports.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Care You Can Trust.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Reliable pathology and diagnostic services in Ujjain with hygienic sample collection,
            experienced professionals, and convenient home collection.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#home-collection">
                <CalendarCheck /> Book a Test
              </a>
            </Button>
            <Button asChild variant="teal" size="lg">
              <a href="#home-collection">
                <HomeIcon /> Request Home Collection
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={tel(business.phones[0])}>
                <Phone /> Call Now
              </a>
            </Button>
          </div>

          <ul className="mt-9 flex flex-wrap gap-2.5">
            {trustBadges.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-2 text-xs font-semibold text-navy shadow-soft"
              >
                <Icon name={b.icon} className="size-4 text-teal" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up">
          <div className="overflow-hidden rounded-4xl border border-border bg-card shadow-card">
            <img
              src={heroLab}
              width={1408}
              height={1008}
              alt="Laboratory technician at Utkarsh Path Lab Ujjain holding blood sample vials in a modern pathology lab"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="animate-float absolute -bottom-6 left-4 max-w-[15rem] rounded-3xl border border-border bg-card/95 p-4 shadow-card backdrop-blur sm:left-6">
            <p className="font-display text-2xl font-bold text-primary">Same Day</p>
            <p className="text-xs text-muted-foreground">
              Reports for most routine tests, shared digitally on WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
