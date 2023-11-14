import { Route, Routes } from 'react-router-dom';


import { Welcome } from '../components/Welcome/Welcome';
import { Starships } from '../components/Ships/StartShips/StartShips';
import { SignUp } from '../components/SignUp/SignUp';
import { Login } from '../components/Login/Login';

export const Router = () => (
	
	<Routes>	
		<Route path='' element={<Welcome />} />
		<Route path='/signup' element={<SignUp />} />
		<Route path='/login' element={<Login />} />
		<Route path='/startships' element={<Starships />} />
	</Routes>
	
);
