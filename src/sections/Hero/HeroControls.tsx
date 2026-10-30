import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroControlsProps {
  count: number;
  index: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
}

export function HeroControls({
  count,
  index,
  onPrev,
  onNext,
  onSelect,
}: HeroControlsProps) {
  return (
    <>
      {/* Prev — vertically centred, left edge. Hidden on mobile to avoid overlapping text */}
      <button
        onClick={onPrev}
        aria-label="Previous slide"
        className="hidden lg:flex absolute left-3 top-1/2 z-20 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Next — vertically centred, right edge. Hidden on mobile to avoid overlapping text */}
      <button
        onClick={onNext}
        aria-label="Next slide"
        className="hidden lg:flex absolute right-3 top-1/2 z-20 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Dot indicators — bottom centre */}
      <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-2">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={[
              "h-2 rounded-full transition-all duration-300",
              i === index
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80",
            ].join(" ")}
          />
        ))}
      </div>
    </>
  );
}
