export const fetApi = (url, page, setShipsData, setShipDataError) => {
	fetch(`${url}?page=${page}`)
		.then(response => {
			if (!response.ok) throw new Error('error fetching data');
			return response.json();
		})
		.then(data => setShipsData(data.results))
		.catch(error => setShipDataError(error.message));
};
