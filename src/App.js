import React from "react";

import ProjectCard from "./components/ProjectCard";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<header className="header">
				<a href="#" className="header__link">Profile</a>
			</header>
			<main>
				<div className="container">
					<h1 className="title">Portfolio</h1>

					<p className="description"><strong>Важно!</strong> Подробное описание того, какие я технологий применил, указаны на <a href="https://github.com/Reyrin" target="_blank" rel="noreferrer"><strong>github</strong></a>, в readme файле каждого проекта.</p>

					<h2 className="subtitle">Projects</h2>

					<div className="projects">
						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/react-sneakers.png?raw=true"
							}
							github={
								"https://github.com/Reyrin/sneaker-store"
							}
							demo={
								"https://reyrin.github.io/sneaker-store/"
							}
							stack={['Js', 'React', 'Sass']}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/git-repos.png?raw=true"
							}
							github={
								"https://github.com/Reyrin/github-repositories"
							}
							demo={
								"https://reyrin.github.io/github-repositories"
							}
							stack={['Js', 'React', 'Sass']}
						/>

						<ProjectCard
							url={
								"https://github.com/Reyrin/data/blob/master/img/react-pizza.png?raw=true"
							}
							github={
								"https://github.com/Reyrin/pizza"
							}
							demo={
								"https://reyrin-pizza-store.herokuapp.com/"
							}
							stack={['Js', 'React', 'Sass']}
						/>
					</div>

					<h2 className="subtitle">Mini Projects</h2>
				</div>
			</main>
		</div>
	);
}

export default App;
