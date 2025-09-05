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
  title: "adem duran - junior fullstack developer",
  description:
    "junior fullstack developer by day, design enthusiast by night. i build, learn, and create—fueled by curiosity, football, and rap music.",
  openGraph: {
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
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.className} antialiased lowercase h-screen w-screen grid xl:grid-cols-9 xl:gap-16 *:xl:col-start-4 *:xl:col-end-7`}
      >
				<Header />
        {children}
				<Footer />
      </body>
    </html>
  );
}
