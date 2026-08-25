import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wowtheworldlogistics.com"),
  title: {
    default: "WOW The World Logistics | Travel & Logistics Services",
    template: "%s | WOW The World Logistics",
  },
  description:
    "Book flights, hotels, visas, tour packages, passport processing, and reliable logistics services with WOW The World Logistics.",
  keywords: [
    "WOW The World Logistics",
    "travel agency Nigeria",
    "flight booking",
    "hotel booking",
    "visa assistance",
    "tour packages",
    "passport processing",
    "logistics services",
    "parcel delivery",
  ],
  authors: [{ name: "WOW The World Logistics" }],
  creator: "WOW The World Logistics",
  publisher: "WOW The World Logistics",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "WOW The World Logistics | Travel & Logistics Services",
    description:
      "Your trusted partner for travel bookings, visa support, tour packages, passport processing, and fast logistics delivery.",
    url: "/",
    siteName: "WOW The World Logistics",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "WOW The World Logistics logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WOW The World Logistics | Travel & Logistics Services",
    description:
      "Flights, hotels, visas, tours, passport processing, and logistics services in one place.",
    images: ["/logo.png"],
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
