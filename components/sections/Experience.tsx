import Image from "next/image";

import { day, messages, pets, play } from "@/content/villa";
import { whatsappUrl } from "@/lib/site";
import { Eyebrow, SectionHeading, buttonStyles } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Play() {
  return (
    <section id="play" aria-labelledby="play-title" className="mx-auto max-w-6xl px-4 pb-20 sm:px-8 sm:pb-28">
      <div className="reveal">
        <SectionHeading id="play-title" eyebrow={play.eyebrow} title={play.title} intro={play.intro} />
      </div>
      <ul className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-3">
        {play.items.map((item) => (
          <li key={item.title} className="reveal text-center">
            <Icon name={item.icon} className="mx-auto size-11 text-ink/80" strokeWidth={1.25} />
            <h3 className="mt-4 text-lg">{item.title}</h3>
            <p className="mx-auto mt-2 max-w-60 text-sm leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PetBand() {
  const whatsapp = whatsappUrl(messages.pets);

  return (
    <section id="pets" aria-labelledby="pets-title" className="bg-brown text-white">
      <div className="grid lg:grid-cols-2">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 py-16 text-center sm:px-12 sm:py-24">
          <Eyebrow tone="light">
            <span className="inline-flex items-center gap-2">
              <Icon name="paw" className="size-3.5" />
              {pets.eyebrow}
            </span>
          </Eyebrow>
          <h2 id="pets-title" className="mt-4 text-[2rem] leading-[1.15] sm:text-[2.6rem]">
            {pets.title}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">{pets.text}</p>
          <ul className="mt-7 flex max-w-md flex-wrap justify-center gap-2">
            {pets.points.map((point) => (
              <li key={point} className="rounded-full px-3.5 py-1.5 text-[13px] text-white/90 ring-1 ring-white/25">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
            <a href="#faq" className="-my-2.5 py-2.5 text-[13px] font-medium underline decoration-white/40 underline-offset-[6px] hover:decoration-white">
              Pet FAQs
            </a>
            <a
              href={whatsapp ?? "#enquire"}
              {...(whatsapp && { target: "_blank", rel: "noopener" })}
              className={buttonStyles.gold}
            >
              {whatsapp && <WhatsAppIcon className="size-[18px]" />}
              Check Pet-Friendly Dates
            </a>
          </div>
          <p className="mt-6 max-w-sm text-xs leading-relaxed text-white/55">{pets.note}</p>
        </div>
        <div className="relative min-h-80 lg:min-h-full">
          <Image src={pets.image.src} alt={pets.image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export function DayCards() {
  return (
    <section aria-labelledby="day-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
      <div className="reveal">
        <SectionHeading id="day-title" eyebrow={day.eyebrow} title={day.title} intro={day.intro} />
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {day.cards.map((card) => (
          <article key={card.title} className="reveal group flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 340px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <h3 className="text-xl">{card.title}</h3>
              <span className="shrink-0 rounded-full bg-paper px-2.5 py-1 text-[11px] text-muted ring-1 ring-line">{card.tag}</span>
            </div>
            <p className="mb-5 mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
            {/* mt-auto lines the buttons up across cards whose text runs to different lengths. */}
            <a href="#enquire" className={`${buttonStyles.outline} mt-auto self-start px-4 py-2 text-[13px]`}>
              Plan Your Stay
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
