"use client";

import { useEffect, useState } from "react";

// Transparent over the hero photo; turns solid cream once the hero has scrolled under the bar.
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) {
      setSolid(true);
      return;
    }
    // The bar is 72px tall; the extra 24px makes it solid as soon as a section is jumped to,
    // when the hero's bottom edge lands exactly at the bar's edge.
    const observer = new IntersectionObserver(([entry]) => setSolid(!entry.isIntersecting), {
      rootMargin: "-96px 0px 0px 0px",
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      data-solid={solid || undefined}
      className="group fixed inset-x-0 top-0 z-40 border-b border-transparent text-white transition-[background-color,color,border-color] duration-300 data-solid:border-line data-solid:bg-cream/90 data-solid:text-ink data-solid:backdrop-blur-md"
    >
      {children}
    </header>
  );
}
