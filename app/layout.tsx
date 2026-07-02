import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { FadeIn, PageTransition } from "@/components/ui/motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Islamabad PestControl | #1 Pest Control Services – Termite(Deemak), Rodent & Cockroach Treatment",
    template: "%s | Islamabad PestControl - Islamabad Pest Control",
  },
  description:
    "Professional pest control services including termite treatment(Deemak), rodent control, cockroach removal & bed bug elimination. Licensed, certified & available 24/7. Get a FREE inspection today!",
  keywords: [

    'pest control in Islamabad',
    'termite treatment in Islamabad',
    'rodent control services',
    'cockroach removal experts',
    "pest control services",
    "termite treatment near me",
    "best pest control company",
    "emergency pest control",
    "affordable pest removal",
    "fumigation services",
    "bed bug extermination",
    "pest inspection services",
    "disinfection and sanitization",
    "pest control",
    "termite treatment(Deemak)", 
    "rodent control",
    "cockroach treatment",
  ],
  openGraph: {
    type: "website",
    siteName: "Islamabad PestControl - Islamabad Pest Control",
    title: "Islamabad PestControl | Professional Pest Control Services",
    description: "Licensed pest control experts. Free inspection. 24/7 emergency service.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PestControlBusiness",
  name: "Islamabad PestControl - Islamabad Pest Control",
  url: "https://islamabadpestcontrolpk.com",
  telephone: "+92-306-923-5099",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Green Valley Rd",
    addressLocality: "Springfield",
    addressRegion: "IL",
    postalCode: "62701",
    addressCountry: "US",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "847" },
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
      <body className={inter.variable}>
        <ThemeProvider>
          <FadeIn>
            <Navbar />
          </FadeIn>
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <FadeIn>
            <Footer />
          </FadeIn>
          <FadeIn delay={0.1}>
            <WhatsAppButton />
          </FadeIn>
          <FadeIn delay={0.16}>
            <ScrollToTop />
          </FadeIn>
        </ThemeProvider>
      </body>
    </html>
  );
}

