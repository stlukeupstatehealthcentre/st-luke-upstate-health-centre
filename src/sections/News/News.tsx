import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { NewsCard } from "@/sections/News/NewsCard";
import { news } from "@/data/news";

export function News() {
  if (!news || news.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionHeader title="Latest News" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
