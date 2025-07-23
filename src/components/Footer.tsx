import { Phone, Mail, MapPin } from 'lucide-react';
import LogoImage from '../Assets/IMG_9055.png';
import FacebookIcon from '../Assets/facebook.webp';
import InstagramIcon from '../Assets/instagram.png';
import XIcon from '../Assets/X.webp';
import WhatsAppIcon from '../Assets/whatsapp.webp';

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

  const socialLinks = [
    { icon: FacebookIcon, link: 'https://facebook.com' },
    { icon: InstagramIcon, link: 'https://instagram.com' },
    { icon: XIcon, link: 'https://x.com' },
    { icon: WhatsAppIcon, link: 'https://wa.me' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <img
  src={LogoImage}
  alt="Visiworld Logo"
  className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-md object-cover"
/>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-prata text-center md:text-left">VISIWORLD</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide font-prata text-center md:text-left">
                  Crafting Unforgettable Moments
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-300 font-prata text-center md:text-left leading-snug">
              <p>Creating extraordinary experiences</p>
              <p>and unforgettable moments through</p>
              <p>luxury event management and bespoke celebrations.</p>
            </div>

            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={item.icon}
                    alt={`social-icon-${idx}`}
                    className="w-10 h-10 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile 3 Column Container */}
          <div className="md:hidden flex justify-center mt-10 gap-6 text-center">
            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-2 font-prata">Quick Links</h4>
              <ul className="space-y-1">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-xs text-gray-300 hover:text-luxury-gold transition-colors font-prata">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base font-semibold mb-2 font-prata">Services</h4>
              <ul className="space-y-1">
                {services.slice(0, 5).map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-xs text-gray-300 hover:text-luxury-gold transition-colors font-prata">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base font-semibold mb-2 font-prata">Contact</h4>
              <div className="space-y-2">
                <p className="text-xs text-gray-300 font-prata">+91 0000000000</p>
                <p className="text-xs text-gray-300 font-prata">hello@yourevents.com</p>
                <p className="text-xs text-gray-300 font-prata">New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* DESKTOP Sections */}
          <div className="hidden md:block md:pl-8">
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

          <div className="hidden md:block">
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

          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-4 font-prata">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <p className="text-sm text-gray-300 font-prata">+91 0000000000</p>
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