import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = () => {
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
    <>
      {/* Mobile menu toggle button at top right corner */}
      <div className="absolute top-6 right-6 z-50 md:hidden">
        <button
          className="text-white"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label="Toggle menu"
        >
          {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
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
    </>
  );
};

export default MobileMenu;
