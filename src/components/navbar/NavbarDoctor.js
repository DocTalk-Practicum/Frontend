import React from 'react';
import './navbar.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function NavbarDoctor() {
	const handleLogout = () => {};
	return (
		<div>
			<div className='navbar' style={{ backgroundColor: '#219F94' }}>
				<input type='checkbox' id='nav-check' />
				<div className='nav-header'>
					<div className='nav-title'>
						<Link to='/'>
							<img width='70px' src={logo} alt='' />
						</Link>
					</div>
				</div>
				<div className='nav-btn'>
					<label htmlFor='nav-check'>
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>

				<div className='nav-links'>
					<Link to='/appointments/doctor'>Today's Schedule</Link>
					<Link to='/patientlist'>Patients</Link>
					<Link to='/'>References</Link>
					<Link to='/profile/doctor'>Profile</Link>
					<Link to='/' onClick={handleLogout}>
						Logout
					</Link>
				</div>
			</div>
		</div>
	);
}
