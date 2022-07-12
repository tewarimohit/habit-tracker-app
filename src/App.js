import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Archive from "./frontend/Archive";
import Home from "./frontend/Home";
import Labels from "./frontend/Labels";
import LandingPage from "./frontend/LandingPage";
import Login from "./frontend/Login";
import Trash from "./frontend/Trash";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<LandingPage />} />
				<Route path="/labels" element={<Labels />} />
				<Route path="/archives" element={<Archive />} />
				<Route path="/trash" element={<Trash />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
