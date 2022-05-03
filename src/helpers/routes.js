import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useUser } from './../context/User.context';
import { useProfile } from './../context/Profile.context';

export const AdminRoute = ({ ...routeProps }) => {
	const { user } = useUser();
	console.log(user);

	if (!user) {
		return <Navigate to='/' />;
	}
	return <Route {...routeProps} />;
};

export const PrivateRoute = ({ ...routeProps }) => {
	const { profile, isLoading } = useProfile();
	console.log(profile);

	if (isLoading && !profile) {
		return <div>Loading...</div>;
	}

	if (!profile && !isLoading) {
		return <Navigate to='/' />;
	}
	return <Route {...routeProps} />;
};

export const PublicRoute = ({ children }) => {
	const { profile, isLoading } = useProfile();
	
	if (profile && !isLoading && !profile.isPatient) {
		return <Navigate to='/doctor' />;
	} else if (profile && !isLoading && profile.isPatient) {
		return <Navigate to='/patient' />;
	}
	return <div>{children}</div>;
};
