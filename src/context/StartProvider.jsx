import { useEffect, useState } from 'react';
import { StartContext } from './StartContext';
import { fetApi } from '../libr/utils/fechtApi';
import { endPointsAPI } from '../libr/constantes/endpoints';

export const StartProvider = ({ children }) => {
	// useState para el estado de los startships
	const [selectedShip, setSelectedShip] = useState(null);
	const [page, setPage] = useState(1);
	const url = endPointsAPI.starships;
	const [shipsData, setShipsData] = useState([]);
	const [shipDataError, setShipDataError] = useState();

	// useState para el login y signUp
	const [displayLogin, setDisplayLogin] = useState(false);
	const [displaySignUp, setDisplaySignUp] = useState(false);
	// para el login y signUp
	const [userData, setUserData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [username, setUsername] = useState();
	const [errors, setErrors] = useState({});
	const [valid, setValid] = useState(true);

	useEffect(() => {
		fetApi(url, page, setShipsData, setShipDataError);
	}, [page]);

	useEffect(() => {
		userData.username !== undefined
			? setUsername(userData.username.toUpperCase())
			: setUsername(prevUsername => prevUsername);
	}, [userData]);

	const resetUserData = () => {
		setUserData({
			email: '',
			password: '',
		});
	};

	return (
		<StartContext.Provider
			value={{
				selectedShip,
				setSelectedShip,
				url,
				page,
				setPage,
				shipsData,
				setShipsData,
				shipDataError,
				setShipDataError,
				// para login y signUp
				displayLogin,
				setDisplayLogin,
				displaySignUp,
				setDisplaySignUp,
				// para data de usuario
				userData,
				setUserData,
				resetUserData,
				errors,
				setErrors,
				valid,
				setValid,
				// para username
				username,
				setUsername,
			}}
		>
			{children}
		</StartContext.Provider>
	);
};
