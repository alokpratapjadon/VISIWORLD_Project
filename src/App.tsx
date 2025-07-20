import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CorporateEvents from './components/CorporateEvents';
import Concerts from './components/Concerts';
import DestinationManagement from './components/DestinationManagement';
import Weddings from './components/Weddings';
import MiceTravel from './components/MiceTravel';
import TravelServices from './components/TravelServices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <Hero />
              <Services />
              <Portfolio />
              <About />
              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="services">
            <Route index element={<Services />} />
            <Route path="corporate-events" element={<CorporateEvents />} />
            <Route path="concerts" element={<Concerts />} />
            <Route path="destination-management" element={<DestinationManagement />} />
            <Route path="weddings" element={<Weddings />} />
            <Route path="mice-travel" element={<MiceTravel />} />
            <Route path="travel-services" element={<TravelServices />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
