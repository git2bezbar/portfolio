"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!mainRef.current) return;

		const ctx = gsap.context(() => {
			gsap.from(mainRef.current, {
				opacity: 0,
				y: 40,
				filter: "blur(8px)",
				duration: 1,
				ease: "power2.out",
				clearProps: "all",
				delay: 1,
			});
		}, mainRef);

		return () => ctx.revert();
	}, []);


  return (
    <main
      ref={mainRef}
      className="flex flex-col items-start justify-center gap-4 mb-32"
    >
			<p>hey! 👋🏻</p>
			<p>
				I’m Adem, a full-stack developer working across frontend and backend
				to improve features and make things run smoothly. I love learning new
				tools, experimenting with creative ideas, and turning designs into
				interactive experiences. In my free time, I explore UI concepts,
				tinker with side projects, and stay inspired by football and rap
				music. Curiosity and creativity drive everything I do, pushing me to
				keep learning and improving.
			</p>
    </main>
  );
}
