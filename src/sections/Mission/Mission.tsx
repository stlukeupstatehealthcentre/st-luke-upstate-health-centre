import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { site } from "@/data/site";
import { Link } from "react-router";

export function Mission() {
  return (
    <section id="mission" className="py-16 bg-white">
      <Container>
        <SectionHeader title="Our Mission" />
        <div className="mt-6 max-w-3xl">
          <p className="text-lg text-gray-600 leading-relaxed">
            {site.mission}
          </p>
          <p className="mt-4 text-xl font-semibold text-secondary italic">
            &ldquo;{site.tagline}&rdquo;
          </p>
          <Link
            to="/about"
            className="mt-4 inline-block text-primary font-medium hover:underline"
          >
            Learn More About Us &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
