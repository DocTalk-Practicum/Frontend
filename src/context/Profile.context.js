/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useContext, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
	const [profile, setProfile] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const data = JSON.parse(localStorage.getItem('doctalk'));
	useEffect(() => {
		if (data) {
			// console.log(data.token);
			const decodedJwt = jwt_decode(data.token);
			// console.log(decodedJwt);
			if (Date.now() >= decodedJwt.exp * 1000) {
				// console.log(false);
				localStorage.removeItem('doctalk');
				window.location.href('/');
			} else {
				// console.log(false);
				const userData = {
					userId: decodedJwt.id,
					isPatient: data.isPatient
				};
				// console.log(userData);

				setProfile(userData);
			}
			setIsLoading(false);
		} else {
			setProfile(null);
			setIsLoading(false);
		}
	}, []);

	return (
		<ProfileContext.Provider value={{ isLoading, profile, setProfile }}>
			{children}
		</ProfileContext.Provider>
	);
};

export const useProfile = () => useContext(ProfileContext);
