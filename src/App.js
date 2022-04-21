import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
