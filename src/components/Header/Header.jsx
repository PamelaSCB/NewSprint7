import StarWarsLogo from '../../assets/img/logo-starwars.png';
import { Container } from './HeaderStyled';

export const Header = () => {
	return (
		<Container>
			<div>
				<img src={StarWarsLogo} alt='logo Star wars' />
			</div>
			<div>
				<button>log in</button>
				<button>sign up</button>
			</div>
		</Container>
	);
};
