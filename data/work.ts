export type WorkContentBlock = { type: "text"; value: string } | { type: "image"; value: string };

export type RepoLink = {
  label: string;
  url: string;
};

export type Work = {
  id: string;
  title: string;
  year: number;
  typeOfProject: string;
  stack: string[];
	workImageCover: string;
  websiteLink?: string;
  githubLinks?: RepoLink[];
  content: WorkContentBlock[];
};

export const works: Work[] = [
  {
    id: "greed-island-encyclopedia",
    title: "Greed Island Encyclopedia",
    year: 2025,
    typeOfProject: "personal",
    stack: ["nextjs", "typescript", "tailwindcss"],
    websiteLink: "https://encyclopedia.greed-island.com",
		workImageCover: "/greed-island-encyclopedia.png",
    content: [
      {
        type: "text",
        value: "As a Hunter x Hunter fan, the Greed Island arc has always been one of my favorites. The card game featured in the story really stuck with me, so I decided to build a database to catalog all the cards — and that’s how Greed Island Encyclopedia was born."
      },
			{
        type: "image",
        value: "/greed-island-encyclopedia-1.png"
      }
    ]
  },
  {
    id: "forkee",
    title: "Forkee",
    year: 2024,
    typeOfProject: "university",
    stack: ["nextjs", "typescript", "tailwindcss", "adonisjs"],
    githubLinks: [
			{ label: "visit the dashboard repository", url: "https://github.com/git2bezbar/dashboard" },
			{ label: "visit the api repository", url: "https://github.com/git2bezbar/api" },
			{ label: "visit the website repository", url: "https://github.com/git2bezbar/forkee-website" }
		],
		workImageCover: "/forkee.png",
    content: [
      {
        type: "text",
        value: "Forkee is a university project and probably the most ambitious one I’ve worked on. The goal was to create a CMS for restaurant owners, a large-scale project that spanned my two years of master’s studies."
      },
			{
        type: "image",
        value: "/forkee-1.png"
      },
			{
				type: "text",
				value: "I started with the functional side of the project, defining requirements and writing a detailed specification document. Then came the design phase, which unfolded in three parts: creating three different themes for restaurant websites, designing the dashboard to be clear and intuitive, and building the Forkee showcase site to present the solution."
			},
			{
        type: "image",
        value: "/forkee-2.png"
      },
			{
				type: "text",
				value: "To support this work, I created a reusable Design System called Umbrella UI, made up of components adapted to the project’s needs. This system then became the foundation for building the dashboard interface."
			},
			{
        type: "image",
        value: "/forkee-3.png"
      },
			{
				type: "text",
				value: "On the development side, I worked on both the front-end and back-end architecture, with a focus on performance and modularity. Umbrella UI was also designed as a standalone library, keeping the codebase clean and reusable."
			},
			{
				type: "text",
				value: "The project was launched online, then later taken down, but the code remains available as open source. Forkee was a defining experience for me, combining functional scoping, design, and development into one complete, real-world project."
			},
    ]
  },
	{
    id: "umbrella",
    title: "Umbrella UI",
    year: 2024,
    typeOfProject: "university",
    stack: ["react", "typescript", "tailwindcss"],
		workImageCover: "/umbrella-ui.png",
		githubLinks: [
			{ label: "visit the github repository", url: "https://github.com/git2bezbar/umbrella" },
		],
    content: [
      {
        type: "text",
        value: "Umbrella UI is a React component library built on top of shadcn-ui. While working on Forkee, a CMS for restaurant owners, I needed a set of components aligned with the project’s visual identity. Since I knew Forkee would become a heavy project, I decided to separate all the components I needed into their own repository."
      },
			{
        type: "image",
        value: "/umbrella-ui-1.png"
      },
      {
        type: "text",
        value: "I handled both development and design. Most of the components were already functional — my role was to adapt them visually to match the mockups. I was also supported by Ugo, who helped with bundling and the technical details I wasn’t fully comfortable with yet."
      }
    ]
  },
	{
    id: "passcode",
    title: "Passcode",
    year: 2024,
    typeOfProject: "fun",
    stack: ["react", "typescript", "tailwindcss"],
		workImageCover: "/passcode.png",
		websiteLink: "https://passcode.ademduran.fr",
		githubLinks: [
			{ label: "visit the github repository", url: "https://github.com/git2bezbar/passcode" },
		],
    content: [
      {
        type: "text",
        value: "As part of a team-building activity, I recreated a mini-game called Passcode, inspired by a puzzle from Resident Evil 0. The goal is to reach the target number on screen in 10 additions, with the difficulty increasing step by step."
      },
			{
        type: "image",
        value: "/passcode-1.png"
      },
      {
        type: "text",
        value: "I worked on both the development and the design of the game."
      }
    ]
  },
];

export const getWorkById = (id: string): Work | undefined => {
	return works.find((work) => work.id === id);
}
