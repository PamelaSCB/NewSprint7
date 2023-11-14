import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { StartContext } from '../../context/StartContext.jsx';

import { fetchUsers } from '../../libr/utils/fetchUsers.jsx';
import { Container } from './LoginStyled.jsx';
import { toast } from 'react-toastify';

export const Login = () => {
	const {
		userData,
		setUserData,
		displayLogin,
		setDisplayLogin,
		displaySignUp,
		setDisplaySignUp,
	} = useContext(StartContext);

	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const users = await fetchUsers();
			const userFound = users.find(user => user.email === userData.email);
			console.log('userFound', userFound);

			userFound !== undefined
				? fetch('http://localhost:3000/login', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(userData),
				  })
						.then(res => res.json())
						.then(data => {
							if (data === 'Incorrect password') {
								toast.error('Incorrect password');
							} else {
								setUserData({ ...userData, username: data.user.username });
								setDisplayLogin(!displayLogin);
								navigate('/startships');
							}
						})
				: setDisplaySignUp(!displaySignUp);
		} catch (error) {
			toast.error('Something went wrong');
		}
	};

	const handleChange = e => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	return (
		<Container>
			<div className='modal-body'>
				<h2>Login</h2>
				<form className='login-form' onSubmit={(e) => handleSubmit(e)}>
					<label>
						{' '}
						Email
						<input
							type='email'
							placeholder='Email'
							value={userData.email}
							name='email'
							onChange={(e) => handleSubmit(e)}
						></input>
					</label>
					<label>
						{' '}
						Password
						<input
							type='password'
							placeholder='Password'
							value={userData.password}
							name='password'
							onChange={(e) => handleSubmit(e)}
						></input>
					</label>
					<button className='login-button' type='submit'>
						Login
					</button>

					<p>If you want to have an account with us, sign up here</p>
					<button onClick={() => navigate('/signup')}>Sign Up</button>
				</form>
			</div>
		</Container>
	);
};
