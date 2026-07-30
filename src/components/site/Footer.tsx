import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import { business, navLinks, services, tel } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gradient-navy pt-16 pb-28 text-navy-foreground lg:pb-12">
      <div className="section-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverse />
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/75">
            A diagnostic and pathology laboratory in {business.address.line2}, {business.city} —
            offering routine tests, health packages and home sample collection across{" "}
            {business.serviceArea}.
          </p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${business.name} on Instagram`}
            className="mt-5 inline-flex size-10 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-teal"
          >
            <Instagram className="size-5" aria-hidden="true" />
          </a>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-display text-sm font-bold tracking-wider uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-teal">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" className="transition-colors hover:text-teal">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="font-display text-sm font-bold tracking-wider uppercase">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            {services.slice(0, 8).map((s) => (
              <li key={s.name}>
                <a href="#services" className="transition-colors hover:text-teal">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wider uppercase">Contact</h3>
          <address className="mt-4 space-y-3 text-sm text-navy-foreground/75 not-italic">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
              <span>
                {business.address.line1}, {business.address.line2}, {business.address.city},{" "}
                {business.address.state} – {business.address.pincode}
              </span>
            </p>
            {business.phones.map((p) => (
              <p key={p} className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <a href={tel(p)} className="transition-colors hover:text-teal">
                  {p}
                </a>
              </p>
            ))}
          </address>
        </div>
      </div>

      <div className="section-shell mt-12 border-t border-navy-foreground/15 pt-6">
        <p className="text-xs leading-relaxed text-navy-foreground/60">
          <span className="font-semibold text-navy-foreground/80">Medical disclaimer:</span>{" "}
          Information on this website is for general awareness only and is not a substitute for
          professional medical advice, diagnosis or treatment. Always consult a qualified doctor
          before acting on any test result.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-navy-foreground/70">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="transition-colors hover:text-teal">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-teal">
              Terms & Conditions
            </Link>
            <Link to="/medical-disclaimer" className="transition-colors hover:text-teal">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
