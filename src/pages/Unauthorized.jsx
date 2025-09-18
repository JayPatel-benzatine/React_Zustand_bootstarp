import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <div className="mb-4">
            <i className="fas fa-exclamation-triangle text-warning" style={{ fontSize: "4rem" }}></i>
          </div>
          <h1 className="display-4 mb-3">Access Denied</h1>
          <p className="lead mb-4">
            You don't have permission to access this page. Please contact your administrator if you believe this is an error.
          </p>
          <div className="d-grid gap-2 d-md-block">
            <Button as={Link} to="/profile" variant="primary" size="lg">
              Go to Profile
            </Button>
            <Button as={Link} to="/login" variant="outline-secondary" size="lg" className="ms-md-2">
              Login Again
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Unauthorized;
