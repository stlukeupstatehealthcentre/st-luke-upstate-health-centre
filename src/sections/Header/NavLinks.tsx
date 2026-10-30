import { site } from "@/data/site";
import { cn } from "cn";
import { Link, useLocation } from "react-router";

/**
 * Desktop main navigation. Maps `site.navLinks` to <Link> with a clear
 * active state derived from the current location.
 * - Exact match for `/` (Home) to avoid it lighting up on every page.
 * - Prefix match for all other routes so e.g. "Services" stays active
 *   on /services, /services/laboratory, /services/:slug, etc.
 */
export function NavLinks() {
  const { pathname } = useLocation();

  function isActive(href: string): boolean {
    // Home is exact-only
    if (href === "/") return pathname === "/";
    // Strip any hash from the href before comparing
    const path = href.split("#")[0];
    return pathname === path || pathname.startsWith(path + "/");
  }

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-1 lg:flex"
    >
      {site.navLinks.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            to={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-primary/15 text-secondary after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-primary"
                : "text-gray-600 hover:bg-primary/10 hover:text-secondary",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
