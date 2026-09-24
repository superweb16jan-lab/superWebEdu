import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "superWebEdu | UGC-DEB Approved Distance Education Portal | BCA, MCA, MBA Admissions",
  description: "Enquire for UGC-DEB approved distance education courses (BCA, MCA, MBA, BBA, BA, B.Com, MA, M.Com) from top universities like Mangalayatan and Subharti. Fast-track admission, semester-wise fee payments, and WhatsApp support at 8810336124.",
  keywords: [
    "superWebEdu",
    "Distance Education BCA",
    "Distance MCA",
    "Distance MBA",
    "Mangalayatan University Distance",
    "Subharti University Distance",
    "UGC DEB approved courses",
    "Online BCA admission",
    "Distance BBA",
    "Distance BA UPSC"
  ],
  authors: [{ name: "superWebEdu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
