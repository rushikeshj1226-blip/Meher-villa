import Image from "next/image";

import { hero, messages } from "@/content/villa";
import { whatsappUrl } from "@/lib/site";
import { buttonStyles } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  const whatsapp = whatsappUrl(messages.general);

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
      {/* A light overall wash keeps the photo bright; a soft spot of shade sits only behind the text. */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/50 via-black/5 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_95%_55%_at_50%_55%,rgb(0_0_0/0.5)_0%,rgb(0_0_0/0.25)_55%,transparent_100%)] sm:bg-[radial-gradient(ellipse_55%_45%_at_50%_55%,rgb(0_0_0/0.5)_0%,rgb(0_0_0/0.25)_55%,transparent_100%)]" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center">
        <p className="animate-fade-up text-[11px] font-medium uppercase tracking-[0.32em] text-white/90 text-shadow-sm text-shadow-black/40">{hero.eyebrow}</p>
        <h1 className="mt-5 animate-fade-up text-shadow-lg text-shadow-black/35 [animation-delay:120ms]">
          <span className="block text-[3.6rem] leading-none sm:text-[6.5rem]">{hero.title}</span>
          <span className="mt-5 block font-sans text-lg sm:text-xl">{hero.subtitle}</span>
        </h1>
        <p className="mt-4 max-w-xl animate-fade-up text-[15px] leading-relaxed text-white/90 text-shadow-md text-shadow-black/40 [animation-delay:240ms]">{hero.intro}</p>
        <div className="mt-8 flex animate-fade-up flex-wrap items-center justify-center gap-3 [animation-delay:360ms]">
          <a href="#enquire" className={buttonStyles.gold}>
            Check Availability
          </a>
          {whatsapp && (
            <a href={whatsapp} target="_blank" rel="noopener" className={buttonStyles.ghostLight}>
              <Icon name="chat" className="size-4" />
              Chat on WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
