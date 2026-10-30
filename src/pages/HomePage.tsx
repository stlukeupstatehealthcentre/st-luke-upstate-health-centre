import { AppointmentCTA } from "@/sections/Appointment/AppointmentCTA";
import { Doctors } from "@/sections/Doctors/Doctors";
import { FAQ } from "@/sections/FAQ/FAQ";
import { Hero } from "@/sections/Hero/Hero";
import { Insurance } from "@/sections/Insurance/Insurance";
import { Mission } from "@/sections/Mission/Mission";
import { News } from "@/sections/News/News";
import { Services } from "@/sections/Services/Services";
import { Stats } from "@/sections/Stats/Stats";
import { Testimonials } from "@/sections/Testimonials/Testimonials";
import { WhyChooseUs } from "@/sections/WhyChooseUs/WhyChooseUs";

export function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <News />
      <FAQ />
      <Insurance />
      <AppointmentCTA />
    </>
  );
}
