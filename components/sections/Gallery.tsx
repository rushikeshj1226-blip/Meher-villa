"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { Photo } from "@/content/villa";
import { buttonStyles } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

// "All" shows two full rows; the other tabs show every photo in that category.
const ALL_PREVIEW = 8;

export function Gallery({ photos, tabs }: { photos: Photo[]; tabs: readonly string[] }) {
  const [tab, setTab] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const swipeStart = useRef<number | null>(null);

  const name = tabs[tab];
  const shown = name === "All" ? photos : photos.filter((photo) => photo.category === name);
  const collapsible = name === "All" && shown.length > ALL_PREVIEW;
  const grid = collapsible && !expanded ? shown.slice(0, ALL_PREVIEW) : shown;
  const current = index === null ? null : shown[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (index !== null && dialog && !dialog.open) dialog.showModal();
  }, [index]);

  const selectTab = (next: number) => {
    const wrapped = (next + tabs.length) % tabs.length;
    setTab(wrapped);
    tabRefs.current[wrapped]?.focus();
  };

  const step = (delta: number) =>
    setIndex((value) => (value === null ? value : (value + delta + shown.length) % shown.length));

  return (
    <>
      <div
        role="tablist"
        aria-label="Photo categories"
        className="scrollbar-none -mx-4 mt-10 flex gap-7 overflow-x-auto border-b border-line px-4 sm:mx-0 sm:justify-center sm:px-0"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") selectTab(tab + 1);
          else if (event.key === "ArrowLeft") selectTab(tab - 1);
          else if (event.key === "Home") selectTab(0);
          else if (event.key === "End") selectTab(tabs.length - 1);
          else return;
          event.preventDefault();
        }}
      >
        {tabs.map((label, i) => (
          <button
            key={label}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`gallery-tab-${i}`}
            aria-selected={tab === i}
            aria-controls="gallery-panel"
            tabIndex={tab === i ? 0 : -1}
            onClick={() => setTab(i)}
            className={`-mb-px shrink-0 whitespace-nowrap border-b-2 pb-3 text-[13px] uppercase tracking-[0.16em] transition-colors ${
              tab === i ? "border-gold text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id="gallery-panel" aria-labelledby={`gallery-tab-${tab}`} tabIndex={0} className="mt-8 outline-none">
        <ul key={name} className="grid animate-fade-up grid-cols-2 gap-4 [animation-duration:500ms] lg:grid-cols-4">
          {grid.map((photo, i) => (
            <li key={photo.src.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open photo: ${photo.caption}`}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 270px, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-3 pb-2.5 pt-8 text-left text-[13px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {photo.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {collapsible && (
          <div className="mt-10 text-center">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls="gallery-panel"
              onClick={() => {
                setExpanded((value) => !value);
                // When collapsing, bring the reader back to the top of the gallery.
                if (expanded) document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={buttonStyles.outline}
            >
              {expanded ? "Show fewer photos" : `See all ${shown.length} photos`}
            </button>
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        onClose={() => setIndex(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        onPointerDown={(event) => (swipeStart.current = event.clientX)}
        onPointerUp={(event) => {
          if (swipeStart.current === null) return;
          const dx = event.clientX - swipeStart.current;
          swipeStart.current = null;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-black/95 p-4 text-white open:grid open:grid-rows-[auto_1fr_auto] backdrop:bg-black/80 sm:p-8"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/70" aria-live="polite">
            {index === null ? "" : `${name} · ${index + 1} / ${shown.length}`}
          </span>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close photo viewer"
            className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="relative flex min-h-0 items-center justify-center">
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
          {shown.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-0 grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <Icon name="left" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-0 grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <Icon name="right" />
              </button>
            </>
          )}
        </div>

        <p className="pt-4 text-center font-serif text-lg text-white/85">{current?.caption}</p>
      </dialog>
    </>
  );
}
