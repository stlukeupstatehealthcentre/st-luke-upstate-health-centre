import type { Stat } from "@/types";

interface StatItemProps {
  stat: Stat;
}

export function StatItem({ stat }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center px-4">
      <span className="text-3xl font-bold text-white sm:text-4xl">
        {stat.value}
      </span>
      <span className="text-sm font-semibold text-primary uppercase tracking-wide">
        {stat.label}
      </span>
      {stat.supporting ? (
        <span className="text-xs text-white/60 leading-snug max-w-[12rem]">
          {stat.supporting}
        </span>
      ) : null}
    </div>
  );
}
