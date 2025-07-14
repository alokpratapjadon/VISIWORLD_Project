import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [arrowTimer, setArrowTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, Tech Innovations",
      company: "Tech Innovations Inc.",
      text: "Eventra transformed our annual conference into an unforgettable experience. Their attention to detail and creative approach exceeded all our expectations. The team was professional, responsive, and delivered flawlessly.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Global Solutions Ltd.",
      text: "Working with Eventra for our product launch was the best decision we made. They handled everything seamlessly, from venue selection to entertainment. The event was a huge success and generated incredible buzz for our brand.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      position: "Bride",
      company: "Personal Event",
      text: "Our wedding was absolutely magical thanks to Eventra. They listened to our vision and brought it to life in ways we never imagined. Every guest commented on how beautiful and well-organized everything was.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "David Thompson",
      position: "HR Director",
      company: "Fortune Corp",
      text: "The incentive tour organized by Eventra was exceptional. Our team had an amazing experience, and it really boosted morale and productivity. The logistics were perfect, and every detail was thoughtfully planned.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    handleInteraction();
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    handleInteraction();
  };

  useEffect(() => {
    return () => {
      if (arrowTimer) {
        clearTimeout(arrowTimer);
      }
    };
  }, [arrowTimer]);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-luxury-gold font-medium text-xs md:text-sm uppercase tracking-wide mb-4 font-prata">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 font-prata">
            CLIENT STORIES
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div 
            className="bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-12 text-center cursor-pointer"
            onClick={handleInteraction}
            onTouchStart={handleInteraction}
          >
            <div className="text-[60px] md:text-[100px] text-luxury-gold font-prata leading-none mb-4 md:mb-6  scale-110">
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
      </div>
    </section>
  );
};

export default Testimonials;

// No issues found in your code. The testimonial slider logic, auto-advance, arrow visibility, and pagination all look correct.
// If you experience any bugs, check your Tailwind CSS setup and ensure the parent container is visible.