import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import imageSrc from '../../assets/images/patient-login.png';

export default function Signup() {
	let [isDoctor, setIsDoctor] = useState(false);
	return (
		<div>
			<div className='containerSignup'>
				<div className='info'>
					<h1>SignUp</h1>
				</div>
			</div>
			<div className='form'>
				<div className='thumbnail'>
					<img src={imageSrc} alt='patient' />
				</div>
				<form
					className='register-form'
					id='signupForm'
					encType='multipart/form-data'>
					<input type='text' name='fname' placeholder='First Name' />
					<input type='text' name='lname' placeholder='Last Name' />
					<input type='email' name='email_add' placeholder='Email Address' />
					<input type='number' name='phn' placeholder='Phone Number' />
					<input type='number' name='age' id='age' placeholder='Age' />
					<input type='text' name='gender' id='gender' placeholder='Gender' />
					<input type='password' name='password' placeholder='Password' />
					<div>
						<label htmlFor='is_doctor'>Are you a Doctor?</label>
						<input
							type='checkbox'
							style={{
								width: '24% !important',
								paddingTop: '0px !important',
								marginTop: '2px !important'
							}}
							name='is_doctor'
							id='is_doctor'
							onChange={() => setIsDoctor(!isDoctor)}
						/>
					</div>
					{isDoctor && (
						<div>
							<span id='profile_pic'>
								<p>Profile picture</p>
								<input
									type='file'
									name='profile_pic'
									id='profile_picin'
									placeholder='Profile Picture'
								/>
							</span>
							<textarea
								name='doc_desc'
								id='doc_desc'
								cols='30'
								rows='10'
								placeholder='Your Description'></textarea>
							<span id='validproof'>
								<p>Validation Proof</p>
								<input
									type='file'
									name='validproof'
									id='validproofin'
									placeholder='Proof for validation'
								/>
							</span>
							<input
								type='text'
								name='speciality'
								id='speciality'
								placeholder="Your Specalities seperated by comma (',')"
							/>
							<input
								type='text'
								name='clinic_name'
								id='clinic_name'
								placeholder='Your Clinic Name'
							/>
							<input
								type='text'
								name='clinic_address'
								id='clinic_address'
								placeholder='Your Clinic Address'
							/>
							<input
								type='text'
								name='clinic_loc_link'
								id='clinic_loc_link'
								placeholder='Your Clinic Maps Link'
							/>
						</div>
					)}

					<button type='submit'>Sign Up</button>
					<p className='message'>
						Already registered?
						<Link to='/login'> Sign In</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
