import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProfileProvider } from './context/Profile.context';
import { PublicRoute, PrivateRoute } from './helpers/routes';
import LandingPage from './pages/LandingPage';
import NotFound from './components/NotFound';
import Doctor from './pages/Doctor';
import Patient from './pages/Patient';
import Signup from './components/signup/Signup';
import { UserProvider } from './context/User.context';

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
							<Route
								exact
								path='/doctor/*'
								element={
									// <PrivateRoute>
									<Doctor />
									// </PrivateRoute>
								}
							/>
							<Route
								exact
								path='/patient/*'
								element={
									//<PrivateRoute>
									<Patient />
									//</PrivateRoute>
								}
							/>

							<Route path='/signup' element={<Signup />} />
							<Route path='*' element={<NotFound />}></Route>
						</Routes>
					</UserProvider>
				</ProfileProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
