import { about } from "@/data/about";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Icon } from "@/components/shared/Icon";

export function AboutValues() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionHeader
          title="Our Values"
          description="The principles that guide every interaction and decision at St. Luke."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {about.values.map((value) => (
            <div key={value.id} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="shrink-0 flex items-center justify-center size-12 rounded-full bg-primary/10">
                <Icon name={value.icon} className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-secondary">{value.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
