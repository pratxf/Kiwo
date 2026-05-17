import type { Metadata } from "next";
import { Baloo_2, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kiwo | Learning Feels Magical",
  description:
    "Kiwo is a playful learning platform with fun lessons, game-based missions, AI guidance, and parent progress tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="font-[var(--font-body)]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
