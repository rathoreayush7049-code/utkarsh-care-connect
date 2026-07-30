import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="bg-secondary/60 py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="What patients say"
          subtitle="Placeholder reviews shown below. These will be replaced with genuine, consented patient feedback."
        />

        <Carousel opts={{ align: "start", loop: true }} className="mt-12">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/3">
                <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft">
                  <Quote className="size-7 text-teal" aria-hidden="true" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  <div className="mt-5 flex items-center gap-1" aria-label="5 out of 5 placeholder rating">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current text-teal" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-3 font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
