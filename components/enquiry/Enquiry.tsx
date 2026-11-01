import Image from "next/image";

import { enquiry, messages } from "@/content/villa";
import { formatPhone, site, whatsappUrl } from "@/lib/site";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { EnquiryForm } from "./EnquiryForm";

export function Enquiry() {
  const whatsapp = whatsappUrl(messages.general);
  const photo = enquiry.image;

  return (
    <section id="enquire" aria-labelledby="enquire-title" className="bg-brown text-white">
      <div className="grid *:min-w-0 lg:grid-cols-[1fr_1.15fr]">
        {/* Phones and tablets: a 4:3 photo above the form. Desktop: the full-height column beside it. */}
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Image src={photo.src} alt={photo.alt} fill placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          {/* The contact links sit over the photo on desktop only; on smaller crops they would cover the sign,
              and phones already have Call and WhatsApp in the menu and the bottom bar. */}
          <div className="absolute inset-0 hidden bg-linear-to-t from-black/70 via-black/10 to-transparent lg:block" />
          <ul className="absolute inset-x-0 bottom-0 hidden space-y-3 p-10 text-sm lg:block">
            {whatsapp && (
              <li>
                <a href={whatsapp} target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 hover:text-gold">
                  <WhatsAppIcon className="size-[18px] text-whatsapp" />
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
