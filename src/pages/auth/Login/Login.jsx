import React, { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "../../../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUserData, setToken } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "admin@robotmaker.com", // Pre-filled for demo
    password: "admin123", // Pre-filled for demo
    rememberMe: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Mock API call - replace with actual API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock authentication logic
      if (
        formData.email === "admin@robotmaker.com" &&
        formData.password === "admin123"
      ) {
        const mockUser = {
          id: 1,
          email: formData.email,
          name: "Admin User",
          role: "admin",
        };
        const mockToken = "mock-jwt-token-" + Date.now();

        // Update auth store
        setUserData(mockUser);
        setToken(mockToken);

        // Redirect to the page user was trying to access, or profile
        const from = location.state?.from || "/profile";
        navigate(from, { replace: true });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      setError(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-0 shadow-lg">
      <Card.Body className="p-4">
        {error && (
          <Alert variant="danger" dismissible onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        <Alert variant="info" className="mb-3">
          <strong>Demo Credentials:</strong>
          <br />
          Email: admin@robotmaker.com
          <br />
          Password: admin123
        </Alert>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <div className="position-relative">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="ps-5"
              />
              <i className="fas fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <div className="position-relative">
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="ps-5"
              />
              <i className="fas fa-lock position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
            </div>
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <Form.Check
              type="checkbox"
              name="rememberMe"
              label="Remember me"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <Link to="/forgot-password" className="text-decoration-none">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-100 mb-3"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>

          <div className="text-center">
            <span className="text-muted">Don't have an account? </span>
            <Link to="/signup" className="text-decoration-none fw-bold">
              Sign up here
            </Link>
          </div>
        </Form>

        {/* Social Login */}
        <div className="mt-4">
          <div className="text-center mb-3">
            <span className="text-muted small">Or continue with</span>
          </div>
          <div className="d-grid gap-2">
            <Button
              variant="outline-dark"
              className="d-flex align-items-center justify-content-center"
            >
              <i className="fab fa-google me-2"></i>
              Continue with Google
            </Button>
            <Button
              variant="outline-primary"
              className="d-flex align-items-center justify-content-center"
            >
              <i className="fab fa-github me-2"></i>
              Continue with GitHub
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Login;
