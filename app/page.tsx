import { gallery, galleryIntro, galleryTabs, moments, villa } from "@/content/villa";
import { buildSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Stay } from "@/components/sections/Stay";
import { Gallery } from "@/components/sections/Gallery";
import { GuestMoments } from "@/components/sections/GuestMoments";
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
        <section id="moments" aria-labelledby="moments-title" className="border-y border-line bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-8">
            <div className="reveal">
              <SectionHeading id="moments-title" eyebrow={moments.eyebrow} title={moments.title} intro={moments.intro} />
            </div>
            <GuestMoments videos={moments.videos} photos={moments.photos} />
            <p className="mt-8 text-center">
              <a
                href={villa.instagram.url}
                target="_blank"
                rel="noopener"
                className="-my-2.5 inline-flex flex-wrap items-center justify-center gap-x-1.5 py-2.5 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-ink"
              >
                {/* Two pieces, so on the narrowest phones the handle wraps whole and the icon stays with its words. */}
                <span className="inline-flex items-center gap-2">
                  <Icon name="instagram" className="size-4" />
                  More moments on Instagram
                </span>
                <span>{villa.instagram.handle}</span>
              </a>
            </p>
          </div>
        </section>
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
