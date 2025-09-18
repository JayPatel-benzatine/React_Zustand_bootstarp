import React from 'react'
import { Nav, Offcanvas } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import useAppStore from '../../store/useAppStore'

const Sidebar = () => {
  const location = useLocation()
  const { isSidebarOpen, toggleSidebar } = useAppStore()

  const menuItems = [
    {
      path: '/dashboard',
      icon: 'fas fa-tachometer-alt',
      label: 'Dashboard',
      description: 'Overview and analytics'
    },
    {
      path: '/robots',
      icon: 'fas fa-robot',
      label: 'Robots',
      description: 'Manage your robots'
    },
    {
      path: '/create',
      icon: 'fas fa-plus-circle',
      label: 'Create Robot',
      description: 'Build a new robot'
    },
    {
      path: '/settings',
      icon: 'fas fa-cog',
      label: 'Settings',
      description: 'App preferences'
    },
    {
      path: '/help',
      icon: 'fas fa-question-circle',
      label: 'Help & Support',
      description: 'Get assistance'
    }
  ]

  const SidebarContent = () => (
    <div className="h-100 d-flex flex-column">
      <div className="p-3 border-bottom">
        <h5 className="mb-0 text-primary fw-bold">
          <i className="fas fa-robot me-2"></i>
          Navigation
        </h5>
      </div>
      
      <Nav className="flex-column p-3 flex-grow-1">
        {menuItems.map((item) => (
          <Nav.Link
            key={item.path}
            href={item.path}
            className={`mb-2 p-3 rounded-3 border ${
              location.pathname === item.path
                ? 'bg-primary text-white border-primary'
                : 'text-dark border-light hover-bg-light'
            }`}
            style={{
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
          >
            <div className="d-flex align-items-center">
              <i className={`${item.icon} me-3`} style={{ width: '20px' }}></i>
              <div>
                <div className="fw-semibold">{item.label}</div>
                <small className={location.pathname === item.path ? 'text-white-50' : 'text-muted'}>
                  {item.description}
                </small>
              </div>
            </div>
          </Nav.Link>
        ))}
      </Nav>
      
      <div className="p-3 border-top mt-auto">
        <div className="text-center">
          <small className="text-muted">
            RobotMaker Latest v1.0
          </small>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="d-none d-lg-block bg-white border-end shadow-sm" style={{ width: '280px', minHeight: '100vh' }}>
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Offcanvas
        show={isSidebarOpen}
        onHide={toggleSidebar}
        placement="start"
        className="d-lg-none"
        style={{ width: '280px' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-primary fw-bold">
            <i className="fas fa-robot me-2"></i>
            RobotMaker
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <SidebarContent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Sidebar
