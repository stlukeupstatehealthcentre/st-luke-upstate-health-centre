import { Container } from "@/components/shared/Container";
import { ServicePageLayout } from "@/components/shared/ServicePageLayout";
import { ServiceSectionHeading } from "@/components/shared/ServiceSectionHeading";
import { Badge } from "@/components/ui/badge";
import { circumcision } from "@/data/circumcision";
import { services } from "@/data/services";
import { CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Container className="py-16 text-center">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Service not found
        </h2>
        <Link to="/services" className="text-primary hover:underline">
          Browse all services
        </Link>
      </Container>
    );
  }

  return (
    <ServicePageLayout
      title={service.title}
      description={service.description}
      image={service.image}
      imageAlt={`${service.title} at St. Luke Upstate Health Centre`}
    >
      {/* Overview */}
      <div className="space-y-4">
        <ServiceSectionHeading eyebrow="About this service" title="Overview" />
        <p className="text-gray-700 leading-relaxed">
          {service.details.overview}
        </p>
      </div>

      {/* What to Expect */}
      <div className="space-y-4">
        <ServiceSectionHeading eyebrow="Your visit" title="What to Expect" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.details.whatToExpect.map((item) => (
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

      {/* Conditions (optional) */}
      {service.details.conditions && service.details.conditions.length > 0 && (
        <div className="space-y-4">
          <ServiceSectionHeading
            eyebrow="Scope of care"
            title="Conditions We Treat"
          />
          <div className="flex flex-wrap gap-2">
            {service.details.conditions.map((c) => (
              <Badge key={c} variant="secondary" className="text-sm px-3 py-1">
                {c}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Male circumcision special section */}
      {slug === "male-circumcision" && (
        <>
          <div className="space-y-4">
            <ServiceSectionHeading
              eyebrow="Eligibility"
              title="Who Is This For?"
            />
            <p className="text-gray-700">{circumcision.availableFor}</p>
            <div className="flex flex-wrap gap-2">
              {circumcision.descriptors.map((d) => (
                <Badge key={d} className="text-sm px-3 py-1">
                  {d}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <ServiceSectionHeading eyebrow="Key benefits" title="Benefits" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {circumcision.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <ServiceSectionHeading eyebrow="Why us" title="Our Approach" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {circumcision.attributes.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 text-sm">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </ServicePageLayout>
  );
}
