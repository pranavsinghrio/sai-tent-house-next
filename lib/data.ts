export const WA_NUMBER = "919876543210";
export const PHONE_DISPLAY = "+91 98765 43210";
export const EMAIL = "info@saitenthouse.in";
export const INSTAGRAM_HANDLE = "saitenthouse";
export const INSTAGRAM_URL = "https://instagram.com/saitenthouse";

export const waLink = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const unsplash = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const heroImage = unsplash("photo-1519225421980-715cb0215aed", 1200);
export const aboutImage = unsplash("photo-1530023367847-a683933f4172", 1100);
export const pestsImage = unsplash("photo-1414235077428-338989a2e8c0", 1100);
export const featuredImage = unsplash("photo-1464366400600-7168b8af9bc3", 1100);

export type Service = {
  slug: string;
  title: string;
  tag?: string;
  image: string;
  imagePosition?: string;
  imageFilter?: string;
  blurb: string;
  featured?: boolean;
  features?: string[];
};

export const services: Service[] = [
  {
    slug: "tent-mandap",
    title: "Tent & Mandap Setup",
    image: unsplash("photo-1519741497674-611481863552", 1200),
    blurb:
      "Royal-style tent, shamiyana and mandap setup with traditional carving, pillars, drapes and festive lighting — for weddings, receptions and pooja ceremonies.",
  },
  {
    slug: "stage-decor",
    title: "Stage & Flower Decoration",
    image: unsplash("photo-1532712938310-34cb3982ef74", 1200),
    blurb:
      "Designer stage backdrops with fresh flowers, drapery and themed décor — perfect for varmala, sangeet and reception ceremonies.",
  },
  {
    slug: "lighting",
    title: "Lighting & Sound",
    image: unsplash("photo-1530103862676-de8c9debad1d", 1200),
    blurb:
      "Festive jhalar lighting, ambient uplights, dance-floor effects and DJ sound systems for energetic celebrations.",
  },
  {
    slug: "wedding-catering",
    title: "Wedding Catering",
    tag: "Our Specialty",
    image: unsplash("photo-1555244162-803834f70033", 1200),
    featured: true,
    blurb:
      "Our #1 specialty. With 25+ years of catering for weddings & receptions, we deliver authentic North Indian, South Indian, Chinese and Continental menus — served by trained chefs and uniformed waiters.",
    features: [
      "150+ dishes across 10 cuisines",
      "Live counters: chaat, dosa, pasta, tandoor",
      "Trained chefs & uniformed serving staff",
      "FSSAI certified · hygienic kitchen",
      "Custom menu planning included",
    ],
  },
  {
    slug: "birthday-anniversary",
    title: "Birthday & Anniversary",
    image: unsplash("photo-1530103862676-de8c9debad1d", 1200),
    blurb:
      "Themed décor, custom menus and live counters for intimate birthday parties, anniversaries and milestone celebrations.",
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    image: unsplash("photo-1511795409834-ef04bbd61622", 1200),
    blurb:
      "Conferences, product launches, annual days and team dinners — handled with corporate-grade discipline and presentation.",
  },
  {
    slug: "pooja-bhandara",
    title: "Pooja & Bhandara",
    image: unsplash("photo-1567521464027-f127ff144326", 1200),
    blurb:
      "Sattvik pure-veg menus for griha pravesh, satyanarayan katha, jagran and bhandara — prepared with desi ghee in separate sattvik kitchen.",
  },
  {
    slug: "live-counters",
    title: "Live Food Counters",
    image: unsplash("photo-1414235077428-338989a2e8c0", 1200),
    blurb:
      "Chaat, dosa, pav bhaji, kebab, pasta and dessert counters with live cooking — guests love the freshness and the show.",
  },
  {
    slug: "bartan-furniture",
    title: "Bartan & Furniture Rental",
    image: unsplash("photo-1530103862676-de8c9debad1d", 1200),
    imageFilter: "brightness(1.18) saturate(1.08)",
    blurb:
      "Steel & brass utensils, chafing dishes, gas tandoors, chairs, tables, sofas and round tables — clean, polished and ready for any scale.",
  },
  {
    slug: "destination-events",
    title: "Destination Events",
    image: unsplash("photo-1465495976277-4387d4b0b4c6", 1200),
    imageFilter: "brightness(1.18) saturate(1.08)",
    blurb:
      "Out-of-town weddings and resort events across MP, Khajuraho, Pachmarhi & beyond — full setup, transport and crew handled by us.",
  },
];

export type Testimonial = {
  text: string;
  name: string;
  role: string;
  initials: string;
  color: { bg: string; fg: string };
};

