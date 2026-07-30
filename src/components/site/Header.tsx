import { useEffect, useState } from "react";
import { Menu, Phone, MessageCircle, CalendarCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { business, navLinks, tel, waLink } from "@/lib/site-data";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 shadow-soft backdrop-blur-xl" : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="section-shell grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 py-3">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <Logo />
        </a>

        <div className="flex min-w-0 items-center justify-end gap-2">

          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="outline" size="sm">
              <a href={tel(business.phones[0])} aria-label={`Call ${business.name}`}>
                <Phone /> Call Now
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="sm">
              <a
                href={waLink(`Hello ${business.name}, I would like to enquire about a test.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> WhatsApp
              </a>
            </Button>
            <Button asChild variant="hero" size="sm">
              <a href="#home-collection">
                <CalendarCheck /> Book a Test
              </a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm overflow-y-auto p-0">
              <div className="flex items-center justify-between border-b p-5">
                <Logo />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X />
                  </Button>
                </SheetClose>
              </div>
              <nav aria-label="Mobile" className="flex flex-col p-4">
                {navLinks.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a
                      href={l.href}
                      className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="flex flex-col gap-2 p-4 pb-24">
                <Button asChild variant="hero" size="lg">
                  <a href="#home-collection">
                    <CalendarCheck /> Book a Test
                  </a>
                </Button>
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={waLink(`Hello ${business.name}, I would like to enquire about a test.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle /> WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={tel(business.phones[0])}>
                    <Phone /> {business.phones[0]}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
