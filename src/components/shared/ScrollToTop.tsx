import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scrolls the window to the top with a smooth animation on every route change.
 * Renders nothing — mount this once inside the shared Layout.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
