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
	} = useContext(StartContext);

	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		}).then(res => res.json());

		setDisplaySignUp(!displaySignUp);
		setDisplayLogin(!displayLogin);
		toast.success('registered successfully');
		resetUserData();
		navigate('/login');
	};
	const handleChange = e => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	return (
		<Container>
			<div>
				<h2>Sign up form </h2>
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
