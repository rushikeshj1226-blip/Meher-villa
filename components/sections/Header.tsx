import { messages, nav } from "@/content/villa";
import { formatPhone, site, whatsappUrl } from "@/lib/site";
import { buttonStyles } from "@/components/ui/SectionHeading";
import { HeaderShell } from "./HeaderShell";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <HeaderShell>
      <div className="mx-auto grid h-18 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-6 px-4 sm:px-8">
        <a href="#top" className="leading-none">
          <span className="block font-serif text-2xl">Meher Villa</span>
          <span className="mt-1.5 block text-[10px] uppercase tracking-[0.32em] opacity-70">Lonavala</span>
        </a>

        <nav aria-label="Main" className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-10 text-[15px]">
            {nav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="opacity-85 transition-opacity hover:opacity-100">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-start-3 flex items-center justify-end gap-2">
          <div className="hidden sm:block">
            <a href="#enquire" className={buttonStyles.gold}>
              Book Now
            </a>
          </div>
          <MobileNav
            links={nav}
            whatsapp={whatsappUrl(messages.general)}
            phone={site.phoneNumber ? { href: `tel:+${site.phoneNumber}`, label: formatPhone(site.phoneNumber) } : null}
          />
        </div>
      </div>
    </HeaderShell>
  );
}
