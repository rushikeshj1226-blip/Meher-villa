"use client";

import { useEffect, useState } from "react";

type State = "top" | "glass" | "solid";

// Three looks: fully transparent at the very top, frosted glass over the hero photo once scrolling
// starts, and frosted cream glass (dark text) after the hero has scrolled under the bar.
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const hero = document.getElementById("top");
    // The bar is 72px tall; the extra 24px makes it switch as soon as a section is jumped to,
    // when the hero's bottom edge lands exactly at the bar's edge.
    const observer = hero
      ? new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { rootMargin: "-96px 0px 0px 0px" })
      : null;
    if (hero) observer?.observe(hero);
    else setPastHero(true);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const state: State = pastHero ? "solid" : scrolled ? "glass" : "top";

  return (
    <header
      data-state={state}
      className="group fixed inset-x-0 top-0 z-40 border-b border-transparent text-white transition-[background-color,color,border-color,box-shadow,backdrop-filter] duration-300 data-[state=glass]:border-white/15 data-[state=glass]:bg-white/10 data-[state=glass]:shadow-[0_8px_32px_rgb(0_0_0/0.12)] data-[state=glass]:backdrop-blur-xl data-[state=glass]:backdrop-saturate-150 data-[state=solid]:border-line/70 data-[state=solid]:bg-cream/70 data-[state=solid]:text-ink data-[state=solid]:shadow-[0_8px_32px_rgb(43_34_28/0.08)] data-[state=solid]:backdrop-blur-xl data-[state=solid]:backdrop-saturate-150"
    >
      {children}
    </header>
  );
}
