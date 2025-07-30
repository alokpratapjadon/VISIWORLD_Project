import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const DesktopMenu = () => {
  const [hovered, setHovered] = useState(false);

  const servicesDropdown = [
    { name: 'Corporate & Social Events', slug: 'corporate-events' },
    { name: 'Exhibitions', slug: 'exhibitions' },
    { name: 'Concerts', slug: 'concerts' },
    { name: 'Destination Management', slug: 'destination-management' },
    { name: 'Weddings', slug: 'weddings' },
    { name: 'Hotel & Travel Services', slug: 'travel-services' },
  ];

  return (
    <nav className="hidden md:flex flex-col w-56 bg-transparent z-40 px-6 text-white/70 font-poppins select-none">
      <ul className="space-y-6 text-3xl font-bold uppercase">
        <li className="flex items-center">
          <span className="mr-2 text-white/50">|</span>
          <a href="#about" className="hover:text-luxury-gold transition">ABOUT US</a>
        </li>

        <li
          className="relative flex flex-col cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex items-center">
            <span className="mr-2 text-white/50">|</span>
            <span className="hover:text-luxury-gold transition whitespace-nowrap">OUR SERVICES</span>
          </div>
          <AnimatePresence>
            {hovered && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                      staggerChildren: 0.07,
                    },
                  },
                  hidden: {
                    opacity: 0,
                    y: -20,
                    transition: {
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  },
                }}
                className="mt-2 ml-6 space-y-2 rounded-md p-3 w-64 shadow-lg z-50"
              >
                {servicesDropdown.map((service, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="block px-3 py-1 text-base whitespace-nowrap hover:text-luxury-gold rounded transition"
                    >
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>

        <li className={`flex items-center transition-all duration-500 ease-in-out ${hovered ? 'mt-48' : ''}`}>
          <span className="mr-2 text-white/50">|</span>
          <a href="#portfolio" className="hover:text-luxury-gold transition whitespace-nowrap">OUR RECENT EVENTS</a>
        </li>

        <li className={`flex items-center transition-all duration-500 ease-in-out ${hovered ? 'mt-48' : ''}`}>
          <span className="mr-2 text-white/50">|</span>
          <a href="#contact" className="hover:text-luxury-gold transition whitespace-nowrap">ENQUIRY</a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
