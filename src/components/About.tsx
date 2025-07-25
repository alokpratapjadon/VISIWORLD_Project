import React, { useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import first images from each service component
import travelServiceImage from '../Assets/wedding1.jpg'; // from TravelServices images array
import corporateEventImage from '../Assets/corporate1.jpg'; // from CorporateEvents images array
import concertImage from '../Assets/consert1.jpg'; // from Concerts images array
import destinationManagementImage from '../Assets/Destination1.jpg'; // assuming first image from DestinationManagement
import weddingImage from '../Assets/wedding1.jpg'; // from Weddings images array
import miceTravelImage from '../Assets/wedding1.jpg'; // from MiceTravel images array

const About = () => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const contentSections = [
    {
      title: "Our Story",
      content: "VisiWorld is a premier event management company in India, known for creativity, integrity, and flawless execution. With expert teams in Delhi, Mumbai, Jaipur, and Goa, we deliver exceptional experiences with regional insight and national reach."
    },
    {
      title: "Our Signature Experiences",
      content: "From royal weddings in Udaipur to corporate summits in Gurgaon and music festivals in Mumbai, we craft immersive events through storytelling, design, logistics, and personalized guest experiences."
    },

    {
      title: "Why Choose Us",
      content:
        "• 100+ successful events across India\n" +
        "• Strong vendor network nationwide\n" +
        "• In-house creative, production & coordination teams\n" +
        "• Tailored packages for all budgets\n" +
        "• Recognized by industry leaders"
    }
  ];

  // Array of images corresponding to contentSections
  const images = [
    travelServiceImage,
    corporateEventImage,
    concertImage
  ];

  const handleInteraction = () => {
    setShowArrows(true);
    setTimeout(() => setShowArrows(false), 3000);
  };

  const nextContent = () => {
    setCurrentContentIndex(prev => (prev + 1) % contentSections.length);
    handleInteraction();
  };

  const prevContent = () => {
    setCurrentContentIndex(prev => (prev - 1 + contentSections.length) % contentSections.length);
    handleInteraction();
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-luxury-gold font-medium text-2xl md:text-2xl uppercase tracking-wide mb-4 font-poppins">ABOUT US</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 font-poppins">
            WHO WE ARE
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
          {/* Left Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-gray-100 shadow-lg transform rotate-2 z-0"></div>
            <div className="absolute inset-0 bg-gray-50 shadow-md transform -rotate-1 z-10"></div>
            <div
              className="relative bg-white shadow-xl p-6 md:p-8 z-20 cursor-pointer"
              onClick={handleInteraction}
              onTouchStart={handleInteraction}
            >
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 md:mb-6 font-poppins">
                {contentSections[currentContentIndex].title}
              </h3>
              {contentSections[currentContentIndex].title === "Why Choose Us" ? (
                <ul className="list-disc list-inside text-base md:text-lg text-gray-700 leading-relaxed font-poppins mb-6 whitespace-pre-line">
                  {contentSections[currentContentIndex].content.split('\n').map((point, idx) => (
                    <li key={idx}>{point.replace('• ', '')}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-poppins mb-6">
                  {contentSections[currentContentIndex].content}
                </p>
              )}

              <div className={`flex items-center justify-between transition-opacity duration-300 ${
                showArrows ? 'opacity-100' : 'opacity-0'
              }`}>
                <button
                  onClick={(e) => { e.stopPropagation(); prevContent(); }}
                  className="w-10 h-10 md:w-12 md:h-12 text-luxury-gold hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <div className="flex space-x-2">
                  {contentSections.map((_, index) => (
                    <button key={index} onClick={() => setCurrentContentIndex(index)}
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                        index === currentContentIndex ? 'bg-luxury-gold shadow-lg' : 'bg-gray-200'
                      } transition-all duration-300`} />
                  ))}
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); nextContent(); }}
                  className="w-10 h-10 md:w-12 md:h-12 text-luxury-gold hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="hidden md:block relative h-64 md:h-96 bg-black shadow-xl overflow-hidden cursor-pointer" onClick={handleInteraction} onTouchStart={handleInteraction}>
            <img
              src={images[currentContentIndex]}
              alt={`Service ${currentContentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ${
              showArrows ? 'opacity-100' : 'opacity-0'
            }`}>
              <button
                onClick={(e) => { e.stopPropagation(); prevContent(); }}
                className="w-10 h-10 md:w-12 md:h-12 text-luxury-gold hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextContent(); }}
                className="w-10 h-10 md:w-12 md:h-12 text-luxury-gold hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
