import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const siteName = "Smart Motorz";
const siteUrl = "https://smartmotorz.co.tz";

const defaultTitle = "Smart Motorz | Car Importation, Loans & Rentals in Tanzania";

const defaultDescription =
  "Smart Motorz (Smart Group Holdings Limited) simplifies car buying in Tanzania through transparent car importation, flexible vehicle financing, corporate car rentals, in-country car sourcing, and exclusive after-sales support, built on integrity, transparency, and trust.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: "%s | Smart Motorz",
  },

  description: defaultDescription,

  applicationName: siteName,
  authors: [{ name: siteName }],
  generator: "Next.js",

  keywords: [
    "Smart Motorz Tanzania",
    "car importation Tanzania",
    "import car from Japan to Tanzania",
    "car import from Dubai to Tanzania",
    "car import from UK to Tanzania",
    "car import from USA to Tanzania",
    "vehicle financing Tanzania",
    "car loans Tanzania",
    "corporate car rentals Tanzania",
    "executive car rental Tanzania",
    "in-country car sourcing Tanzania",
    "buy car Tanzania",
    "used cars Tanzania",
    "after-sales support Tanzania",
    "doorstep vehicle delivery Tanzania",
  ],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    locale: "en_TZ",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Smart Motorz, Car Importation, Loans & Rentals in Tanzania",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og.jpg"],
  },

  category: "Automotive",
};

// ✅ themeColor must be exported separately (not inside metadata)
export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
