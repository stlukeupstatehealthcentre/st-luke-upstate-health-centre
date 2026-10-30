import { ServicePageLayout } from "@/components/shared/ServicePageLayout";
import { ServiceSectionHeading } from "@/components/shared/ServiceSectionHeading";
import { Badge } from "@/components/ui/badge";
import { labServices } from "@/data/labServices";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { CheckCircle2, Clock } from "lucide-react";

// Grab the lab service entry for the hero image + description
const labService = services.find((s) => s.slug === "laboratory")!;

export function LaboratoryPage() {
  return (
    <ServicePageLayout
      title="Laboratory Services"
      description="Accurate, timely diagnostic tests with fast turnaround times — available 24 hours a day, 7 days a week."
      image={labService.image}
      imageAlt="Laboratory technician at St. Luke Upstate Health Centre"
    >
      {/* Overview */}
      <div className="space-y-4">
        <ServiceSectionHeading eyebrow="About this service" title="Overview" />
        <p className="text-gray-700 leading-relaxed">
          {labService.details.overview}
        </p>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-secondary">
          <Clock className="size-4 text-primary" aria-hidden="true" />
          {site.workingHours}
        </div>
      </div>

      {/* What to expect */}
      <div className="space-y-4">
        <ServiceSectionHeading eyebrow="Your visit" title="What to Expect" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {labService.details.whatToExpect.map((item) => (
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

      {/* Full test list */}
      <div className="space-y-4">
        <ServiceSectionHeading eyebrow="Key offerings" title="Tests We Offer" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {labServices.map((lab) => (
            <li
              key={lab.id}
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-gray-700 text-sm">{lab.name}</span>
              </div>
              {lab.turnaroundTime ? (
                <Badge
                  variant="secondary"
                  className="ml-3 shrink-0 bg-primary-50 text-secondary text-xs"
                >
                  {lab.turnaroundTime}
                </Badge>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </ServicePageLayout>
  );
}
