import { gallery, galleryIntro, galleryTabs } from "@/content/villa";
import { buildSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Stay } from "@/components/sections/Stay";
import { Gallery } from "@/components/sections/Gallery";
import { DayCards, PetBand, Play } from "@/components/sections/Experience";
import { About, Amenities } from "@/components/sections/Amenities";
import { Location, Nearby } from "@/components/sections/Location";
import { Faq, HouseRules } from "@/components/sections/RulesAndFaq";
import { Enquiry } from "@/components/enquiry/Enquiry";
import { Footer } from "@/components/sections/Footer";
import { MobileBar } from "@/components/sections/MobileBar";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()).replace(/</g, "\\u003c") }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Stay />
        <section id="gallery" aria-labelledby="gallery-title" className="mx-auto max-w-6xl px-4 pb-20 sm:px-8 sm:pb-28">
          <div className="reveal">
            <SectionHeading id="gallery-title" eyebrow={galleryIntro.eyebrow} title={galleryIntro.title} intro={galleryIntro.intro} />
          </div>
          <Gallery photos={gallery} tabs={galleryTabs} />
        </section>
        <Play />
        <PetBand />
        <DayCards />
        <Amenities />
        <Location />
        <About />
        <Nearby />
        <HouseRules />
        <Faq />
        <Enquiry />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
