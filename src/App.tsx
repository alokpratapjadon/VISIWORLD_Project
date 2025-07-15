import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AssistiveTouchButton from './components/IBall'; // Correct path if placed in components

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <AssistiveTouchButton />
    </div>
  );
}

export default App;