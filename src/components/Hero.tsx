import { useState } from 'react';
import heroVideo from '../Assets/EventVideo.mp4';
import logo from '../Assets/IMG_9055.png';
import { Menu, X } from 'lucide-react';

const Hero = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Businesses', href: '#businesses' },
    { label: 'Our Recent Events', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <img
          src={logo}
          alt="Brand Logo"
          className="h-20 md:h-28 lg:h-32 w-auto object-contain"
        />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔻 Mobile Dropdown Menu */}
      <div className={`absolute top-[72px] left-0 w-full z-40 transition-all duration-500 ease-in-out transform bg-black/90 backdrop-blur-md ${mobileNavOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="flex flex-col items-center text-white gap-6 py-8 px-4 text-lg font-prata">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setMobileNavOpen(false)}
              className="hover:text-luxury-gold transition duration-300 uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* 🖥️ Desktop Sidebar Nav */}
      <nav className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col gap-10 text-white text-xl uppercase font-medium font-prata tracking-wider leading-snug">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="relative pl-5 transition-all duration-300 hover:pl-7 hover:text-luxury-gold"
          >
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] h-5 bg-white"></span>
            {item.label}
          </a>
        ))}
      </nav>

      {/* 🎯 Center Hero Content
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 md:mb-8 leading-tight animate-wave font-prata">
          UNFORGETTABLE
          <br />
          <span className="font-normal animate-wave-delay">EXPERIENCES</span>
        </h1>
        <button className="bg-luxury-gold text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-luxury-darkgold transition-all duration-300 transform hover:scale-105 font-prata">
          Let's Plan Together
        </button>
      </div> */}
    </section>
  );
};

export default Hero;