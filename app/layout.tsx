import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.scss";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import {
  audiowide,
  montserrat,
  play,
  robotoFlex
} from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ValtixCube | Technology, AI & Digital Solutions",
    template: "%s | ValtixCube",
  },

  description:
    "ValtixCube builds scalable software, AI-powered solutions, and cloud platforms using modern technologies like Node.js, React, Next.js, and cloud-native architecture.",

  keywords: [
    "ValtixCube",
    "Software Development Company",
    "AI Solutions",
    "Web Development",
    "Node.js Development",
    "React Development",
    "Next.js Company",
    "Cloud Services",
    "Digital Transformation",
    "IT Company India",
  ],

  authors: [{ name: "ValtixCube" }],
  creator: "ValtixCube",
  publisher: "ValtixCube",

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

  alternates: {
    canonical: "https://www.valtixcube.com/",
  },

  openGraph: {
    title: "ValtixCube | Technology, AI & Digital Solutions",
    description:
      "We help startups and enterprises build scalable software, AI-driven products, and cloud-native systems.",
    url: "https://www.valtixcube.com",
    siteName: "ValtixCube",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ValtixCube – Technology & AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ValtixCube | Technology, AI & Digital Solutions",
    description:
      "Custom software, AI solutions, and cloud engineering for modern businesses.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${audiowide.variable}
        ${montserrat.variable}
        ${play.variable}
        ${robotoFlex.variable}
      `}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={styles.container}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
