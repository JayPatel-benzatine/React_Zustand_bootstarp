// Route configuration for the application
export const ROUTES = {
  // Public routes
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  UNAUTHORIZED: "/unauthorized",

  // Protected routes
  PROFILE: "/profile",

  // Default routes
  ROOT: "/",
  NOT_FOUND: "*",
};

// Route metadata for navigation and permissions
export const ROUTE_CONFIG = {
  [ROUTES.LOGIN]: {
    title: "Login",
    isPublic: true,
    showInNav: false,
  },
  [ROUTES.SIGNUP]: {
    title: "Sign Up",
    isPublic: true,
    showInNav: false,
  },
  [ROUTES.FORGOT_PASSWORD]: {
    title: "Forgot Password",
    isPublic: true,
    showInNav: false,
  },
  [ROUTES.UNAUTHORIZED]: {
    title: "Unauthorized",
    isPublic: true,
    showInNav: false,
  },

  [ROUTES.PROFILE]: {
    title: "Profile",
    isPublic: false,
    showInNav: true,
    icon: "fas fa-user",
  },
};

// Helper functions
export const getRouteConfig = (path) => {
  return ROUTE_CONFIG[path] || {};
};

export const getPublicRoutes = () => {
  return Object.keys(ROUTE_CONFIG).filter(
    (route) => ROUTE_CONFIG[route].isPublic
  );
};

export const getProtectedRoutes = () => {
  return Object.keys(ROUTE_CONFIG).filter(
    (route) => !ROUTE_CONFIG[route].isPublic
  );
};

export const getNavRoutes = () => {
  return Object.keys(ROUTE_CONFIG).filter(
    (route) => ROUTE_CONFIG[route].showInNav
  );
};

export const getAdminRoutes = () => {
  return Object.keys(ROUTE_CONFIG).filter(
    (route) => ROUTE_CONFIG[route].requiredRole === "admin"
  );
};
