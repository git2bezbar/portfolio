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
      className="flex flex-col items-start justify-center gap-4"
    >
      <div className="flex flex-col gap-4">
        <p>hey! 👋🏻</p>
        <p>
          i am adem, a full-stack developer who spends my days working across
          frontend and backend, improving features and making things run
          smoothly.
        </p>
        <p>
          i love learning new tools and finding ways to make code cleaner. before
          this, i worked as a front-end integrator in a web agency, turning
          designs into interactive pages and learning the craft of user-friendly
          interfaces.
        </p>
        <p>
          in my free time, i let my creativity take over—designing layouts,
          exploring UI concepts, or tinkering with side projects just for fun.
          And when I step away from screens, football and rap music keep me
          energized and inspired. Combining creativity with code is what drives
          me every day.
        </p>
        <p>
          i’m always looking for new challenges and opportunities to grow.
          experimenting with new technologies, discovering design ideas, or
          simply pushing myself to try something different keeps me motivated
          and passionate about what i do.
        </p>
      </div>
    </main>
  );
}
