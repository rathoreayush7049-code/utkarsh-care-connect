/**
 * EDITABLE BUSINESS DATA
 * ----------------------
 * All business details live here so they can be updated in one place.
 * Anything marked with `PLACEHOLDER` is unverified and must be confirmed by
 * the lab owner before publishing (accreditations, pricing, doctor names,
 * test counts, experience years, testimonials).
 */

export const business = {
  name: "Utkarsh Path Lab",
  tagline: "Pathology & Diagnostic Laboratory",
  city: "Ujjain",
  state: "Madhya Pradesh",
  address: {
    line1: "11, Dhanwantari Marg",
    line2: "Free Ganj, Madhav Nagar",
    city: "Ujjain",
    state: "Madhya Pradesh",
    pincode: "456010",
  },
  get fullAddress() {
    return `${this.address.line1}, ${this.address.line2}, ${this.address.city}, ${this.address.state} – ${this.address.pincode}`;
  },
  phones: ["+91 95756 98016", "+91 72474 47240"],
  whatsapp: "919575698016",
  instagram: "utkarshpathlabujn",
  instagramUrl: "https://instagram.com/utkarshpathlabujn",
  mapsQuery:
    "Utkarsh Path Lab, 11 Dhanwantari Marg, Free Ganj, Madhav Nagar, Ujjain, Madhya Pradesh 456010",
  serviceArea: "Ujjain and nearby areas",
  // EDITABLE — confirm actual timings
  hours: [
    { day: "Monday – Saturday", time: "7:00 AM – 9:00 PM" },
    { day: "Sunday", time: "7:00 AM – 2:00 PM" },
    { day: "Home Collection Slots", time: "6:30 AM – 7:00 PM" },
  ],
};

