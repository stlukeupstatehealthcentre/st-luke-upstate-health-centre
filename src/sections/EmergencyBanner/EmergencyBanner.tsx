import { site } from "@/data/site";
import { Phone } from "lucide-react";

/**
 * Full-width emergency contact strip. Sits at the very top of the page
 * (sticky top-0 z-50) so it is always visible, approximately 40px tall.
 */
export function EmergencyBanner() {
  return (
    <div className="sticky top-0 z-50 bg-brand-red py-2 px-4 text-white">
      <div className="flex items-center justify-center gap-2 text-sm">
        <Phone className="size-4 shrink-0" aria-hidden="true" />
        <span>
          <strong>{site.emergency}</strong>
          {" — "}
          <a
            href={`tel:${site.phones.primary}`}
            className="font-semibold underline-offset-2 hover:underline"
            aria-label={`Call us at ${site.phones.primary}`}
          >
            {site.phones.primary}
          </a>
        </span>
      </div>
    </div>
  );
}
