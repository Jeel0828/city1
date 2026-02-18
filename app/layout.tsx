import type { Metadata } from "next";
import { Forum, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/src/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const forum = Forum({
  weight: "400",
  variable: "--font-forum",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "City1 - Premium Residential Project",
    template: "%s | City1"
  },
  description: "Discover City1, an exclusive residential project offering luxury living spaces with modern amenities, strategic location, and exceptional architecture. Your dream home awaits.",
  keywords: ["real estate", "residential project", "luxury homes", "city living", "modern architecture", "premium apartments", "city1 project"],
  authors: [{ name: "City1 Developers" }],
  creator: "City1 Developers",
  publisher: "City1 Developers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://city1.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://city1.com',
    title: 'City1 - Premium Residential Project',
    description: 'Discover City1, an exclusive residential project offering luxury living spaces with modern amenities, strategic location, and exceptional architecture.',
    siteName: 'City1',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'City1 Premium Residential Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'City1 - Premium Residential Project',
    description: 'Discover City1, an exclusive residential project offering luxury living spaces with modern amenities.',
    images: ['/twitter-image.jpg'],
    creator: '@city1developers',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${forum.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
