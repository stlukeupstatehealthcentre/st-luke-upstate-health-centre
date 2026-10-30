import { CheckCircle2 } from "lucide-react";
import { about } from "@/data/about";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function AboutWhyUs() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionHeader
          title="Why Choose Us"
          description="What sets St. Luke Upstate Health Centre apart."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {about.whyUs.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
