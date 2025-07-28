'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-white text-[#0A4226] flex items-center justify-center px-4 py-16 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100 to-white opacity-70 -z-10" />

      {/* Decorative circles */}
      <div className="absolute w-96 h-96 bg-green-100 rounded-full top-[-10%] left-[-10%] blur-3xl opacity-30 z-0"></div>
      <div className="absolute w-72 h-72 bg-green-200 rounded-full bottom-[-15%] right-[-5%] blur-2xl opacity-40 z-0"></div>

      <div className="z-10 text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-green-900"
        >
          Crafting Luxury <br />
          <span className="text-green-600">Experiences That Inspire</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-green-800 font-medium"
        >
          From premium weddings to elite corporate galas, we deliver unforgettable moments wrapped in elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link href="/services">
            <button className="bg-green-600 hover:bg-green-700 transition-colors text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg flex items-center gap-2">
              Explore Services <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link href="/about">
            <button className="border border-green-600 text-green-700 hover:bg-green-50 transition-all px-6 py-3 rounded-full text-base font-semibold shadow-md">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;