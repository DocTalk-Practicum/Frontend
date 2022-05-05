import React from 'react';
import './navbar.css';
import logo from '../../assets/images/logo.png';
import { Link,useNavigate} from 'react-router-dom';

export default function NavbarDoctor() {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("doctalk");
		navigate("/");
	  };
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
					<Link to='/doctor'>Today's Schedule</Link>
					<Link to='/doctor/patientlist'>Patients</Link>
					<Link to='/doctor/references'>References</Link>
					<Link to='/doctor/profile'>Profile</Link>
					<Link to='/' onClick={handleLogout}>
						Logout
					</Link>
				</div>
			</div>
		</div>
	);
}
