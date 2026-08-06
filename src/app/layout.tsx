import type { Metadata } from "next";
import { Inter, Sora, Cinzel } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Initialize fonts
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["400", "500", "600"]
});

const sora = Sora({ 
  subsets: ["latin"], 
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"]
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Vanox Dynamics | FinTech & Digital Solutions",
  description: "Vanox Dynamics provides cutting-edge FinTech and digital solutions, empowering businesses with secure, scalable, and innovative technologies.",
  keywords: ["FinTech", "Digital Solutions", "Financial Technology", "Software Development", "B2B Solutions", "Payment Solutions", "Tech Agency"],
  authors: [{ name: "Vanox Dynamics" }],
  creator: "Vanox Dynamics",
  publisher: "Vanox Dynamics",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vanoxdynamics.com",
    title: "Vanox Dynamics | FinTech & Digital Solutions",
    description: "Empowering businesses with cutting-edge FinTech and scalable digital technologies.",
    siteName: "Vanox Dynamics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanox Dynamics | FinTech & Digital Solutions",
    description: "Empowering businesses with cutting-edge FinTech and scalable digital technologies.",
    creator: "@VanoxDynamics",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${cinzel.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}