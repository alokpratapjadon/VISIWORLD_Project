import React from 'react';
import heroVideo from '../Assets/8029-206210318.mov'; // ✅ relative path from this file

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-white mb-6 md:mb-8 leading-tight animate-wave font-prata">
          UNFORGETTABLE
          <br />
          <span className="font-normal animate-wave-delay">EXPERIENCES</span>
        </h1>

        <button className="bg-luxury-gold text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-luxury-darkgold transition-all duration-300 transform hover:scale-105 font-prata">
          Let's Plan Together
        </button>
      </div>
    </section>
  );
};

export default Hero;