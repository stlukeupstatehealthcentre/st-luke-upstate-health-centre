import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

export function AppointmentCTA() {
  return (
    <section className="py-16 bg-secondary text-white">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{site.tagline}</h2>
          <p className="max-w-xl text-white/80">
            Our team is available around the clock. Book an appointment or call
            us directly.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="default">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
            <a
              href={`tel:${site.phones.primary}`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span className="font-medium">{site.phones.primary}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
