import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Industrial Bearing & Chain Centre | Bearings, Chains & Belts — Hubballi",
    template: "%s | Industrial Bearing & Chain Centre",
  },
  description:
    "Leading supplier of industrial bearings, V-belts, roller chains, sprockets, conveyor belts & rice mill spares in Hubballi, Karnataka. Genuine SKF, FAG, NTN, Fenner, Rolon brands. GSTIN: 29BRWPA5389N1ZO.",
  keywords: [
    "industrial bearings hubballi",
    "SKF bearings hubli",
    "V-belt supplier Karnataka",
    "roller chain sprockets hubballi",
    "conveyor belt supplier north Karnataka",
    "rice mill spare parts hubli",
    "Fenner Poly-F belts",
    "chain pulley block hubballi",
    "crusher spares hubli",
    "industrial bearing chain centre",
    "IBCC hubballi",
    "bearing supplier gokul road",
    "bearing supplier hubli",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Industrial Bearing & Chain Centre",
    title: "Industrial Bearing & Chain Centre | Hubballi",
    description:
      "Established 2016. Genuine industrial bearings, chains, belts & spare parts. Serving North Karnataka industries. Call: 9062186130.",
    images: [{ url: "/images/hero-factory.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Bearing & Chain Centre | Hubballi, Karnataka",
    description:
      "Genuine SKF, FAG, NTN, Fenner bearings, chains & belts. Plot #29, Industrial Area, Gokul Road, Hubballi.",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Industrial Bearing & Chain Centre" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0B3D91" />
      </head>
      <body className="font-sans antialiased">
        <SplashScreen />
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyFooter />
      </body>
    </html>
  );
}
