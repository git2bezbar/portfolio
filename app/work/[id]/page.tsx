import Image from "next/image";
import Link from "next/link";
import { getWorkById } from "@/data/work";
import { Metadata } from "next";
import Script from "next/script";

interface WorkPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { id } = params;
  const work = await getWorkById(id);

	if (!work) {
		return {
			title: "work not found",
			description: "the requested work could not be found.",
		};
	}

  return {
    title: `${work.title}`,
    description: work.content.find(block => block.type === "text")?.value.slice(0, 160) || "a project by adem duran.",
    openGraph: {
      title: work.title,
      description: work.content.find(block => block.type === "text")?.value.slice(0, 160) || "a project by adem duran.",
      images: [work.workImageCover],
    },
    twitter: {
      title: work.title,
      description: work.content.find(block => block.type === "text")?.value.slice(0, 160) || "a project by adem duran.",
      images: [work.workImageCover],
    },
  };
}

export default async function SingleWorkPage({ params }: { params: { id: string } }) {
	const { id } = await params;
		
  const work = getWorkById(id);
	
  if (!work) {
    return (
		<article className="flex flex-col gap-16 fade-up animation-delay-500">
      <div className="flex flex-col gap-8">
        <p>Work not found. </p>
      </div>
    </article>
		)
  }

	const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": work.title,
    "url": work.websiteLink || `https://ademduran.fr/work/${work.id}`,
    "description": work.content.find(block => block.type === "text")?.value || "",
    "image": work.workImageCover ? `https://ademduran.fr${work.workImageCover}` : undefined,
    "datePublished": work.year ? `${work.year}-01-01` : undefined,
    "creator": {
      "@type": "Person",
      "name": "Adem Duran",
      "url": "https://ademduran.fr"
    },
    "keywords": work.stack.join(", ")
  };

  return (
    <article className="flex flex-col gap-16 fade-up animation-delay-500">
      <header className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">{work.title}</h2>
				<div className="flex flex-col gap-2">
					<div className="flex justify-between">
						<p>{work.typeOfProject} project</p>
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
			<Script
				type="application/ld+json"
				id="work-jsonld"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
    </article>
  );
}
