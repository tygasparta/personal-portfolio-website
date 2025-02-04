import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import AnimatedBackground from './components/AnimatedBackground'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Tyga Sparta - Software Developer",
  description: "Turning Ideas Into Impact - Professional Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#111111] relative">
        <AnimatedBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
