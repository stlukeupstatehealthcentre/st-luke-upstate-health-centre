import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { openAppointmentWhatsApp } from "@/lib/whatsapp";
import { AppointmentField } from "@/sections/Appointment/AppointmentField";
import type { Service } from "@/types";
import { useState } from "react";

interface FormValues {
  fullName: string;
  whatsapp: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

type FormErrors = Partial<FormValues>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues: FormValues = {
  fullName: "",
  whatsapp: "",
  email: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export function AppointmentForm() {
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

    if (!values.service) {
      errs.service = "Please select a service.";
    }

    if (!values.preferredDate.trim()) {
      errs.preferredDate = "Preferred date is required.";
    }

    if (!values.preferredTime.trim()) {
      errs.preferredTime = "Preferred time is required.";
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

    const serviceTitle =
      services.find((s) => s.slug === values.service)?.title ?? values.service;

    openAppointmentWhatsApp(site.whatsappNumber, {
      fullName: values.fullName,
      phone: values.whatsapp,
      email: values.email,
      service: serviceTitle,
      preferredDate: values.preferredDate,
      preferredTime: values.preferredTime,
      message: values.message,
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <h3 className="text-2xl font-bold text-secondary">
          Request Sent via WhatsApp!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Your appointment request has been opened in WhatsApp. Please send the
          message to complete your booking. We will confirm your appointment
          shortly.
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

      <AppointmentField
        label="Full Name"
        htmlFor="appt-full-name"
        error={errors.fullName}
        required
      >
        <Input
          id="appt-full-name"
          type="text"
          value={values.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          autoComplete="name"
        />
      </AppointmentField>

      <AppointmentField
        label="WhatsApp Number"
        htmlFor="appt-whatsapp"
        error={errors.whatsapp}
        required
      >
        <Input
          id="appt-whatsapp"
          type="tel"
          value={values.whatsapp}
          onChange={(e) => handleChange("whatsapp", e.target.value)}
          autoComplete="tel"
          placeholder="e.g. 0712 345 678"
        />
      </AppointmentField>

      <AppointmentField label="Email" htmlFor="appt-email" error={errors.email}>
        <Input
          id="appt-email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          autoComplete="email"
          placeholder="your@email.com"
        />
      </AppointmentField>

      <AppointmentField
        label="Service"
        htmlFor="appt-service"
        error={errors.service}
        required
      >
        <Select
          value={values.service}
          onValueChange={(val) => handleChange("service", val)}
        >
          <SelectTrigger id="appt-service" className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s: Service) => (
              <SelectItem key={s.id} value={s.slug}>
                {s.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </AppointmentField>

      <AppointmentField
        label="Preferred Date"
        htmlFor="appt-date"
        error={errors.preferredDate}
        required
      >
        <Input
          id="appt-date"
          type="date"
          value={values.preferredDate}
          onChange={(e) => handleChange("preferredDate", e.target.value)}
        />
      </AppointmentField>

      <AppointmentField
        label="Preferred Time"
        htmlFor="appt-time"
        error={errors.preferredTime}
        required
      >
        <Input
          id="appt-time"
          type="time"
          value={values.preferredTime}
          onChange={(e) => handleChange("preferredTime", e.target.value)}
        />
      </AppointmentField>

      <AppointmentField label="Message / Notes" htmlFor="appt-message">
        <Textarea
          id="appt-message"
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={4}
          placeholder="Any additional information for your appointment..."
        />
      </AppointmentField>

      <Button type="submit" size="lg" className="self-start gap-2">
        Send via WhatsApp
      </Button>
    </form>
  );
}
