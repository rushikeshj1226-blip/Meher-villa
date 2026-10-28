// The villa's public contact number. Environment variables can override it (see .env.example).
const VILLA_NUMBER = "919324757113";

const digits = (value: string | undefined) => (value ?? "").replace(/\D/g, "");

// On Vercel, fall back to the project's production address so canonical URLs, the sitemap
// and share previews never point at localhost.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")).replace(/\/$/, ""),
  whatsappNumber: digits(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || VILLA_NUMBER),
  phoneNumber: digits(process.env.NEXT_PUBLIC_PHONE_NUMBER || VILLA_NUMBER),
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
};

export function formatPhone(number: string) {
  if (number.length === 12 && number.startsWith("91")) {
    return `+91 ${number.slice(2, 7)} ${number.slice(7)}`;
  }
  return number ? `+${number}` : "";
}

export function whatsappUrl(text: string) {
  return site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`
    : null;
}
