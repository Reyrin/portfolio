import React from "react";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";
import DarkMode from "../components/DarkMode";

function Portfolio() {
	return (
		<div className="portfolio">
			<header className="header">
				<Link className="header__link" to="/profile">
					Profile
				</Link>
				<DarkMode />
			</header>
			<main>
				<div className="container">
					<h1 className="title">Portfolio</h1>
					<h2 className="subtitle">Projects</h2>

					<div className="projects">
						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20projects/react-sneakers.png?raw=true"
							}
							github={"https://github.com/Reyrin/sneaker-store"}
							demo={"https://reyrin.github.io/sneaker-store/"}
							stack={[
								"React + Context",
								"React Router Dom",
								"Skeleton",
								"Mock API",
								"Axios",
							]}
							name={"👟 sneaker-store"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20projects/git-repos.png?raw=true"
							}
							github={
								"https://github.com/Reyrin/github-repositories"
							}
							demo={
								"https://reyrin.github.io/github-repositories"
							}
							stack={[
								"React + Redux",
								"React Router Dom",
								"WebPack",
								"GitHub API",
								"Axios",
							]}
							name={"⭐ github-repositories"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20projects/react-pizza.png?raw=true"
							}
							github={"https://github.com/Reyrin/pizza"}
							demo={"https://reyrin-pizza-store.herokuapp.com/"}
							stack={[
								"React + Redux",
								"React Router Dom",
								"Sceleton",
								"JSON Server",
								"PropTypes",
								"Axios",
							]}
							name={"🍕 pizza-store"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20projects/bicycle.png?raw=true"
							}
							github={"https://github.com/Reyrin/Bicycle"}
							demo={"https://reyrin.github.io/Bicycle/"}
							stack={[
								"HTML, SCSS, JS",
								"Gulp",
								"Swiper Slider",
								"Animate On Scroll",
							]}
							name={"🚲 Bicycle"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20projects/quiz.png?raw=true"
							}
							github={"https://github.com/Reyrin/quiz"}
							demo={"https://reyrin.github.io/quiz/"}
							stack={[
								"React",
								"React-Hooks",
								"Trivia API",
								"Axios",
							]}
							name={"❓ Quiz"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20projects/typescript-todo.png?raw=true"
							}
							github={"https://github.com/Reyrin/TypeScript-Todo"}
							demo={"https://reyrin.github.io/TypeScript-Todo/"}
							stack={["TypeScript", "React", "React-Hooks"]}
							name={"📝 TypeScript-Todo"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20projects/blog.png?raw=true"
							}
							github={"https://github.com/Reyrin/blog"}
							demo={"https://reyrin.github.io/blog/"}
							stack={[
								"HTML, SCSS, JS",
								"BEM",
								"Gulp",
								"Multi-page",
							]}
							name={"📜 Blog"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20projects/give-away.png?raw=true"
							}
							github={"https://github.com/Reyrin/give-away"}
							demo={"https://reyrin.github.io/give-away/#/"}
							stack={[
								"React",
								"React-Hooks",
								"React Router Dom",
								"Swiper Slider",
								"SCSS",
							]}
							name={"🍁 Giveaway"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20projects/guitar.png?raw=true"
							}
							github={"https://github.com/Reyrin/Catalog-JS"}
							demo={"https://reyrin.github.io/Catalog-JS/"}
							stack={[
								"HTML, CSS, JS",
								"LocaleStorage",
								"Fetch",
								"Component approach",
							]}
							name={"🎸 Guitar shop"}
						/>
					</div>

					<h2 className="subtitle">Mini Projects</h2>

					<div className="mini-projects">
						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20mini-projects/gallery-js.png?raw=true"
							}
							github={"https://github.com/Reyrin/Gallery-JS"}
							demo={"https://reyrin.github.io/Gallery-JS/"}
							stack={["HTML, CSS, JS"]}
							name={"🖼️ Gallery-JS"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20mini-projects/trello-clone-JS.png?raw=true"
							}
							github={"https://github.com/Reyrin/TrelloClone-JS"}
							demo={"https://reyrin.github.io/TrelloClone-JS/"}
							stack={["HTML, CSS, JS"]}
							name={"📋 TrelloClone"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20mini-projects/clock-js.png?raw=true"
							}
							github={"https://github.com/Reyrin/Clock-JS"}
							demo={"https://reyrin.github.io/Clock-JS/"}
							stack={["HTML, CSS, JS"]}
							name={"🕒 Clock-JS"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20mini-projects/slider-js.png?raw=true"
							}
							github={"https://github.com/Reyrin/Slider-JS"}
							demo={"https://reyrin.github.io/Slider-JS/"}
							stack={["HTML, CSS, JS"]}
							name={"🖼️ Slider-JS"}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/portfolio%20mini-projects/todo-js.png?raw=true"
							}
							github={"https://github.com/Reyrin/Todo-JS"}
							demo={"https://reyrin.github.io/Todo-JS/"}
							stack={["HTML, CSS, JS"]}
							name={"📝 Todo-JS"}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Portfolio;
