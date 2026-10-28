import Image from "next/image";

import { enquiry, gallery, messages } from "@/content/villa";
import { formatPhone, site, whatsappUrl } from "@/lib/site";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { EnquiryForm } from "./EnquiryForm";

export function Enquiry() {
  const whatsapp = whatsappUrl(messages.general);
  const photo = gallery.find((item) => item.caption === "Afternoons by the pool") ?? gallery[0];

  return (
    <section id="enquire" aria-labelledby="enquire-title" className="bg-brown text-white">
      <div className="grid lg:grid-cols-[1fr_1.15fr]">
        <div className="relative hidden lg:block">
          <Image src={photo.src} alt={photo.alt} fill placeholder="blur" sizes="45vw" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
          <ul className="absolute inset-x-0 bottom-0 space-y-3 p-10 text-sm">
            {whatsapp && (
              <li>
                <a href={whatsapp} target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 hover:text-gold">
                  <Icon name="chat" className="size-4" />
                  Chat on WhatsApp
                </a>
              </li>
            )}
            {site.phoneNumber && (
              <li>
                <a href={`tel:+${site.phoneNumber}`} className="inline-flex items-center gap-2.5 hover:text-gold">
                  <Icon name="phone" className="size-4" />
                  {formatPhone(site.phoneNumber)}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="w-full max-w-2xl px-5 py-16 sm:px-12 sm:py-24">
          <Eyebrow tone="light">{enquiry.eyebrow}</Eyebrow>
          <h2 id="enquire-title" className="mt-4 text-[2rem] leading-[1.15] sm:text-[2.6rem]">
            {enquiry.title}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75">{enquiry.intro}</p>
          <div className="mt-10">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
