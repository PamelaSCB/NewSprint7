import { useReducer } from 'react';
import { switchLinkNav } from '../../libr/utils/switchLinkNav';
import { Container } from './NavStyled';
import { Link } from 'react-router-dom';

export const Nav = () => {
	const [state, dispatch] = useReducer(switchLinkNav, {
		home: false,
		startShips: true,
	});

	const { home, startShips } = state;
	return (
		<Container>
			<ul>
				<li
					onClick={() => dispatch({ type: 'homeClick' })}
					className={home ? 'active' : ''}
				>
					<Link className='link' to=''>
						Home
					</Link>
				</li>

				<li
					onClick={() => dispatch({ type: 'startShipsClick' })}
					className={startShips ? 'active' : ''}
				>
					<Link className='link' to='/startships'>
						Startships
					</Link>
				</li>
			</ul>
		</Container>
	);
};
