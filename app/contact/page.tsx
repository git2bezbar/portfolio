export default function Contact() {
	return (
		<main
			className="flex flex-col items-start justify-center gap-16 fade-up animation-delay-500"
		>
			<div className="flex flex-col gap-4">
				<p>Whether it’s a question, a collab, or a random hello, feel free to reach out.</p>
			</div>
			<div className="flex flex-col gap-4 sm:w-full text-gray">
				<ul className="flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:w-full">
					<li className="col-start-1 col-end-2">
						<a href="mailto:contact@ademduran.fr">email</a>
					</li>
					<li className="col-start-2 col-end-3">
						<a href="https://www.linkedin.com/in/adem-duran/">linkedin</a>
					</li>
					<li className="col-start-3 col-end-4">
						<a href="https://github.com/git2bezbar">github</a>
					</li>
				</ul>
			</div>
		</main>
	);
}
