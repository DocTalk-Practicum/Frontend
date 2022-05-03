import React, { useState } from 'react';
import './bookAppt.css';
import { useParams } from 'react-router-dom';

export default function BookAppointment() {
	const { id } = useParams();
  const {formData, setFormData} = useState({
    
  })
	return (
		<div>
			<div className='contact_form'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-10 offset-lg-1'>
							<div className='contact_form_container'>
								<div className='contact_form_title'>Book Appointment</div>
								<form id='appointment_form' enctype='multipart/form-data'>
									<div className='contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between'>
										<input
											type='date'
											id='appointment_date'
											name='appointment_date'
											className='contact_form_name input_field'
											placeholder='Date'
											required='required'
											data-error='Date is required.'
										/>
										<input
											type='time'
											id='appointment_time'
											name='appointment_time'
											className='contact_form_email input_field'
											placeholder='Time'
											required='required'
											data-error='Time is required.'
										/>
										<input
											type='text'
											id='appointment_doctor'
											className='contact_form_phone input_field'
											name='appointment_doctor'
											value={id}
											placeholder='Select Doctor'
										/>
									</div>
									<div className='contact_form_text'>
										{' '}
										<textarea
											id='appointment_message'
											className='text_field contact_form_message'
											name='appointment_message'
											rows='4'
											placeholder='Describe your reason for visit'
											required='required'
											data-error='Please, write the reason'></textarea>{' '}
									</div>
									<div style={{ paddingTop: '20px' }}>
										<div className='card mb-30'>
											<div className='card-body'>
												<h5 className='card-title'>Upload Medical Files</h5>
												<input
													type='file'
													style={{ width: '70%', height: '100%' }}
													className='contact_form_name input_field btn btn-sm'
													name='extra_documents'
													id='extra_documents'
													multiple
												/>
											</div>
										</div>
									</div>
									<div className='contact_form_button'>
										{' '}
										<button
											type='submit'
											className='button contact_submit_button'>
											Book
										</button>{' '}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className='panel'></div>
			</div>
		</div>
	);
}
