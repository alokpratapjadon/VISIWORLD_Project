import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import testimonial1 from '../Assets/testimonial1.jpg';
import testimonial2 from '../Assets/testimonial2.webp';
import testimonial3 from '../Assets/testimonial3.webp';
import testimonial4 from '../Assets/testimonial4.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [arrowTimer, setArrowTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: "Simran & Arjun",
      position: "Bride & Groom",
      company: "New Delhi",
      text: "VisiWorld planned our Goa wedding like a dream. The team was proactive, creative, and responsive throughout!",
      image: testimonial1
    },
    {
      name: "Rajiv Mehra",
      position: "Corporate Client",
      company: "Product Launch – Pan India",
      text: "Smooth execution of our pan-India product launch. VisiWorld managed everything with professionalism.",
      image: testimonial2
    },
    {
      name: "Ananya D.",
      position: "Event Head",
      company: "College Fest – Mumbai",
      text: "Our college fest concert was epic—lighting, sound, security all top-notch!",
      image: testimonial4
    },
    {
      name: "Priya & Karan",
      position: "Anniversary Clients",
      company: "Udaipur",
      text: "Our luxury anniversary event in Udaipur was a fairy tale. Every detail from decor to timing was flawless. VisiWorld truly made it unforgettable!",
      image: testimonial3
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setCurrentIndex(nextIndex);
      if (scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const cardWidth = scrollWidth / testimonials.length;
        scrollContainerRef.current.scrollTo({
          left: cardWidth * nextIndex,
          behavior: 'smooth',
        });
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length, isMobile]);

  const handleInteraction = () => {
    setShowArrows(true);
    if (arrowTimer) {
      clearTimeout(arrowTimer);
    }
    const timer = setTimeout(() => {
      setShowArrows(false);
    }, 3000);
    setArrowTimer(timer);
  };

  const nextTestimonial = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    if (isMobile && scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const cardWidth = scrollWidth / testimonials.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * nextIndex,
        behavior: 'smooth',
      });
    }
    handleInteraction();
  };

  const prevTestimonial = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
    if (isMobile && scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const cardWidth = scrollWidth / testimonials.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * prevIndex,
        behavior: 'smooth',
      });
    }
    handleInteraction();
  };

  const onScroll = () => {
    if (!isMobile) return;
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const cardWidth = scrollWidth / testimonials.length;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-luxury-gold font-medium text-2xl md:text-2xl uppercase tracking-wide mb-4 font-poppins">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 font-poppins">
            CLIENT STORIES
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {isMobile ? (
            <div
              ref={scrollContainerRef}
              onScroll={onScroll}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 p-4"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
              onClick={handleInteraction}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-center bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-12 text-center cursor-pointer w-full max-w-md"
                >
                  <div className="text-[60px] md:text-[100px] text-luxury-gold font-prata leading-none mb-4 md:mb-6 scale-110">
                    “
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 md:mb-8 italic font-prata">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full"
                    />
                    <div className="text-left">
                      <h4 className="text-base md:text-lg font-semibold text-gray-900 font-prata">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm md:text-base text-gray-600 font-prata">
                        {testimonial.position}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500 font-prata">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-12 text-center cursor-pointer"
              onClick={handleInteraction}
            >
              <div className="text-[60px] md:text-[100px] text-luxury-gold font-prata leading-none mb-4 md:mb-6 scale-110">
                “
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 md:mb-8 italic font-prata">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full"
                />
                <div className="text-left">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 font-prata">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 font-prata">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 font-prata">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className={`absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 transition-opacity duration-300 ${
                showArrows ? 'opacity-100' : 'opacity-0'
              }`}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevTestimonial();
                  }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full text-luxury-gold flex items-center justify-center hover:scale-110 transition-all duration-300 -ml-6"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextTestimonial();
                  }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full text-luxury-gold flex items-center justify-center hover:scale-110 transition-all duration-300 -mr-6"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center space-x-2 mt-6 md:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-luxury-gold' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
