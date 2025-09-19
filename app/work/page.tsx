import { works } from "@/data/work";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
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
		</main>
	);
}
