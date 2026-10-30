import { cn } from "cn";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Purely presentational section heading: optional eyebrow, an <h2> title
 * and an optional supporting description.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-2xl font-bold text-secondary sm:text-3xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-gray-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
