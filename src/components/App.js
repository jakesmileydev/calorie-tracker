import { Routes, Route, useLocation } from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import Reset from './Reset';

export default function App() {
	const location = useLocation();

	const pathname = location.pathname;

	return (
		<>
			<header>
				<div className="logo">calorietracker.dev</div>
			</header>

			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/Dashboard" element={<Dashboard />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/reset" element={<Reset />} />
			</Routes>

			<footer>
				<p className="copy">&copy; Jake Smiley 2022</p>
			</footer>

			<div className="background">
				<span className="stripe__purple__left"></span>
				<span className="stripe__blue__left"></span>
				<span className="stripe__overlap__left"></span>
				<span className="stripe__purple__right"></span>
			</div>
		</>
	);
}
