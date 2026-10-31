import { footer, nearby, villa } from "@/content/villa";
import { formatPhone, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="px-4 pb-28 pt-16 sm:px-8 lg:pb-12">
      <div className="mx-auto max-w-6xl rounded-lg bg-paper p-8 ring-1 ring-line sm:p-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
          <div>
            <p className="font-serif text-2xl leading-none">Meher Villa</p>
            <p className="mt-1.5 text-[10px] uppercase tracking-[0.32em] text-muted">Lonavala</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{footer.about}</p>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-sm font-medium">{column.title}</p>
              <ul className="mt-3 text-sm text-muted">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="inline-block py-1.5 hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="text-sm font-medium">Contact</p>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {site.whatsappNumber && (
                <li>
                  <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 py-1.5 hover:text-ink">
                    <WhatsAppIcon className="size-4 text-whatsapp" />
                    WhatsApp {formatPhone(site.whatsappNumber)}
                  </a>
                </li>
              )}
              {site.phoneNumber && (
                <li>
                  <a href={`tel:+${site.phoneNumber}`} className="inline-block py-1.5 hover:text-ink">
                    Call {formatPhone(site.phoneNumber)}
                  </a>
                </li>
              )}
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="inline-block py-1.5 hover:text-ink">
                    {site.email}
                  </a>
                </li>
              )}
              <li>
                <a href={villa.instagram.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 py-1.5 hover:text-ink">
                  <Icon name="instagram" className="size-4" />
                  Instagram {villa.instagram.handle}
                </a>
              </li>
              <li>
                <address className="py-1.5 not-italic leading-relaxed">{villa.address.full}</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted">
          <p>© {new Date().getFullYear()} Meher Villa, Lonavala. All rights reserved.</p>
          <p>Book direct for our best rate.</p>
        </div>

        <details className="mt-4 text-xs text-muted">
          <summary className="inline-block cursor-pointer list-none underline decoration-muted/40 underline-offset-2 hover:text-ink [&::-webkit-details-marker]:hidden">
            Photo credits
          </summary>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {nearby.places.map((place) => (
              <li key={place.name}>
                <span className="text-ink/80">{place.name}:</span> <PhotoCredit {...place.credit} />
              </li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  );
}

// The Creative Commons licences require crediting the author, licence and source (and noting the crop).
function PhotoCredit({ author, license, licenseUrl, source }: { author: string; license: string; licenseUrl: string; source: string }) {
  const link = "underline decoration-muted/40 underline-offset-2 hover:text-ink";
  return (
    <>
      <a href={source} target="_blank" rel="noopener" className={link}>
        {author}
      </a>
      ,{" "}
      {licenseUrl ? (
        <>
          <a href={licenseUrl} target="_blank" rel="noopener license" className={link}>
            {license}
          </a>
          , cropped, via Wikimedia Commons
        </>
      ) : (
        <>{license.toLowerCase()}, via Wikimedia Commons</>
      )}
    </>
  );
}
