import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TestimonialCard } from "@/sections/Testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionHeader title="What Our Patients Say" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
