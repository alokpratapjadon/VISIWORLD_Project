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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={LogoImage}
                alt="Visiworld Logo"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md object-cover"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-prata">VISIWORLD</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide font-prata">
                  Crafting Unforgettable Moments
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 font-prata">
              Creating extraordinary experiences and unforgettable moments through luxury event management and bespoke celebrations.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-prata">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-luxury-gold transition-colors font-prata">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-prata">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-sm text-gray-300 hover:text-luxury-gold transition-colors font-prata">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-prata">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <p className="text-sm text-gray-300 font-prata">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <p className="text-sm text-gray-300 font-prata">hello@yourevents.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <p className="text-sm text-gray-300 font-prata">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
{/* Footer Bottom Bar */}
<div className="border-t border-gray-800 mt-10 pt-4">
  <p className="text-center text-sm text-gray-400 font-prata">
    © 2025 Regalia Events. All rights reserved. Licensed & Protected under applicable laws.
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;