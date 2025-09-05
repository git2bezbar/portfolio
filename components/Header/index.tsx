"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Poool from "../PooolText";
import Link from "next/link";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.from(headerRef.current, {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
      clearProps: "all",
    });
  }, []);

  const links = [
    { href: "/about", label: "about" },
    { href: "/work", label: "work" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="flex flex-col items-start gap-8 xl:pt-32"
    >
      <Link href="/">
        <Image src="/adem.png" alt="adem duran" width={128} height={128} />
      </Link>
      <div className="flex flex-col">
        <Link href="/">
          <h1>adem duran</h1>
        </Link>
        <p className="text-gray">
          junior fullstack developer @ <Poool />
        </p>
      </div>
      <ul className="flex gap-4 text-gray">
        {links.map(({ href, label }) => (
          <li key={href}>
            {pathname === href ? (
              <p className="text-black">{label}</p>
            ) : (
              <Link
                href={href}
                className="hover:text-black duration-300"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}
