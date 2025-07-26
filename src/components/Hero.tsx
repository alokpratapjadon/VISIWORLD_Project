import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../Assets/EventVideo.mp4';
import oldLogo from '../Assets/IMG_9055.png';
import newLogo from '../Assets/centerheronav.png';
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
    { label: 'Enquiry', href: '#contact' },
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

      {/* Top Bar with Old Logo and Menu */}
      <div className="relative absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 md:px-10">
        <img src={oldLogo} alt="Old Brand Logo" className="h-20 md:h-28 lg:h-32 w-auto object-contain" />
        <button className="md:hidden text-white z-50" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
          <img src={newLogo} alt="New Centered Logo" className="h-20 md:h-28 lg:h-32 w-auto object-contain" />
        </div>
      </div>

      {/* 🔻 Mobile Dropdown Menu */}
      <div className={`fixed inset-0 z-50 bg-white overflow-y-auto ${mobileNavOpen ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-luxury-gold">
          <div className="text-xl font-semibold text-luxury-gold">VISIWORLD</div>
          <button onClick={() => setMobileNavOpen(false)} aria-label="Close menu" className="text-luxury-gold">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col divide-y divide-luxury-gold text-luxury-black text-lg font-poppins">
          {navItems.map((item, idx) => (
            item.label === 'Our Services' ? (
              <div key={idx} className="relative w-full">
                <div onClick={() => setShowDropdown(!showDropdown)} className="flex justify-between items-center cursor-pointer uppercase px-6 py-4">
                  <span>{item.label}</span>
                  <ChevronDown size={20} />
                </div>
                <AnimatePresence>
                  {showDropdown && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto', transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
                      exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
                      className="bg-white"
                    >
                      {servicesDropdown.map((sub, i) => (
                        <Link
                          key={i}
                          to={`/services/${sub.slug}`}
                          onClick={() => setMobileNavOpen(false)}
                          className="block px-8 py-3 hover:bg-luxury-gold/10 transition"
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
                  if (item.label === 'Enquiry') {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    window.location.href = item.href;
                  }
                }}
                className="block px-6 py-4 hover:bg-luxury-gold/10 transition uppercase"
              >
                {item.label}
              </a>
            )
          ))}
        </div>
        {/* Close button at bottom center */}
        <div className="fixed bottom-4 left-0 right-0 px-4">
          <button
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close menu"
            className="w-full py-3 text-luxury-gold border border-luxury-gold rounded-full hover:bg-luxury-gold hover:text-white transition"
          >
            Close
          </button>
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
                    if (item.label === 'Enquiry') {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      window.location.href = item.href;
                    }
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