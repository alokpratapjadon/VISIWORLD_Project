import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import LogoImage from '../Assets/IMG_9055.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Corporate & Social Events',
    'Concerts',
    'Destination Management',
    'Weddings',
    'MICE / Corporate Travel',
    'Hotel Booking & Visa Services'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3">
              <img src={LogoImage} alt="Eventra Logo" className="w-12 h-12 rounded-full shadow-md object-cover" />
              <div>
                <h3 className="text-lg md:text-xl font-bold font-prata">VISIWORLD</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-prata">CRAFTING UNFORGETABLE MOMENTS</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-prata">
              Creating extraordinary experiences and unforgettable moments through luxury event management and bespoke celebrations.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors duration-300">
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 font-prata">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm md:text-base text-gray-300 hover:text-luxury-gold transition-colors duration-200 font-prata">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 font-prata">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-sm md:text-base text-gray-300 hover:text-luxury-gold transition-colors duration-200 font-prata">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 font-prata">Locations</h4>
            <div className="space-y-4">
              {[
                { city: 'Gurugram, India', address: 'Cyber City, DLF Phase 2' },
                { city: 'Bengaluru, India', address: 'Indiranagar, 100 Feet Road' },
                { city: 'Dubai, UAE', address: 'Downtown Dubai, Burj Area' }
              ].map((location, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-luxury-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm md:text-base text-gray-300 font-prata">{location.city}</p>
                    <p className="text-sm text-gray-400 font-prata">{location.address}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-luxury-gold flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-300 font-prata">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-luxury-gold flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-300 font-prata">hello@eventra.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-gray-400 font-prata">
            © 2024 Eventra. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-luxury-gold transition-colors duration-200 font-prata">Terms of Service</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-luxury-gold transition-colors duration-200 font-prata">Privacy Policy</a>
            <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-luxury-gold transition-colors duration-200 font-prata">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;