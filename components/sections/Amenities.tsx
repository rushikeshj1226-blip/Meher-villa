import Image from "next/image";

import { about, amenities } from "@/content/villa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

export function Amenities() {
  return (
    <section id="amenities" aria-labelledby="amenities-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
      <div className="reveal">
        <SectionHeading id="amenities-title" eyebrow={amenities.eyebrow} title={amenities.title} intro={amenities.intro} />
      </div>
      <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {amenities.items.map((item) => (
          <li key={item.title} className="reveal text-center">
            <Icon name={item.icon} className="mx-auto size-9 text-ink/80" strokeWidth={1.25} />
            <h3 className="mt-3 text-base">{item.title}</h3>
            <p className="mt-1 text-[13px] leading-snug text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal text-center lg:text-left">
          <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} align="left" />
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
          {/* Each value shows above its label (column-reverse); justify-end keeps every value on the same top line. */}
          <dl className="mt-8 flex justify-center gap-10 lg:justify-start">
            {about.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-xs uppercase tracking-[0.12em] text-muted sm:tracking-[0.18em]">{stat.label}</dt>
                <dd className="font-serif text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {about.cards.map((card) => (
            <article key={card.title} className="reveal group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-xl">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
