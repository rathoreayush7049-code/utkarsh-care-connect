import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Instagram, Clock, Navigation, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SectionHeading } from "./SectionHeading";
import { business, mapsEmbedUrl, mapsUrl, tel, waLink } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  message: z
    .string()
    .trim()
    .min(5, "Please write your enquiry")
    .max(600, "Message is too long"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", mobile: "", message: "" },
  });

  const onSubmit = (v: FormValues) => {
    const text = [
      `*Enquiry — ${business.name}*`,
      `Name: ${v.name}`,
      `Mobile: ${v.mobile}`,
      `Message: ${v.message}`,
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your enquiry");
  };

  return (
    <section id="contact" className="bg-secondary/60 py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title={`Visit ${business.name} in ${business.city}`}
          subtitle={`Walk in during lab hours, or reach us on call and WhatsApp for bookings, packages and reports.`}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-4xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-xl font-bold text-navy">{business.name}</h3>

              <p className="mt-4 flex gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {business.address.line1},<br />
                  {business.address.line2},<br />
                  {business.address.city}, {business.address.state} – {business.address.pincode}
                </span>
              </p>

              <div className="mt-4 flex gap-3 text-sm">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  {business.phones.map((p) => (
                    <a key={p} href={tel(p)} className="font-semibold text-navy hover:text-primary">
                      {p}
                    </a>
                  ))}
                </span>
              </div>

              <p className="mt-4 flex gap-3 text-sm">
                <Instagram className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-navy hover:text-primary"
                >
                  @{business.instagram}
                </a>
              </p>

              <div className="mt-4 flex gap-3 text-sm">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <ul className="space-y-1 text-muted-foreground">
                  {business.hours.map((h) => (
                    <li key={h.day}>
                      <span className="font-semibold text-navy">{h.day}:</span> {h.time}
                    </li>
                  ))}
                  <li className="text-xs">(Business hours are editable — please confirm with the lab.)</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Button asChild variant="hero">
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation /> Get Directions
                  </a>
                </Button>
                <Button asChild variant="whatsapp">
                  <a
                    href={waLink(`Hello ${business.name}, I have an enquiry.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle /> WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={tel(business.phones[0])}>
                    <Phone /> Call Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-border shadow-soft">
              <iframe
                title={`Google Map showing ${business.name} in ${business.city}`}
                src={mapsEmbedUrl}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <div className="rounded-4xl border border-border bg-card p-6 shadow-card sm:p-8">
            <h3 className="font-display text-xl font-bold text-navy">Send an enquiry</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Ask about a test, package price or report. We reply on WhatsApp.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" autoComplete="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input
                          inputMode="numeric"
                          maxLength={10}
                          placeholder="10-digit mobile"
                          autoComplete="tel-national"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={5} placeholder="How can we help you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send /> Send Enquiry
                </Button>
                <p className="text-xs text-muted-foreground">
                  Please do not share sensitive medical history here. Enquiries are sent directly to
                  the lab on WhatsApp and are not stored on this website.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
