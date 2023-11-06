import { useEffect, useState } from 'react';
import { fetApi } from '../utils/fechtApi';

export const useFetchApi = (url, page) => {
	const [shipsData, setShipsData] = useState([]);
	const [shipDataError, setShipDataError] = useState();

	useEffect(() => {
		fetApi(url, page, setShipsData, setShipDataError);
	}, [page]);
	return {
		shipsData,
		shipDataError,
	};
};
