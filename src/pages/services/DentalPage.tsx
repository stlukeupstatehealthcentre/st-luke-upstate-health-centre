import { ServicePageLayout } from "@/components/shared/ServicePageLayout";
import { ServiceSectionHeading } from "@/components/shared/ServiceSectionHeading";
import { dentalServices } from "@/data/dentalServices";
import { services } from "@/data/services";
import { CheckCircle2 } from "lucide-react";

// Grab the dental service entry for the hero image + description
const dentalService = services.find((s) => s.slug === "dental")!;

export function DentalPage() {
  return (
    <ServicePageLayout
      title="Dental Care Services"
      description="Comprehensive oral healthcare delivered with all-digital instruments by experienced dental professionals."
      image={dentalService.image}
      imageAlt="Dental care at St. Luke Upstate Health Centre"
    >
      {/* Overview */}
      <div className="space-y-4">
        <ServiceSectionHeading eyebrow="About this service" title="Overview" />
        <p className="text-gray-700 leading-relaxed">
          {dentalService.details.overview}
        </p>
      </div>

      {/* What to expect */}
      <div className="space-y-4">
        <ServiceSectionHeading eyebrow="Your visit" title="What to Expect" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {dentalService.details.whatToExpect.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <CheckCircle2
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span className="text-gray-700 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dental procedures */}
      <div className="space-y-4">
        <ServiceSectionHeading eyebrow="Key offerings" title="What We Offer" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {dentalServices.map((procedure) => (
            <li
              key={procedure.id}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <CheckCircle2
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span className="text-gray-700 text-sm">{procedure.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </ServicePageLayout>
  );
}
