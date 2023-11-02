import React from 'react';
import { Starships } from './components/Ships/StartShips/StartShips';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Fotter';

function App() {
	return (
		<div>
		<header>
			<Header />
			
		</header>
		<main>
			<Starships />
		</main>
		<footer>
			<Footer />
		</footer>
		</div>
		
	);
}

export default App;
