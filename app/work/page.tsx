import { works } from "@/data/work";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "work",
  description: "a showcase of projects by adem duran, junior fullstack developer.",
};

export default function Work() {
	const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": works.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": project.websiteLink || (project.githubLinks?.[0]?.url || "https://ademduran.fr"),
      "name": project.title,
      "image": project.workImageCover ? `https://ademduran.fr${project.workImageCover}` : undefined,
      "description": project.content.find(block => block.type === "text")?.value || "",
      "datePublished": project.year ? `${project.year}-01-01` : undefined
    }))
  };

	return (
		<main className="flex flex-col items-start justify-center gap-16 fade-up animation-delay-500">
			<div className="flex flex-col gap-16">
        {works.map((work) => (
            <Link href={`/work/${work.id}`} key={work.id} className="flex flex-col gap-8 hover:scale-102 duration-300">
              <Image
                src={work.workImageCover}
                alt={work.title}
                width={1200}
                height={630}
                className="rounded-lg w-full h-auto border border-gray/20"
              />
							<div className="flex flex-col gap-2">
								<div className="flex justify-between">
									<h2>{work.title}</h2>
									<p>{work.year}</p>
								</div>
								<p className="text-gray">{work.typeOfProject} project</p>
							</div>
            </Link>
        ))}
      </div>
			<Script
				type="application/ld+json"
				id="work-jsonld"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</main>
	);
}
