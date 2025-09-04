"use client";

import { useEffect, useRef } from "react";
import Clock from "@/components/Clock";
import Image from "next/image";
import { gsap } from "gsap";
import Poool from "@/components/PooolText";

export default function Home() {
  const blocksRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (blocksRef.current.length > 0) {
      gsap.from(blocksRef.current, {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
        stagger: 0.4,
        duration: 1,
        ease: "power2.out",
        clearProps: "all",   
        delay: 1,
      });
    }
  }, []);

  return (
    <div className="h-screen w-screen grid xl:grid-cols-9">
      <main className="flex flex-col p-12 md:p-16 lg:p-32 xl:p-0 gap-16 xl:col-start-4 xl:col-end-7 items-start justify-center">
        <div
          className="flex flex-col gap-8"
          ref={(el) => {blocksRef.current[0] = el}}
        >
          <Image src="/photo.png" alt="adem duran" width={128} height={128} />
          <div className="flex flex-col">
            <h1>adem duran</h1>
            <p className="text-gray">junior fullstack developer at <Poool /></p>
          </div>
        </div>

        <div
          className="flex flex-col gap-4"
          ref={(el) => {blocksRef.current[1] = el}}
        >
          <p className="text-2xl">I’ll be back soon!</p>
          <p className="text-gray">
            I am probably enjoying moroccan mint tea 🍵 while finishing the
            new version of the site. You can{" "}
            <a className="underline" href="mailto:contact@ademduran.fr">
              send me an email
            </a>{" "}
            or{" "}
            <a className="underline" href="http://linkedin.com/in/adem-duran">
              DM me on LinkedIn
            </a>
            .
          </p>
        </div>

        <p
          className="text-gray"
          ref={(el) => {blocksRef.current[2] = el}}
        >
          bordeaux, france - <Clock />
        </p>
      </main>
    </div>
  );
}
