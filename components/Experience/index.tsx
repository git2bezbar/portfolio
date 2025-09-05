export interface ExperienceProps {
  company: string;
	link: string;
  position: string;
  duration: string;
}

export default function Experience({ company, link, position, duration }: ExperienceProps) {

	return (
		<>
			<a href={link} className="col-start-1 col-end-2">{company}</a>
			<span className="col-start-2 col-end-3 sm:text-right text-gray">{position}</span>
			<span className="col-start-3 col-end-4 sm:text-right text-gray">{duration}</span>
		</>
	);
}
