import { Link } from "react-router";
import { site } from "@/data/site";

/**
 * Footer quick-links column. Maps site.footerQuickLinks to <Link> elements.
 */
export function FooterLinks() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-white">Quick Links</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {site.footerQuickLinks.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
