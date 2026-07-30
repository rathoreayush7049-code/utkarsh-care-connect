import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { whyChooseUs } from "@/lib/site-data";

export function WhyChooseUs() {
  return (
    <section className="bg-gradient-navy py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-navy-foreground/10 px-3.5 py-1.5 text-xs font-bold tracking-wider text-navy-foreground uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-navy-foreground sm:text-4xl">
            Diagnostics done carefully, every single time
          </h2>
          <p className="mt-3 text-base text-navy-foreground/75">
            From the moment your sample is collected to the moment your report reaches you.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((f) => (
            <article
              key={f.title}
              className="rounded-3xl border border-navy-foreground/15 bg-navy-foreground/[0.06] p-6 backdrop-blur transition-colors hover:bg-navy-foreground/[0.12]"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-teal text-teal-foreground">
                <Icon name={f.icon} className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-navy-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
