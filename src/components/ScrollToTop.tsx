import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 md:bottom-8 right-6 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-luxury-gold rounded-full text-white flex items-center justify-center hover:bg-luxury-darkgold transition-all duration-300 shadow-lg hover:shadow-xl z-50 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;