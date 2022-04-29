/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import AppointmentModal from '../../components/modal/AppointmentModal';
import imgSrc from '../../assets/images/user.png';
import { Link } from 'react-router-dom';

export default function DoctorAppointment() {
	const [appointments, setAppointments] = useState([
		{
			user: {
				name: 'test',
				age: 19,
				email: 'test@gmail.com',
				phone: 12312498234
			},
			slot_time: '12:00',
			id: '2213123413',
			room_id: '234324234'
		}
	]);

	const [modalAppointment, setModalAppointment] = useState({});

	return (
		<>
			<AppointmentModal appointment={modalAppointment} />
			<div className='p-10 bg-surface-secondary'>
				<div className='container'>
					<div className='card'>
						<div className='card-header'>
							<h6>Appointments</h6>
						</div>
						<div className='table-responsive'>
							<table className='table table-hover table-nowrap'>
								<thead className='table-light'>
									<tr>
										<th scope='col'>Name</th>
										<th scope='col'>Age</th>
										<th scope='col'>Time</th>
										<th scope='col'>Email</th>
										<th scope='col'>Phone</th>
										<th scope='col'>Details</th>
										<th scope='col'>Meeting Link</th>
										<th scope='col'>Refer</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{appointments.map((appointment, index) => (
										<tr key={index}>
											<td data-label='Job Title'>
												{' '}
												<img
													alt='...'
													src={imgSrc}
													className='avatar avatar-sm rounded-circle me-2'
												/>{' '}
												<a className='text-heading font-semibold' href='#'>
													{' '}
													{appointment.user.name}{' '}
												</a>{' '}
											</td>
											<td data-label='Email'>
												{' '}
												<span>{appointment.user.age}</span>{' '}
											</td>
											<td data-label='Email'>
												{' '}
												<span>{appointment.slot_time}</span>{' '}
											</td>
											<td data-label='Phone'>
												{' '}
												<a className='text-current' href='#' onClick=''>
													{appointment.user.email}
												</a>{' '}
											</td>
											<td data-label='Lead Score'>
												{' '}
												<a
													className='text-current'
													href={{ tel: appointment.user.phone }}>
													{appointment.user.phone}
												</a>{' '}
											</td>
											<td data-label=''>
												{' '}
												<button
													data-bs-toggle='modal'
													data-bs-target='#AppointmentModal'
													className='btn btn'
													style={{
														fontSize: '12px',
														padding: '5px !important',
														backgroundColor: 'transparent !important',
														color: '#219F94'
													}}
													onClick={() => setModalAppointment(appointment)}>
													View
												</button>{' '}
											</td>
											<td data-label=''>
												{' '}
												<Link
													className='text-current'
													target='_blank'
													to={`/room/${appointment.room_id}`}
													style={{ color: '#219F94 !important' }}>
													Join
												</Link>{' '}
											</td>
											<td data-label=''>
												{' '}
												<Link
													className='text-current'
													to={`/referdoctors/${appointment.id}`}>
													<button
														className='btn btn'
														style={{
															fontSize: '10px;padding:5px !important',
															backgroundColor: '#C1DEAE !important'
														}}>
														Refer
													</button>
												</Link>{' '}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
