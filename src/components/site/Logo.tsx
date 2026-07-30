import { business } from "@/lib/site-data";
import logoAsset from "@/assets/utkarsh-logo.png.asset.json";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <img
        src={logoAsset.url}
        alt={`${business.name} logo`}
        className="size-10 shrink-0 rounded-full object-contain shadow-soft"
        width={40}
        height={40}
      />
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
