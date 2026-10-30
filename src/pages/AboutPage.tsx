import { AboutHero } from "@/sections/About/AboutHero";
import { AboutStory } from "@/sections/About/AboutStory";
import { AboutValues } from "@/sections/About/AboutValues";
import { AboutWhyUs } from "@/sections/About/AboutWhyUs";
import { AboutCTA } from "@/sections/About/AboutCTA";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutWhyUs />
      <AboutCTA />
    </>
  );
}
