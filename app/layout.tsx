import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
  title: "Adem Duran | Fullstack developer",
  description: "Full-stack developer by day, design enthusiast by night. I build, learn, and create—fueled by curiosity, football, and rap music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
