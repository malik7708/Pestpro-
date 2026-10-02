import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { FadeIn } from "@/components/ui/motion";
import { PageTransition } from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://islamabadpestcontrolpk.com"),
  title: {
    default: "Islamabad PestControl | Best Pest Control Services in Islamabad | Termite (Deemak) & Fumigation",
    template: "%s | Islamabad PestControl - Islamabad Pest Control",
  },
  description:
    "Best pest control services including termite treatment(Deemak), rodent control, cockroach removal & bed bug elimination. Licensed, certified & available 24/7. Get a FREE inspection today!",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-img.webp",
  },
  keywords: [
    "pest control in Islamabad",
    "termite treatment in Islamabad",
    "fumigation services in Islamabad",
    "rodent control services",
    "cockroach removal experts",
    "bed bug treatment Islamabad",
    "pest control services Islamabad Rawalpindi",
    "termite treatment near me",
    "best pest control company Islamabad",
    "emergency pest control Pakistan",
    "affordable pest removal",
    "pest inspection services",
    "disinfection and sanitization",
    "termite treatment (Deemak)",
    "rodent control Islamabad",
    "cockroach treatment Islamabad",
  ],
  openGraph: {
    type: "website",
    siteName: "Islamabad PestControl - Islamabad Pest Control",
    title: "Islamabad PestControl | Best Pest Control Services in Islamabad | Termite (Deemak) & Fumigation",
    description:
      "Licensed pest control experts in Islamabad and Rawalpindi. Termite treatment, fumigation, rodent control, and free inspection services available 24/7.",
    images: ["/images/optimized/hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamabad PestControl | Pest Control in Islamabad & Rawalpindi",
    description:
      "Trusted pest control, termite treatment, and fumigation services in Islamabad and Rawalpindi. Free inspection available.",
    images: ["/images/optimized/hero.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#2f6b4f",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Islamabad PestControl - Islamabad Pest Control",
  url: "https://islamabadpestcontrolpk.com",
  telephone: "+92-306-923-5099",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Newmal, Kuri Road, Jinnah Ave",
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    postalCode: "44000",
    addressCountry: "PK",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 847,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <div className="relative z-[100]">
            <Navbar />
          </div>
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <FadeIn>
            <Footer />
          </FadeIn>
          <WhatsAppButton />
          <FadeIn delay={0.16}>
            <ScrollToTop />
          </FadeIn>
        </ThemeProvider>
      </body>
    </html>
  );
}
