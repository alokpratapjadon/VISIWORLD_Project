import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import LogoImage from '../Assets/IMG_9055.png';

const Footer = () => {
  const [clickCount, setClickCount] = useState(0);
  const [timeoutId, setTimeoutId] = useState<any>(null);
  
  const handleCopyrightClick = () => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    setClickCount(prev => {
      const newClickCount = prev + 1;
      
      // Open link only on 3rd click
      if (newClickCount === 3) {
        window.open('https://my-portfolio-8lao.vercel.app/', '_blank');
        return 0; // Reset click count after opening
      }
      
      return newClickCount;
    });
    
    // Set a new timeout to reset the click count after 1.5 seconds
    const newTimeoutId = setTimeout(() => {
      setClickCount(0);
      setTimeoutId(null);
    }, 1500);
    
    setTimeoutId(newTimeoutId);
  };

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services#services' },
    { name: 'Portfolio', to: '/#portfolio' },
    { name: 'About Us', to: '/#about' },
    { name: 'Contact', to: '/#contact' }
  ];

  const services = [
    { name: 'Corporate & Social Events', href: '/services/corporate-events' },
    { name: 'Exhibitions', href: '/services/exhibitions' },
    { name: 'Concerts', href: '/services/concerts' },
    { name: 'Destination Management', href: '/services/destination-management' },
    { name: 'Weddings', href: '/services/weddings' },
    { name: 'HOTEL & TRAVEL SERVICES', href: '/services/travel-services' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, link: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, link: 'https://instagram.com' },
    { name: 'X', icon: Twitter, link: 'https://x.com' },
    { name: 'WhatsApp', icon: MessageCircle, link: 'https://wa.me/910000000000' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-8 items-start">

          {/* Brand Section */}
          <div className="hidden md:flex flex-col">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <img
                src={LogoImage}
                alt="Visiworld Logo"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-md object-cover"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-poppins text-center md:text-left">VISIWORLD</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide font-poppins text-center md:text-left">
                  Crafting Unforgettable Moments
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-300 font-poppins text-center md:text-left leading-snug mt-2">
              <p>Creating extraordinary experiences</p>
              <p>and unforgettable moments through</p>
              <p>luxury event management and bespoke celebrations.</p>
            </div>

            <div className="flex justify-start space-x-4 mt-3">
              {socialLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.name}
                    className="hover:scale-110 transition-transform duration-300 rounded-full border border-gray-500 p-2 flex items-center justify-center font-normal"
                  >
                    <IconComponent className="w-6 h-6 text-gray-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Brand Text Only */}
          <div className="md:hidden flex flex-col items-center mt-4 space-y-1">
            <img
              src={LogoImage}
              alt="Visiworld Logo"
              className="w-28 h-28 rounded-full shadow-md object-cover"
            />
            <h3 className="text-xl font-bold font-poppins text-center">VISIWORLD</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wide font-poppins text-center">
              Crafting Unforgettable Moments
            </p>
            <div className="border-t border-gray-700 w-full max-w-xs mt-2"></div>
          </div>

          {/* Redesigned Mobile Footer - 3 columns side by side with social icons below */}
          <div className="md:hidden mt-10 font-poppins">
            <div className="flex justify-center text-left gap-x-8 px-4">
              {/* Quick Links */}
              <div className="w-1/3">
              <h4 className="text-base font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} className="text-xs text-gray-300 hover:text-luxury-gold transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="w-1/3">
              <h4 className="text-base font-semibold mb-3">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.href} className="text-xs text-gray-300 hover:text-luxury-gold transition-colors">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-1/3">
              <h4 className="text-base font-semibold mb-3">Contact</h4>
              <div className="space-y-3">
                <p className="text-xs text-gray-300">+91 87654 32109</p>
                <p className="text-xs text-gray-300">info@visiworld.in</p>
              <p className="text-xs text-gray-300">
                <span className="text-sm font-semibold">Visiworld events and travel Pvt. Ltd.</span><br />
                <span className="text-xs">Operations office - UNIT NO 25, Ground floor, HUDA Auto market area,</span><br />
                <span className="text-xs">Sector 12, Bahadurgarh- badli road, Bahadurgarh, Haryana 124507</span>
              </p>
              </div>
            </div>
            </div>

            {/* Social Icons below columns */}
            <div className="flex justify-center space-x-6 mt-6">
              {socialLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.name}
                    className="hover:scale-110 transition-transform duration-300 rounded-full border border-gray-500 p-3 flex items-center justify-center font-normal"
                  >
                    <IconComponent className="w-5 h-5 text-gray-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* DESKTOP Sections */}
          <div className="hidden md:block md:pl-20 mt-2">
            <h4 className="text-lg font-semibold mb-3 font-poppins">Quick Links</h4>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-sm text-gray-300 hover:text-luxury-gold transition-colors font-poppins">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block md:pl-20 mt-2">
            <h4 className="text-lg font-semibold mb-3 font-poppins">Services</h4>
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-sm text-gray-300 hover:text-luxury-gold transition-colors font-poppins">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block md:pl-20 mt-2">
            <h4 className="text-lg font-semibold mb-3 font-poppins">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <p className="text-sm text-gray-300 font-poppins">+91 87654 32109</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <p className="text-sm text-gray-300 font-poppins">CEO@visiworld.in</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-luxury-gold flex-shrink-0" />
              <p className="text-sm text-gray-300 font-poppins">
                <span className="text-lg font-semibold">Visiworld events and travel Pvt. Ltd.</span><br />
                <span className="text-sm">Operations office - UNIT NO 25, Ground floor, HUDA Auto market area,</span><br />
                <span className="text-sm">Sector 12, Bahadurgarh- badli road, Bahadurgarh, Haryana 124507</span>
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-4">
          <p className="text-center text-sm text-gray-400 font-poppins" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <a onClick={handleCopyrightClick} className="text-gray-400 cursor-pointer">©</a> 2025 VISIWORLD Events. All rights reserved. Licensed &amp; Protected under applicable laws. Website by <a href="https://writeupright.co.in/" target="_blank" rel="noopener noreferrer" className="text-luxury-gold hover:underline">WriteUpright</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
