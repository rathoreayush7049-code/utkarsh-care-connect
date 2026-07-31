import { CheckCircle2, Award, Microscope, UserRound } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import labEquipment from "@/assets/lab-equipment.jpg";
import { business } from "@/lib/site-data";

const pillars = [
  { title: "Accurate diagnostics", text: "Standardised protocols and internal quality checks on every run." },
  { title: "Hygienic sample collection", text: "Sterile, single-use consumables and strict infection control." },
  { title: "Timely reports", text: "Most routine reports released the same day." },
  { title: "Patient care", text: "Clear guidance on preparation, fasting and report interpretation support." },
  { title: "Modern laboratory practice", text: "Calibrated analysers with documented maintenance schedules." },
];

/** Placeholders below must be confirmed by the lab before publishing. */
const placeholders = [
  { icon: UserRound, label: "Founder", value: "[Founder Name - Rahul Rathore]" },
  { icon: Microscope, label: "Consultant Pathologist", value: "[Dr. Name, MD Pathology — to be confirmed]" },
  { icon: Award, label: "Certifications", value: "[Accreditation details — to be verified]" },
  { icon: CheckCircle2, label: "Years of Experience", value: "[XX+ years — to be confirmed]" },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="section-shell grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title={`A diagnostic laboratory ${business.city} families rely on`}
            subtitle={`${business.name} is a neighbourhood pathology and diagnostic laboratory in ${business.address.line2}, ${business.city}. We combine careful sample handling, modern instrumentation and clear communication so that patients and their doctors get results they can act on with confidence.`}
          />

          <ul className="mt-8 space-y-4">
            {pillars.map((p) => (
              <li key={p.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-navy">{p.title}.</span>{" "}
                  <span className="text-muted-foreground">{p.text}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {placeholders.map((p) => (
              <div key={p.label} className="rounded-2xl border border-dashed border-primary/30 bg-secondary/60 p-4">
                <p className="flex items-center gap-2 text-xs font-bold tracking-wide text-primary uppercase">
                  <p.icon className="size-4" aria-hidden="true" /> {p.label}
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-4xl border border-border shadow-card">
            <img
              src={labEquipment}
              width={1200}
              height={900}
              loading="lazy"
              alt="Diagnostic analysers and microscope inside the Utkarsh Path Lab laboratory in Ujjain"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-4xl border border-dashed border-primary/30 bg-secondary/60 p-6 text-center">
            <p className="text-sm font-semibold text-navy">Laboratory photo placeholder</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Replace with real photographs of the reception, collection room and laboratory floor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
