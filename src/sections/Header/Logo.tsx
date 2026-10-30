import logoSrc from "@/assets/st-lukes-logo.jpeg";
import { site } from "@/data/site";
import { Link } from "react-router";

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
      aria-label={`${site.name} home`}
    >
      <img
        src={logoSrc}
        alt={`${site.name} logo`}
        className="size-10 rounded-full object-cover"
      />
      <span className="whitespace-nowrap text-sm font-bold text-secondary sm:text-base">
        {site.name}
      </span>
    </Link>
  );
}
