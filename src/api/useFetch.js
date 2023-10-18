import { useState, useEffect } from 'react';

export function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [controller, setcontroller] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();
		setcontroller(abortController);
		setLoading(true);
		fetch(url, { signal: abortController.signal })
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => {
				if (error.name === 'AbortError') {
					console.log('la peticion fue abortada');
				} else {
					setError(error);
				}
			})
			.finally(() => setLoading(false));

		return () => {
			abortController.abort(); // funcion de limpieza para evitar fugas de memoria
		};
	}, []);
	const handleCancelRequest = () => {
		if (controller) {
			controller.abort();
			setcontroller('Request cancelled');
		}
	};
	return { data, loading, error };
}
