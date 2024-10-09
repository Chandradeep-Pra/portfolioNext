import type { Metadata } from "next";

// Importing Google Fonts
import { Fira_Code, Open_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

// Fira Code Font Setup
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Use only supported weights
  variable: "--font-fira-code",
});

// Open Sans Font Setup
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Your Portfolio Title", // Update with your title
  description: "A brief description of your portfolio.", // Update with your description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${openSans.variable} antialiased bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
