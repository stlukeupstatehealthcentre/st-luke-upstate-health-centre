import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { ServicesGrid } from "@/sections/Services/ServicesGrid";
import { Link } from "react-router";

export function Services() {
  const featured = services.filter((s) => s.featured);
  return (
    <section id="services" className="py-16 bg-gray-50">
      <Container>
        <SectionHeader
          title="Our Services"
          description="Comprehensive healthcare for you and your family"
        />
        <div className="mt-10">
          <ServicesGrid services={featured} />
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
