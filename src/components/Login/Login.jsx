import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StartContext } from '../../context/StartContext.jsx';

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
		currentPath,
	} = useContext(StartContext);

	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		fetch('http://localhost:3000/login', {
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
					navigate(currentPath);
				}
			});
	};

	const handleChange = e => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	return (
		<Container>
			<div className='modal-body'>
				<h2>Login</h2>
				<form className='login-form' onSubmit={e => handleSubmit(e)}>
					<label htmlFor='email'>
						Email
						<input
							type='email'
							placeholder='Email'
							name='email'
							value={userData.email}
							onChange={e => handleChange(e)}
						></input>
					</label>
					<label htmlFor='password'>
						Password
						<input
							type='password'
							placeholder='Password'
							value={userData.password}
							name='password'
							onChange={e => handleChange(e)}
						/>
					</label>
					<button className='login-button' type='submit'>
						Login
					</button>
				</form>
				<div className='signup-form'>
					<p>If you want to have an account with us, click in the button :</p>
					<button onClick={() => navigate('/signup')}>Sign Up</button>
				</div>
			</div>
		</Container>
	);
};
