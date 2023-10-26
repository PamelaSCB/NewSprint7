import { useState, useEffect } from 'react';
import { DescriptionShip } from '../DescriptionShip/DescriptionShip';
import { endPointsAPI } from '../../../constantes/endpoints';
import { useFetchApi } from '../../../hooks/usefetchApi';
import { ShowPages } from '../ShowPages/ShowPages.jsx';

export const Starships = () => {
	const url = endPointsAPI.starships;

	const [selectedShip, setSelectedShip] = useState(null);
	const [page, setPage] = useState(1);
	const { shipsData, shipDataError } = useFetchApi(url, page);

	return (
		<div>
			<div className='containerShips'>
				<h1>STARTSHIPS</h1>
				<>
					{selectedShip === null ? (
						<div>
							<ShowPages page={page} setPage={setPage} next={true} />
						</div>
					) : null}
				</>
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
