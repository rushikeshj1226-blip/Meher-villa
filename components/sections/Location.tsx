import Image from "next/image";

import { location, messages, nearby, villa } from "@/content/villa";
import { whatsappUrl } from "@/lib/site";
import { Eyebrow, SectionHeading, buttonStyles } from "@/components/ui/SectionHeading";
import { MapFacade } from "./MapFacade";

export function Location() {
  const directions = `https://www.google.com/maps/search/?api=1&query=${villa.geo.lat},${villa.geo.lng}`;
  const whatsapp = whatsappUrl(messages.directions);

  return (
    <section id="location" aria-labelledby="location-title">
      <div className="bg-brown text-white">
        <div className="grid lg:grid-cols-2">
          <MapFacade lat={villa.geo.lat} lng={villa.geo.lng} image={location.gateImage} />
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 py-16 text-center sm:px-12 sm:py-24">
            <Eyebrow tone="light">{location.eyebrow}</Eyebrow>
            <h2 id="location-title" className="mt-4 text-[2rem] leading-[1.15] sm:text-[2.6rem]">
              {location.title}
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">{location.intro}</p>
            <address className="mt-5 max-w-sm text-sm not-italic leading-relaxed text-white/60">{villa.address.full}</address>
            <dl className="mt-8 grid w-full max-w-md grid-cols-3 divide-x divide-white/15">
              {location.distances.map((item) => (
                <div key={item.from} className="flex flex-col-reverse px-2">
                  <dt className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/55">{item.from}</dt>
                  <dd className="font-serif text-lg">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href={directions} target="_blank" rel="noopener" className={buttonStyles.gold}>
                Get Directions
              </a>
              {whatsapp && (
                <a href={whatsapp} target="_blank" rel="noopener" className={buttonStyles.ghostLight}>
                  Ask the Caretaker
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-3">
        {location.sections.map((section) => (
          <div key={section.title} className="reveal">
            <h3 className="text-xl">{section.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{section.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Nearby() {
  return (
    <section id="explore" aria-labelledby="explore-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
      <div className="reveal">
        <SectionHeading id="explore-title" eyebrow={nearby.eyebrow} title={nearby.title} intro={nearby.intro} />
      </div>
      <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {nearby.places.map((place) => (
          <li key={place.name} className="reveal group flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-line">
              <Image
                src={place.image.src}
                alt={place.image.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] backdrop-blur">
                {place.distance}
              </span>
            </div>
            <h3 className="mt-5 text-xl leading-snug">{place.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{place.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