export const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapsQuery)}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`;

export const waLink = (message: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Health Packages", href: "#packages" },
  { label: "Home Collection", href: "#home-collection" },
  { label: "Reports", href: "#reports" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  name: string;
  icon: string;
  description: string;
  category: "Test" | "Package" | "Service";
};

export const services: Service[] = [
  {
    name: "Complete Blood Count (CBC)",
    icon: "Droplets",
    description: "Screens haemoglobin, RBC, WBC and platelet levels to detect infection or anaemia.",
    category: "Test",
  },
  {
    name: "Blood Sugar Test",
    icon: "Candy",
    description: "Fasting, post-prandial and random glucose testing for diabetes monitoring.",
    category: "Test",
  },
  {
    name: "HbA1c",
    icon: "LineChart",
    description: "Three-month average blood sugar control indicator for diabetic patients.",
    category: "Test",
  },
  {
    name: "Thyroid Profile",
    icon: "Activity",
    description: "T3, T4 and TSH levels to assess thyroid gland function.",
    category: "Test",
  },
  {
    name: "Lipid Profile",
    icon: "HeartPulse",
    description: "Cholesterol, triglycerides, HDL and LDL screening for heart health.",
    category: "Test",
  },
  {
    name: "Liver Function Test",
    icon: "Layers",
    description: "Bilirubin, enzymes and protein levels to evaluate liver performance.",
    category: "Test",
  },
  {
    name: "Kidney Function Test",
    icon: "Filter",
    description: "Urea, creatinine and electrolytes to check renal health.",
    category: "Test",
  },
  {
    name: "Urine Examination",
    icon: "FlaskConical",
    description: "Routine and microscopic urine analysis for infections and metabolic issues.",
    category: "Test",
  },
  {
    name: "Vitamin D",
    icon: "Sun",
    description: "Detects vitamin D deficiency affecting bone strength and immunity.",
    category: "Test",
  },
  {
    name: "Vitamin B12",
    icon: "Pill",
    description: "Checks B12 levels linked to fatigue, nerve health and anaemia.",
    category: "Test",
  },
  {
    name: "Hormone Tests",
    icon: "Atom",
    description: "Reproductive, thyroid and metabolic hormone assays as advised by your doctor.",
    category: "Test",
  },
  {
    name: "Pregnancy Tests",
    icon: "Baby",
    description: "Urine and serum beta-hCG testing with confidential handling.",
    category: "Test",
  },
  {
    name: "Dengue Test",
    icon: "Bug",
    description: "NS1 antigen, IgG and IgM testing for early dengue detection.",
    category: "Test",
  },
  {
    name: "Malaria Test",
    icon: "Microscope",
    description: "Rapid antigen and peripheral smear examination for malarial parasites.",
    category: "Test",
  },
  {
    name: "Typhoid Test",
    icon: "Thermometer",
    description: "Widal and rapid card testing for suspected enteric fever.",
    category: "Test",
  },
  {
    name: "Full Body Checkup",
    icon: "ClipboardList",
    description: "Comprehensive preventive panel covering major organ systems.",
    category: "Package",
  },
  {
    name: "Senior Citizen Package",
    icon: "UserRound",
    description: "Age-focused screening for heart, bone, sugar and organ function.",
    category: "Package",
  },
  {
    name: "Diabetes Package",
    icon: "Gauge",
    description: "Sugar, HbA1c, kidney and lipid markers bundled for diabetic care.",
    category: "Package",
  },
  {
    name: "Women's Wellness Package",
    icon: "Flower2",
    description: "Haemoglobin, thyroid, vitamin and hormone screening for women.",
    category: "Package",
  },
  {
    name: "Home Sample Collection",
    icon: "Home",
    description: "Trained technician collects your sample at home across Ujjain.",
    category: "Service",
  },
];

export type Package = {
  name: string;
  summary: string;
  tests: string[];
  originalPrice: string;
  discountPrice: string;
  reportTime: string;
  fasting: string;
  featured?: boolean;
};

/** PLACEHOLDER pricing — confirm with the lab before publishing. */
export const packages: Package[] = [
  {
    name: "Basic Health Checkup",
    summary: "Essential yearly screening for healthy adults.",
    tests: ["CBC", "Blood Sugar (Fasting)", "Urine Routine", "Lipid Profile"],
    originalPrice: "₹ [MRP]",
    discountPrice: "₹ [Offer Price]",
    reportTime: "Same day",
    fasting: "10–12 hours fasting required",
  },
  {
    name: "Full Body Checkup",
    summary: "Wide preventive panel covering all major organ systems.",
    tests: [
      "CBC",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Thyroid Profile",
      "HbA1c",
      "Urine Routine",
    ],
    originalPrice: "₹ [MRP]",
    discountPrice: "₹ [Offer Price]",
    reportTime: "Within 24 hours",
    fasting: "10–12 hours fasting required",
    featured: true,
  },
  {
    name: "Diabetes Care Package",
    summary: "Regular monitoring panel for diabetic patients.",
    tests: ["Fasting & PP Sugar", "HbA1c", "Kidney Function Test", "Lipid Profile", "Urine Routine"],
    originalPrice: "₹ [MRP]",
    discountPrice: "₹ [Offer Price]",
    reportTime: "Same day",
    fasting: "Fasting required",
  },
  {
    name: "Women's Wellness Package",
    summary: "Focused screening for women's everyday health concerns.",
    tests: ["CBC", "Thyroid Profile", "Vitamin D", "Vitamin B12", "Calcium", "Iron Studies"],
    originalPrice: "₹ [MRP]",
    discountPrice: "₹ [Offer Price]",
    reportTime: "Within 24 hours",
    fasting: "Fasting preferred",
  },
  {
    name: "Senior Citizen Package",
    summary: "Detailed age-appropriate screening for 60+ patients.",
    tests: [
      "CBC",
      "Blood Sugar",
      "Lipid Profile",
      "Liver & Kidney Function",
      "Thyroid Profile",
      "Vitamin D",
      "Urine Routine",
    ],
    originalPrice: "₹ [MRP]",
    discountPrice: "₹ [Offer Price]",
    reportTime: "Within 24 hours",
    fasting: "10–12 hours fasting required",
  },
  {
    name: "Fever Panel",
    summary: "Rapid workup for seasonal fever and infections.",
    tests: ["CBC", "Dengue NS1/IgG/IgM", "Malaria Antigen", "Widal (Typhoid)", "Urine Routine"],
    originalPrice: "₹ [MRP]",
    discountPrice: "₹ [Offer Price]",
    reportTime: "Same day",
    fasting: "No fasting required",
  },
];

export const whyChooseUs = [
  {
    icon: "Target",
    title: "Accurate Diagnostics",
    text: "Every sample follows a documented quality check before the report is released.",
  },
  {
    icon: "Cpu",
    title: "Modern Equipment",
    text: "Automated analysers and calibrated instruments for consistent results.",
  },
  {
    icon: "Users",
    title: "Experienced Staff",
    text: "Trained technicians and phlebotomists handling every collection.",
  },
  {
    icon: "ShieldCheck",
    title: "Hygienic Collection",
    text: "Single-use, sterile consumables and strict infection-control practice.",
  },
  {
    icon: "Home",
    title: "Home Collection",
    text: "Doorstep sample pickup across Ujjain at a time that suits you.",
  },
  {
    icon: "Timer",
    title: "Fast Report Delivery",
    text: "Most routine reports are ready the same day.",
  },
  {
    icon: "BadgeIndianRupee",
    title: "Affordable Packages",
    text: "Transparent pricing and bundled health packages for families.",
  },
  {
    icon: "MessageCircleHeart",
    title: "Friendly Support",
    text: "Call or WhatsApp us for guidance on tests, timings and reports.",
  },
];

export const trustBadges = [
  { icon: "CheckCircle2", label: "Accurate Reports" },
  { icon: "ShieldCheck", label: "Hygienic Sample Collection" },
  { icon: "Home", label: "Home Collection" },
  { icon: "Users", label: "Experienced Staff" },
  { icon: "FileText", label: "Digital Reports" },
];

/** PLACEHOLDER testimonials — replace with genuine patient reviews. */
export const testimonials = [
  {
    name: "[Patient Name]",
    location: "Madhav Nagar, Ujjain",
    text: "[Placeholder review] The home collection technician arrived on time and the report reached me the same evening.",
  },
  {
    name: "[Patient Name]",
    location: "Freeganj, Ujjain",
    text: "[Placeholder review] Clean lab, polite staff and clear explanation of which tests were needed.",
  },
  {
    name: "[Patient Name]",
    location: "Nanakheda, Ujjain",
    text: "[Placeholder review] Booked a full body checkup for my parents — smooth process and easy digital reports.",
  },
  {
    name: "[Patient Name]",
    location: "Rishi Nagar, Ujjain",
    text: "[Placeholder review] Affordable packages and quick turnaround. Very convenient for regular sugar monitoring.",
  },
];

export const faqs = [
  {
    q: "How do I book a test?",
    a: "You can book in three ways: fill the home collection form on this page, call us directly, or send us a WhatsApp message with the test name. Walk-ins are also welcome at our Dhanwantari Marg centre.",
  },
  {
    q: "Is home sample collection available?",
    a: `Yes. We offer doorstep sample collection across ${business.serviceArea}. Share your address and a preferred time slot and a trained technician will visit you. Home visit charges, if any, are confirmed at the time of booking.`,
  },
  {
    q: "Is fasting required?",
    a: "It depends on the test. Blood sugar (fasting), lipid profile and most full body packages usually need 10–12 hours of fasting, while CBC, thyroid and fever panels typically do not. We confirm the exact requirement when you book.",
  },
  {
    q: "How long do reports take?",
    a: "Most routine reports are ready the same day. Specialised tests may take longer; the expected time is shared with you at the time of sample collection.",
  },
  {
    q: "Can I receive reports online?",
    a: "Yes. Reports can be shared digitally on WhatsApp or email in PDF format, and printed copies can be collected from the lab.",
  },
  {
    q: "Do you offer health packages?",
    a: "Yes — full body, diabetes, women's wellness, senior citizen and fever packages are available. Package inclusions and current pricing are confirmed over call or WhatsApp.",
  },
  {
    q: "How do I contact the laboratory?",
    a: `Call ${business.phones[0]} or ${business.phones[1]}, message us on WhatsApp, or visit us at ${business.fullAddress}.`,
  },
];
