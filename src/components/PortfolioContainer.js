import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Aboutme from '../pages/aboutme';
import Portfolio from '../pages/portfolio';
import Qualification from '../pages/qualification';
import Certification from '../pages/certification';
import Contactinfo from '../pages/contactinfo';


function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Qualification') {
      return <Qualification />;
    }
    if (currentPage === 'Certification') {
        return <Certification />;
      }
    return <Contactinfo />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs handlePageChange={handlePageChange} currentPage={currentPage} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

export default PortfolioContainer;
