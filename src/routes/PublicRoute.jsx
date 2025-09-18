import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const PublicRoute = ({ children, redirectTo = '/profile' }) => {
  const { isLogin } = useAuthStore();
  const location = useLocation();

  // If user is already authenticated, redirect to dashboard or specified route
  if (isLogin) {
    // Check if there's a return URL from the location state
    const from = location.state?.from || redirectTo;
    return <Navigate to={from} replace />;
  }

  // User is not authenticated, show the public route
  return children;
};

export default PublicRoute;
