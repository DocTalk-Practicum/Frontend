import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/patient-login.png';

export default function Login() {
	return (
		<div>
			<div className='container'>
				<div className='info'>
					<h1>Login</h1>
				</div>
			</div>
			<div className='form'>
				<div className='thumbnail'>
					<img src={loginImage} alt='patient' />
				</div>
				<form className='login-form'>
					<input type='email' name='email' placeholder='Email Address' />
					<input type='password' name='password' placeholder='Password' />
					<button type='submit'>Login</button>
					<p className='message'>
						Not registered?
						<Link to='/signup'> Create an account</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
