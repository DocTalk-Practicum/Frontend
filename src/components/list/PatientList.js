import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PatientList() {
	const [patients, setPatients] = useState([
		{
			name: 'test',
			email: 'test@gmail.com',
			phone: '123414',
			age: '19',
			id: '1242352324245'
		}
	]);

	return (
		<>
			<div className='container'>
				<div
					className='row header'
					style={{ textAlign: 'center', color: 'green' }}>
					<h3 style={{ color: '#219F94' }}>All Patients</h3>
				</div>
				<table
					id='example'
					className='table table-striped table-bordered'
					style={{ width: '100%' }}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Age</th>
							<th>View Details</th>
						</tr>
					</thead>
					<tbody>
						{patients.map((patient, index) => {
							return (
								<tr>
									<td>{index + 1}</td>
									<td>{patient.name}</td>
									<td>{patient.email}</td>
									<td>{patient.phone}</td>
									<td>{patient.age}</td>
									<td>
										{' '}
										<Link to={`/appointments/${patient.id}`}>
											{' '}
											<button
												style={{
													backgroundColor: '#C1DEAE',
													border: 'none',
													borderRadius: '2px'
												}}>
												View
											</button>
										</Link>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}
