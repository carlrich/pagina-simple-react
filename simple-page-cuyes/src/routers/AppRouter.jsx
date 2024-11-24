import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Cuyes from '../pages/Cuyes';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';


const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/cuyes" element={<Cuyes />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Error404 />} />
		</Routes>
	);
}

export default AppRouter;
