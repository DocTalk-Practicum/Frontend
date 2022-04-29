import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProfileProvider } from './context/Profile.context';

import { PublicRoute } from './helpers/routes';
import LandingPage from './pages/LandingPage';

// import DoctorAppointment from './components/appointment/DoctorAppointment';
// import PatientAppointment from './components/appointment/PatientAppointment';
// import BookAppointment from './components/bookAppointment/BookAppointment';
// import DoctorList from './components/list/DoctorList';
// import PatientList from './components/list/PatientList';
import Login from './components/landingPage/login/Login';
import { UserProvider } from './context/User.context';
// import ProfileDoctor from './components/profile/ProfileDoctor';
// import ProfilePatient from './components/profile/ProfilePatient';
// import Signup from './components/signup/Signup';

function App() {
	return (
		<>
			<BrowserRouter>
				<ProfileProvider>
					<UserProvider>
						<Routes>
							<Route
								exact
								path='/'
								element={
									<PublicRoute>
										<LandingPage />
									</PublicRoute>
								}
							/>

							{/* <Route path='/login' element={<Login />} /> */}
							{/*<Route path='/signup' element={<Signup />} />
						<Route path='/profile/patient' element={<ProfilePatient />} />
						<Route path='/profile/doctor' element={<ProfileDoctor />} />
						<Route path='/patientlist' element={<PatientList />} />
						<Route path='/doctorlist' element={<DoctorList />} />
						<Route
							path='/appointments/doctor'
							element={<DoctorAppointment />}
						/>
						<Route
							path='/appointments/patient'
							element={<PatientAppointment />}
						/>
						<Route path='/bookAppointment/:id' element={<BookAppointment />} /> */}
						</Routes>
					</UserProvider>
				</ProfileProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
