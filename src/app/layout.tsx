import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from "../lib/supabase/db";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notate",
  description: "Notate around ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(db)
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
