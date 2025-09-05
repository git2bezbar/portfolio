"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Poool from "../PooolText";
import Link from "next/link";
import { gsap } from "gsap";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

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
        <li className="hover:text-black duration-300">
          <Link href="/about">about</Link>
        </li>
        <li className="hover:text-black duration-300">
          <Link href="/work">work</Link>
        </li>
        <li className="hover:text-black duration-300">
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </header>
  );
}
