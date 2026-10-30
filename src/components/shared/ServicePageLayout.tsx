import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { ArrowRight, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

interface ServicePageLayoutProps {
  /** Service title shown in the hero */
  title: string;
  /** Short description shown in the hero */
  description: string;
  /** Background image URL for the hero */
  image: string;
  /** Alt text for the hero image */
  imageAlt: string;
  /** Main body content (left column) */
  children: ReactNode;
}

/**
 * Shared layout for all service detail pages.
 *
 * Structure:
 *   1. Full-bleed hero — image + overlay, breadcrumb, title, description, CTAs
 *   2. Two-column content area:
 *      - Left (main): children (overview, offerings, etc.)
 *      - Right (sidebar): sticky booking card + contact card
 */
export function ServicePageLayout({
  title,
  description,
  image,
  imageAlt,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* ── Hero ── */}
      <div className="relative h-72 md:h-[28rem] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* gradient: stronger at bottom-left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/60 to-secondary/20" />

        <div className="relative z-10 flex flex-col justify-end h-full pb-8">
          <Container>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-1.5 text-sm text-white/70">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 max-w-2xl">
              {title}
            </h1>
            <p className="text-white/80 text-lg max-w-xl mb-6">{description}</p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/appointment">
                  Book an Appointment <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border border-white text-white hover:bg-white/20 hover:text-white"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </Container>
        </div>
      </div>

      {/* ── Body ── */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <Button
                asChild
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                <Link to="/services">← All Services</Link>
              </Button>
              {children}
            </div>

            {/* Sticky sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-28">
              {/* Booking card */}
              <div className="rounded-2xl bg-secondary p-6 text-white shadow-md">
                <h2 className="text-lg font-bold mb-2">Book an Appointment</h2>
                <p className="text-white/75 text-sm mb-5">
                  Schedule your visit with our team — we are available{" "}
                  {site.workingHours.toLowerCase()}.
                </p>
                <Button
                  asChild
                  className="w-full bg-white text-secondary hover:bg-white/90 hover:text-secondary font-semibold"
                >
                  <Link to="/appointment">
                    Book Now <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>

              {/* Need help card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-base font-bold text-secondary mb-4">
                  Need Help?
                </h2>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col gap-0.5">
                      <a
                        href={`tel:${site.phones.primary}`}
                        className="text-gray-800 hover:text-primary transition-colors font-medium"
                      >
                        {site.phones.primary}
                      </a>
                      <a
                        href={`tel:${site.phones.secondary}`}
                        className="text-gray-800 hover:text-primary transition-colors font-medium"
                      >
                        {site.phones.secondary}
                      </a>
                      <span className="text-muted-foreground text-xs">
                        Call us
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div className="flex flex-col gap-0.5">
                      <a
                        href={`mailto:${site.email}`}
                        className="text-gray-800 hover:text-primary transition-colors font-medium break-all"
                      >
                        {site.email}
                      </a>
                      <span className="text-muted-foreground text-xs">
                        Email us
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
