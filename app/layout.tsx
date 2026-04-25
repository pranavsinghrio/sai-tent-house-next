import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saitenthouse.in"),
  title: {
    default:
      "Sai Tent House & Caterers — Wedding Catering, Tent & Mandap Setup in Jabalpur",
    template: "%s | Sai Tent House & Caterers",
  },
  description:
    "Sai Tent House & Caterers — premium wedding catering, tent setup, mandap & stage decoration, lighting and bartan rental across Jabalpur and Madhya Pradesh. 25+ years of experience, 5,000+ events served, traditional flavours and elegant arrangements.",
  keywords: [
    "tent house jabalpur",
    "caterers jabalpur",
    "wedding catering madhya pradesh",
    "mandap decoration",
    "sai tent house",
    "shaadi catering jabalpur",
  ],
  authors: [{ name: "Sai Tent House & Caterers" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Sai Tent House & Caterers",
    title:
      "Sai Tent House & Caterers — Wedding Catering, Tent & Mandap Setup in Jabalpur",
    description:
      "Premium tent house & caterers in Jabalpur. 25+ years of experience, 5,000+ weddings & events served.",
    images: ["/logo-technician.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Tent House & Caterers — Jabalpur",
    description: "#1 trusted tent house & caterers in Jabalpur & Madhya Pradesh.",
    images: ["/logo-technician.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#7a1f2b",
  width: "device-width",
  initialScale: 1,
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": "https://saitenthouse.in/#business",
  name: "Sai Tent House & Caterers",
  alternateName: ["Sai Caterers", "Sai Tent House Jabalpur"],
  image: "https://saitenthouse.in/logo-technician.png",
  logo: "https://saitenthouse.in/logo-technician.png",
  description:
    "Premium tent house and catering service in Jabalpur and across Madhya Pradesh. Wedding catering, mandap setup, stage decoration, lighting, bartan & furniture rental — traditional flavours and elegant arrangements for every celebration.",
  slogan: "Where every celebration becomes a memory.",
  telephone: "+91-98765-43210",
  email: "info@saitenthouse.in",
  url: "https://saitenthouse.in/",
  priceRange: "₹₹",
  foundingDate: "2000",
  servesCuisine: ["North Indian", "South Indian", "Chinese", "Continental", "Chaat"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jabalpur",
    addressRegion: "Madhya Pradesh",
    postalCode: "482001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: "23.1815", longitude: "79.9864" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5200",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: ["https://instagram.com/saitenthouse"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-blush-50 text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
