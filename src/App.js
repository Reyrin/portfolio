import React from "react";
import { Route } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";

import "./scss/app.scss";

import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";

function App() {
	React.useEffect(() => {
		AOS.init({
			duration : 700
		});
	}, [])

	return (
		<div className="App">
			<Route path="/" component={Portfolio} exact />
			<Route path="/profile" component={Profile} exact />
		</div>
	);
}

export default App;
