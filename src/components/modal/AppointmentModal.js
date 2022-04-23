import React from 'react';
import './modal.css'

export default function AppointmentModal({ appointment }) {
	return (
		<div>
			<div
				className='modal fade'
				id='AppointmentModal'
				tabIndex='-1'
				aria-labelledby='AppointmentModalLabel'
				aria-hidden='true'>
				<div className='modal-dialog modal-lg'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='AppointmentModalLabel'>
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
								<div className='col-md-12'>
									<div className='status p-3'>
										<table
											className='table table-borderless'
											style={{ tableLayout: 'fixed' }}>
											<tbody>
												<tr>
													<td id='td_info_appointment_id'>
														<div className='d-flex flex-column'>
															{' '}
															<span className='heading d-block'>
																Appointment ID
															</span>{' '}
															<span
																className='subheadings'
																id='info_appointment_id'>
																fasdfasdfasdf
															</span>{' '}
														</div>
													</td>
													<td id='td_info_suggesting_doc' hidden>
														<div className='d-flex flex-column'>
															{' '}
															<span className='heading d-block'>
																Suggesting Doctor
															</span>{' '}
															<span
																className='subheadings'
																id='info_suggesting_doc'>
																fasdfasdfasdf
															</span>{' '}
														</div>
													</td>
													<td>
														<div className='d-flex flex-column'>
															{' '}
															<span className='heading d-block'>Date</span>{' '}
															<span
																className='subheadings'
																id='info_appointment_date'>
																2022-12-12
															</span>{' '}
														</div>
													</td>
													<td>
														<div className='d-flex flex-column'>
															{' '}
															<span className='heading d-block'>Time</span>{' '}
															<span
																className='subheadings'
																id='info_appointment_time'>
																00:00
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
																Reason For Visit
															</span>{' '}
															<span
																className='subheadings'
																id='info_visiting_reason'>
																dfasdfasddfasdfasdfasdfasdfasdfadsfasdfnsdfhjasdh
																f jasdfhjaskdfakjhihjkhhihjjsdlfjl
															</span>{' '}
														</div>
													</td>
												</tr>
												<tr id='tr_info_side_note' hidden>
													<td>
														<div className='d-flex flex-column'>
															{' '}
															<span className='heading d-block'>
																Side Note
															</span>{' '}
															<span className='subheadings' id='info_side_note'>
																dfasdfasddfasdfasdfasdfasdfasdfadsfasdfnsdfhjasdh
																f jasdfhjaskdfakjhihjkhhihjjsdlfjl
															</span>{' '}
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div id='extra_documents_space'>
															<span className='heading d-block'>
																Extra Documents
															</span>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div id='tr_documents_space'>
															<span className='heading d-block'>Test Reports</span>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div id='presc_documents_space'>
															<span className='heading d-block'>Prescriptions</span>
														</div>
													</td>
												</tr>
												<tr>
													<form enctype='multipart/form-data'>
														<input
															type='text'
															name='app_id'
															id='app_id'
															hidden
														/>
														<td>
															<div className='d-flex flex-column'>
																{' '}
																<span className='heading d-block'>
																	Upload Prescription
																</span>{' '}
																<input
																	type='file'
																	name='prescription_docs'
																	id='prescription_docs'
																	multiple
																/>
															</div>
														</td>
														<td>
															<div className='d-flex flex-column'>
																{' '}
																<span className='heading d-block'>
																	Upload Test Reports
																</span>{' '}
																<input
																	type='file'
																	name='test_reports'
																	id='test_reports'
																	multiple
																/>
															</div>
														</td>
														<td>
															<div className='d-flex flex-column'>
																{' '}
																<button
																	className='btn btn-outline-success'
																	style={{
																		fontSize: '17px !important',
																		width: '220px'
																	}}
																	type='submit'>
																	Upload Docs
																</button>
															</div>
														</td>
													</form>
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