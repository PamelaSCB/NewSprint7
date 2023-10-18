import { useFetch } from '../api/useFetch';

export const Starships = () => {
	const { data, loading, error} = useFetch('https://swapi.dev/api/starships');

	return (
		<div>
			<h1>STARTSHIPS</h1>
			<div className='container'>
				<ul>
					{error && <li>{error}</li>}
					{loading && <li>Loading ....</li>}
					{data?.results.map(item => (
						<div className='container-ships' key={item.name}>
							<li>{item.name}</li>
							<span>{item.model}</span>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};
