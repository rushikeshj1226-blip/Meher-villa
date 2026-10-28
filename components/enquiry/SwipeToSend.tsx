"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

const HANDLE = 48;
const PAD = 4;
const THRESHOLD = 0.85;

// A slide-to-confirm control. Dragging the handle to the end calls onComplete;
// keyboard users can press Enter or Space on the handle instead.
export function SwipeToSend({ label, onComplete }: { label: string; onComplete: () => boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const startRef = useRef(0);
  const xRef = useRef(0);
  const [x, setX] = useState(0);
  const [max, setMax] = useState(1);
  const [dragging, setDragging] = useState(false);

  const maxX = () => {
    const value = trackRef.current ? trackRef.current.clientWidth - HANDLE - PAD * 2 : 1;
    setMax(value);
    return value;
  };

  const move = (value: number) => {
    xRef.current = value;
    setX(value);
  };

  const finish = () => {
    const end = maxX();
    const accepted = onComplete();
    move(accepted ? end : 0);
    if (accepted) window.setTimeout(() => move(0), 1500);
  };

  const progress = Math.min(x / max, 1);

  return (
    <div
      ref={trackRef}
      className="relative h-14 select-none overflow-hidden rounded-full bg-black/25 p-1 text-white ring-1 ring-white/15"
    >
      <div
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 rounded-full bg-gold/25 ${dragging ? "" : "transition-[width] duration-300"}`}
        style={{ width: x + HANDLE + PAD * 2 }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid place-items-center pl-12 text-[15px] font-medium"
        style={{ opacity: 1 - progress * 1.2 }}
      >
        {label}
      </span>
      <button
        type="button"
        aria-label={`${label}. Press Enter to send.`}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          startRef.current = event.clientX - xRef.current;
          maxX();
          setDragging(true);
        }}
        onPointerMove={(event) => {
          if (!dragging) return;
          move(Math.min(Math.max(event.clientX - startRef.current, 0), max));
        }}
        onPointerUp={() => {
          setDragging(false);
          if (xRef.current >= max * THRESHOLD) finish();
          else move(0);
        }}
        onPointerCancel={() => {
          setDragging(false);
          move(0);
        }}
        onClick={(event) => {
          // detail is 0 when the click comes from the keyboard rather than a pointer.
          if (event.detail === 0) finish();
        }}
        className={`relative z-10 grid size-12 touch-none place-items-center rounded-full bg-gold text-ink shadow-sm ${
          dragging ? "cursor-grabbing" : "cursor-grab transition-transform duration-300"
        }`}
        style={{ transform: `translateX(${x}px)` }}
      >
        <Icon name={progress > 0.95 ? "check" : "arrow"} />
      </button>
    </div>
  );
}
