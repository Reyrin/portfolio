import React from "react";
import { Link } from "react-router-dom";

function Profile() {
	return (
		<div className="profile">
			<header className="header">
				<Link className="header__link" to="/">
					Protfolio
				</Link>
			</header>
			<main>
				<div className="container">
					<h1 className="title">Front-end Developer</h1>
					<p className="description">
						<p>
							Привет! Я фронтенд разработчик. Занимаюсь созданием
							современных сайтов и SPA-приложений с полной
							адаптивностью, и полноценной интерактивностью под
							любые устройства.
						</p>
						<p>
							Постоянно развиваюсь и изучаю что-нибудь новое в
							сфере разработок. Люблю читать книги и статьи по
							программированию. Так же увлекаюсь шахматами и авто.
						</p>

						<p>
							Буду рад взаимовыгодному сотрудничеству. Имеется
							огромное желание развиваться в сфере
							программирования.
						</p>
					</p>

					<h2 className="subtitle">Skills</h2>

					<ul className="skills">
						<li>HTML, CSS(Sass, БЭМ, Bootstrap)</li>
						<li>JavaScript(ES5, ES6, Ajax) React + Redux</li>
						<li>WebPack, Gulp</li>
						<li>Git, GitHub</li>
						<li>Adobe Photoshop, Zeplin, Figma</li>
					</ul>

					<h2 className="subtitle">Contacts</h2>
					<div className="contacts">
						<p>
							<a
								href="https://github.com/Reyrin"
								target="_blank"
								rel="noreferrer"
							>
								GitHub
							</a>
						</p>

						<p>
							<a href="mailto:npmrun@vk.com">npmrun@vk.com</a>
						</p>
						<p>
							<a href="tg://resolve?domain=cvlogs">Telegram</a>
						</p>
						<p>
							<a
								href="https://wa.me/799773653342"
								target="_blank"
								rel="noreferrer"
							>
								WhatsApp
							</a>
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Profile;
