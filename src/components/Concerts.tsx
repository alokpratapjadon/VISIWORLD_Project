import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../Assets/IMG_9055.png';
import concert1 from '../Assets/consert1.jpg';
import concert2 from '../Assets/consert2.jpg';
import concert3 from '../Assets/consert3.jpg';
import concertVideo from '../Assets/consert.mp4';

const Concerts = () => {
  const images = [
    { src: concert1, title: 'International DJ night for a music festival', desc: '' },
    { src: concert2, title: 'Bollywood celebrity concert for a city event', desc: '' },
    { src: concert3, title: 'Cultural festival with multiple stage performances', desc: '' },
  ];

  return (
<div className="bg-white text-[#333] font-poppins relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 animate-gradient-x opacity-20 pointer-events-none"></div>

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
          src={concertVideo}
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
            CONCERTS & ENTERTAINMENT SHOWS
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl max-w-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Organizing live concerts, celebrity performances, music festivals, and cultural events.
          </motion.p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-6 md:px-20 bg-white relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-yellow-600 font-poppins">
          What We Offer
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">Stage design and event production</h3>
            <p className="text-gray-700 text-base leading-relaxed">Innovative stage setups and seamless event production tailored to your show’s needs.</p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">Celebrity and artist bookings</h3>
            <p className="text-gray-700 text-base leading-relaxed">Access to top talent and smooth coordination for memorable performances.</p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">Light, sound, and special effects setup</h3>
            <p className="text-gray-700 text-base leading-relaxed">Cutting-edge audiovisual technology to create immersive experiences.</p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">Crowd management and security</h3>
            <p className="text-gray-700 text-base leading-relaxed">Ensuring safety and smooth flow for all attendees throughout the event.</p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">Ticketing and promotions</h3>
            <p className="text-gray-700 text-base leading-relaxed">Efficient ticket sales and marketing strategies to maximize attendance.</p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">On-ground execution and event staffing</h3>
            <p className="text-gray-700 text-base leading-relaxed">Experienced staff ensuring flawless event delivery from start to finish.</p>
          </div>
        </div>
      </section>

      {/* Featured Concerts */}
      <section className="py-20 px-6 md:px-20 bg-[#fdf6e3]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
            Featured Concerts
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

export default Concerts;
