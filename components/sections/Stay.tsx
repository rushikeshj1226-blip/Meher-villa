import Image from "next/image";

import { stay, type IconName } from "@/content/villa";
import { SectionHeading, buttonStyles } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

const iconLabels: Partial<Record<IconName, string>> = {
  snow: "Air conditioning",
  tv: "TV",
  wifi: "Free Wi-Fi",
  sun: "24-hour hot water",
  fridge: "Refrigerator",
};

export function Stay() {
  return (
    <section id="stay" aria-labelledby="stay-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div className="reveal text-center">
          <SectionHeading id="stay-title" eyebrow={stay.eyebrow} title={stay.title} intro={stay.intro} />
          <a href="#enquire" className={`${buttonStyles.outline} mt-8`}>
            Check Availability
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {stay.options.map((option) => (
            <article key={option.name} className="reveal group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg sm:aspect-[4/5]">
                <Image
                  src={option.image.src}
                  alt={option.image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-xl">{option.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{option.text}</p>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <ul className="flex gap-3 text-ink/70">
                  {option.icons.map((icon) => (
                    <li key={icon} title={iconLabels[icon]}>
                      <Icon name={icon} className="size-[18px]" strokeWidth={1.5} />
                      <span className="sr-only">{iconLabels[icon]}</span>
                    </li>
                  ))}
                </ul>
                <a href="#enquire" className={buttonStyles.link}>
                  Enquire Now
                  <Icon name="arrowUpRight" className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
