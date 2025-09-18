import React, { useState } from "react";
import { Form, Button, Alert, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowAlert(true);
      // Handle signup logic here
    }, 1000);
  };

  return (
    <Card className="border-0 shadow-lg">
        <Card.Body className="p-4">
          {showAlert && (
            <Alert
              variant="success"
              dismissible
              onClose={() => setShowAlert(false)}
            >
              Account created successfully! Please check your email for
              verification.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      isInvalid={!!errors.firstName}
                      className="ps-5"
                    />
                    <i className="fas fa-user position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      isInvalid={!!errors.lastName}
                      className="ps-5"
                    />
                    <i className="fas fa-user position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  isInvalid={!!errors.email}
                  className="ps-5"
                />
                <i className="fas fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
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
                  placeholder="Create a password"
                  isInvalid={!!errors.password}
                  className="ps-5"
                />
                <i className="fas fa-lock position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </div>
              <Form.Text className="text-muted">
                Password must be at least 8 characters long
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  isInvalid={!!errors.confirmPassword}
                  className="ps-5"
                />
                <i className="fas fa-lock position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Check
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                isInvalid={!!errors.agreeToTerms}
                label={
                  <span>
                    I agree to the{" "}
                    <Link to="/terms" className="text-decoration-none">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-decoration-none">
                      Privacy Policy
                    </Link>
                  </span>
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.agreeToTerms}
              </Form.Control.Feedback>
            </Form.Group>

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
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>

            <div className="text-center">
              <span className="text-muted">Already have an account? </span>
              <Link to="/login" className="text-decoration-none fw-bold">
                Sign in here
              </Link>
            </div>
          </Form>

          {/* Social Signup */}
          <div className="mt-4">
            <div className="text-center mb-3">
              <span className="text-muted small">Or sign up with</span>
            </div>
            <div className="d-grid gap-2">
              <Button
                variant="outline-dark"
                className="d-flex align-items-center justify-content-center"
              >
                <i className="fab fa-google me-2"></i>
                Sign up with Google
              </Button>
              <Button
                variant="outline-primary"
                className="d-flex align-items-center justify-content-center"
              >
                <i className="fab fa-github me-2"></i>
                Sign up with GitHub
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
  );
};

export default Signup;
