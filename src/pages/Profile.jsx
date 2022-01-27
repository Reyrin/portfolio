import React from "react";
import { Link } from "react-router-dom";

import DarkMode from "./../components/DarkMode";

function Profile() {
	return (
		<div className="profile">
			<header className="header">
				<Link className="header__link" to="/">
					Portfolio
				</Link>

				<DarkMode />
			</header>
			<main>
				<div className="container">
					<h1 className="title" data-aos="fade-left">
						Front-end Developer
					</h1>
					<h2 className="subtitle" data-aos="fade-right">
						About Me
					</h2>
					<div className="description" data-aos="fade-up">
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
							Имеется огромное желание развиваться в сфере
							программирования.
						</p>
					</div>

					<h2 className="subtitle" data-aos="fade-right">
						Skills
					</h2>

					<ul className="skills">
						<li data-aos="fade-up">HTML, CSS(Sass, БЭМ, Bootstrap)</li>
						<li data-aos="fade-up">JavaScript(ES5, ES6, Ajax) React + Redux</li>
						<li data-aos="fade-up">TypeScript</li>
						<li data-aos="fade-up">WebPack, Gulp</li>
						<li data-aos="fade-up">Git, GitHub</li>
						<li data-aos="fade-up">Adobe Photoshop, Zeplin, Figma</li>
					</ul>

					<h2 className="subtitle" data-aos="fade-right">
						Contacts
					</h2>
					<div className="description" data-aos="fade-up">
						<p>Буду рад взаимовыгодному сотрудничеству.</p>
						<p>
							Можете связаться со мной в любое время, постараюсь
							ответить как можно скорее!
						</p>
					</div>
					<div className="contacts" data-aos="fade-up">
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
						<p>
							<a href="mailto:npmrun@vk.com">npmrun@vk.com</a>
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Profile;
