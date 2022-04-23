import React from 'react';
import './popup.css';

export default function DoctorModal({ doctor }) {
	console.log(doctor);
	return (
		<div
			className='modal fade'
			id='exampleModal'
			tabIndex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div className='modal-dialog modal-lg modal-fullscreen-lg-down'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Doctors Details
						</h5>{' '}
						<button
							type='button'
							className='close btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'>
							{' '}
							<span aria-hidden='true'>
								<i className='fa fa-close'></i>
							</span>{' '}
						</button>
					</div>
					<div className='modal-body'>
						<div className='row g-0' id='main_modal_part'>
							<div className='col-md-8 border-right'>
								<div className='status p-3'>
									<table className='table table-borderless'>
										<tbody>
											<tr>
												<td>
													<div className='d-flex flex-column'>
														{' '}
														<span className='heading d-block'>
															Clinic Name
														</span>{' '}
														<span className='subheadings' id='info_clinic_name'>
															Cairo Hospital
														</span>{' '}
													</div>
												</td>
												<td>
													<div className='d-flex flex-column'>
														{' '}
														<span className='heading d-block'>
															Speciality
														</span>{' '}
														<span className='subheadings' id='info_speciality'>
															Ear, nose, throat
														</span>{' '}
													</div>
												</td>
											</tr>
											<tr></tr>
											<tr>
												<td>
													<div className='d-flex flex-column'>
														{' '}
														<span className='heading d-block'>
															Clinic Address
														</span>{' '}
														<span
															className='subheadings'
															id='info_clinic_address'>
															52, Maria Block, Victoria Road, CA USA
														</span>{' '}
													</div>
												</td>
												<td colSpan='2'>
													<div className='d-flex flex-column'>
														{' '}
														<span className='heading d-block'>
															Doctor Description
														</span>{' '}
														<span className='subheadings' id='info_doc_desc'>
															Lorem ipsum is placeholder text commonly used in
															the graphic, print.
														</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className='d-flex flex-column'>
														{' '}
														<span className='heading d-block'>
															Direction
														</span>{' '}
														<span className='d-block subheadings'>
															Get direction by using
														</span>{' '}
														<span className='d-flex flex-row'>
															{' '}
															<a href='/' id='info_clinic_loc' target='_blank'>
																{' '}
																<img
																	src='https://img.icons8.com/color/100/000000/google-maps.png'
																	className='rounded'
																	width='30'
																	alt=''
																/>
															</a>
														</span>{' '}
													</div>
												</td>
											</tr>
										</tbody>
									</table>
									<div id='extra_documents_space'>
										<span className='heading d-block'>Extra Documents</span>
									</div>
									<div id='tr_documents_space'>
										<span className='heading d-block'>Test Reports</span>
									</div>
									<div id='presc_documents_space'>
										<span className='heading d-block'>Prescriptions</span>
									</div>
								</div>
							</div>
							<div className='col-md-4'>
								<div className='p-2 text-center'>
									<div className='profile'>
										{' '}
										<img
											id='info_profile_pic'
											src='https://i.imgur.com/VfRSLTm.jpg'
											width='100'
											style={{ height: '100px' }}
											className='rounded-circle img-thumbnail'
											alt=''
										/>{' '}
										<span
											className='d-block mt-3 font-weight-bold'
											id='info_doc_name'>
											Dr. Samsung Philip.
										</span>{' '}
									</div>
									<div className='about-doctor'>
										<table className='table table-borderless'>
											<tbody>
												<tr>
													<td>
														<div className='d-flex flex-column'>
															{' '}
															<span className='heading d-block'>
																Doctor ID
															</span>{' '}
															<span
																className='subheadings'
																style={{ fontSize: '8px' }}
																id='info_doc_id'>
																1706200
															</span>{' '}
														</div>
													</td>
													<td>
														<div className='d-flex flex-column'>
															{' '}
															<span className='heading d-block'>
																Phone No
															</span>{' '}
															<span className='subheadings' id='info_doc_phn'>
																7276775259
															</span>{' '}
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className='d-flex flex-column'>
															{' '}
															<span className='heading d-block'>
																Email
															</span>{' '}
															<span className='subheadings' id='info_doc_email'>
																nikhilsmankani@gmail.com
															</span>{' '}
														</div>
													</td>
													<td></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
