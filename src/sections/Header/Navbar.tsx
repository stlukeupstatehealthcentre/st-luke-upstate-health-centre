import { Link } from "react-router";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/sections/Header/Logo";
import { NavLinks } from "@/sections/Header/NavLinks";
import { MobileMenu } from "@/sections/Header/MobileMenu";

/**
 * Top navigation bar: Logo · NavLinks (desktop) · Appointment button (desktop) · MobileMenu (mobile).
 */
export function Navbar() {
  return (
    <Container>
      <div className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <Link to="/appointment">Book Appointment</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </Container>
  );
}
