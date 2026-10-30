/**
 * Left-border section heading used inside service detail pages.
 * Renders an optional small-caps eyebrow above a bold title,
 * separated by a primary-coloured left border accent.
 */
export function ServiceSectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="border-l-4 border-primary pl-4">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-xl font-bold text-secondary sm:text-2xl">{title}</h2>
    </div>
  );
}
