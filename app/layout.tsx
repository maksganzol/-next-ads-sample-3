import type { Metadata } from "next";
import "./globals.css";
import NextAdsScript from "@/components/NextAdsScript";

export const metadata: Metadata = {
  title: "Wanderlust — Travel Guides & Destination Tips",
  description: "Discover the world's best destinations, travel itineraries, insider tips and hidden gems for your next adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <NextAdsScript />
      </body>
    </html>
  );
}
