import type { SiteInfo } from "@/types";
export const site: SiteInfo = {
  name: "St. Luke Upstate Health Centre",
  tagline: "We Treat, God Heals",
  mission:
    "To improve the healthcare of the communities we serve through patient care.",
  phones: { primary: "0710940330", secondary: "0719623401" },
  whatsappNumber: "254710940330", // international format, no + — update if number changes
  email: "stlukeupstatemedicalclinic@gmail.com",
  address: "St. Luke Upstate Health Centre, Kenya", // TODO: add street address
  workingHours: "24 Hours / 7 Days a Week",
  emergency: "24-hour service available",
  social: [], // TODO: add social links
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Appointment", href: "/appointment" },
    { label: "Contact", href: "/contact" },
  ],
  footerQuickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Appointment", href: "/appointment" },
    { label: "Contact", href: "/contact" },
    { label: "Lab Services", href: "/services/laboratory" },
    { label: "Dental Care", href: "/services/dental" },
  ],
  mapEmbedQuery: "St. Luke Upstate Health Centre, Kenya",
};
