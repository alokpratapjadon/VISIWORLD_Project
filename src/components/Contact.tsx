import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import EventDomainDropdown from './EventDomainDropdown';
import { emailjsConfig } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    eventDomain: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        client_email: formData.email,
        phone: formData.phone,
        event_domain: formData.eventDomain,
        message: formData.message,
        to_name: 'Visiworld Team',
        subject: `New Contact Form Submission from ${formData.name}`,
      };

      await emailjs.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        templateParams,
        emailjsConfig.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        eventDomain: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const contactInfo = [
    {
      title: "Phone",
      details: ["+91 87654 32109"],
      icon: "📞"
    },
    {
      title: "Email",
      details: ["info@visiworld.in", "CEO@visiworld.in"],
      icon: "✉️"
    },
        {
          title: "Address",
          details: [
            "Visiworld events and travel Pvt. Ltd.",
            "Operations office - UNIT NO 25, Ground floor, HUDA Auto market area,",
            "Sector 12, Bahadurgarh- badli road, Bahadurgarh, Haryana 124507"
          ],
          icon: "🏠"
        },
    {
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat - Sun: 11:00 AM - 3:00 PM"],
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
          <p className="text-luxury-gold font-medium text-2xl md:text-2xl uppercase tracking-wide mb-4 font-poppins">CONTACT US</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 md:mb-12 font-poppins">
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
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6 md:mb-8 font-poppins">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={e => handleChange(e.target.name, e.target.value)}
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
                      onChange={e => handleChange(e.target.name, e.target.value)}
                      className="w-full px-0 py-3 md:py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-luxury-gold focus:outline-none text-gray-900 placeholder-gray-500 text-base md:text-lg font-prata transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone number"
                      value={formData.phone}
                      onChange={e => handleChange(e.target.name, e.target.value)}
                      className="w-full px-0 py-3 md:py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-luxury-gold focus:outline-none text-gray-900 placeholder-gray-500 text-base md:text-lg font-prata transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <EventDomainDropdown
                      value={formData.eventDomain}
                      onChange={val => handleChange('eventDomain', val)}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={e => handleChange(e.target.name, e.target.value)}
                      rows={6}
                      className="w-full px-0 py-3 md:py-4 bg-transparent border-0 border-b-2 border-gray-300 focus:border-luxury-gold focus:outline-none text-gray-900 placeholder-gray-500 resize-none text-base md:text-lg font-poppins transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full md:w-auto bg-luxury-gold text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 text-base md:text-lg font-poppins shadow-lg ${
                        isSubmitting 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-luxury-darkgold hover:scale-105'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 md:w-5 md:h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium">{submitMessage}</span>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-medium">{submitMessage}</span>
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="relative z-20">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6 md:mb-8 font-poppins">Get in touch</h3>
                
                <div className="space-y-6 md:space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-luxury-gold to-luxury-darkgold rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform hover:scale-110 transition-all duration-300">
                        <span className="text-xl md:text-2xl">{info.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 font-prata">{info.title}</h4>
                        {info.title === "Address" ? (
                          <>
                            <p className="text-lg font-semibold text-gray-600 font-poppins" key="main">{info.details[0]}</p>
                            {info.details.slice(1).map((detail, idx) => (
                              <p key={idx} className="text-sm text-gray-600 font-poppins">{detail}</p>
                            ))}
                          </>
                        ) : (
                          info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm md:text-base text-gray-600 font-poppins">{detail}</p>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-8 md:mt-12 rounded-2xl overflow-hidden shadow-2xl border border-white/40 max-w-full">
                <iframe
                  title="Gurugram Map"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2559.6773693843497!2d76.91213169379019!3d28.66977065668689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzA4LjQiTiA3NsKwNTQnNTAuMSJF!5e0!3m2!1sen!2sin!4v1754122512903!5m2!1sen!2sin"
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
    </section>
  );
};

export default Contact;
