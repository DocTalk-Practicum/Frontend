import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavbarPatient from '../components/navbar/NavbarPatient';
import PatientAppointment from '../components/appointment/PatientAppointment';
import ProfilePatient from '../components/profile/ProfilePatient';
import DoctorList from '../components/list/DoctorList';
import BookAppointment from '../components/bookAppointment/BookAppointment';
import { UserProvider } from '../context/User.context';

export default function Patient() {
	return (
		<UserProvider>
			<ToastContainer />
			<NavbarPatient />
			<Routes>
				<Route path='/' element={<PatientAppointment />} />
				<Route path='/profile' element={<ProfilePatient />} />
				<Route path='/doctorlist' element={<DoctorList />} />
				<Route path='/bookAppointment/:id' element={<BookAppointment />} />
			</Routes>
		</UserProvider>
	);
}
