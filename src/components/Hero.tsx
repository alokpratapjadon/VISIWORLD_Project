import heroVideo from '../Assets/EventVideo.mp4';
import oldLogo from '../Assets/IMG_9055.png';
import newLogo from '../Assets/centerheronav.png';
import MobileMenu from './MobileMenu';

const Hero = () => {
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
