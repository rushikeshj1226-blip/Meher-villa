export function Eyebrow({ children, tone = "muted" }: { children: React.ReactNode; tone?: "muted" | "light" }) {
  return (
    <p className={`text-[11px] font-medium uppercase tracking-[0.28em] ${tone === "light" ? "text-white/70" : "text-muted"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "center",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "mx-auto max-w-md lg:mx-0"}>
      <Eyebrow tone={tone === "light" ? "light" : "muted"}>{eyebrow}</Eyebrow>
      <h2 id={id} className={`mt-3 text-[2rem] leading-[1.15] sm:text-[2.6rem] ${tone === "light" ? "text-white" : ""}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[15px] leading-relaxed ${tone === "light" ? "text-white/75" : "text-muted"} ${centered ? "mx-auto max-w-lg" : ""}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

const pill = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5";

export const buttonStyles = {
  gold: `${pill} bg-gold text-ink hover:bg-[#f2b54c]`,
  outline: `${pill} text-ink ring-1 ring-ink/25 hover:bg-ink hover:text-white`,
  ghostLight: `${pill} text-white ring-1 ring-white/50 hover:bg-white hover:text-ink`,
  link: "group inline-flex items-center gap-1.5 text-[13px] font-medium underline decoration-ink/30 underline-offset-[6px] transition-colors hover:decoration-ink",
};
