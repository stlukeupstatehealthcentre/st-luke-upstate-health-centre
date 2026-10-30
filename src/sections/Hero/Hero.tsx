import { heroSlides } from "@/data/hero";
import { HeroControls } from "@/sections/Hero/HeroControls";
import { HeroInfoCards } from "@/sections/Hero/HeroInfoCards";
import { HeroSlide } from "@/sections/Hero/HeroSlide";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const pausedRef = useRef<boolean>(false);
  const count = heroSlides.length;

  const next = () => setActiveIndex((i) => (i + 1) % count);
  const prev = () => setActiveIndex((i) => (i - 1 + count) % count);
  const goTo = (i: number) => setActiveIndex(((i % count) + count) % count);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setActiveIndex((i) => (i + 1) % count);
      }
    }, 5000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      {/* Image + text layer */}
      <section
        className="relative h-[55vh] min-h-[360px] overflow-hidden lg:h-[65vh]"
        aria-label="Featured content carousel"
      >
        {heroSlides.map((slide, i) => (
          <HeroSlide key={slide.id} slide={slide} active={i === activeIndex} />
        ))}

        <HeroControls
          count={count}
          index={activeIndex}
          onPrev={prev}
          onNext={next}
          onSelect={goTo}
        />
      </section>

      {/* Info cards — flush below the image, visually anchored to the hero */}
      <div className="bg-gray-50">
        <HeroInfoCards />
      </div>
    </div>
  );
}
