import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import useAppStore from '../../store/useAppStore'

const Header = () => {
  const { user, isAuthenticated, logout, toggleSidebar } = useAppStore()

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm border-bottom">
      <Container fluid>
        <div className="d-flex align-items-center">
          <Button
            variant="outline-primary"
            size="sm"
            onClick={toggleSidebar}
            className="me-3 d-lg-none"
          >
            <i className="fas fa-bars"></i>
          </Button>
          <Navbar.Brand href="/" className="fw-bold text-primary">
            <i className="fas fa-robot me-2"></i>
            RobotMaker Latest
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/dashboard" className="me-3">
              <i className="fas fa-tachometer-alt me-1"></i>
              Dashboard
            </Nav.Link>
            <Nav.Link href="/robots" className="me-3">
              <i className="fas fa-robot me-1"></i>
              Robots
            </Nav.Link>
            
            {isAuthenticated ? (
              <div className="d-flex align-items-center">
                <span className="me-3 text-muted">
                  Welcome, {user?.name || 'User'}
                </span>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={logout}
                >
                  <i className="fas fa-sign-out-alt me-1"></i>
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                variant="primary"
                size="sm"
                href="/login"
              >
                <i className="fas fa-sign-in-alt me-1"></i>
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
