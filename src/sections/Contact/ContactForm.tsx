import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";
import { openContactWhatsApp } from "@/lib/whatsapp";
import { ContactField } from "@/sections/Contact/ContactField";
import { useState } from "react";

interface FormValues {
  fullName: string;
  whatsapp: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<FormValues>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues: FormValues = {
  fullName: "",
  whatsapp: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): FormErrors {
    const errs: FormErrors = {};

    if (!values.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }

    const digitsOnly = values.whatsapp.replace(/[\s\-\+]/g, "");
    if (!digitsOnly || !/^\d+$/.test(digitsOnly)) {
      errs.whatsapp = "A valid WhatsApp number is required (digits only).";
    }

    // Email is optional — only validate format if something was entered
    if (values.email.trim() && !EMAIL_REGEX.test(values.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!values.subject.trim()) {
      errs.subject = "Subject is required.";
    }

    if (!values.message.trim()) {
      errs.message = "Message is required.";
    }

    return errs;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    openContactWhatsApp(site.whatsappNumber, {
      fullName: values.fullName,
      phone: values.whatsapp,
      email: values.email,
      subject: values.subject,
      message: values.message,
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <h3 className="text-2xl font-bold text-secondary">
          Message Sent via WhatsApp!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Your message has been opened in WhatsApp. Please send it to reach our
          team. We aim to respond within a few hours.
        </p>
        <p className="text-sm text-gray-500">
          If WhatsApp did not open,{" "}
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            tap here to open it manually
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <p className="text-sm text-muted-foreground">
        Fields marked <span className="text-destructive font-medium">*</span>{" "}
        are required.
      </p>

      <ContactField
        label="Full Name"
        htmlFor="contact-full-name"
        error={errors.fullName}
        required
      >
        <Input
          id="contact-full-name"
          type="text"
          value={values.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          autoComplete="name"
        />
      </ContactField>

      <ContactField
        label="WhatsApp Number"
        htmlFor="contact-whatsapp"
        error={errors.whatsapp}
        required
      >
        <Input
          id="contact-whatsapp"
          type="tel"
          value={values.whatsapp}
          onChange={(e) => handleChange("whatsapp", e.target.value)}
          autoComplete="tel"
          placeholder="e.g. 0712 345 678"
        />
      </ContactField>

      <ContactField label="Email" htmlFor="contact-email" error={errors.email}>
        <Input
          id="contact-email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          autoComplete="email"
          placeholder="your@email.com"
        />
      </ContactField>

      <ContactField
        label="Subject"
        htmlFor="contact-subject"
        error={errors.subject}
        required
      >
        <Input
          id="contact-subject"
          type="text"
          value={values.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
        />
      </ContactField>

      <ContactField
        label="Message"
        htmlFor="contact-message"
        error={errors.message}
        required
      >
        <Textarea
          id="contact-message"
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={5}
          placeholder="How can we help you?"
        />
      </ContactField>

      <Button type="submit" size="lg" className="self-start gap-2">
        Send via WhatsApp
      </Button>
    </form>
  );
}
