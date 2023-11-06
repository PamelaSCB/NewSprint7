import { Route, Routes } from 'react-router-dom';
import { Welcome } from '../components/Welcome/Welcome';
import { Starships } from '../components/Ships/StartShips/StartShips';

export const Router = () => (
	<Routes>
		<Route path='' element={<Welcome />} />
		<Route path='/startships' element={<Starships />} />
	</Routes>
);
