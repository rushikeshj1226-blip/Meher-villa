import Image from "next/image";

import { hero, messages } from "@/content/villa";
import { whatsappUrl } from "@/lib/site";
import { buttonStyles } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Hero() {
  const whatsapp = whatsappUrl(messages.general);
  const [area, ...rest] = hero.eyebrow.split(" · ");

  return (
    <section
      id="top"
      className="relative isolate flex h-svh max-h-[900px] min-h-[560px] items-center justify-center overflow-hidden bg-brown pt-18 text-white"
    >
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 animate-hero-zoom object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center">
        {/* Phones break after the first place name, so a separator never starts a line. */}
        <p className="animate-fade-up text-[11px] font-medium uppercase leading-relaxed tracking-[0.32em] text-white/90">
          {area}
          <span className="hidden sm:inline"> · </span>
          <br className="sm:hidden" />
          {rest.join(" · ")}
        </p>
        <h1 className="mt-5 animate-fade-up [animation-delay:120ms]">
          <span className="block text-[3.6rem] leading-none sm:text-[6.5rem]">{hero.title}</span>
          <span className="mt-5 block font-sans text-lg sm:text-xl">{hero.subtitle}</span>
        </h1>
        <p className="mt-4 max-w-xl animate-fade-up text-[15px] leading-relaxed text-white/90 [animation-delay:240ms]">{hero.intro}</p>
        <div className="mt-8 flex animate-fade-up flex-wrap items-center justify-center gap-3 [animation-delay:360ms]">
          <a href="#enquire" className={buttonStyles.gold}>
            Check Availability
          </a>
          {whatsapp && (
            <a href={whatsapp} target="_blank" rel="noopener" className={buttonStyles.ghostLight}>
              <WhatsAppIcon className="size-[18px] text-whatsapp" />
              Chat on WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
