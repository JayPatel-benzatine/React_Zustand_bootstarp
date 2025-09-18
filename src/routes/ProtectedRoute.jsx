import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isLogin, user } = useAuthStore();
  const location = useLocation();

  // If not authenticated, redirect to login with return URL
  if (!isLogin) {
    return (
      <Navigate 
        to="/login" 
        state={{ from: location.pathname }} 
        replace 
      />
    );
  }

  // If a specific role is required, check user role
  if (requiredRole && user?.role !== requiredRole) {
    return (
      <Navigate 
        to="/unauthorized" 
        replace 
      />
    );
  }

  // User is authenticated and has required role (if any)
  return children;
};

export default ProtectedRoute;
