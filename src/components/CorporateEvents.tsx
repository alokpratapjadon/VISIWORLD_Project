import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../Assets/IMG_9055.png';
import corporate1 from '../Assets/corporate1.jpg';
import corporate2 from '../Assets/corporate2.jpg';
import corporate3 from '../Assets/corporate3.jpg';
import corporateVideo from '../Assets/corporate.mp4';

const CorporateEvents = () => {
  // ✅ Only 3 items now
  const images = [
    { src: corporate1, title: 'Leadership Summit', desc: 'Bangalore, 2024' },
    { src: corporate2, title: 'Product Launch Gala', desc: 'Mumbai, 2023' },
    { src: corporate3, title: 'Annual Employee Meet', desc: 'Hyderabad, 2023' }
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
          src={corporateVideo}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-white text-5xl md:text-6xl font-extrabold tracking-wide mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            LET US MAKE YOUR LIVES EASIER
          </motion.h1>
          <motion.p
            className="text-gray-200 text-lg md:text-xl max-w-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We specialize in crafting unforgettable events for corporate, social, and destination occasions.
          </motion.p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-6 md:px-20 bg-[#fffaf0]">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="rounded-3xl bg-gradient-to-br from-[#fef6da] via-[#fff8e1] to-[#fbeec1] border border-yellow-500 p-8 shadow-xl hover:shadow-yellow-300/50 hover:-translate-y-1 transition duration-300 transform">
            <h3 className="text-2xl font-bold mb-3 text-[#222]">Corporate Summits</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Meticulously planned large-scale conferences and board-level events with end-to-end solutions.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-[#fef6da] via-[#fff8e1] to-[#fbeec1] border border-yellow-500 p-8 shadow-xl hover:shadow-yellow-300/50 hover:-translate-y-1 transition duration-300 transform">
            <h3 className="text-2xl font-bold mb-3 text-[#222]">Product Launches</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Creative and technical execution of product unveilings tailored to impress clients and media.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-[#fef6da] via-[#fff8e1] to-[#fbeec1] border border-yellow-500 p-8 shadow-xl hover:shadow-yellow-300/50 hover:-translate-y-1 transition duration-300 transform">
            <h3 className="text-2xl font-bold mb-3 text-[#222]">Annual Meets</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Comprehensive planning of annual company-wide functions including awards, entertainment, and catering.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-6 md:px-20 bg-[#fdf6e3]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Featured Work</h2>
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

export default CorporateEvents;
