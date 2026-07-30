import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { business } from "@/lib/site-data";

const title = "Terms & Conditions — Utkarsh Path Lab Ujjain";
const description =
  "Terms of use for the Utkarsh Path Lab website, covering bookings, home sample collection, pricing and report delivery in Ujjain.";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function Terms() {
  return (
    <LegalPage title="Terms & Conditions" updated="[Date to be confirmed]">
      <p>
        By using this website or booking a test with {business.name}, you agree to the terms below.
      </p>
      <h2>Bookings</h2>
      <ul>
        <li>A booking is confirmed only after our team responds to your WhatsApp or call.</li>
        <li>Home collection slots are subject to technician availability in {business.serviceArea}.</li>
        <li>Please keep a valid ID and the doctor's prescription ready at the time of collection.</li>
      </ul>
      <h2>Pricing</h2>
      <p>
        Prices and package inclusions shown on this website are placeholders until confirmed by the
        laboratory. The applicable price is the one quoted at the time of booking.
      </p>
      <h2>Reports</h2>
      <p>
        Report timelines are indicative. Certain samples may require re-collection or referral,
        which can extend delivery time. Reports must be interpreted by a qualified doctor.
      </p>
      <h2>Accreditations and claims</h2>
      <p>
        Any accreditation, certification, doctor name, experience figure or test count referenced on
        this website is a placeholder pending verification and should not be relied upon until
        confirmed.
      </p>
      <h2>Contact</h2>
      <p>
        {business.name}, {business.fullAddress}. Phone: {business.phones.join(" / ")}.
      </p>
    </LegalPage>
  );
}
