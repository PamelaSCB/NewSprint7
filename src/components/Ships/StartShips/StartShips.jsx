import { useState, useEffect } from 'react';
import { DescriptionShip } from '../DescriptionShip/DescriptionShip';

export const Starships = () => {
	const [shipsData, setShipsData] = useState([]);
	const [selectedShip, setSelectedShip] = useState(null);

	useEffect(() => {
		fetch('https://swapi.dev/api/starships/')
			.then(response => response.json())
			.then(shipsData => setShipsData(shipsData.results));
	}, []);

	return (
		<div className='start'>
			<h1 className='startH1'>STARTSHIPS</h1>
			<div className='containerShips'>
				{selectedShip ? (
					<DescriptionShip
						ship={selectedShip}
						onBackClick={() => setSelectedShip(null)}
					/>
				) : (
					shipsData.map(ship => (
						<div
							className='shipContainer'
							key={ship.name}
							onClick={() => setSelectedShip(ship)}
						>
							<p className='shipName'>{ship.name}</p>
							<p>{ship.model}</p>
						</div>
					))
				)}
			</div>
		</div>
	);
};
