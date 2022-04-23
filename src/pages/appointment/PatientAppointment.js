/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import NavbarPatient from '../../components/navbar/NavbarPatient';
import imgSrc from '../../assets/images/user.png';
import DoctorModal from '../../components/modal/DoctorModal';

export default function PatientAppointment() {
	const [appointments, setAppointments] = useState([
		{
			doctor: {
				name: 'test',
				email: 'test@gmail.com'
			},
			slot_time: '12:00',
			slot_date: '12-12-2022',
			id: '2213123413',
			room_id: '234324234'
		}
	]);

	const [modalDoctor, setModalDoctor] = useState({});
	return (
		<div>
			<NavbarPatient />
			<DoctorModal doctor={modalDoctor} />
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
										<th scope='col'>Doctor Name</th>
										<th scope='col'>Date</th>
										<th scope='col'>Time</th>
										<th scope='col'>Details</th>
										<th scope='col'>Meeting Link</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{appointments.map((appointment, index) => (
										<tr key={index}>
											<td className='px-6 py-4'>
												<div className='flex items-center space-x-3'>
													<div className='inline-flex w-10 h-10'>
														{' '}
														<img
															className='w-10 h-10 object-cover rounded-full'
															alt='User avatar'
															src={imgSrc}
														/>{' '}
													</div>
													<div>
														<p> {appointment.doctor.name} </p>
														<p className='text-gray-500 text-sm font-semibold tracking-wide'>
															{' '}
															{appointment.doctor.email}
														</p>
													</div>
												</div>
											</td>
											<td className='px-6 py-4'>
												<p className=''> {appointment.slot_date} </p>
											</td>
											<td className='px-6 py-4'>
												<p className=''> {appointment.slot_time} </p>
											</td>
											<td className='px-6 py-4 text-center'>
												{' '}
												<a
													data-bs-toggle='modal'
													data-bs-target='#exampleModal'
													style={{ color: '#219F94' }}
													href=''
													onClick={() => setModalDoctor(appointment.doctor)}>
													View
												</a>
											</td>
											<td className='px-6 py-4 text-center'>
												{' '}
												<a
													className='text-current'
													target='_blank'
													href='/room/{{appointment.room_id}}'
													style={{ color: '#219F94' }}>
													Join
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
