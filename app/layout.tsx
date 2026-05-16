import type { Metadata } from "next";
import { Playfair_Display, Libre_Caslon_Text, Source_Sans_3 } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
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
      className={`dark ${playfairDisplay.variable} ${libreCaslonText.variable} ${sourceSans.variable}`}
    >
      <head>
        {/* Prevent flash: check saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("aim-theme")==="light"){document.documentElement.classList.remove("dark")}}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
