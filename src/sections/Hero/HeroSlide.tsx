import { Button } from "@/components/ui/button";
import type { HeroSlide } from "@/types";
import { Link } from "react-router";

interface HeroSlideProps {
  slide: HeroSlide;
  active: boolean;
}

export function HeroSlide({ slide, active }: HeroSlideProps) {
  return (
    <div
      role="img"
      aria-label={slide.alt}
      aria-hidden={!active}
      className={[
        "absolute inset-0 flex h-full w-full items-center bg-cover bg-center transition-opacity duration-700",
        active ? "opacity-100" : "opacity-0 pointer-events-none",
      ].join(" ")}
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Left-heavy gradient: text on left is legible, image breathes on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-secondary/10" />

      {/* Content — left-aligned, constrained to ~55% width */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {slide.headline}
          </h1>
          <p className="mt-4 text-base text-white/85 sm:text-lg">
            {slide.subheadline}
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
