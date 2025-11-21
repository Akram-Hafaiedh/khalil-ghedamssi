import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'PhysioExpert - Kinésithérapeute à Tunis',
  description: 'Cabinet de kinésithérapie à Tunis. Rééducation fonctionnelle, thérapie manuelle, kinésithérapie sportive.',
  keywords: 'kinésithérapie, physiothérapie, Tunis, rééducation, thérapie manuelle',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        <Analytics />
        {children}
        </Providers>
      </body>
    </html>
  );
}
