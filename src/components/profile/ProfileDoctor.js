import React, { useState } from 'react';
import './profile.css';
import docImg from '../../assets/images/doc_profle.png';
import NavbarDoctor from '../../components/navbar/NavbarDoctor';

export default function ProfileDoctor() {
	const [doctor, setDoctor] = useState({
		name: 'test',
		email: 'test@gmail.com',
		phone: '1239281376',
		doc_clinic_name: 'abc clinic',
		doc_speciality: 'heart',
		doc_desc: 'weuihrywejkinfbrui3ergfguieghrfuih',
		doc_clinic_address: 'abc street delhi',
		doc_clinic_loc_link: 'wefhwejkifbnerwuihfuierwhf'
	});
	return (
		<div>
			<NavbarDoctor />
			<div className='container rounded bg-white mt-5 mb-5'>
				<div className='row'>
					<div className='col-md-3 border-right'>
						<div className='d-flex flex-column align-items-center text-center p-3 py-5'>
							<img
								className='rounded-circle mt-5'
								width='150px'
								src={docImg}
								alt=''
							/>
							<span className='font-weight-bold'>{doctor.name}</span>
							<span className='text-black-50'>{doctor.email}</span>
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
								onclick='download_public_key()'>
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
								<div className='row mt-2'>
									<div className='col-md-6'>
										<label className='labels'>Name</label>
										<input
											type='text'
											className='form-control'
											placeholder='name'
											name='name_field'
											value={doctor.name}
											onChange={e =>
												setDoctor({ ...doctor, name: e.target.value })
											}
										/>
									</div>
									<div className='col-md-6'>
										<label className='labels'>Mobile Number</label>
										<input
											type='text'
											className='form-control'
											name='phone_field'
											value={doctor.phone}
											onChange={e =>
												setDoctor({ ...doctor, phone: e.target.value })
											}
										/>
									</div>
								</div>
								<div className='row mt-2'>
									<div className='col-md-6'>
										<label className='labels'>Clinic Name</label>
										<input
											type='text'
											className='form-control'
											name='clinic_name_field'
											value={doctor.doc_clinic_name}
											onChange={e =>
												setDoctor({
													...doctor,
													doc_clinic_name: e.target.value
												})
											}
										/>
									</div>
								</div>
								<div className='col-md-12'>
									<label className='labels'>Speciality</label>
									<input
										type='text'
										className='form-control'
										name='speciality_field'
										value={doctor.doc_speciality}
										onChange={e =>
											setDoctor({ ...doctor, doc_speciality: e.target.value })
										}
									/>
								</div>
								<div className='col-md-12'>
									<label className='labels'>Description</label>
									<textarea
										className='form-control'
										name='desc_field'
										cols='10'
										rows='4'
										onChange={e =>
											setDoctor({ ...doctor, doc_desc: e.target.value })
										}
										value={doctor.doc_desc}></textarea>
								</div>

								<div className='col-md-12'>
									<label className='labels'>Clinic Address</label>
									<textarea
										className='form-control'
										name='clinic_address_field'
										cols='10'
										rows='4'
										onChange={e =>
											setDoctor({
												...doctor,
												doc_clinic_address: e.target.value
											})
										}
										value={doctor.doc_clinic_address}></textarea>
								</div>

								<div className='col-md-6'>
									<label className='labels'>Clinic Location Link</label>
									<input
										type='text'
										className='form-control'
										name='clinic_loc_field'
										value={doctor.doc_clinic_loc_link}
										onChange={e =>
											setDoctor({
												...doctor,
												doc_clinic_loc_link: e.target.value
											})
										}
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
							<form id='pvtkeyform'>
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
		</div>
	);
}
