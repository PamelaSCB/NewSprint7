import React from 'react';
import { Starships } from './components/Ships/StartShips/StartShips';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Fotter';
import { Nav } from './components/Nav/Nav';
import { Router } from './routes/router';

function App() {
	return (
		<div>
			<header>
				<Header />
				<Nav />
			</header>
			<main>
				<Router />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
