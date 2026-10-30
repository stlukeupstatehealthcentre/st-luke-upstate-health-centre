import { site } from "@/data/site";

/**
 * Keyless Google Maps embed centred on the clinic's address.
 * Swap the location by updating site.mapEmbedQuery.
 */
export function FooterMap() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapEmbedQuery)}&output=embed`;

  return (
    <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
      <h3 className="text-lg font-semibold text-white">Find Us</h3>
      <iframe
        src={src}
        title="Map to St. Luke Upstate Health Centre"
        loading="lazy"
        className="h-64 w-full rounded-lg border-0"
        aria-label="Google Maps showing the location of St. Luke Upstate Health Centre"
      />
    </div>
  );
}
