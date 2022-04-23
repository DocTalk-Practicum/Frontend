import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DoctorAppointment from './pages/appointment/DoctorAppointment';
import PatientAppointment from './pages/appointment/PatientAppointment';
import DoctorList from './pages/list/DoctorList';
import PatientList from './pages/list/PatientList';

import Login from './pages/login/Login';
import ProfileDoctor from './pages/profile/ProfileDoctor';
import ProfilePatient from './pages/profile/ProfilePatient';
import Signup from './pages/signup/Signup';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/profile/patient' element={<ProfilePatient />} />
					<Route path='/profile/doctor' element={<ProfileDoctor />} />
					<Route path='/patientlist' element={<PatientList />} />
					<Route path='/doctorlist' element={<DoctorList />} />
					<Route path='/appointments/doctor' element={<DoctorAppointment />} />
					<Route
						path='/appointments/patient'
						element={<PatientAppointment />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
