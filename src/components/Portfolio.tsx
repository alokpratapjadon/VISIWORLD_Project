import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import WeddingEvent from "../Assets/wedding.jpg";
import MusicFestival from "../Assets/music.jpg.webp";
import ProductLaunch from "../Assets/event.webp";
import IncentiveTour from "../Assets/insentive.jpg";
import InternationalConference from "../Assets/tour.jpg";

const portfolioItems = [
  { image: WeddingEvent, title: "Destination Wedding" },
  { image: MusicFestival, title: "Music Festival" },
  { image: ProductLaunch, title: "Product Launch" },
  { image: IncentiveTour, title: "Incentive Tour" },
  { image: InternationalConference, title: "International Trip" },
];

// Define overlay colors for each card
const overlayColors = [
  { main: 'bg-green-600', secondary: 'bg-green-500' },
  { main: 'bg-blue-600', secondary: 'bg-blue-500' },
  { main: 'bg-red-600', secondary: 'bg-red-500' },
  { main: 'bg-yellow-600', secondary: 'bg-yellow-500' },
  { main: 'bg-purple-600', secondary: 'bg-purple-500' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-luxury-gold font-medium text-2xl md:text-2xl uppercase tracking-wide mb-4 font-poppins">
            RECENT SERVICES
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 font-poppins">
            Innovation Meets Celebration
          </h2>
        </div>

        {/* Swiper */}
        <div className="relative">
          {/* Custom Arrows */}
          <div className="absolute z-20 top-1/2 -translate-y-1/2 left-0 pl-1 hidden md:flex">
            <div className="swiper-button-prev-custom bg-white shadow p-2 rounded-full hover:scale-110 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-black" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M15 18L9 12l6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="absolute z-20 top-1/2 -translate-y-1/2 right-0 pr-1 hidden md:flex">
            <div className="swiper-button-next-custom bg-white shadow p-2 rounded-full hover:scale-110 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-black" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: true,
              },
            }}
            spaceBetween={30}
            className="max-w-full"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[480px] overflow-hidden group">
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                  />

            {/* Sleek Bottom-Right Diagonal Overlay */}
            <div
              className={`absolute bottom-0 right-0 w-full h-full ${overlayColors[index % overlayColors.length].main} opacity-80 z-10 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-in-out`}
              style={{ clipPath: 'polygon(100% 100%, 70% 100%, 100% 70%)' }}
            />

            {/* Optional Top-Left Sleek Overlay */}
            <div
              className={`absolute top-0 left-0 w-full h-full ${overlayColors[index % overlayColors.length].secondary} opacity-80 z-10 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-in-out`}
              style={{ clipPath: 'polygon(0 0, 30% 0, 0 30%)' }}
            />

                  {/* Title Text */}
                  <div className="absolute bottom-6 left-6 z-20 transition-transform duration-700 ease-in-out group-hover:-translate-y-4">
                    <h3 className="text-white text-2xl font-bold drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
