/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useContext, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
	const navigate = useNavigate();
	const [profile, setProfile] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const token = localStorage.getItem('doctalk');

	useEffect(() => {
		if (token) {
			const decodedJwt = jwt_decode(token);
			// console.log(decodedJwt);
			if (Date.now() >= decodedJwt.exp * 1000) {
				// console.log(false);
				localStorage.removeItem('doctalk');
				navigate('/');
			} else {
				// console.log(false);
				const userData = {
					userId: decodedJwt.id
				};

				setProfile(userData);
			}
			setIsLoading(false);
		} else {
			setProfile(null);
			setIsLoading(false);
		}
	}, [token]);

	console.log(profile);

	return (
		<ProfileContext.Provider value={{ isLoading, profile, setProfile }}>
			{children}
		</ProfileContext.Provider>
	);
};

export const useProfile = () => useContext(ProfileContext);
