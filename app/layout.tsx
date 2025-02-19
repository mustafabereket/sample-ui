"use client";

import { Poppins } from "next/font/google";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import "./globals.scss";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "100",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GeistProvider>
      <CssBaseline />
      <html lang="en">
        <body className={`${poppins.variable}`}>{children}</body>
      </html>
    </GeistProvider>
  );
}
