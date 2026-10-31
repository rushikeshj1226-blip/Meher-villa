"use client";

import Image from "next/image";
import { useState } from "react";

import type { GuestPhoto, Video } from "@/content/villa";
import { buttonStyles } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Lightbox } from "@/components/ui/Lightbox";

// Two photos per column on desktop before "See all".
const PREVIEW = 8;

// Videos load only when a guest presses play, so the section costs nothing but the poster images.
export function GuestMoments({ videos, photos }: { videos: Video[]; photos: GuestPhoto[] }) {
  const [video, setVideo] = useState<Video | null>(null);
  const [index, setIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const collapsible = photos.length > PREVIEW;
  const grid = collapsible && !expanded ? photos.slice(0, PREVIEW) : photos;
  const current = index === null ? null : photos[index];

  const step = (delta: number) =>
    setIndex((value) => (value === null ? value : (value + delta + photos.length) % photos.length));

  return (
    <>
      {/* Phones: a swipeable row (scroll-px keeps the first card on the gutter when it snaps).
          Wider: wrapped rows with the last row centred, so five videos never leave a gap. */}
      <ul className="scrollbar-none -mx-4 mt-12 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {videos.map((item) => (
          <li key={item.src} className="w-[62%] shrink-0 snap-start sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4rem)/5)]">
            <button
              type="button"
              onClick={() => setVideo(item)}
              aria-label={`Play video: ${item.caption} (${item.duration})`}
              className="group relative block aspect-[3/4] w-full overflow-hidden rounded-lg"
            >
              <Image
                src={item.poster}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 210px, (min-width: 640px) 33vw, 62vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Icon name="play" className="ml-0.5 size-6" />
              </span>
              <span className="absolute right-3 top-3 rounded-full bg-black/55 px-2 py-0.5 text-[11px] text-white">{item.duration}</span>
              <span className="absolute inset-x-0 bottom-0 px-3 pb-3 text-left text-[13px] text-white">{item.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      <ul id="moments-photos" className="mt-10 columns-2 gap-4 lg:columns-4">
        {grid.map((photo, i) => (
          <li key={photo.src.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Open photo: ${photo.caption}`}
              className="group relative block w-full overflow-hidden rounded-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                placeholder="blur"
                sizes="(min-width: 1024px) 270px, 50vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-3 pb-2.5 pt-8 text-left text-[13px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {photo.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {collapsible && (
        <div className="mt-6 text-center">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls="moments-photos"
            onClick={() => {
              setExpanded((value) => !value);
              if (expanded) document.getElementById("moments-photos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={buttonStyles.outline}
          >
            {expanded ? "Show fewer photos" : `See all ${photos.length} photos`}
          </button>
        </div>
      )}

      <Lightbox open={video !== null} label="Video player" caption={video?.caption} onClose={() => setVideo(null)}>
        {video && (
          <video
            key={video.src}
            src={video.src}
            poster={video.poster.src}
            aria-label={video.caption}
            controls
            autoPlay
            playsInline
            className="max-h-full max-w-full rounded-lg"
          />
        )}
      </Lightbox>

      <Lightbox
        open={current !== null}
        label="Photo viewer"
        status={index === null ? "" : `${index + 1} / ${photos.length}`}
        caption={current?.caption}
        onClose={() => setIndex(null)}
        onStep={step}
      >
        {current && (
          <Image
            key={current.src.src}
            src={current.src}
            alt={current.alt}
            placeholder="blur"
            sizes="100vw"
            className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain"
          />
        )}
      </Lightbox>
    </>
  );
}
