import { useEffect, useState } from 'react';
import { StartContext } from './StartContext';
import { fetApi } from '../libr/utils/fechtApi';
import { endPointsAPI } from '../libr/constantes/endpoints';

export const StartProvider = ({ children }) => {
	// useState para el estado de los startships
	const [selectedShip, setSelectedShip] = useState(null);
	const [page, setPage] = useState(1);
	const url = endPointsAPI.starships;
	const [loading, setLoading] = useState(true);
	const [shipsData, setShipsData] = useState([]);
	const [shipDataError, setShipDataError] = useState();
	useEffect(() => {
		fetApi(url, page, setShipsData, setShipDataError);
	}, [page]);

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
		userData.username !== undefined
			? setUsername(userData.username.toUpperCase())
			: setUsername(prevUsername => prevUsername);
	}, [userData]);

	// para borrar los datos del usuario
	const resetUserData = () => {
		setUserData({
			email: '',
			password: '',
		});
	};

	const [currentPath, setCurrentPath] = useState('/');

	const changePath = path => setCurrentPath(path);

	return (
		<StartContext.Provider
			value={{
				selectedShip,
				setSelectedShip,
				url,
				// pages de los starships
				page,
				setPage,

				loading,
				setLoading,

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

				// estados de las rutas
				currentPath,
				changePath,
			}}
		>
			{children}
		</StartContext.Provider>
	);
};
