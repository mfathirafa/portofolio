import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const heading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muhammadfathirafa.my.id"),
  title: "Muhammad Fathi Rafa, Software Engineer",
  description:
    "Portfolio of Muhammad Fathi Rafa: APIs, authentication, payments, and databases for real-world systems.",
  openGraph: {
    title: "Muhammad Fathi Rafa, Software Engineer",
    description: "APIs, authentication, payments, and databases for real-world systems.",
    type: "website",
  },
  verification: {
    google: "uYJ6ptWFT19W2RU0nz1vgXcx8wahKlvFFSZbOS0zRqQ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} ${heading.variable} bg-background font-sans text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}