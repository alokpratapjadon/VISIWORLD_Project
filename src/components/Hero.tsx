import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import heroVideo from '../Assets/hero section video.mp4';
import mobileHeroVideo from '../Assets/Mobile view weddings (2).mp4';
import oldLogo from '../Assets/IMG_9055.png';
import newLogo from '../Assets/centerheronav.png';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Hero = () => {
  const { scrollY } = useViewportScroll();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setOffsetY(latest);
    });
  }, [scrollY]);

  const translateY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">

      {/* 📱 Mobile Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      >
        <source src={mobileHeroVideo} type="video/mp4" />
      </video>

      {/* 💻 Desktop Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🔰 Mobile Top Logo Row - now scrolls with content */}
      <div className="relative z-30 flex items-center px-4 py-3 md:hidden bg-black/30 backdrop-blur-sm">
        {/* Left Logo */}
        <div className="flex-1 flex justify-start">
          <img src={oldLogo} alt="Left Logo" className="h-20 w-auto object-contain" />
        </div>
        
        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <img src={newLogo} alt="Center Logo" className="h-20 w-auto object-contain" />
        </div>
        
        {/* Right Placeholder */}
        <div className="flex-1" />
      </div>

      {/* 🖥️ Desktop Topbar */}
      <div className="absolute top-0 left-0 right-0 z-30 hidden md:flex items-center justify-between px-10 py-4">
        {/* Left Logo */}
        <img src={oldLogo} alt="Old Brand Logo" className="h-32 w-auto object-contain" />
        
        {/* Centered Logo */}
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
          <img src={newLogo} alt="New Centered Logo" className="h-24 w-auto object-contain" />
        </div>
      </div>

      {/* Menus */}
      <MobileMenu />
      <div className="relative z-20 flex flex-col justify-center h-screen">
        <DesktopMenu />
      </div>
    </section>
  );
};

export default Hero;