import { services } from "@/data/services";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServicesGrid } from "@/sections/Services/ServicesGrid";

export function ServicesPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionHeader
          title="Our Services"
          description="Comprehensive healthcare for you and your family, available 24 hours a day, 7 days a week."
        />
        <div className="mt-10">
          <ServicesGrid services={services} />
        </div>
      </Container>
    </main>
  );
}
