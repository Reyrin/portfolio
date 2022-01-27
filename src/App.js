import React from "react";
import { Route } from "react-router-dom";

import "./scss/app.scss";

import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";

function App() {
	return (
		<div className="App">
			<Route path="/" component={Portfolio} exact />
			<Route path="/profile" component={Profile} exact />
		</div>
	);
}

export default App;
