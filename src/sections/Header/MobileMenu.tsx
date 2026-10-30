import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/data/site";
import { cn } from "cn";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

/**
 * Mobile navigation drawer. Shown only on small screens (lg:hidden).
 * Controlled open state ensures the sheet closes when a nav link is clicked.
 * Active state mirrors the desktop NavLinks logic — exact match for Home,
 * prefix match for all other routes so sub-pages stay highlighted.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    const path = href.split("#")[0];
    return pathname === path || pathname.startsWith(path + "/");
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden hover:bg-primary/10 hover:text-secondary"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col gap-0 p-0">
        <SheetTitle className="sr-only">{site.name}</SheetTitle>
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 p-4 pt-12"
        >
          {site.navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium transition-colors border-l-2",
                  active
                    ? "border-primary bg-primary/10 text-secondary font-semibold"
                    : "border-transparent text-gray-600 hover:bg-primary/10 hover:text-secondary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t p-4">
          <Button asChild className="w-full" onClick={() => setOpen(false)}>
            <Link to="/appointment">Book Appointment</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
