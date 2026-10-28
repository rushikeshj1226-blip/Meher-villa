import { amenities, faq, gallery, hero, seo, villa } from "@/content/villa";
import { site } from "@/lib/site";

export function buildSchema() {
  const id = `${site.url}/#villa`;
  const amenityNames = [...amenities.items.map((item) => item.title), "Swimming pool", "Pets allowed"];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": id,
        name: villa.name,
        alternateName: ["Meher Villa Lonavala", "Mehar Villa", "Mehere Villa"],
        description: seo.description,
        url: `${site.url}/`,
        ...(site.phoneNumber && { telephone: `+${site.phoneNumber}` }),
        ...(site.email && { email: site.email }),
        image: [hero.image.src, ...gallery.slice(1, 6).map((photo) => photo.src)].map((src) => `${site.url}${src.src}`),
        address: {
          "@type": "PostalAddress",
          streetAddress: villa.address.street,
          addressLocality: villa.address.locality,
          addressRegion: villa.address.region,
          postalCode: villa.address.postalCode,
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: villa.geo.lat, longitude: villa.geo.lng },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${villa.geo.lat},${villa.geo.lng}`,
        petsAllowed: true,
        availableLanguage: ["en", "hi"],
        amenityFeature: amenityNames.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
        sameAs: ["https://www.makemytrip.com/hotels/meher_villa-details-lonavala.html"],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: `${site.url}/`,
        name: "Meher Villa Lonavala",
        inLanguage: "en-IN",
        publisher: { "@id": id },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
