import { Navbar } from "@/sections/Header/Navbar";

/**
 * Sticky site header. Positioned below the EmergencyBanner (which occupies
 * sticky top-0 z-50 at ~h-10 / 40px). This header uses sticky top-10 z-40
 * so it scrolls into place directly beneath the banner.
 */
export function Header() {
  return (
    <header className="sticky top-10 z-40 border-b bg-white/95 backdrop-blur-sm">
      <Navbar />
    </header>
  );
}
