import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "text-primary" : "text-gray-300"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border bg-white p-6 shadow-sm">
      {testimonial.rating !== undefined ? (
        <StarRating rating={testimonial.rating} />
      ) : null}
      <blockquote className="text-gray-600 leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer className="mt-auto">
        <p className="font-semibold text-secondary">{testimonial.name}</p>
        <p className="text-sm text-gray-600">{testimonial.location}</p>
      </footer>
    </article>
  );
}
