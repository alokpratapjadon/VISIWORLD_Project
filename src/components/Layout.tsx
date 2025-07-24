import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
const Layout: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white font-poppins">
        <Outlet />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Layout;
