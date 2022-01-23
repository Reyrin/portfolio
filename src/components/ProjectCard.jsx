import React from "react";

const ProjectCard = ({url, github, demo, stack}) => {
	return (
		<div className="project-card">
			<div
				className="project-card__img"
				style={{
					background:
						`url(${url}) no-repeat center bottom/contain`,
				}}
			>
				<div className="project-card__stack">
                    <ul>
                        {stack.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
			</div>

			<div className="project-card__refs">
				<a href={github} target="_blank" rel="noreferrer">GutHub</a>
				<a href={demo} target="_blank" rel="noreferrer">Demo</a>
			</div>
		</div>
	);
};

export default ProjectCard;
