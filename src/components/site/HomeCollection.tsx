import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ClipboardList, CalendarClock, Stethoscope, FileCheck2, MessageCircle } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "./SectionHeading";
import { business, services, waLink } from "@/lib/site-data";
import homeCollection from "@/assets/home-collection.jpg";

const steps = [
  { icon: ClipboardList, title: "Fill the booking form", text: "Share your details and the test you need." },
  { icon: CalendarClock, title: "Select date and time", text: "Pick a slot that suits your routine." },
  { icon: Stethoscope, title: "Technician visits your home", text: "Hygienic collection with sterile, single-use kits." },
  { icon: FileCheck2, title: "Receive digital reports", text: "Reports shared on WhatsApp or email as PDF." },
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  age: z
    .string()
    .trim()
    .regex(/^\d{1,3}$/, "Enter a valid age")
    .refine((v) => Number(v) > 0 && Number(v) < 120, "Enter a valid age"),
  gender: z.string().min(1, "Please select gender"),
  address: z.string().trim().min(8, "Please enter your full address").max(300, "Address is too long"),
  test: z.string().min(1, "Please select a test"),
  date: z.string().min(1, "Please choose a date"),
  time: z.string().min(1, "Please choose a time"),
  message: z.string().trim().max(500, "Message is too long").optional(),
});

type FormValues = z.infer<typeof schema>;

export function HomeCollection() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      mobile: "",
      age: "",
      gender: "",
      address: "",
      test: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const onSubmit = (v: FormValues) => {
    const text = [
      `*Home Sample Collection Request — ${business.name}*`,
      `Name: ${v.name}`,
      `Mobile: ${v.mobile}`,
      `Age: ${v.age}`,
      `Gender: ${v.gender}`,
      `Address: ${v.address}`,
      `Test Required: ${v.test}`,
      `Preferred Date: ${v.date}`,
      `Preferred Time: ${v.time}`,
      v.message ? `Message: ${v.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to confirm your booking", {
      description: "Please press send in WhatsApp so our team receives your request.",
    });
  };

  return (
    <section id="home-collection" className="bg-gradient-hero py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Home Collection"
          title="Book Home Sample Collection"
          subtitle={`Doorstep sample collection across ${business.serviceArea}. Submit the form and your request is sent to us on WhatsApp for confirmation.`}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-4xl border border-border shadow-card">
              <img
                src={homeCollection}
                width={1200}
                height={900}
                loading="lazy"
                alt="Phlebotomist from Utkarsh Path Lab arriving for home blood sample collection in Ujjain"
                className="h-56 w-full object-cover sm:h-72"
              />
            </div>
            <ol className="space-y-3">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="flex gap-4 rounded-3xl border border-border bg-card p-4 shadow-soft"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                    <s.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="font-display text-sm font-bold text-navy">
                      {i + 1}. {s.title}
                    </span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-4xl border border-border bg-card p-6 shadow-card sm:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" autoComplete="name" {...field} />
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
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input inputMode="numeric" maxLength={3} placeholder="Age in years" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {["Female", "Male", "Other", "Prefer not to say"].map((g) => (
                            <SelectItem key={g} value={g}>
                              {g}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={2}
                          placeholder="House / flat, street, landmark, area, Ujjain"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="test"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Test Required</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a test or package" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-72">
                          {services.map((s) => (
                            <SelectItem key={s.name} value={s.name}>
                              {s.name}
                            </SelectItem>
                          ))}
                          <SelectItem value="Not sure — need guidance">
                            Not sure — need guidance
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Date</FormLabel>
                      <FormControl>
                        <Input type="date" min={new Date().toISOString().slice(0, 10)} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Message (optional)</FormLabel>
                      <FormControl>
                        <Textarea rows={3} placeholder="Doctor's prescription details, symptoms, or any note" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="sm:col-span-2">
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <MessageCircle /> Send Booking on WhatsApp
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Your details are not stored on this website — they are sent directly to{" "}
                    {business.phones[0]} on WhatsApp when you press send.
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
