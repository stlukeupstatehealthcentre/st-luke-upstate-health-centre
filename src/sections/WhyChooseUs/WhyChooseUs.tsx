import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { WhyChooseUsItem } from "@/sections/WhyChooseUs/WhyChooseUsItem";
import { whyChooseUs } from "@/data/whyChooseUs";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <Container>
        <SectionHeader title="Why Choose Us" />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {whyChooseUs.map((item) => (
            <WhyChooseUsItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
