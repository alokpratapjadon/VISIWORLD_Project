import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import heroVideo from '../Assets/EventVideo.mp4';
import oldLogo from '../Assets/IMG_9055.png';
import newLogo from '../Assets/centerheronav.png';
import MobileMenu from './MobileMenu';

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setOffsetY(latest);
    });
  }, [scrollY]);

  // Map scrollY to a translateY value for the text
  const translateY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Mobile-only text overlay */}
      <motion.div
        style={{ translateY }}
        className="absolute bottom-10 left-4 right-4 z-20 font-poppins text-left block md:hidden"
      >
        <h2 className="font-bold text-5xl mb-2 text-white/60">Crafting Unforgettable Experiences</h2>
        <p className="text-sm leading-snug whitespace-pre-line text-white/50">
          Creating extraordinary experiences and unforgettable moments{'\n'}
          through luxury event management and bespoke celebrations.
        </p>
      </motion.div>

      {/* Top Bar with Old Logo */}
      <div className="relative absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 md:px-10">
        <img src={oldLogo} alt="Old Brand Logo" className="h-20 md:h-28 lg:h-32 w-auto object-contain" />
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
          <img src={newLogo} alt="New Centered Logo" className="h-16 md:h-20 lg:h-24 w-auto object-contain" />
        </div>
      </div>

      <MobileMenu />

      {/* 🖥️ Desktop Sidebar Nav */}
      {/* (Desktop sidebar nav code unchanged) */}
    </section>
  );
};

export default Hero;
