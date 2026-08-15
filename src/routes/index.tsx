import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Packages } from "@/components/site/Packages";
import { HomeCollection } from "@/components/site/HomeCollection";
import { Reports } from "@/components/site/Reports";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";
import { business, faqs } from "@/lib/site-data";
import logoAsset from "@/assets/utkarsh-logo.png.asset.json";


const title = "Utkarsh Path Lab — Pathology Lab & Diagnostic Centre in Ujjain";
const description =
  "Utkarsh Path Lab, Free Ganj, Madhav Nagar, Ujjain. Blood tests, full body checkup, health packages and home blood collection with accurate reports and same-day delivery.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "pathology lab in Ujjain, diagnostic centre in Ujjain, blood test in Ujjain, home blood collection Ujjain, full body checkup Ujjain, pathology lab near Madhav Nagar Ujjain, Utkarsh Path Lab Ujjain",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://utkarsh-care-connect.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        property: "og:image",
        content: `https://utkarsh-care-connect.lovable.app${logoAsset.url}`,
      },
      {
        name: "twitter:image",
        content: `https://utkarsh-care-connect.lovable.app${logoAsset.url}`,
      },
    ],
    links: [{ rel: "canonical", href: "https://utkarsh-care-connect.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["MedicalBusiness", "MedicalClinic", "LocalBusiness"],
              name: business.name,
              description,
              url: "https://utkarsh-care-connect.lovable.app/",
              telephone: business.phones,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${business.address.line1}, ${business.address.line2}`,
                addressLocality: business.address.city,
                addressRegion: business.address.state,
                postalCode: business.address.pincode,
                addressCountry: "IN",
              },
              areaServed: business.serviceArea,
              medicalSpecialty: "Pathology",
              sameAs: [business.instagramUrl],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "07:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "07:00",
                  closes: "14:00",
                },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <HomeCollection />
        <Reports />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
