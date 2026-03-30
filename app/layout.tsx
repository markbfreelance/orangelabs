import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orange Labs Digital — Premium Web Development & Design",
  description:
    "We build high-performance websites, modern web applications, and stunning landing pages that drive real business results. Custom web development, site modernization, and UI/UX design by Orange Labs.",
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
    title: "Orange Labs Digital — Premium Web Development & Design",
    description:
      "We craft digital experiences that drive results. Custom web development, site modernization, and high-converting landing pages.",
    siteName: "Orange Labs Digital",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orange Labs Digital — Premium Web Development & Design",
    description:
      "We craft digital experiences that drive results. Custom web development, site modernization, and high-converting landing pages.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
