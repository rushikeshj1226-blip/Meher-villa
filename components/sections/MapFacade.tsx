"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import { Icon } from "@/components/ui/Icon";

// Shows a photo of the gate until the guest asks for the map, so no Google Maps code loads with the page.
export function MapFacade({ lat, lng, image }: { lat: number; lng: number; image: { src: StaticImageData; alt: string } }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="relative min-h-80 overflow-hidden lg:min-h-full">
      {showMap ? (
        <iframe
          title="Map showing Meher Villa, Lonavala"
          src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
      ) : (
        <>
          <Image src={image.src} alt={image.alt} fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-3 bg-linear-to-t from-black/70 to-transparent p-5 pt-20">
            <span className="font-serif text-lg text-white">Look for this gate</span>
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <Icon name="pin" className="size-4" />
              Show Map
            </button>
          </div>
        </>
      )}
    </div>
  );
}
