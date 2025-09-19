"use client";

import { gsap } from "gsap";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getWorkById } from "@/data/work";
import { useEffect, useRef } from "react";

export default function SingleWorkPage() {
	const { id } = useParams<{ id: string }>();
		
  const work = getWorkById(id);
	
  if (!work) {
    notFound();
  }

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
				delay: 0.75,
			});
		}, mainRef);

		return () => ctx.revert();
	}, []);

  return (
    <article className="flex flex-col gap-16" ref={mainRef}>
      <header className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">{work.title}</h1>
				<div className="flex flex-col gap-2">
					<div className="flex justify-between">
						<h2>{work.typeOfProject} project</h2>
						<p>{work.year}</p>
					</div>
					<p className="text-gray">{work.stack.join(", ")}</p>
				</div>
				<Image
					src={work.workImageCover}
					alt={work.title}
					width={1200}
					height={630}
					className="rounded-lg w-full h-auto border border-gray/20"
				/>
      </header>

      <div className="flex flex-col gap-8">
        {work.content.map((block, index) => {
          if (block.type === "text") {
            return <p key={index}>{block.value}</p>;
          }
          if (block.type === "image") {
            return (
              <Image
                key={index}
                src={block.value}
                alt={`${work.title} ${index + 1}`}
                width={1200}
                height={630}
                className="rounded-lg w-full h-auto border border-gray/20"
              />
            );
          }
          return null;
        })}
      </div>

      <footer className="flex flex-wrap gap-4">
        {work.websiteLink && (
          <Link
            href={work.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            visit the website
          </Link>
        )}

        {work.githubLinks?.map((repo, idx) => (
          <Link
            key={idx}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {repo.label}
          </Link>
        ))}
      </footer>
    </article>
  );
}
