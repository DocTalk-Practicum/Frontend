import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorModal from '../../components/modal/DoctorModal';

export default function DoctorList() {
	const [doctors, setDoctors] = useState([
		{
			name: 'test',
			email: 'test@gmail.com',
			id: '1242352324245',
			photoUrl: ''
		}
	]);
	const [modalDoctor, setModalDoctor] = useState({});

	return (
		<>
			<DoctorModal doctor={modalDoctor} />
			<div className='container mt-5 mb-5'>
				<div className='d-flex justify-content-between mb-3'>
					{' '}
					<span>Doctors</span>{' '}
				</div>
				<div className='row g-2' id='doctor_table_row'>
					{doctors.map((doctor, index) => (
						<div className='col-md-3' key={index}>
							<div className='card p-2 py-3 text-center'>
								<div className='img mb-2'>
									{' '}
									<img
										src={doctor.photoUrl}
										width='70'
										style={{
											minWidth: '80px',
											minHeight: '80px',
											maxWidth: '80px',
											maxHeight: '80px'
										}}
										className='rounded-circle'
										alt=''
									/>{' '}
								</div>
								<h5 className='mb-0'>{doctor.name}</h5>
								<small>{doctor.doc_speciality}</small>
								<div className='mt-4 apointment'>
									{' '}
									<button
										data-bs-toggle='modal'
										data-bs-target='#exampleModal'
										onClick={() => setModalDoctor(doctor)}
										className='btn'
										style={{ backgroundColor: '#C1DEAE' }}>
										View Details
									</button>{' '}
								</div>
								<div className='mt-4 apointment'>
									{' '}
									<Link to={`/patient/bookappointment/${doctor.id}`}>
										<button
											className='btn btn'
											style={{ backgroundColor: '#C1DEAE' }}>
											Book Appointment
										</button>{' '}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
