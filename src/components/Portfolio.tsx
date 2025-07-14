import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Images
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

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 md:py-20 bg-gray-50 relative">
      {/* Decorative Curves */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg className="w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C300,0 900,0 1200,120 L1200,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-luxury-gold font-medium text-xs md:text-sm uppercase tracking-wide mb-4 font-prata">
              RECENT SERVICES
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 font-prata">
              RECENT EVENTS
            </h2>
          </div>

          <div className="relative">
            {/* Custom Arrows */}
            <div className="absolute z-20 top-1/2 -translate-y-1/2 left-0 pl-1 hidden md:flex">
              <div className="swiper-button-prev-custom backdrop-blur-md bg-white/60 p-2 rounded-full shadow hover:scale-110 transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-black" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute z-20 top-1/2 -translate-y-1/2 right-0 pr-1 hidden md:flex">
              <div className="swiper-button-next-custom backdrop-blur-md bg-white/60 p-2 rounded-full shadow hover:scale-110 transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-black" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Swiper */}
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
                }
              }}
              spaceBetween={30}
              className="max-w-full"
            >
              {portfolioItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative mx-auto w-72 md:w-80 h-48 md:h-56 rounded-xl cursor-pointer group overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-1000 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white bg-gradient-to-t from-black/40 to-transparent">
                      <h3
                        className={`text-lg md:text-xl font-light font-prata ${
                          item.title === "Destination Wedding"
                            ? "drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]"
                            : ""
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;