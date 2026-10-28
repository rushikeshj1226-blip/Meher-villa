import { faq, houseRules } from "@/content/villa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

export function HouseRules() {
  return (
    <section id="rules" aria-labelledby="rules-title" className="border-y border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">
        <div className="reveal">
          <SectionHeading id="rules-title" eyebrow={houseRules.eyebrow} title={houseRules.title} />
        </div>
        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {houseRules.rules.map((rule) => (
            <div key={rule.title} className="reveal border-t border-line pt-5">
              <dt className="font-serif text-lg">{rule.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{rule.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-3xl px-4 py-20 sm:px-8 sm:py-28">
      <div className="reveal">
        <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />
      </div>
      <div className="mt-12 divide-y divide-line border-y border-line">
        {faq.items.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-serif text-lg [&::-webkit-details-marker]:hidden">
              {item.q}
              <Icon name="plus" className="size-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-45" strokeWidth={1.5} />
            </summary>
            <p className="pb-6 pr-10 text-[15px] leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
