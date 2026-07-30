export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center rounded-full bg-secondary px-3.5 py-1.5 text-xs font-bold tracking-wider text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
