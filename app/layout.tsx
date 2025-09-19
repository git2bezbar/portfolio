import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "adem duran - junior fullstack developer",
    template: "%s | adem duran",
  },
  description: "junior fullstack developer by day, design enthusiast by night. i build, learn, and create—fueled by curiosity, football, and rap music.",

  metadataBase: new URL("https://ademduran.fr"),

  keywords: [
    "adem duran",
    "fullstack developer",
    "junior developer",
    "frontend",
    "backend",
    "javascript",
    "typescript",
    "next.js",
    "react",
    "tailwindcss",
    "gsap",
    "portfolio",
    "bordeaux",
    "web developer",
  ],

  authors: [{ name: "Adem Duran", url: "https://ademduran.fr" }],
  creator: "Adem Duran",
  publisher: "Adem Duran",

  alternates: {
    canonical: "https://ademduran.fr",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ademduran.fr",
    siteName: "adem duran portfolio",
    title: "adem duran - junior fullstack developer",
    description:
      "junior fullstack developer by day, design enthusiast by night. i build, learn, and create—fueled by curiosity, football, and rap music.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "adem duran portfolio preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "adem duran - junior fullstack developer",
    description:
      "junior fullstack developer by day, design enthusiast by night. i build, learn, and create—fueled by curiosity, football, and rap music.",
    creator: "@a3demduran",  
    images: ["/og_image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.className} antialiased lowercase h-screen w-screen grid xl:gap-y-16 xl:grid-cols-(--custom-grid) *:xl:col-start-2 *:xl:col-end-3`}
      >
				<div className="flex flex-col gap-16 p-12 md:p-16 lg:p-32 xl:p-0">
					<Header />
					{children}
					<Footer />
				</div>
      </body>
    </html>
  );
}
