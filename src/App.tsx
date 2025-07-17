import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AssistiveTouchButton from './components/IBall';
import CorporateEvents from './components/CorporateEvents';
import Concerts from './components/Concerts';
import DestinationManagement from './components/DestinationManagement';
import Weddings from './components/Weddings';
import MiceTravel from './components/MiceTravel';
import TravelServices from './components/TravelServices';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Portfolio />
              <About />
              <Testimonials />
              <Contact />
              <Footer />
              <ScrollToTop />
              <AssistiveTouchButton />
            </>
          } />
          <Route path="/corporate-events" element={
            <>
              <CorporateEvents />
              <Footer />
            </>
          } />
          <Route path="/concerts" element={
            <>
              <Concerts />
              <Footer />
            </>
          } />
          <Route path="/destination-management" element={
            <>
              <DestinationManagement />
              <Footer />
            </>
          } />
          <Route path="/weddings" element={
            <>
              <Weddings />
              <Footer />
            </>
          } />
          <Route path="/mice-travel" element={
            <>
              <MiceTravel />
              <Footer />
            </>
          } />
          <Route path="/travel-services" element={
            <>
              <TravelServices />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
