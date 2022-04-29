import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useUser } from './../context/User.context';
import { useProfile } from './../context/Profile.context';

export const AdminRoute = ({ ...routeProps }) => {
	const { user } = useUser();

	if (user && !user.role) {
		return <Navigate to='/' />;
	}
	return <Route {...routeProps} />;
};

export const PrivateRoute = ({ ...routeProps }) => {
	const { profile, isLoading } = useProfile();

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
	const { user } = useUser();

	if (isLoading && !profile) {
		return <div>Loading....</div>;
	}
	if (profile && !isLoading && user && user.role === 'doctor') {
		return <Navigate to='/doctor' />;
	} else if (profile && !isLoading && user && user.role === 'patient') {
		return <Navigate to='/patient' />;
	}
	return <div>{children}</div>;
};
