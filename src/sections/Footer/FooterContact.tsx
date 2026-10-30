import { MapPinned, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/data/site";

/**
 * Footer contact details block: address, phones, email, working hours.
 */
export function FooterContact() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-white">Contact Us</h3>
      <ul className="flex flex-col gap-3 text-sm text-white/80">
        <li className="flex items-start gap-2">
          <MapPinned className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{site.address}</span>
        </li>
        <li className="flex items-start gap-2">
          <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <div className="flex flex-col gap-1">
            <a
              href={`tel:${site.phones.primary}`}
              className="hover:text-white transition-colors"
              aria-label={`Primary phone: ${site.phones.primary}`}
            >
              {site.phones.primary}
            </a>
            <a
              href={`tel:${site.phones.secondary}`}
              className="hover:text-white transition-colors"
              aria-label={`Secondary phone: ${site.phones.secondary}`}
            >
              {site.phones.secondary}
            </a>
          </div>
        </li>
        <li className="flex items-center gap-2">
          <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
          <a
            href={`mailto:${site.email}`}
            className="break-all hover:text-white transition-colors"
          >
            {site.email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Clock className="size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{site.workingHours}</span>
        </li>
      </ul>
    </div>
  );
}
