import type { Metadata } from "next";
import { Libre_Caslon_Display, Libre_Caslon_Text, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const libreCaslonDisplay = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif-display",
  display: "swap",
});

const libreCaslonText = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Antiques in Moore | Moore, Oklahoma's Premier Antique Destination",
  description:
    "Discover unique treasures at Antiques in Moore — an 8,000 sq ft antique mall with 20+ vendors in Moore, Oklahoma. Open weekends 9-5.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreCaslonDisplay.variable} ${libreCaslonText.variable} ${sourceSans.variable}`}
    >
      <body className="antialiased bg-cream font-sans text-stone-700">
        {children}
      </body>
    </html>
  );
}