const palette = [
  { bg: "#fef3c7", fg: "#a8681b" },
  { bg: "#fce7f3", fg: "#7a1f2b" },
  { bg: "#dbeafe", fg: "#1d4ed8" },
  { bg: "#d1fae5", fg: "#047857" },
  { bg: "#ede9fe", fg: "#6d28d9" },
  { bg: "#fee2e2", fg: "#b91c1c" },
  { bg: "#cffafe", fg: "#0e7490" },
];

const raw: Omit<Testimonial, "initials" | "color">[] = [
  { text: "We booked Sai Tent House for my daughter's wedding and the whole family is still talking about the food. The paneer tikka, dal makhani and live chaat counter were the stars. Service was very professional and on time.", name: "Rahul Sharma", role: "Father of the Bride • Jabalpur" },
  { text: "Mandap decoration and stage flowers were absolutely stunning — exactly like the photos we showed them. The team set up everything one day in advance so there was no last-minute panic. Truly trustworthy people.", name: "Priya Patel", role: "Bride • Bhopal" },
  { text: "I run a corporate office and we hired Sai for our annual day dinner of 400 people. Everything from sound to food was managed perfectly. Veg and non-veg counters were separate. Highly recommended for corporate events!", name: "Amit Kumar", role: "HR Manager • Katni" },
  { text: "The bhandara catering for our satyanarayan pooja was completely sattvik, prepared in desi ghee, no onion-garlic. Around 250 guests, all happy. Pandit ji also praised the arrangement. Thank you Sai team!", name: "Neha Verma", role: "Homemaker • Sagar" },
  { text: "We had a destination wedding at Bhedaghat resort. Sai handled everything — tent, mandap, food, lighting, even DJ. Travelled with their crew and set up for 3 days. Stress-free experience for our family.", name: "Vikram Singh", role: "Groom's Family • Damoh" },
  { text: "Booked them on WhatsApp for my son's first birthday. Themed cartoon décor, kids menu, live pasta counter — kids loved it. Reasonable pricing and they even arranged return-gift packing for free!", name: "Anjali Gupta", role: "Mother • Jabalpur" },
  { text: "Got their full wedding package — tent, catering, lighting and stage. Quality of food was hotel-grade. The biryani and kebabs were exceptional. Three years later, still recommending Sai to everyone.", name: "Suresh Reddy", role: "Engineer • Bhopal" },
  { text: "We had a small house function for my mother's 75th birthday. Around 60 guests. Sai team came with proper bartan, gas tandoor and 3 cooks. Food was just like ghar ka khana but more elegant. Wonderful.", name: "Kavita Joshi", role: "Daughter • Sagar" },
  { text: "The dosa and chaat live counters at our reception were a huge hit. Guests kept going back for seconds. Chefs were skilled and quick. Sai always delivers fresh and hot food, never reheated.", name: "Manoj Tiwari", role: "Doctor • Katni" },
  { text: "Our hotel hosts a lot of weddings and we partner with Sai Tent House for catering overflow events. Their team blends well with our staff. Hygiene standards are top-class. A dependable partner.", name: "Arjun Nair", role: "Hotel Manager • Bhopal" },
  { text: "Sangeet night décor was magical — fairy lights, flower drapes, DJ stage. Photos came out beautiful. The team understood our theme of marigold-and-mirror and executed it perfectly. Truly artistic.", name: "Deepika Rao", role: "Sister of the Bride • Jabalpur" },
  { text: "Hosted my daughter's mehendi for 150 ladies. Tent setup with chandelier, all-veg menu with chaat and live dosa, mehendi artists also arranged by Sai. Single point of contact made everything easy.", name: "Sanjay Yadav", role: "Father of the Bride • Sagar" },
  { text: "The pav bhaji and kulfi at my engagement were so good even the caterer's competitors complimented us. Service staff was polite and well-uniformed. Worth every rupee for a memorable event.", name: "Meera Iyer", role: "Bride-to-be • Narsinghpur" },
  { text: "Last-minute booking for a 300-person reception — Sai team confirmed within 2 hours and delivered flawless setup in 36 hours. Their crisis-management is unmatched. Saviours of our family event!", name: "Rohit Malhotra", role: "Brother of the Bride • Mandla" },
  { text: "Repeat customer here. Used Sai for my engagement, then wedding, then anniversary. Each event better than the last. They remember our preferences. Almost like family now.", name: "Sneha Kapoor", role: "Repeat Customer • Rewa" },
  { text: "We hosted a jagran at home and needed sattvik food for 500 devotees. Sai prepared everything in a separate kitchen with desi ghee, no compromise on purity. Pandit ji was very satisfied.", name: "Karan Bhatt", role: "Devotee • Bhopal" },
  { text: "Annual office picnic for 200 employees at a farmhouse. Sai handled tent, sound, lunch and tea-snack counters. Activities went smoothly because food was always on time. Will book again next year.", name: "Riya Choudhary", role: "Admin Manager • Chhindwara" },
  { text: "We needed bartan and furniture rental for a community event — chairs, sofas, tables, gas stoves, chafing dishes. All delivered clean and on time. Team also picked up next morning. No hassle at all.", name: "Vivek Pandey", role: "Society Secretary • Sidhi" },
  { text: "Our wedding had 1200 guests across 4 functions. Sai's planning was excellent — different menu for haldi, sangeet, wedding and reception. Logistics were flawless. They truly are the best in Jabalpur.", name: "Tanvi Desai", role: "Bride • Pipariya" },
  { text: "The tandoori starters and gulab jamun were the most appreciated by my elderly relatives. Authentic taste, no shortcuts. Sai understands traditional Indian palate very well. Highly satisfied family.", name: "Ashok Mishra", role: "Father of the Groom • Gadarwara" },
];

