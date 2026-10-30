import { site } from "@/data/site";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CalendarCheck, Clock, Phone } from "lucide-react";
import { Link } from "react-router";

interface InfoCard {
  WatermarkIcon: LucideIcon;
  title: string;
  body: React.ReactNode;
  link: { label: string; href: string };
}

const cards: InfoCard[] = [
  {
    WatermarkIcon: Phone,
    title: "Emergency Cases",
    body: (
      <p className="text-white/80 leading-relaxed">
        Call us on{" "}
        <a
          href={`tel:${site.phones.primary}`}
          className="font-semibold text-white hover:text-primary transition-colors"
        >
          {site.phones.primary}
        </a>{" "}
        /{" "}
        <a
          href={`tel:${site.phones.secondary}`}
          className="font-semibold text-white hover:text-primary transition-colors"
        >
          {site.phones.secondary}
        </a>
      </p>
    ),
    link: { label: "Contact Us", href: "/contact" },
  },
  {
    WatermarkIcon: CalendarCheck,
    title: "Book Appointment",
    body: (
      <p className="text-white/80 leading-relaxed">
        Schedule your visit with our specialists. We are available{" "}
        {site.workingHours.toLowerCase()} and will confirm your slot promptly.
      </p>
    ),
    link: { label: "Book Now", href: "/appointment" },
  },
  {
    WatermarkIcon: Clock,
    title: "Opening Hours",
    body: (
      <div className="space-y-1 text-white/80">
        <div className="flex justify-between">
          <span>Monday – Sunday</span>
          <span className="font-semibold text-white">Open</span>
        </div>
        <div className="flex justify-between">
          <span>Public Holidays</span>
          <span className="font-semibold text-white">Open</span>
        </div>
        <p className="text-white/50 text-xs pt-1">
          Emergency services always available
        </p>
      </div>
    ),
    link: { label: "Our Services", href: "/services" },
  },
];

export function HeroInfoCards() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* On mobile: stacked full-width cards. On sm+: single row. */}
      <div className="grid grid-cols-1 gap-3 lg:gap-0 lg:grid-cols-3 mt-3 lg:mt-0">
        {cards.map((card, index) => {
          const { WatermarkIcon } = card;
          // Divider between cards: right border on desktop only
          const dividerClass =
            index < cards.length - 1 ? "lg:border-r lg:border-white/10" : "";

          return (
            <div
              key={card.title}
              className={`relative overflow-hidden bg-secondary flex flex-col gap-4 p-8 lg:p-6 rounded-xl lg:rounded-none ${
                index === 0 ? "lg:rounded-bl-xl" : ""
              } ${
                index === cards.length - 1 ? "lg:rounded-br-xl" : ""
              } ${dividerClass}`}
            >
              {/* Watermark icon — large, faded, bottom-right */}
              <WatermarkIcon
                className="absolute bottom-4 right-4 size-24 text-white/8 pointer-events-none select-none"
                aria-hidden="true"
              />

              {/* Title */}
              <h3 className="text-xl font-bold text-white relative z-10">
                {card.title}
              </h3>

              {/* Body */}
              <div className="relative z-10 flex-1">{card.body}</div>

              {/* Learn more link */}
              <Link
                to={card.link.href}
                className="relative z-10 inline-flex items-center gap-2 text-xs font-bold text-white/70 hover:text-primary uppercase tracking-widest transition-colors"
              >
                {card.link.label}
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
