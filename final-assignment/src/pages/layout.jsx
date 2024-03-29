import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from './home';
import Blogs from './blogs';
import Contact from './contact';
import './navigation.css'; // Import CSS file for custom styles

function MainNavigation() {
  const [activePage, setActivePage] = useState('Home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Ugyen's Circle</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className={activePage === 'Home' ? 'active' : ''}
                onClick={() => handlePageChange('Home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={activePage === 'Blogs' ? 'active' : ''}
                onClick={() => handlePageChange('Blogs')}
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                className={activePage === 'Contact' ? 'active' : ''}
                onClick={() => handlePageChange('Contact')}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="content">
        {activePage === 'Home' && <Home isHome={true} />}
        {activePage === 'Blogs' && <Blogs />}
        {activePage === 'Contact' && <Contact />}
      </div>
    </>
  );
}

export default MainNavigation;
