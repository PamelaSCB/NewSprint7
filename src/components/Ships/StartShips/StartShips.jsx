import { useState, useEffect} from 'react';
import { DescriptionShip } from '../DescriptionShip/DescriptionShip.jsx';
import {useFetchApi} from '../../../libr/hooks/usefetchApi.jsx';
import { endPointsAPI } from '../../../libr/constantes/endpoints.jsx';
import { ShowPages } from '../ShowPages/ShowPages.jsx';
import { Container } from './StartShipsStyled.jsx';

export const Starships = () => {
	const url = endPointsAPI.starships;

	const [selectedShip, setSelectedShip] = useState(null);
	const [page, setPage] = useState(1);
	const { shipsData, shipDataError } = useFetchApi(url, page);

	return (
		<Container>
			<div className='containerShips'>
				<div className='start'>
					<p className='home'>home</p>
					<p className='startShips'>startships</p>
				</div>

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
				<>
					{selectedShip === null ? (
						<div>
							<ShowPages page={page} setPage={setPage} next={true} />
						</div>
					) : null}
				</>
			</div>
		</Container>
	);
};
