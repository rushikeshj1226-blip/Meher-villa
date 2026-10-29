"use client";

import { useRef } from "react";

import { buttonStyles } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type Props = {
  links: { label: string; href: string }[];
  whatsapp: string | null;
  phone: { href: string; label: string } | null;
};

// Slide-in sidebar for phones and tablets. A native <dialog> gives focus trapping and Esc-to-close.
export function MobileNav({ links, whatsapp, phone }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const unlockScroll = () => (document.documentElement.style.overflow = "");
  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  // Unlock right away; the dialog's close event (also fired by Esc) arrives a moment later.
  const close = () => {
    dialogRef.current?.close();
    unlockScroll();
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Open menu"
        aria-haspopup="dialog"
        className="-mr-2 grid size-11 place-items-center rounded-full transition-colors hover:bg-current/10 lg:hidden"
      >
        <Icon name="menu" className="size-6" strokeWidth={1.5} />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        onClose={unlockScroll}
        onClick={(event) => {
          // A click on the dialog element itself (not its contents) is a click on the backdrop.
          if (event.target === event.currentTarget) close();
        }}
        className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-[85vw] max-w-sm bg-cream p-0 text-ink shadow-2xl transition-transform duration-300 ease-out backdrop:bg-black/50 starting:open:translate-x-full lg:hidden"
      >
        <div className="flex h-full flex-col px-6 pb-8 pt-5">
          <div className="flex items-center justify-between">
            <p className="leading-none">
              <span className="block font-serif text-2xl">Meher Villa</span>
              <span className="mt-1.5 block text-[10px] uppercase tracking-[0.32em] text-muted">Lonavala</span>
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="-mr-2 grid size-11 place-items-center rounded-full transition-colors hover:bg-ink/5"
            >
              <Icon name="close" className="size-6" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Main" className="mt-10">
            <ul className="divide-y divide-line border-y border-line">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={close} className="flex items-center justify-between py-4 font-serif text-2xl">
                    {link.label}
                    <Icon name="arrowUpRight" className="size-4 text-muted" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto space-y-3 pt-10">
            <a href="#enquire" onClick={close} className={`${buttonStyles.gold} w-full py-3.5`}>
              Book Now
            </a>
            <div className="grid grid-cols-2 gap-3">
              {phone && (
                <a href={phone.href} className={`${buttonStyles.outline} py-3`}>
                  <Icon name="phone" className="size-4" />
                  Call
                </a>
              )}
              {whatsapp && (
                <a href={whatsapp} target="_blank" rel="noopener" onClick={close} className={`${buttonStyles.outline} py-3`}>
                  <WhatsAppIcon className="size-[18px] text-whatsapp" />
                  WhatsApp
                </a>
              )}
            </div>
            {phone && <p className="pt-2 text-center text-sm text-muted">{phone.label}</p>}
          </div>
        </div>
      </dialog>
    </>
  );
}
