import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../Assets/EventVideo.mp4';
import logo from '../Assets/IMG_9055.png';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const servicesDropdown = [
    { name: 'Corporate & Social Events', slug: 'corporate-events' },
    { name: 'Concerts', slug: 'concerts' },
    { name: 'Destination Management', slug: 'destination-management' },
    { name: 'Weddings', slug: 'weddings' },
    { name: 'MICE / Corporate Travel', slug: 'mice-travel' },
    { name: 'Hotel & Travel Services', slug: 'travel-services' },
  ];

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Recent Events', href: '#portfolio' },
    { label: 'Inquiry', href: '#inquiry' },
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 md:px-10">
        <img src={logo} alt="Brand Logo" className="h-20 md:h-28 lg:h-32 w-auto object-contain" />
        <button className="md:hidden text-white z-50" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔻 Mobile Dropdown Menu */}
      <div className={`absolute top-[72px] left-0 w-full z-40 transition-all duration-500 ease-in-out transform bg-black/90 backdrop-blur-md ${mobileNavOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="flex flex-col items-center text-white gap-6 py-8 px-4 text-lg font-poppins">
          {navItems.map((item, idx) => (
            item.label === 'Our Services' ? (
              <div key={idx} className="relative w-full text-center">
                <div onClick={() => setShowDropdown(!showDropdown)} className="flex justify-center items-center gap-1 cursor-pointer uppercase">
                  {item.label} <ChevronDown size={16} />
                </div>
                <AnimatePresence>
                  {showDropdown && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-2 space-y-2 text-sm"
                    >
                      {servicesDropdown.map((sub, i) => (
                        <Link
                          key={i}
                          to={`/services/${sub.slug}`}
                          onClick={() => setMobileNavOpen(false)}
                          className="block hover:text-luxury-gold transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileNavOpen(false);
                  window.location.href = item.href;
                }}
                className="hover:text-luxury-gold transition duration-300 uppercase"
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>

      {/* 🖥️ Desktop Sidebar Nav */}
      <nav className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col gap-6 text-white text-3xl uppercase font-medium font-poppins tracking-wider leading-snug">
        {navItems.map((item, idx) =>
          item.label === 'Our Services' ? (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="relative pl-5 transition-all duration-300 hover:pl-7 hover:text-luxury-gold cursor-pointer">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] h-5 bg-white"></span>
                {item.label}
              </div>

              <AnimatePresence>
                {showDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-6 mt-2 space-y-2 text-base font-light overflow-hidden"
                  >
                    {servicesDropdown.map((sub, i) => (
                      <Link
                        key={i}
                        to={`/services/${sub.slug}`}
                        className="block hover:text-luxury-gold cursor-pointer transition pl-2"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = item.href;
              }}
              className="relative pl-5 transition-all duration-300 hover:pl-7 hover:text-luxury-gold"
            >
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[2px] h-5 bg-white"></span>
              {item.label}
            </a>
          )
        )}
      </nav>
    </section>
  );
};

export default Hero;