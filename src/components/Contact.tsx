import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      icon: "📞"
    },
    {
      title: "Email",
      details: ["hello@eventra.com", "events@eventra.com"],
      icon: "✉️"
    },
    {
      title: "Address",
      details: ["123 Luxury Avenue", "Mumbai, India 400001"],
      icon: "🏠"
    },
    {
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      icon: "🕐"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-luxury-gold rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-luxury-gold font-medium text-xs md:text-sm uppercase tracking-wide mb-4 font-prata">CONTACT US</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 font-prata">
            LET'S TALK
          </h2>
        </div>

        {/* Multi-layered Contact Container */}
        <div className="relative">
          {/* Background Card */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl transform rotate-1"></div>
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl transform -rotate-1"></div>
          
          {/* Main Content Card */}
          <div className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
              {/* Contact Form */}
              <div className="relative z-20">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6 md:mb-8 font-prata">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-3 md:py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-luxury-gold focus:outline-none text-gray-900 placeholder-gray-500 text-base md:text-lg font-prata transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-3 md:py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-luxury-gold focus:outline-none text-gray-900 placeholder-gray-500 text-base md:text-lg font-prata transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-0 py-3 md:py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-luxury-gold focus:outline-none text-gray-900 placeholder-gray-500 resize-none text-base md:text-lg font-prata transition-all duration-300"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-luxury-gold text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-luxury-darkgold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-base md:text-lg font-prata shadow-lg"
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Contact Information & Map */}
              <div className="relative z-20">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6 md:mb-8 font-prata">Get in touch</h3>
                
                <div className="space-y-6 md:space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-luxury-gold to-luxury-darkgold rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform hover:scale-110 transition-all duration-300">
                        <span className="text-xl md:text-2xl">{info.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 font-prata">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm md:text-base text-gray-600 font-prata">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Embedded Google Map */}
                <div className="mt-8 md:mt-12 rounded-2xl overflow-hidden shadow-2xl border border-white/40">
                  <iframe
                    title="Gurugram Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.4763577788!2d76.82527005787213!3d28.4228038433857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1752181628921!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[350px] md:h-[400px]"
                  ></iframe>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;