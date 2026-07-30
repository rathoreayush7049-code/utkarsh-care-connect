import { TestTube2 } from "lucide-react";
import { business } from "@/lib/site-data";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
        <TestTube2 className="size-5" aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`truncate font-display text-base font-bold sm:text-lg ${
            inverse ? "text-navy-foreground" : "text-navy"
          }`}
        >
          {business.name}
        </span>
        <span
          className={`truncate text-[11px] font-medium tracking-wide ${
            inverse ? "text-navy-foreground/70" : "text-muted-foreground"
          }`}
        >
          {business.tagline} · {business.city}
        </span>
      </span>
    </span>
  );
}
