import React, { useState } from 'react';
import Navigation from './pages/layout'; // Assuming the Navigation component is in 'pages/Layout.jsx' file
import Home from './pages/home'; // Assuming the Home component is in 'pages/Home.jsx' file
import Blogs from './pages/blogs'; // Assuming the Blogs component is in 'pages/Blogs.jsx' file
import Contact from './pages/contact'; // Assuming the Contact component is in 'pages/Contact.jsx' file
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <Navigation onPageChange={handlePageChange} />
      {activePage === 'home' && <Home />}
      {activePage === 'blogs' && <Blogs />}
      {activePage === 'contact' && <Contact />}
    </div>
  );
}

export default App;
