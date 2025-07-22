import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout'));
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const About = lazy(() => import('./components/About').then(module => ({ default: (module as any).default || module })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: (module as any).default || module })));
const Contact = lazy(() => import('./components/Contact'));
const CorporateEvents = lazy(() => import('./components/CorporateEvents'));
const Concerts = lazy(() => import('./components/Concerts'));
const DestinationManagement = lazy(() => import('./components/DestinationManagement'));
const Weddings = lazy(() => import('./components/Weddings'));
const MiceTravel = lazy(() => import('./components/MiceTravel'));
const TravelServices = lazy(() => import('./components/TravelServices'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <>
                <Hero />
                <Services />
                <Portfolio />
                {/* <About /> */}
                {/* <Testimonials /> */}
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
      </Suspense>
    </Router>
  );
}

export default App;
