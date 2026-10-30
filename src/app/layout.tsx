import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const heading = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Fathi Rafa, Software Engineer",
  description:
    "Portfolio of Muhammad Fathi Rafa: APIs, authentication, payments, and databases for real-world systems.",
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
