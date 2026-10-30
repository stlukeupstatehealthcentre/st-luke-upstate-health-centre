import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AppointmentForm } from "@/sections/Appointment/AppointmentForm";

export function AppointmentPage() {
  return (
    <Container className="py-16">
      <SectionHeader
        title="Book an Appointment"
        description="Fill in the form below and we will get back to you shortly."
        className="mb-10"
      />
      <AppointmentForm />
    </Container>
  );
}
