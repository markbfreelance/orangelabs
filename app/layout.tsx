import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Orange Labs — We Build Digital That Hits Different",
  description:
    "High-impact websites, web apps, and digital experiences. We don't do templates. Orange Labs builds custom digital products that drive revenue and turn heads.",
  keywords: [
    "web development",
    "website design",
    "landing pages",
    "web application",
    "UI UX design",
    "website modernization",
    "Orange Labs",
    "digital agency",
  ],
  openGraph: {
    title: "Orange Labs — We Build Digital That Hits Different",
    description:
      "High-impact websites, web apps, and digital experiences that drive revenue and turn heads.",
    siteName: "Orange Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orange Labs — We Build Digital That Hits Different",
    description:
      "High-impact websites, web apps, and digital experiences that drive revenue and turn heads.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${syne.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
