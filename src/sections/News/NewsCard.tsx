import type { NewsItem } from "@/types";
import { Link } from "react-router";

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm">
      <img
        src={item.image}
        alt={item.title}
        className="w-full aspect-[16/9] object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <time
          dateTime={item.date}
          className="text-xs text-gray-600 uppercase tracking-wide"
        >
          {item.date}
        </time>
        <h3 className="font-semibold text-secondary leading-snug">{item.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{item.excerpt}</p>
        {item.link ? (
          <div className="mt-auto pt-3">
            <Link
              to={item.link}
              className="text-sm font-medium text-primary hover:underline"
            >
              Read more →
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  );
}
