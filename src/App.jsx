import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StartProvider } from './context/StartProvider';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Fotter';
import { Nav } from './components/Nav/Nav';
import { Router } from './routes/router';



function App() {
	return (
		<StartProvider>
			<header>
				<Header />
				<Nav />
			</header>
			<main>
				<ToastContainer theme='colored' /><ToastContainer />
				<Router />
			</main>
			<footer>
				<Footer />
			</footer>
		</StartProvider>
	);
}

export default App;
