import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/layout/Navbar";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sefrin Consulting",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="relative flex flex-col items-center justify-center px-6 bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="w-full pb-20 max-w-7xl">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
