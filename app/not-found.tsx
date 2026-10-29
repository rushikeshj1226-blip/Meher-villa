import { messages } from "@/content/villa";
import { whatsappUrl } from "@/lib/site";
import { Eyebrow, buttonStyles } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export default function NotFound() {
  const whatsapp = whatsappUrl(messages.general);

  return (
    <main className="mx-auto grid min-h-dvh max-w-xl place-content-center px-4 text-center">
      <Eyebrow>Page not found</Eyebrow>
      <h1 className="mt-4 text-4xl sm:text-5xl">This Page Wandered Off</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">Like a dog after a squirrel. Head back to the homepage, or message us on WhatsApp.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="/" className={buttonStyles.gold}>
          Go to Homepage
        </a>
        {whatsapp && (
          <a href={whatsapp} target="_blank" rel="noopener" className={buttonStyles.outline}>
            <WhatsAppIcon className="size-[18px] text-whatsapp" />
            Chat on WhatsApp
          </a>
        )}
      </div>
    </main>
  );
}
