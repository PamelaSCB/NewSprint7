import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { StartContext } from '../../context/StartContext.jsx';

import { Container } from './SignUpStyled.jsx';
export function SignUp() {
	const {
		userData,
		setUserData,
		resetUserData,
		displaySignUp,
		setDisplaySignUp,
		displayLogin,
		setDisplayLogin,
		currentPath,
	} = useContext(StartContext);

	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();

		// Verificar si el email ya existe en la base de datos
		const emailExists = await checkEmailExists(userData.email);

		if (emailExists) {
			// Mostrar un mensaje al usuario informando que el email ya está en uso
			toast.error('Email already exists. Please use a different email.');
		} else {
			// Si el email no existe, proceder con el registro
			try {
				const response = await fetch('http://localhost:3000/users', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(userData),
				});

				if (response.ok) {
					setDisplaySignUp(!displaySignUp);
					setDisplayLogin(!displayLogin);
					toast.success('Registered successfully');
					resetUserData();
					navigate(currentPath);
				} else {
					toast.error('Registration failed. Please try again.');
				}
			} catch (error) {
				toast.error(
					'An error occurred while registering. Please try again later.'
				);
			}
		}
	};
	const handleChange = e => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	// Función para verificar si el email ya existe en la base de datos
	const checkEmailExists = async email => {
		try {
			const response = await fetch(
				`http://localhost:3000/users?email=${email}`
			);
			const data = await response.json();

			return data.length > 0; // Devuelve true si el email existe en la base de datos
		} catch (error) {
			console.error('Error checking email:', error);
			return false;
		}
	};

	return (
		<Container>
			<div>
				<h2>Sign up </h2>
				<form className='loginForm' onSubmit={e => handleSubmit(e)}>
					<label htmlFor='username'>
						Username
						<input
							type='text'
							placeholder='Username'
							name='username'
							value={userData.username}
							onChange={e => handleChange(e)}
						/>
					</label>
					<label htmlFor='email'>
						Email
						<input
							type='email'
							placeholder='Email'
							name='email'
							value={userData.email}
							onChange={e => handleChange(e)}
						/>
					</label>
					<label htmlFor='password'>
						Password
						<input
							type='password'
							placeholder='Password'
							name='password'
							value={userData.password}
							onChange={e => handleChange(e)}
						/>
					</label>
					<button className='login-btn' type='submit'>
						Create User
					</button>
				</form>
			</div>
		</Container>
	);
}
