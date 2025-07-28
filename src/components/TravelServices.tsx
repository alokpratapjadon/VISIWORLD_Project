import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHotel, FaPlane, FaPassport, FaStar, FaUsers } from 'react-icons/fa';
import logo from '../Assets/IMG_9055.png';
import wedding1 from '../Assets/wedding1.jpg';
import wedding2 from '../Assets/wedding2.jpg';
import wedding3 from '../Assets/wedding3.jpg';
import travelServicesVideo from '../Assets/hotel&travel.mp4';

const offerings = [
  {
    title: 'Hotel Bookings',
    text: 'Wide range of hotels to suit all budgets and preferences.',
  },
  {
    title: 'Flight & Transport',
    text: 'Efficient and timely travel arrangements for all needs.',
  },
  {
    title: 'Visa Processing',
    text: 'Expert assistance to ensure hassle-free visa approvals.',
  },
];

const featuredServices = [
  {
    title: 'Accommodations',
    desc: 'Premium hotel bookings and stays',
    image: wedding1,
    imageAlt: 'Accommodations',
  },
  {
    title: 'Ticketing',
    desc: 'Efficient flight and transport arrangements',
    image: wedding2,
    imageAlt: 'Ticketing',
  },
  {
    title: 'Visa Assistance',
    desc: 'Smooth processing for international travel',
    image: wedding3,
    imageAlt: 'Visa Assistance',
  },
];

const testimonials = [
  {
    quote: "Visiworld made our travel seamless and stress-free. Highly recommend their services!",
    author: "Sarah K.",
  },
  {
    quote: "Excellent hotel options and great customer support throughout our trip.",
    author: "James L.",
  },
  {
    quote: "Their visa assistance saved us a lot of time and hassle. Very professional team.",
    author: "Anita P.",
  },
];

const TravelServices = () => {
  return (
<div className="bg-white/30 backdrop-blur-lg bg-clip-padding border border-white/30 rounded-3xl text-[#333] font-poppins relative min-h-screen mx-4 md:mx-20 my-10 p-6 md:p-12 shadow-lg">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-30">
        <Link to="/">
          <img src={logo} alt="Visiworld Logo" className="h-24 w-auto md:h-28" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={travelServicesVideo}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            HOTEL & TRAVEL SERVICES
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl max-w-2xl font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Complete travel support including accommodations, ticketing, and visa assistance.
          </motion.p>
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-6 md:px-20 bg-[#fffaf0]">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-6 md:px-20 bg-[#fdf6e3]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
            Featured Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredServices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden transform transition-transform hover:scale-[1.05] duration-300 shadow-md border border-yellow-400 bg-gradient-to-br from-[#fff7db] via-[#fff3c4] to-[#f9e79f] hover:shadow-yellow-400/40"
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h4 className="text-xl font-bold text-[#222]">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="border-l-4 border-yellow-400 pl-6 italic text-gray-700 text-lg"
            >
              “{item.quote}”
              <footer className="mt-4 font-bold text-yellow-600">- {item.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TravelServices;
