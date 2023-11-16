import { useState, useEffect, useContext } from 'react';
import { DescriptionShip } from '../DescriptionShip/DescriptionShip.jsx';
import { ShowPages } from '../ShowPages/ShowPages.jsx';
import { Container } from './StartShipsStyled.jsx';
import { StartContext } from '../../../context/StartContext.jsx';

export const Starships = () => {
	const {
		selectedShip,
		setSelectedShip,
		page,
		setPage,
		shipsData,
		loading,
		setLoading,
	} = useContext(StartContext);

	return (
		<Container>
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
