import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import all image assets
import CorporateEventImg from '../Assets/CorprateEvent.jpg';
import ConcertImg from '../Assets/IMG_9058.jpg';
import DestinationImg from '../Assets/Destination.jpg';
import WeddingImg from '../Assets/IMG_9061.jpg';
import CorporateTravelImg from '../Assets/corporate travel.jpg';
import HotelTravelImg from '../Assets/IMG_9059.jpg';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Corporate & Social Events",
      description: "Professional corporate events and social gatherings tailored to your brand and objectives.",
      image: CorporateEventImg,
      slug: "corporate-events"
    },
    {
      title: "Concerts",
      description: "Large-scale concert production and music event management with world-class production values.",
      image: ConcertImg,
      slug: "concerts"
    },
    {
      title: "Destination Management",
      description: "Curated destination experiences and incentive travel programs for corporate rewards.",
      image: DestinationImg,
      slug: "destination-management"
    },
    {
      title: "Weddings",
      description: "Dream wedding planning and execution, creating magical moments for your special day.",
      image: WeddingImg,
      slug: "weddings"
    },
    {
      title: "MICE / Corporate Travel",
      description: "Meetings, Incentives, Conferences, and Events with seamless corporate travel solutions.",
      image: CorporateTravelImg,
      slug: "mice-travel"
    },
    {
      title: "Hotel & Travel Services",
      description: "Complete travel support including accommodations, ticketing, and visa assistance.",
      image: HotelTravelImg,
      slug: "travel-services"
    }
  ];

  const handleServiceClick = (slug: string) => {
    window.location.href = `#${slug}`;
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-luxury-gold font-medium text-xs md:text-sm uppercase tracking-wide mb-4 font-prata">OUR SERVICES</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 font-prata">
            EXCEPTIONAL SERVICES
          </h2>
        </div>

        <div className="relative">
          {/* Custom SVG Navigation Buttons */}
          <div className="absolute z-10 -left-6 top-1/2 -translate-y-1/2 hidden md:flex">
            <div className="swiper-button-prev-custom backdrop-blur-md bg-white/60 p-2 rounded-full shadow hover:scale-110 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-black" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="absolute z-10 -right-6 top-1/2 -translate-y-1/2 hidden md:flex">
            <div className="swiper-button-next-custom backdrop-blur-md bg-white/60 p-2 rounded-full shadow hover:scale-110 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-black" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-full"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className="group cursor-pointer bg-white shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden rounded-lg"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleServiceClick(service.slug)}
                >
                  <div className="relative h-56 md:h-60 overflow-hidden rounded-t-lg">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url("${service.image}")` }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t from-luxury-gold/10 to-transparent transition-opacity duration-500 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>

                  <div className="p-5 md:p-6 bg-white relative rounded-b-lg">
                    <h3 className="text-lg md:text-xl font-light text-gray-900 mb-3 font-prata">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 font-prata">
                      {service.description}
                    </p>
                    <div className={`absolute bottom-0 left-0 right-0 bg-luxury-gold/10 backdrop-blur-sm p-3 flex items-center justify-between transition-all duration-500 ${
                      hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                    } rounded-b-lg`}>
                      <span className="text-luxury-gold font-semibold font-prata text-sm">View Details</span>
                      <ArrowRight className="w-4 h-4 text-luxury-gold transform group-hover:translate-x-1 transition-transform duration-300 bg-white p-1 rounded-full" />
                    </div>
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

export default Services;
