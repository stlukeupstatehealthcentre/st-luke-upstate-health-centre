import { site } from "@/data/site";
import { about } from "@/data/about";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/Container";

export function AboutHero() {
  return (
    <section className="bg-secondary py-20">
      <Container>
        <div className="text-center">
          <Badge className="mb-4 bg-primary text-white">{site.tagline}</Badge>
          <h1 className="text-4xl font-bold text-white md:text-5xl">{about.headline}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">{about.subheadline}</p>
        </div>
      </Container>
    </section>
  );
}
