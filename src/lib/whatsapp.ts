/**
 * WhatsApp delivery utilities.
 * Formats validated form data into a readable message and opens the
 * wa.me deep-link so the user sends it directly — no backend required.
 */

export interface AppointmentPayload {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface ContactPayload {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

function buildWhatsAppUrl(whatsappNumber: string, text: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function openAppointmentWhatsApp(
  whatsappNumber: string,
  payload: AppointmentPayload,
): void {
  const text = [
    "📅 *APPOINTMENT REQUEST*",
    `*St. Luke Upstate Health Centre*`,
    "",
    `👤 *Name:* ${payload.fullName}`,
    `📞 *Phone:* ${payload.phone}`,
    `✉️ *Email:* ${payload.email}`,
    `🏥 *Service:* ${payload.service}`,
    `📆 *Preferred Date:* ${payload.preferredDate}`,
    `🕐 *Preferred Time:* ${payload.preferredTime}`,
    payload.message.trim()
      ? `📝 *Notes:* ${payload.message.trim()}`
      : null,
  ]
    .filter(Boolean)
    .join("\n");

  window.open(buildWhatsAppUrl(whatsappNumber, text), "_blank", "noopener,noreferrer");
}

export function openContactWhatsApp(
  whatsappNumber: string,
  payload: ContactPayload,
): void {
  const text = [
    "📬 *CONTACT MESSAGE*",
    `*St. Luke Upstate Health Centre*`,
    "",
    `👤 *Name:* ${payload.fullName}`,
    `📞 *Phone:* ${payload.phone}`,
    `✉️ *Email:* ${payload.email}`,
    `📌 *Subject:* ${payload.subject}`,
    `💬 *Message:* ${payload.message.trim()}`,
  ].join("\n");

  window.open(buildWhatsAppUrl(whatsappNumber, text), "_blank", "noopener,noreferrer");
}
