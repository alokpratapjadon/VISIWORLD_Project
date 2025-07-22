import { motion } from 'framer-motion';
import logo from '../Assets/IMG_9055.png';
import corporate1 from '../Assets/corporate1.jpg';
import corporate2 from '../Assets/corporate2.jpg';
import corporate3 from '../Assets/corporate3.jpg';
import corporateVideo from '../Assets/corporate.mp4';
// import corporateVideoWebm from '../Assets/corporate.webm'; // New WebM video import

const CorporateEvents = () => {
  const images = [
    { src: corporate1, title: 'Leadership Summit', desc: 'Bangalore, 2024' },
    { src: corporate2, title: 'Product Launch Gala', desc: 'Mumbai, 2023' },
    { src: corporate3, title: 'Annual Employee Meet', desc: 'Hyderabad, 2023' },
    { src: corporate1, title: 'CSR Drive & Outreach', desc: 'Delhi NCR, 2024' },
    { src: corporate2, title: 'Global Investor Meet', desc: 'Pune, 2023' },
    { src: corporate3, title: 'Tech Innovation Forum', desc: 'Chennai, 2024' }
  ];

  return (
    <div className="bg-white text-black font-poppins">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-30">
        <img src={logo} alt="Visiworld Logo" className="h-24 w-auto md:h-28" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={corporate1} // Use a poster image for better perceived performance
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          {/* <source src={corporateVideoWebm} type="video/webm" /> */}
          <source src={corporateVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
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
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Corporate Summits</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Meticulously planned large-scale conferences and board-level events with end-to-end solutions.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Product Launches</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Creative and technical execution of product unveilings tailored to impress clients and media.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Annual Meets</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Comprehensive planning of annual company-wide functions including awards, entertainment, and catering.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default CorporateEvents;
