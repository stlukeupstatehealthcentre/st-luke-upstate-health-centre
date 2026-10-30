import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { EmergencyBanner } from "@/sections/EmergencyBanner/EmergencyBanner";
import { Footer } from "@/sections/Footer/Footer";
import { Header } from "@/sections/Header/Header";
import { Outlet } from "react-router";

/**
 * Root shared layout: EmergencyBanner → Header → page content → Footer.
 * The EmergencyBanner is sticky top-0 z-50; the Header is sticky top-10 z-40
 * so it sits directly beneath the banner as the user scrolls.
 */
export function Layout() {
  return (
    <>
      <ScrollToTop />
      <EmergencyBanner />
      <Header />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
