export interface NavLink {
  label: string;
  href: string;
}

export interface Phones {
  primary: string;
  secondary: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  mission: string;
  phones: Phones;
  whatsappNumber: string; // international format, no + (e.g. 254710940330)
  email: string;
  address: string; // TODO: refine street address
  workingHours: string;
  emergency: string;
  social: string[]; // empty array → footer social self-hides
  navLinks: NavLink[];
  footerQuickLinks: NavLink[];
  mapEmbedQuery: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  image: string; // Unsplash URL (swap one string to change)
  featured: boolean;
  details: {
    overview: string;
    whatToExpect: string[];
    conditions?: string[];
  };
}

export interface LabService {
  id: string;
  name: string;
  turnaroundTime?: string;
}

export interface DentalService {
  id: string;
  name: string;
}

export interface CircumcisionInfo {
  availableFor: string;
  descriptors: string[];
  benefits: string[];
  attributes: string[];
}

export interface HeroSlide {
  id: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  image: string; // Unsplash URL
  alt: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  supporting?: string;
  icon?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating?: number;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Insurer {
  id: string;
  name: string;
}

export interface AboutValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}
export interface AboutInfo {
  headline: string;
  subheadline: string;
  story: string;
  mission: string;
  values: AboutValue[];
  whyUs: string[];
}
