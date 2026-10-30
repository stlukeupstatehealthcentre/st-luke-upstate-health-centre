import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { about } from "@/data/about";
import { site } from "@/data/site";

export function AboutStory() {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* TODO: restore md:grid-cols-2 and remove max-w-3xl once an image is available */}
        <div className="max-w-3xl">
          <SectionHeader title="Our Story" className="text-left" />
          <p className="mt-4 text-gray-600 leading-relaxed">{about.story}</p>
          <div className="mt-6 border-l-4 border-primary pl-4">
            <p className="text-gray-700 italic">{site.mission}</p>
            <p className="mt-2 text-secondary font-semibold">
              &ldquo;{site.tagline}&rdquo;
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
