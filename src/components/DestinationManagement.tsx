import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../Assets/IMG_9055.png';
import wedding1 from '../Assets/Destination2.jpg';
import wedding2 from '../Assets/Destination3.jpg';
import wedding3 from '../Assets/Destination1.jpg';
import destinationVideo from '../Assets/Destination1Video.mp4';

const DestinationManagement = () => {
  const images = [
    { src: wedding1, title: 'Corporate incentive trip for 100+ employees', desc: '' },
    { src: wedding2, title: 'Destination wedding in Jaipur with full guest management', desc: '' },
    { src: wedding3, title: 'Weekend retreat for a company’s leadership team', desc: '' },
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
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={destinationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            DESTINATION EVENTS & GROUP TOURS
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl max-w-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Handling destination weddings, corporate retreats, incentive trips, and group travel packages.
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
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">Complete travel and stay arrangements</h3>
            <p className="text-gray-700 text-base leading-relaxed">Comprehensive planning and booking of accommodations and transportation for seamless travel experiences.</p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">Destination wedding coordination</h3>
            <p className="text-gray-700 text-base leading-relaxed">Expert management of all aspects of destination weddings to ensure a flawless celebration.</p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">Corporate retreats and team-building programs</h3>
            <p className="text-gray-700 text-base leading-relaxed">Tailored retreats and activities designed to strengthen team dynamics and boost morale.</p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">Guided group tours and activities</h3>
            <p className="text-gray-700 text-base leading-relaxed">Curated tours and experiences led by knowledgeable guides to enrich group travel.</p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">On-site logistics and ground support</h3>
            <p className="text-gray-700 text-base leading-relaxed">Efficient coordination of event logistics and support services on location.</p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-extrabold mb-4 text-yellow-700">Customized itineraries for groups</h3>
            <p className="text-gray-700 text-base leading-relaxed">Personalized travel plans designed to meet the unique needs of each group.</p>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-6 md:px-20 bg-[#fdf6e3]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text">
            Featured Destinations
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

export default DestinationManagement;
