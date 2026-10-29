"use client";

import { useEffect, useState } from "react";

import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { SwipeToSend } from "./SwipeToSend";

type Values = {
  name: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
};
type Field = keyof Values;

const initial: Values = { name: "", checkIn: "", checkOut: "", guests: "", message: "" };
const fieldOrder: Field[] = ["name", "checkIn", "checkOut", "guests", "message"];

const localIsoDate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });

const nightsBetween = (from: string, to: string) => Math.round((Date.parse(to) - Date.parse(from)) / 86_400_000);

function validate(values: Values, today: string) {
  const errors: Partial<Record<Field, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!values.checkIn) errors.checkIn = "Please choose a check-in date.";
  else if (today && values.checkIn < today) errors.checkIn = "Check-in can't be in the past.";
  if (!values.checkOut) errors.checkOut = "Please choose a check-out date.";
  else if (values.checkIn && values.checkOut <= values.checkIn) errors.checkOut = "Check-out must be after check-in.";
  const guests = Number(values.guests);
  if (!Number.isInteger(guests) || guests < 1) errors.guests = "Please add the number of guests.";
  if (values.message.length > 500) errors.message = "Please keep your message under 500 characters.";
  return errors;
}

function buildMessage(values: Values) {
  const nights = nightsBetween(values.checkIn, values.checkOut);
  return [
    "Hi Meher Villa! I'd like to check availability.",
    "",
    `Name: ${values.name.trim()}`,
    `Check-in: ${formatDate(values.checkIn)}`,
    `Check-out: ${formatDate(values.checkOut)} (${nights} ${nights === 1 ? "night" : "nights"})`,
    `Guests: ${values.guests}`,
    values.message.trim() ? `Message: ${values.message.trim()}` : null,
    "",
    "Sent from the Meher Villa website",
  ]
    .filter((line) => line !== null)
    .join("\n");
}

// The form sits on the dark brown band, so fields use light-on-dark styling and a dark colour scheme for native pickers.
const inputClass =
  "h-12 w-full rounded-md bg-white/[0.06] px-4 text-[15px] text-white outline-none ring-1 ring-white/20 transition-shadow [color-scheme:dark] placeholder:text-white/40 focus:ring-2 focus:ring-gold aria-invalid:ring-red-300";

export function EnquiryForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<{ kind: "idle" } | { kind: "sent"; url: string } | { kind: "unavailable" }>({ kind: "idle" });
  const [today, setToday] = useState("");

  useEffect(() => setToday(localIsoDate(new Date())), []);

  const set = (field: Field) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = () => {
    const found = validate(values, today);
    setErrors(found);
    const firstInvalid = fieldOrder.find((field) => found[field]);
    if (firstInvalid) {
      document.getElementById(`enquiry-${firstInvalid}`)?.focus();
      return false;
    }

    const url = whatsappUrl(buildMessage(values));
    if (!url) {
      setStatus({ kind: "unavailable" });
      return false;
    }

    if (window.matchMedia("(pointer: coarse)").matches) window.location.href = url;
    else window.open(url, "_blank", "noopener");
    setStatus({ kind: "sent", url });
    return true;
  };

  const fieldProps = (field: Field) => ({
    id: `enquiry-${field}`,
    name: field,
    value: values[field],
    onChange: set(field),
    "aria-invalid": Boolean(errors[field]) || undefined,
    "aria-describedby": errors[field] ? `enquiry-${field}-error` : undefined,
  });

  const error = (field: Field) =>
    errors[field] && (
      <p id={`enquiry-${field}-error`} className="mt-1.5 text-sm text-red-300">
        {errors[field]}
      </p>
    );

  return (
    <form noValidate onSubmit={(event) => event.preventDefault()} className="space-y-5">
      <div>
        <label htmlFor="enquiry-name" className="mb-1.5 block text-sm text-white/85">
          Your name
        </label>
        <input type="text" autoComplete="name" placeholder="e.g. Priya Sharma" className={inputClass} {...fieldProps("name")} />
        {error("name")}
      </div>

      <div className="grid gap-5 *:min-w-0 sm:grid-cols-2">
        <div>
          <label htmlFor="enquiry-checkIn" className="mb-1.5 block text-sm text-white/85">
            Check-in
          </label>
          <input type="date" min={today || undefined} className={inputClass} {...fieldProps("checkIn")} />
          {error("checkIn")}
        </div>
        <div>
          <label htmlFor="enquiry-checkOut" className="mb-1.5 block text-sm text-white/85">
            Check-out
          </label>
          <input type="date" min={values.checkIn || today || undefined} className={inputClass} {...fieldProps("checkOut")} />
          {error("checkOut")}
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-guests" className="mb-1.5 block text-sm text-white/85">
          Number of guests
        </label>
        <input type="number" inputMode="numeric" min={1} max={60} placeholder="e.g. 6" className={inputClass} {...fieldProps("guests")} />
        {error("guests")}
      </div>

      <div>
        <label htmlFor="enquiry-message" className="mb-1.5 block text-sm text-white/85">
          Anything else? <span className="text-white/50">(optional)</span>
        </label>
        <textarea
          rows={4}
          maxLength={500}
          placeholder="Cottage or villa, pets, food preferences, arrival time, questions"
          className={`${inputClass} h-auto resize-y py-3`}
          {...fieldProps("message")}
        />
        {error("message")}
      </div>

      <div className="pt-2">
        <SwipeToSend label="Swipe to send on WhatsApp" icon={<WhatsAppIcon className="size-[18px] text-whatsapp" />} onComplete={submit} />
        <p className="mt-3 text-center text-[13px] text-white/55">
          Opens WhatsApp with your details filled in. Nothing is sent until you tap send there.
        </p>
      </div>

      <div aria-live="polite">
        {status.kind === "sent" && (
          <p className="rounded-md bg-white/10 p-4 text-[15px] text-white">
            Thank you, {values.name.trim().split(" ")[0]}! WhatsApp should now be open with your message ready. Just tap send.{" "}
            <a href={status.url} target="_blank" rel="noopener" className="font-medium text-gold underline underline-offset-4">
              Didn't open? Open WhatsApp
            </a>
          </p>
        )}
        {status.kind === "unavailable" && (
          <p className="rounded-md bg-white/10 p-4 text-[15px] text-white ring-1 ring-red-300">
            Sorry, WhatsApp enquiries aren't available right now. Please call us instead.
          </p>
        )}
      </div>
    </form>
  );
}
