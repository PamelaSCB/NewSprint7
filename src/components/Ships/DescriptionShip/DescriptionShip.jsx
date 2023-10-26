import { Container } from './DescriptionShipStyled';
import { endPointsAPI } from '../../../constantes/endpoints';
export const DescriptionShip = ({ ship, onBackClick }) => {
	const replaceImage = error => {
		error.target.src = endPointsAPI.starshipNoImg;
	};
	const id = ship.url.slice(32, -1);
	const image = `${endPointsAPI.starshipImg + id}.jpg`;

	return (
		<Container>
			<div>
				<img src={image} alt={ship.name} onError={replaceImage} />
			</div>
			<ul>
				<h2>{ship.name}</h2>
				<div>
					<li>
						<span>Model:</span>
						<span>{ship.model}</span>
					</li>
					<li>
						<span>Manufacturer:</span>
						<span>{ship.manufacturer}</span>
					</li>
					<li>
						<span>Cost:</span>
						<span>{ship.cost_in_credits}</span>
					</li>
					<li>
						<span>Speed:</span>
						<span>{ship.max_atmosphering_speed}</span>
					</li>
					<li>
						<span>Hyperdrive Rating:</span>
						<span>{ship.hyperdrive_rating}</span>
					</li>
					<li>
						<span>MGLT:</span>
						<span>{ship.MGLT}</span>
					</li>
					<li>
						<span>Length:</span>
						<span>{ship.length}</span>
					</li>
					<li>
						<span>Crew:</span>
						<span>{ship.crew}</span>
					</li>
					<li>
						<span>Passengers:</span>
						<span>{ship.passengers}</span>
					</li>
					<li>
						<span>Cargo Capacity:</span>
						<span>{ship.cargo_capacity} metric tons</span>
					</li>
					<li>
						<span>Consumables:</span>
						<span>{ship.consumables}</span>
					</li>
				</div>
			</ul>
			<div>
				<button onClick={onBackClick}>Back to Ships</button>
			</div>
		</Container>
	);
};
