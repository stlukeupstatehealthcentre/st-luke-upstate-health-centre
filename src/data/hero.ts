import labImg from "@/assets/empty-laboratory-microscope.jpeg";
import childCareImg from "@/assets/services_child_care.jpeg";
import type { HeroSlide } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-1",
    headline: "Compassionate Care for You and Your Baby",
    subheadline: "Dedicated maternity services from pregnancy to delivery.",
    ctaText: "Book Appointment",
    ctaLink: "/appointment",
    image: childCareImg,
    alt: "Mother and newborn receiving maternity care at St. Luke Upstate Health Centre",
  },
  {
    id: "hero-2",
    headline: "Your Health is Our Priority",
    subheadline: "Comprehensive outpatient care for the whole family.",
    ctaText: "Our Services",
    ctaLink: "/services",
    image: childCareImg,
    alt: "Doctor consulting with a patient at St. Luke Upstate Health Centre",
  },
  {
    id: "hero-3",
    headline: "Fast, Accurate Lab Results",
    subheadline: "Modern laboratory diagnostics you can trust.",
    ctaText: "Lab Services",
    ctaLink: "/services/laboratory",
    image: labImg,
    alt: "Laboratory technician analysing samples at St. Luke Upstate Health Centre",
  },
];
