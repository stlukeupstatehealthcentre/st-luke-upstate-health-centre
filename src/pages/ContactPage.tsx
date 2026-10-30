import { MapPinned, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactForm } from "@/sections/Contact/ContactForm";
import { site } from "@/data/site";

export function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-secondary py-16">
        <Container>
          <div className="text-center text-white space-y-3">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              We are here to help. Reach out with any questions, concerns or to
              book an appointment.
            </p>
          </div>
        </Container>
      </div>

      {/* Contact details + form */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Contact details */}
            <div className="space-y-8">
              <SectionHeader
                title="Find Us"
                description="Our team is available around the clock. Reach us by phone, WhatsApp, email, or visit us in person."
                align="left"
              />

              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 shrink-0">
                    <Phone className="w-5 h-5 text-secondary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-secondary">Phone</p>
                    <a
                      href={`tel:${site.phones.primary}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {site.phones.primary}
                    </a>
                    <br />
                    <a
                      href={`tel:${site.phones.secondary}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {site.phones.secondary}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 shrink-0">
                    <MessageCircle className="w-5 h-5 text-secondary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-secondary">WhatsApp</p>
                    <a
                      href={`https://wa.me/${site.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 shrink-0">
                    <Mail className="w-5 h-5 text-secondary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-secondary">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 shrink-0">
                    <MapPinned className="w-5 h-5 text-secondary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-secondary">Address</p>
                    <p className="text-gray-600">{site.address}</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 shrink-0">
                    <Clock className="w-5 h-5 text-secondary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-secondary">Working Hours</p>
                    <p className="text-gray-600">{site.workingHours}</p>
                  </div>
                </li>
              </ul>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="Map to St. Luke Upstate Health Centre"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapEmbedQuery)}&output=embed`}
                  className="w-full h-64"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <SectionHeader
                title="Send Us a Message"
                description="Fill in the form and we will get back to you as soon as possible."
                align="left"
              />
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
