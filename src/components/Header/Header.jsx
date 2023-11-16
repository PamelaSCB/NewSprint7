import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StartContext } from '../../context/StartContext';

import StarWarsLogo from '../../assets/img/logo-starwars.png';
import { Container } from './HeaderStyled';

export const Header = () => {
	const navega = useNavigate();

	const {
		// datos de usuario
		username,
		setUsername,
		resetUserData,
		// inicio de sesion
		displayLogin,
		setDisplayLogin,
	} = useContext(StartContext);

	return (
		<Container>
			<div>
				<img src={StarWarsLogo} alt='logo Star wars' />
			</div>
			<div>
				<Link to='/login'>
					<button
						className='button'
						onClick={() => {
							setDisplayLogin(!displayLogin);
						}}
					>
						<span>{username || 'LOG IN'}</span>
					</button>
				</Link>

				{username !== undefined && (
					<button className='button'>
						<span
							onClick={() => {
								setUsername(undefined);
								resetUserData();
								navega('/login');
							}}
						>
							LOGOUT
						</span>
					</button>
				)}
			</div>
		</Container>
	);
};
