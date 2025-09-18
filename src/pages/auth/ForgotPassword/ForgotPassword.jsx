import React, { useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      // Handle forgot password logic here
    }, 1000);
  };

  if (showSuccess) {
    return (
      <Card className="border-0 shadow-lg">
          <Card.Body className="p-4 text-center">
            <div className="mb-4">
              <i className="fas fa-envelope-open fa-4x text-success"></i>
            </div>

            <h5 className="mb-3">Email Sent Successfully!</h5>

            <p className="text-muted mb-4">
              We've sent password reset instructions to <strong>{email}</strong>
              . Please check your inbox and follow the instructions to reset
              your password.
            </p>

            <div className="mb-4">
              <small className="text-muted">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  className="btn btn-link p-0 text-decoration-none"
                  onClick={() => setShowSuccess(false)}
                >
                  try again
                </button>
              </small>
            </div>

            <Link to="/login" className="btn btn-primary">
              <i className="fas fa-arrow-left me-2"></i>
              Back to Login
            </Link>
          </Card.Body>
        </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg">
        <Card.Body className="p-4">
          <div className="text-center mb-4">
            <i className="fas fa-key fa-3x text-primary mb-3"></i>
            <p className="text-muted">
              No worries! Enter your email address and we'll send you a link to
              reset your password.
            </p>
          </div>

          {error && (
            <Alert variant="danger" dismissible onClose={() => setError("")}>
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Email Address</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="ps-5"
                  autoFocus
                />
                <i className="fas fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
              </div>
              <Form.Text className="text-muted">
                We'll send reset instructions to this email address
              </Form.Text>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-100 mb-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending Instructions...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane me-2"></i>
                  Send Reset Instructions
                </>
              )}
            </Button>

            <div className="text-center">
              <Link to="/login" className="text-decoration-none">
                <i className="fas fa-arrow-left me-2"></i>
                Back to Login
              </Link>
            </div>
          </Form>

          {/* Additional Help */}
          <div className="mt-4 pt-4 border-top">
            <div className="text-center">
              <h6 className="text-muted mb-3">Need more help?</h6>
              <div className="d-flex justify-content-center gap-3">
                <Link
                  to="/contact"
                  className="btn btn-outline-secondary btn-sm"
                >
                  <i className="fas fa-headset me-2"></i>
                  Contact Support
                </Link>
                <Link to="/help" className="btn btn-outline-secondary btn-sm">
                  <i className="fas fa-question-circle me-2"></i>
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
  );
};

export default ForgotPassword;
