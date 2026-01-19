import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antiques in Moore | Win a 55\" Smart TV - March 7 Giveaway",
  description: "Enter to win a 55\" Smart TV during our March 7 Outdoor Pop-up Event at Antiques in Moore, Oklahoma. Free entry, must be 18 or older.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
