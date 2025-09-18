import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routeConfig";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

// Import layouts
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import { ForgotPassword, Login, Signup } from "../pages/auth";

// Import pages
import Unauthorized from "../pages/Unauthorized";

// Create placeholder components for routes that don't exist yet
const Profile = () => (
  <div className="container mt-4">
    <h2>Profile Page</h2>
    <p>This is the user profile page.</p>
  </div>
);

const NotFound = () => (
  <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        <h1 className="display-1">404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <Navigate to={ROUTES.DASHBOARD} />
      </div>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes with Auth Layout */}
      <Route
        path={ROUTES.LOGIN}
        element={
          <PublicRoute>
            <AuthLayout>
              <Login />
            </AuthLayout>
          </PublicRoute>
        }
      />

      <Route
        path={ROUTES.SIGNUP}
        element={
          <PublicRoute>
            <AuthLayout>
              <Signup />
            </AuthLayout>
          </PublicRoute>
        }
      />

      <Route
        path={ROUTES.FORGOT_PASSWORD}
        element={
          <PublicRoute>
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          </PublicRoute>
        }
      />

      {/* Protected Routes with Dashboard Layout */}

      <Route
        path={ROUTES.PROFILE}
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* Special Routes */}
      <Route path={ROUTES.UNAUTHORIZED} element={<Unauthorized />} />

      {/* Default redirect */}
      <Route
        path={ROUTES.ROOT}
        element={<Navigate to={ROUTES.LOGIN} replace />}
      />

      {/* Catch all route - 404 */}
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
