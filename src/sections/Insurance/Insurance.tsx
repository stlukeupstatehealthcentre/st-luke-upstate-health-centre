import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { insurance } from "@/data/insurance";

export function Insurance() {
  if (!insurance || insurance.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionHeader title="Accepted Insurance" />
        <div className="mt-8 flex flex-wrap gap-3">
          {insurance.map((insurer) => (
            <Badge key={insurer.id} variant="outline" className="text-sm px-4 py-2">
              {insurer.name}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
