import type { Metadata } from "next";
import { Poppins, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Udith Gunasekara · Engineer & Designer",
  description:
    "Udith Gunasekara, a software engineer and designer. Full-stack products, LLM research, and interfaces that get out of the way.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body>
        <Cursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
