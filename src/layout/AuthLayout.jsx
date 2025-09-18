import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-vh-100 d-flex">
      {/* Left side - Image/Branding */}
      <div className="col-md-6 d-none d-md-flex position-relative overflow-hidden">
        <div 
          className="w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            position: 'relative'
          }}
        >
          {/* Background Pattern */}
          <div 
            className="position-absolute w-100 h-100"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.3
            }}
          />
          
          {/* Content */}
          <div className="text-center text-white position-relative z-index-1 p-5">
            <div className="mb-4">
              <i className="fas fa-robot fa-5x mb-3" style={{ opacity: 0.9 }}></i>
            </div>
            <h2 className="fw-bold mb-3">Welcome to RobotMaker</h2>
            <p className="lead mb-4">
              Build, customize, and control your robots with our advanced platform
            </p>
            <div className="d-flex justify-content-center gap-3">
              <div className="text-center">
                <i className="fas fa-cogs fa-2x mb-2"></i>
                <p className="small mb-0">Easy Setup</p>
              </div>
              <div className="text-center">
                <i className="fas fa-code fa-2x mb-2"></i>
                <p className="small mb-0">Code Editor</p>
              </div>
              <div className="text-center">
                <i className="fas fa-cloud fa-2x mb-2"></i>
                <p className="small mb-0">Cloud Sync</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="col-12 col-md-6 d-flex align-items-center">
        <Container fluid className="px-4 px-md-5">
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6}>
              <div className="text-center mb-4">
                <div className="d-md-none mb-3">
                  <i className="fas fa-robot fa-3x text-primary"></i>
                </div>
                {title && <h3 className="fw-bold text-dark mb-2">{title}</h3>}
                {subtitle && <p className="text-muted">{subtitle}</p>}
              </div>
              
              {children}
              
              <div className="text-center mt-4">
                <small className="text-muted">
                  © 2024 RobotMaker. All rights reserved.
                </small>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AuthLayout;
