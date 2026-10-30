import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function AboutCTA() {
  return (
    <section className="bg-primary py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to experience the St. Luke difference?
          </h2>
          <p className="mt-3 text-white/80">
            Our team is here for you, 24 hours a day, 7 days a week.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white bg-transparent text-white hover:bg-white/20 hover:text-white"
            >
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
