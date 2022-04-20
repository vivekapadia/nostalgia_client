import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Container maxWidth="lg">
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
				</Routes>
			</Container>
		</Router>
	);
};

export default App;
