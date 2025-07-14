import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../Assets/IMG_9055.png'; // ✅ Your actual logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Corporate & Social Events',
    'Concerts',
    'Destination Management / Incentive Tours',
    'Weddings',
    'MICE / Corporate Travel',
    'Hotel Booking / Ticketing / Visa Services'
  ];

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
 <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div
            onClick={scrollToTop}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img
              src={logo}
              alt="Regalia Events"
              className="h-20 md:h-28 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-luxury-gold transition-all duration-300 font-medium relative group transform hover:scale-105 font-prata">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
                    </button>

                    {/* Dropdown */}
                    <div className={`absolute top-full left-0 mt-2 w-80 bg-white shadow-xl border transition-all duration-300 ${
                      isServicesOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                    }`}>
                      <div className="p-4 grid grid-cols-1 gap-2">
                        {services.map((service, index) => (
                          <a
                            key={index}
                            href="#services"
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-luxury-gold hover:bg-luxury-gold/5 transition-all duration-200 font-prata"
                          >
                            {service}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-luxury-gold transition-all duration-300 font-medium relative group transform hover:scale-105 font-prata"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Enquire Now Button */}
          <div className="hidden lg:flex items-center">
            <button className="bg-luxury-gold text-white px-4 xl:px-6 py-2 rounded-full font-medium hover:bg-luxury-darkgold transition-all duration-300 transform hover:scale-105 font-prata text-sm xl:text-base">
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-luxury-gold transition-all duration-300 font-medium py-2 px-4 hover:bg-luxury-gold/5 transform hover:translate-x-2 font-prata"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-luxury-gold text-white px-6 py-2 rounded-full font-medium hover:bg-luxury-darkgold transition-all duration-300 mt-4 font-prata">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;