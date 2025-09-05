"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Clock from "../Clock";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.from(footerRef.current, {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
      duration: 1,
      ease: "power2.out",
      delay: 1.5,
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="text-gray xl:pb-16 mt-auto"
    >
      <p>made with ❤️ in bordeaux, france - <Clock /></p>
    </footer>
  );
}
