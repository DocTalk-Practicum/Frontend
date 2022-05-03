import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import imageSrc from '../../assets/images/patient-login.png';

export default function Signup() {
	const [isDoctor, setIsDoctor] = useState(false);
	const [files, setFiles] = useState([]);
	const [patientLogin, setPatientLogin] = useState({
		name: '',
		email: '',
		password: '',
		phn: 0,
		age: 0,
		gender: ''
	});

	const [doctorLogin, setDoctorLogin] = useState({
		speciality: '',
		clinicName: '',
		clinicAddress: '',
		clinicMap: '',
		description: ''
	});

	const handleSignup = async e => {
		e.preventDefault();
		try {
			if (isDoctor) {
				let formData = new FormData();
				for (let i = 0; i < files.length; i++) {
					formData.append(`files[${i}]`, files[i]);
				}
				console.log({ ...patientLogin, ...doctorLogin, ...formData });
				const res = await axios.post('/auth/doctorRegister', {
					...patientLogin,
					...doctorLogin
				});
				if (res.status === 200) {
					localStorage.setItem('doctalk', res.data.token);
					window.location.href = '/doctor';
					toast.success('Registered successfully', {
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined
					});
				}
			} else {
				const res = await axios.post('/auth/patientRegister', {
					...patientLogin
				});
				if (res.status === 200) {
					localStorage.setItem('doctalk', res.data.token);
					window.location.href = '/patient';
					toast.success('Registered successfully', {
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined
					});
				}
			}
		} catch (err) {
			console.log(err);
			toast.error('Register failed', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
		}
	};

	return (
		<div>
			<ToastContainer />
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
					onSubmit={e => handleSignup(e)}>
					<input
						type='text'
						name='name'
						placeholder='Name'
						onChange={e =>
							setPatientLogin({ ...patientLogin, name: e.target.value })
						}
					/>
					<input
						type='email'
						name='email_add'
						placeholder='Email Address'
						onChange={e =>
							setPatientLogin({ ...patientLogin, email: e.target.value })
						}
					/>
					<input
						type='number'
						name='phn'
						placeholder='Phone Number'
						onChange={e =>
							setPatientLogin({ ...patientLogin, phn: e.target.value })
						}
					/>
					<input
						type='number'
						name='age'
						id='age'
						placeholder='Age'
						onChange={e =>
							setPatientLogin({ ...patientLogin, age: e.target.value })
						}
					/>
					<input
						type='text'
						name='gender'
						id='gender'
						placeholder='Gender'
						onChange={e =>
							setPatientLogin({ ...patientLogin, gender: e.target.value })
						}
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						onChange={e =>
							setPatientLogin({ ...patientLogin, password: e.target.value })
						}
					/>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							alignContent: 'center'
						}}>
						<label style={{ width: '250px' }} htmlFor='is_doctor'>
							Are you a Doctor?
						</label>
						<input
							type='checkbox'
							style={{
								margin: '0px',
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
									onChange={e => setFiles(e.target.files[0])}
								/>
							</span>
							<textarea
								name='doc_desc'
								id='doc_desc'
								cols='30'
								rows='10'
								placeholder='Your Description'
								onChange={e =>
									setDoctorLogin({
										...doctorLogin,
										description: e.target.value
									})
								}></textarea>
							<span id='validproof'>
								<p>Validation Proof</p>
								<input
									type='file'
									name='validproof'
									id='validproofin'
									placeholder='Proof for validation'
									onChange={e => setFiles(e.target.files[0])}
								/>
							</span>
							<input
								type='text'
								name='speciality'
								id='speciality'
								placeholder="Your Specalities seperated by comma (',')"
								onChange={e =>
									setDoctorLogin({
										...doctorLogin,
										speciality: e.target.value
									})
								}
							/>
							<input
								type='text'
								name='clinic_name'
								id='clinic_name'
								placeholder='Your Clinic Name'
								onChange={e =>
									setDoctorLogin({
										...doctorLogin,
										clinicName: e.target.value
									})
								}
							/>
							<input
								type='text'
								name='clinic_address'
								id='clinic_address'
								placeholder='Your Clinic Address'
								onChange={e =>
									setDoctorLogin({
										...doctorLogin,
										clinicAddress: e.target.value
									})
								}
							/>
							<input
								type='text'
								name='clinic_loc_link'
								id='clinic_loc_link'
								placeholder='Your Clinic Maps Link'
								onChange={e =>
									setDoctorLogin({
										...doctorLogin,
										clinicMap: e.target.value
									})
								}
							/>
						</div>
					)}

					<button type='submit'>Sign Up</button>
					<p className='message'>
						Already registered?
						<Link to='/'> Sign In</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
