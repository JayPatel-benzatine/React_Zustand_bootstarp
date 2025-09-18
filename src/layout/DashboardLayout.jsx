import React, { useState, Suspense } from "react";
import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import LoadingSpinner from "../components/common/LoadingSpinner";

const DashboardLayout = ({ children }) => {
  const [sidebarShow, setSidebarShow] = useState(false);

  const handleSidebarToggle = () => setSidebarShow(!sidebarShow);
  const handleSidebarClose = () => setSidebarShow(false);

  return (
    <div className="min-vh-100 bg-light">
      {/* Top Navbar */}
      <Navbar
        bg="white"
        expand="lg"
        className="border-bottom shadow-sm sticky-top"
      >
        <Container fluid>
          {/* Mobile Sidebar Toggle */}
          <Button
            variant="outline-secondary"
            className="d-lg-none me-3"
            onClick={handleSidebarToggle}
          >
            <i className="fas fa-bars"></i>
          </Button>

          {/* Brand */}
          <Navbar.Brand href="#" className="fw-bold text-primary">
            <i className="fas fa-robot me-2"></i>
            RobotMaker
          </Navbar.Brand>

          {/* Right side navbar items */}
          <Nav className="ms-auto align-items-center">
            {/* Search */}
            <div className="position-relative me-3 d-none d-md-block">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                style={{ paddingLeft: "2.5rem", width: "250px" }}
              />
              <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
            </div>

            {/* Notifications */}
            <Nav.Link href="#" className="position-relative me-2">
              <i className="fas fa-bell fa-lg"></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.6rem" }}
              >
                3
              </span>
            </Nav.Link>

            {/* User Profile Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-link text-decoration-none p-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="fas fa-user"></i>
                  </div>
                  <span className="ms-2 d-none d-md-inline text-dark">
                    John Doe
                  </span>
                  <i className="fas fa-chevron-down ms-2 text-muted small d-none d-md-inline"></i>
                </div>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user me-2"></i>Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cog me-2"></i>Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-sign-out-alt me-2"></i>Logout
                  </a>
                </li>
              </ul>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <div className="d-flex">
        {/* Desktop Sidebar */}
        <div
          className="d-none d-lg-block bg-white border-end shadow-sm"
          style={{ width: "280px", minHeight: "calc(100vh - 76px)" }}
        >
          <div className="p-3">
            <SidebarContent />
          </div>
        </div>

        {/* Mobile Sidebar (Offcanvas) */}
        <Offcanvas
          show={sidebarShow}
          onHide={handleSidebarClose}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <i className="fas fa-robot me-2 text-primary"></i>
              RobotMaker
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <SidebarContent />
          </Offcanvas.Body>
        </Offcanvas>

        {/* Main Content */}
        <main
          className="flex-grow-1"
          style={{ minHeight: "calc(100vh - 76px)" }}
        >
          <Container fluid className="p-4">
            <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
          </Container>
        </main>
      </div>
    </div>
  );
};

// Sidebar Content Component
const SidebarContent = () => {
  const menuItems = [
    {
      icon: "fas fa-tachometer-alt",
      label: "Dashboard",
      href: "/dashboard",
      active: true,
    },
    { icon: "fas fa-robot", label: "My Robots", href: "/robots" },
    { icon: "fas fa-code", label: "Code Editor", href: "/editor" },
    { icon: "fas fa-project-diagram", label: "Projects", href: "/projects" },
    { icon: "fas fa-cloud", label: "Cloud Storage", href: "/storage" },
    { icon: "fas fa-chart-line", label: "Analytics", href: "/analytics" },
  ];

  const secondaryItems = [
    { icon: "fas fa-cog", label: "Settings", href: "/settings" },
    { icon: "fas fa-question-circle", label: "Help & Support", href: "/help" },
    { icon: "fas fa-book", label: "Documentation", href: "/docs" },
  ];

  return (
    <div>
      {/* Main Navigation */}
      <div className="mb-4">
        <h6 className="text-muted text-uppercase small fw-bold mb-3">Main</h6>
        <Nav className="flex-column">
          {menuItems.map((item, index) => (
            <Nav.Link
              key={index}
              href={item.href}
              className={`d-flex align-items-center py-2 px-3 rounded mb-1 text-decoration-none ${
                item.active
                  ? "bg-primary text-white"
                  : "text-dark hover-bg-light"
              }`}
            >
              <i className={`${item.icon} me-3`} style={{ width: "20px" }}></i>
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </div>

      {/* Secondary Navigation */}
      <div>
        <h6 className="text-muted text-uppercase small fw-bold mb-3">
          Support
        </h6>
        <Nav className="flex-column">
          {secondaryItems.map((item, index) => (
            <Nav.Link
              key={index}
              href={item.href}
              className="d-flex align-items-center py-2 px-3 rounded mb-1 text-dark text-decoration-none hover-bg-light"
            >
              <i className={`${item.icon} me-3`} style={{ width: "20px" }}></i>
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </div>

      {/* Upgrade Banner */}
      <div
        className="mt-4 p-3 bg-gradient rounded"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="text-white text-center">
          <i className="fas fa-crown fa-2x mb-2"></i>
          <h6 className="fw-bold mb-2">Upgrade to Pro</h6>
          <p className="small mb-3">
            Unlock advanced features and unlimited robots
          </p>
          <button className="btn btn-light btn-sm fw-bold">Upgrade Now</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
