import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Poool() {
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const colors = [
      "var(--color-onyx)",
      "var(--color-velvet)",
      "var(--color-grapefruit)",
      "var(--color-sunglow)",
      "var(--color-onyx)",
    ];

    const tl = gsap.timeline({ repeat: -1, yoyo: true, delay: 1 });

    tl.to({}, { duration: 1 });
    lettersRef.current.forEach((letter, i) => {
      tl.to(letter, {
        color: colors[i],
        duration: 1,
        ease: "power2.inOut",
      }, i * 0.1);
    });

    tl.to({}, { duration: 1 });

  }, []);

  return (
    <a href="https://www.poool.fr/" target="_blank" rel="noopener noreferrer">
      {["p", "o", "o", "o", "l"].map((letter, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) lettersRef.current[i] = el;
          }}
          style={{ color: "var(--color-gray)" }}
        >
          {letter}
        </span>
      ))}
    </a>
  );
}
