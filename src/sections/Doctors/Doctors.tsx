import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { DoctorsGrid } from "@/sections/Doctors/DoctorsGrid";
import { doctors } from "@/data/doctors";

export function Doctors() {
  if (!doctors || doctors.length === 0) return null;

  return (
    <section id="doctors" className="py-16 bg-gray-50">
      <Container>
        <SectionHeader title="Our Doctors" />
        <div className="mt-10">
          <DoctorsGrid doctors={doctors} />
        </div>
      </Container>
    </section>
  );
}
