import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { business } from "@/lib/site-data";

const title = "Privacy Policy — Utkarsh Path Lab Ujjain";
const description =
  "How Utkarsh Path Lab, Ujjain collects, uses and protects patient enquiry details submitted through this website.";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://utkarsh-care-connect.lovable.app/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://utkarsh-care-connect.lovable.app/privacy-policy" }],
  }),
});

function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="15 August 2026">
      <p>
        {business.name} respects the privacy of every patient. This policy explains what happens to
        the information you share through this website.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Name, age, gender, mobile number and address submitted in the booking form.</li>
        <li>The test or package you select and any message you write.</li>
        <li>Registered mobile number and patient ID submitted in the report request form.</li>
      </ul>
      <h2>How the information is used</h2>
      <p>
        This website does not store your details in a database. When you submit a form, the details
        are composed into a WhatsApp message that you send to {business.phones[0]}. We use them only
        to schedule your collection, answer your enquiry or deliver your report.
      </p>
      <h2>Report confidentiality</h2>
      <p>
        Laboratory reports are shared only with the registered patient or an authorised attendant
        after verification. Reports are never published or shared with third parties without consent,
        except where required by law.
      </p>
      <h2>Third-party services</h2>
      <p>
        The site embeds Google Maps and links to WhatsApp and Instagram. Their use is governed by
        their own privacy policies.
      </p>
      <h2>Contact</h2>
      <p>
        For any privacy question, call {business.phones[0]} or visit us at {business.fullAddress}.
      </p>
    </LegalPage>
  );
}
