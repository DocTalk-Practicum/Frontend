import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavbarDoctor from '../components/navbar/NavbarDoctor';
import DoctorAppointment from '../components/appointment/DoctorAppointment';
import ProfileDoctor from '../components/profile/ProfileDoctor';
import PatientList from '../components/list/PatientList';

export default function Doctor() {
	return (
		<>
			<ToastContainer />
			<NavbarDoctor />
			<Routes>
				<Route path='/' element={<DoctorAppointment />} />
				<Route path='/profile' element={<ProfileDoctor />} />
				<Route path='/patientlist' element={<PatientList />} />
			</Routes>
		</>
	);
}