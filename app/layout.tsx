import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Range (OPR) + OPRX – Proof-of-Work, Done Right",
  description:
    "Open Range (OPR) is a GPU/CPU-friendly Proof-of-Work chain. OPRX is the fast L2 built on OPR for low-cost DeFi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
