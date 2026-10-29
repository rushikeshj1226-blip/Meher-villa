"use client";

import { useEffect, useState } from "react";

import { messages } from "@/content/villa";
import { site, whatsappUrl } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

// Call / WhatsApp / Enquire bar for phones. It steps aside while the hero or the form is on screen.
export function MobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = ["top", "enquire"].map((id) => document.getElementById(id)).filter((el) => el !== null);
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onScreen.add(entry.target);
          else onScreen.delete(entry.target);
        }
        setVisible(onScreen.size === 0);
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const whatsapp = whatsappUrl(messages.general);
  const item = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-xs font-medium";

  return (
    <nav
      aria-label="Quick contact"
      className={`fixed inset-x-3 bottom-3 z-40 flex overflow-hidden rounded-full bg-brown text-white shadow-lg transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-[150%]"
      }`}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      {site.phoneNumber && (
        <a href={`tel:+${site.phoneNumber}`} className={item}>
          <Icon name="phone" className="size-5" />
          Call
        </a>
      )}
      {whatsapp && (
        <a href={whatsapp} target="_blank" rel="noopener" className={item}>
          <WhatsAppIcon className="size-5 text-whatsapp" />
          WhatsApp
        </a>
      )}
      <a href="#enquire" className={`${item} bg-gold text-ink`}>
        <Icon name="arrow" className="size-5" />
        Enquire
      </a>
    </nav>
  );
}
