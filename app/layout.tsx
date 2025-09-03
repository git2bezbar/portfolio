import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
  title: "adem duran - junior fullstack developer",
  description: "junior fullstack developer by day, design enthusiast by night. i build, learn, and create—fueled by curiosity, football, and rap music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.className} antialiased lowercase`}
      >
        {children}
      </body>
    </html>
  );
}
