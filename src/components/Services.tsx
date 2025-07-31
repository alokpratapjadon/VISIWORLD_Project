import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import all image assets
import CorporateEventImg from '../Assets/CorprateEvent.jpg';
import ConcertImg from '../Assets/IMG_9058.jpg';
import DestinationImg from '../Assets/Destination1.jpg';
import WeddingImg from '../Assets/wedding11.jpg';
import CorporateTravelImg from '../Assets/corporate travel.jpg';
import HotelTravelImg from '../Assets/IMG_9059.jpg';
import ExhibitionImg from '../Assets/event.jpg'; // Assuming this image for Exhibitions

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Corporate Events",
      description: "Planning and managing conferences, seminars, product launches, corporate parties and celebrations for businesses.",
      image: CorporateEventImg,
      slug: "corporate-events"
    },
    {
      title: "Exhibitions",
      description: "End-to-end setup and management of trade fairs, stalls, booths, and expo participation for brands.",
      image: ExhibitionImg,
      slug: "exhibitions"
    },
    {
      title: "Weddings & Private Celebrations",
      description: "Complete arrangements for weddings, anniversaries, birthdays, and other family events, including décor and entertainment.",
      image: WeddingImg,
      slug: "weddings"
    },
    {
      title: "Concerts & Entertainment Shows",
      description: "Organizing live concerts, celebrity performances, music festivals, and cultural events.",
      image: ConcertImg,
      slug: "concerts"
    },
    {
      title: "Destination Events & Group Tours",
      description: "Handling destination weddings, corporate retreats, incentive trips, and group travel packages.",
      image: DestinationImg,
      slug: "destination-management"
    },
    {
      title: "Travel & Hospitality Services",
      description: "Assistance with hotel bookings, flights, visa, and local transport for individuals and event groups.",
      image: HotelTravelImg,
      slug: "travel-services"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 animate-gradient-x opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-luxury-gold font-semibold text-2xl md:text-2xl uppercase tracking-wide mb-4 font-poppins">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-6xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 font-poppins">
            Precision and Passion
          </h2>
        </div>

        <div className="relative">
          {/* Custom SVG Navigation Buttons */}
          <div className="absolute z-10 -left-6 top-1/2 -translate-y-1/2 hidden md:flex">
            <div className="swiper-button-prev-custom backdrop-blur-md bg-white/60 p-2 rounded-full shadow hover:shadow-yellow-400 hover:scale-110 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-yellow-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="absolute z-10 -right-6 top-1/2 -translate-y-1/2 hidden md:flex">
            <div className="swiper-button-next-custom backdrop-blur-md bg-white/60 p-2 rounded-full shadow hover:shadow-yellow-400 hover:scale-110 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-yellow-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
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
                <Link
                  to={`/services/${service.slug}`}
                  className="group block bg-white shadow-lg hover:shadow-yellow-400 transition-all duration-500 overflow-hidden rounded-lg border border-yellow-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-56 md:h-60 overflow-hidden rounded-t-lg">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url("${service.image}")` }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t from-luxury-gold/20 to-transparent transition-opacity duration-500 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>

                  <div className="p-5 md:p-6 bg-white relative rounded-b-lg">
                    <h3 className="text-lg md:text-xl font-light text-yellow-700 mb-3 font-prata">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 font-prata">
                      {service.description}
                    </p>
                    <div className={`absolute bottom-0 left-0 right-0 bg-yellow-100 backdrop-blur-sm p-3 flex items-center justify-between transition-all duration-500 ${
                      hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
                    } rounded-b-lg`}>
                      <span className="text-yellow-700 font-semibold font-prata text-sm">View Details</span>
                      <ArrowRight className="w-4 h-4 text-yellow-700 transform group-hover:translate-x-1 transition-transform duration-300 bg-white p-1 rounded-full" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;

/* Additional CSS for animation (to be added in tailwind.config.js or global CSS)
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
}
.animate-gradient-x {
  animation: gradient-x 15s ease infinite;
}
*/
