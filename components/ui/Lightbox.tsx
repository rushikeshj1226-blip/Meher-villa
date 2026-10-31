"use client";

import { useEffect, useRef } from "react";

import { Icon } from "@/components/ui/Icon";

// Full-screen viewer for one photo or video at a time. Pass onStep to get previous/next buttons,
// arrow keys and swipe; leave it out for a single item (swiping would fight a video's scrub bar).
export function Lightbox({
  open,
  label,
  status,
  caption,
  onClose,
  onStep,
  children,
}: {
  open: boolean;
  label: string;
  status?: string;
  caption?: string;
  onClose: () => void;
  onStep?: (delta: number) => void;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const swipeStart = useRef<number | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-label={label}
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") onStep?.(1);
        if (event.key === "ArrowLeft") onStep?.(-1);
      }}
      onPointerDown={(event) => (swipeStart.current = event.clientX)}
      onPointerUp={(event) => {
        if (swipeStart.current === null || !onStep) return;
        const dx = event.clientX - swipeStart.current;
        swipeStart.current = null;
        if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-black/95 p-4 text-white open:grid open:grid-rows-[auto_1fr_auto] backdrop:bg-black/80 sm:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/70" aria-live="polite">
          {status}
        </span>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={`Close ${label.toLowerCase()}`}
          className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
        >
          <Icon name="close" />
        </button>
      </div>

      <div className="relative flex min-h-0 items-center justify-center">
        {open && children}
        {onStep && (
          <>
            <button
              type="button"
              onClick={() => onStep(-1)}
              aria-label="Previous photo"
              className="absolute left-0 grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Icon name="left" />
            </button>
            <button
              type="button"
              onClick={() => onStep(1)}
              aria-label="Next photo"
              className="absolute right-0 grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <Icon name="right" />
            </button>
          </>
        )}
      </div>

      <p className="pt-4 text-center font-serif text-lg text-white/85">{caption}</p>
    </dialog>
  );
}
