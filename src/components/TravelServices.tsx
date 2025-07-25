import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../Assets/IMG_9055.png';
import wedding1 from '../Assets/wedding1.jpg';
import wedding2 from '../Assets/wedding2.jpg';
import wedding3 from '../Assets/wedding3.jpg';
import travelServicesVideo from '../Assets/hotel&travel.mp4';

const TravelServices = () => {
  const images = [
    { src: wedding1, title: 'Accommodations', desc: 'Premium hotel bookings and stays' },
    { src: wedding2, title: 'Ticketing', desc: 'Efficient flight and transport arrangements' },
    { src: wedding3, title: 'Visa Assistance', desc: 'Smooth processing for international travel' },
  ];

  return (
    <div className="bg-[#fcf9ed] text-[#333] font-poppins relative">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-30">
        <Link to="/">
          <img src={logo} alt="Visiworld Logo" className="h-24 w-auto md:h-28" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
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
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* darker overlay */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            HOTEL & TRAVEL SERVICES
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl max-w-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Complete travel support including accommodations, ticketing, and visa assistance.
          </motion.p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-6 md:px-20 bg-[#fffaf0]">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
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
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl shadow-xl border border-yellow-500 bg-gradient-to-br from-[#fef6da] via-[#fff8e1] to-[#fbeec1] hover:shadow-yellow-300/50 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-extrabold mb-4 text-[#222]">{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* "And more..." */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg md:text-xl font-medium text-gray-700">
            ...and much more to make your travel experience smooth and enjoyable.
          </p>
          <p className="mt-2 text-sm text-yellow-700 italic">
            From bookings to travel support, we handle every detail.
          </p>
        </motion.div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-6 md:px-20 bg-[#fdf6e3]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
            Featured Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden transform transition-transform hover:scale-[1.03] duration-300 shadow-md border border-yellow-400 bg-gradient-to-br from-[#fff7db] via-[#fff3c4] to-[#f9e79f] hover:shadow-yellow-400/40"
            >
              <img
                src={item.src}
                alt={item.title}
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
    </div>
  );
};

export default TravelServices;
