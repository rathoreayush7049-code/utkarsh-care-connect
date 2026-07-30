import { useState } from "react";
import { toast } from "sonner";
import { Download, MessageCircle, ShieldCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "./SectionHeading";
import { business, tel, waLink } from "@/lib/site-data";

export function Reports() {
  const [mobile, setMobile] = useState("");
  const [patientId, setPatientId] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
      toast.error("Enter a valid 10-digit registered mobile number");
      return;
    }
    const text = [
      `*Report Request — ${business.name}*`,
      `Registered Mobile: ${mobile.trim()}`,
      patientId.trim() ? `Patient ID: ${patientId.trim()}` : null,
      "Please share my report.",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    toast.success("Report request ready on WhatsApp", {
      description: "Our team will verify your details and share the report.",
    });
  };

  return (
    <section id="reports" className="py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Reports"
          title="Download or request your report"
          subtitle="Enter your registered mobile number and patient ID. Until the online report portal goes live, requests are verified and delivered by our team on WhatsApp."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-4xl border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="report-mobile">Registered Mobile Number</Label>
                <Input
                  id="report-mobile"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10-digit mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-id">Patient ID</Label>
                <Input
                  id="report-id"
                  maxLength={30}
                  placeholder="As printed on your receipt"
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="report-otp">OTP</Label>
                <Input
                  id="report-otp"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="OTP verification coming soon (placeholder)"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  disabled
                />
                <p className="text-xs text-muted-foreground">
                  Placeholder: OTP-based login will be enabled once the report portal is connected.
                </p>
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="mt-6 w-full">
              <Download /> Download Report
            </Button>
          </form>

          <div className="flex flex-col gap-4">
            <div className="rounded-4xl border border-border bg-secondary/70 p-6">
              <ShieldCheck className="size-6 text-teal" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-bold text-navy">
                Your report stays confidential
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reports are released only to the registered patient or their authorised attendant
                after verification of the mobile number and patient ID.
              </p>
            </div>
            <div className="rounded-4xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold text-navy">Need help with a report?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team can resend a lost report or explain the collection timing.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild variant="whatsapp">
                  <a
                    href={waLink(`Hello ${business.name}, I need help with my report.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle /> WhatsApp Support
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={tel(business.phones[0])}>
                    <Phone /> Call Lab
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
