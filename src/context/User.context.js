import axios from 'axios';
import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState
} from 'react';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isUserLoading, setIsUserLoading] = useState(true);

	const loadUser = useCallback(async () => {
		const data = JSON.parse(localStorage.getItem('doctalk'));
		// console.log(data);
		const decodedJwt = jwt_decode(data.token);

		const url = data.isPatient
			? `/patient/getPatientById/${decodedJwt.id}`
			: `/doctor/getDoctorById/${decodedJwt.id}`;

		if (data) {
			await axios
				.get(url, {
					headers: {
						Authorization: `Bearer ${data.token}`
					}
				})
				.then(result => {
					console.log(result.data.user);
					setUser(result.data.user);
					setIsUserLoading(false);
				})
				.catch(err => {
					toast.error('Error occured', err);
					console.log(err);
					setIsUserLoading(false);
				});
		} else {
			setIsUserLoading(false);
			setUser(null);
		}
	}, []);

	useEffect(() => {
		loadUser();
	}, [loadUser]);

	return (
		<UserContext.Provider value={{ user, isUserLoading, setUser, loadUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
