import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Footer } from "./Footer";
import { MobileBar } from "./MobileBar";
import { Logo } from "./Logo";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/90 backdrop-blur">
        <div className="section-shell flex items-center justify-between gap-4 py-4">
          <Link to="/">
            <Logo />
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link to="/">
              <ArrowLeft /> Back to home
            </Link>
          </Button>
        </div>
      </header>

      <main className="section-shell max-w-3xl py-14">
        <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-navy [&_li]:ml-5 [&_li]:list-disc">
          {children}
        </div>
      </main>

      <Footer />
      <MobileBar />
    </div>
  );
}