export const testimonials: Testimonial[] = raw.map((t, i) => ({
  ...t,
  initials: t.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join(""),
  color: palette[i % palette.length],
}));

export const faqs = [
  {
    q: "How early should we book your services?",
    a: "For weddings and large events, we recommend booking at least 30-60 days in advance, especially during the wedding season (October to February). For smaller events like birthdays or pooja gatherings, 7-15 days notice is usually enough. For urgent bookings, give us a call — we will try our best to accommodate.",
  },
  {
    q: "Do you offer custom menu planning?",
    a: "Absolutely. We sit with you to understand your guest count, food preferences, regional flavours, dietary restrictions and budget. Our chefs prepare a fully customised menu — North Indian, South Indian, Chinese, Continental, Chaat, Mughlai or pure sattvik — whatever your event needs.",
  },
  {
    q: "Are your kitchens FSSAI certified?",
    a: "Yes, our central kitchen is FSSAI certified. We follow strict hygiene protocols — uniformed chefs with caps and gloves, separate prep stations for veg and non-veg, sealed transport containers and live cooking on-site to ensure freshness.",
  },
  {
    q: "Can you handle pure sattvik / no-onion-no-garlic menus?",
    a: "Yes. We have a separate sattvik kitchen for pooja, jagran, satyanarayan katha and bhandara events. Cooking is done in pure desi ghee with no onion, no garlic, and following all traditional ritual requirements. Our team is well-versed in customs.",
  },
  {
    q: "Do you provide tent, mandap, lighting and catering all together?",
    a: "Yes — that's our specialty. We are a one-stop solution for tent setup, mandap decoration, stage flowers, lighting, sound, DJ, catering, bartan and serving staff. Single point of contact, single bill — saves you the headache of coordinating multiple vendors.",
  },
  {
    q: "What is included in your wedding catering package?",
    a: "Our wedding package includes welcome drinks, starters (veg/non-veg), live counters (chaat, dosa, pasta, tandoor as per your choice), main course, breads, rice, dal, dessert, paan and water. Uniformed waiters, chafing dishes, plates, cutlery, water stations and supervisor — all included.",
  },
  {
    q: "Do you serve outstation / destination events?",
    a: "Yes, we cater destination events across Madhya Pradesh — Bhedaghat, Khajuraho, Pachmarhi, Bandhavgarh, Bhopal and beyond. Travel, accommodation and equipment transport for our crew is handled by us. We have experience with resort weddings, farmhouse events and out-of-station functions.",
  },
  {
    q: "What are your payment options?",
    a: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), Bank Transfer and all major cards. Typically a 30% advance is taken to confirm the booking, and the balance is paid after the event. For large weddings we offer flexible milestones — discuss with our team.",
  },
];

export const cityOptions = [
  "Jabalpur", "Bhopal", "Mandla", "Damoh", "Sagar", "Khajuraho", "Bhedaghat",
  "Narsinghpur", "Chhindwara", "Gadarwara", "Pachmarhi", "Pipariya", "Katni",
  "Rewa", "Sidhi", "Other",
];

export const serviceOptions = [
  "Wedding Catering", "Tent & Mandap Setup", "Stage & Flower Decoration",
  "Lighting & Sound", "Birthday / Anniversary", "Corporate Event",
  "Pooja / Bhandara (Sattvik)", "Live Food Counters",
  "Bartan & Furniture Rental", "Destination Event",
];
