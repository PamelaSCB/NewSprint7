import StarWarsLogo from '../../assets/img/logo-starwars.png';
import { Container } from './HeaderStyled';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StartContext } from '../../context/StartContext';

export const Header = () => {
	const {
		// datos de usuario
		username,
		setUsername,
		resetUserData,
		// inicio de sesion
		displayLogin,
		setDisplayLogin,
	} = useContext(StartContext);
	const navigate = useNavigate();

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
							resetUserData();
						}}
					>
						<span>{username || 'LOG IN'}</span>
					</button>
				</Link>

				{username !== undefined && (
					<button className='logout'>
						<span
							onClick={() => {
								setUsername(undefined);
								resetUserData();
								navigate('/');
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
