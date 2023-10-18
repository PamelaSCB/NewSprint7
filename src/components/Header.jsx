import StarWarsLogo from '../assets/logo-starwars.png';
export const Header = () => {
	return (
		<header className='Header'>
			<div className='Header-logoContainer'>
				<img src={StarWarsLogo} alt='logo star wars' className='Header-logo' />
			</div>
		</header>
	);
};
