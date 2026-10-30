import { Container } from "@/components/shared/Container";
import { stats } from "@/data/stats";
import { StatItem } from "@/sections/Stats/StatItem";

export function Stats() {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="py-12 bg-secondary text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={
                index !== stats.length - 1
                  ? "md:border-r md:border-white/15"
                  : ""
              }
            >
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
