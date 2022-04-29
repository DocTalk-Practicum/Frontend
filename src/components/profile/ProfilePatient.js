import React, { useState } from 'react';
import './profile.css';

export default function ProfilePatient() {
	const [user, setUser] = useState({
		name: 'test',
		email: 'test@gmail.com',
		gender: 'male',
		phone: '1239281376',
		age: '18'
	});
	return (
		<>
			<div className='container rounded bg-white mt-5 mb-5'>
				<div className='row'>
					<div className='col-md-3 border-right'>
						<div className='d-flex flex-column align-items-center text-center p-3 py-5'>
							<img
								className='rounded-circle mt-5'
								width='150px'
								src='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
								alt=''
							/>
							<span className='font-weight-bold'>{user.name}</span>
							<span className='text-black-50'>{user.email}</span>
							<span> </span>
						</div>
						{/* <div className='text-center'>
							<button
								className='btn btn-primary profile-button'
								type='button'
								data-bs-toggle='modal'
								data-bs-target='#passwordModal'>
								Download Private Key
							</button>
						</div>
						<div className='mt-2 text-center'>
							<button
								className='btn btn-primary profile-button'
								type='button'
								// onclick='download_public_key()'
							>
								Download Public Key
							</button>
						</div> */}
					</div>
					<div className='col-md-8 border-right'>
						<div className='p-3 py-5'>
							<div className='d-flex justify-content-between align-items-center mb-3'>
								<h4 className='text-right'>Profile Settings</h4>
							</div>
							<form>
								<div className='col-md-12'>
									<label className='labels'>Name</label>
									<input
										type='text'
										className='form-control'
										placeholder='name'
										name='name_field'
										value={user.name}
										onChange={e => setUser({ ...user, name: e.target.value })}
									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>Mobile Number</label>
									<input
										type='text'
										className='form-control'
										name='phone_field'
										value={user.phone}
										onChange={e => setUser({ ...user, phone: e.target.value })}
									/>
								</div>

								<div className='col-md-6'>
									<label className='labels'>Age</label>
									<input
										type='number'
										className='form-control'
										name='age_field'
										value={user.age}
										onChange={e => setUser({ ...user, age: e.target.value })}
									/>
								</div>
								<div className='col-md-6'>
									<label className='labels'>Gender</label>
									<input
										type='text'
										className='form-control'
										name='gender_field'
										value={user.gender}
										onChange={e => setUser({ ...user, gender: e.target.value })}
									/>
								</div>

								<div className='mt-5 text-center'>
									<button
										className='btn btn-primary profile-button'
										type='submit'
										style={{
											backgroundColor: '#219F94 !important',
											color: 'white'
										}}>
										Save Profile
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div
				className='modal fade'
				id='passwordModal'
				tabIndex='-1'
				aria-labelledby='passwordModalLabel'
				aria-hidden='true'>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='passwordModalLabel'>
								Confirmation
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<form
								action="{% url 'get_private_key' %}"
								method='post'
								id='pvtkeyform'>
								<input
									type='password'
									style={{ width: '50%' }}
									name='confirm_password'
									id='confirm_password'
									placeholder='Provide password'
								/>
							</form>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'>
								Close
							</button>
							<button
								type='button'
								// onClick='submitpvtform()'
								className='btn btn-primary'>
								Download
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
