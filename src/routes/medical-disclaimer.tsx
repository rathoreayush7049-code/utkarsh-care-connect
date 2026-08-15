import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { business } from "@/lib/site-data";

const title = "Medical Disclaimer — Utkarsh Path Lab Ujjain";
const description =
  "Medical disclaimer for Utkarsh Path Lab, Ujjain: test information on this website is general guidance and not a substitute for professional medical advice.";

export const Route = createFileRoute("/medical-disclaimer")({
  component: Disclaimer,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://utkarsh-care-connect.lovable.app/medical-disclaimer" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://utkarsh-care-connect.lovable.app/medical-disclaimer" }],
  }),
});

function Disclaimer() {
  return (
    <LegalPage title="Medical Disclaimer" updated="15 August 2026">
      <p>
        The content on this website is published by {business.name} for general awareness only.
      </p>
      <h2>Not medical advice</h2>
      <p>
        Test descriptions, package inclusions and preparation notes are indicative. They are not a
        substitute for professional medical advice, diagnosis or treatment. Always consult a
        qualified doctor about your symptoms and test results.
      </p>
      <h2>Self-diagnosis</h2>
      <p>
        Never disregard or delay seeking medical advice because of something you have read here. In
        an emergency, contact your doctor or the nearest hospital immediately.
      </p>
      <h2>Unverified information</h2>
      <p>
        Pricing, report timelines, accreditations, doctor names and experience figures shown on this
        website are placeholders until formally verified by the laboratory.
      </p>
      <h2>Contact</h2>
      <p>
        For clarification, call {business.phones[0]} or visit {business.fullAddress}.
      </p>
    </LegalPage>
  );
}
