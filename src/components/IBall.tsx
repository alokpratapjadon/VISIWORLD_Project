import React, { useState, useRef, useEffect } from 'react';
import './ball.css';
import { Instagram, Facebook } from 'lucide-react';

// Twitter X logo SVG
const TwitterXIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-black">
    <path d="M20.998 3H16.57l-4.12 5.25L8.63 3H3l6.56 9L3 21h4.43l4.23-5.39L15.37 21h5.63l-6.77-8.91L20.998 3z" />
  </svg>
);

// WhatsApp SVG
const WhatsAppIcon = () => (
  <svg fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 text-green-500">
    <path d="M16 3C9.383 3 4 8.383 4 15c0 2.572.798 4.963 2.157 6.932L4 29l7.273-2.067A11.934 11.934 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22a9.978 9.978 0 0 1-5.17-1.47l-.37-.232-4.44 1.26 1.27-4.317-.244-.38A9.956 9.956 0 0 1 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.027-7.454c-.272-.137-1.61-.796-1.86-.886s-.43-.137-.612.137c-.183.272-.7.886-.858 1.068-.157.183-.314.205-.586.068-.272-.137-1.147-.423-2.184-1.348-.807-.717-1.35-1.602-1.506-1.874-.157-.272-.017-.42.12-.557.123-.122.273-.317.41-.478.137-.162.183-.272.273-.454.091-.183.045-.34-.023-.478-.068-.137-.612-1.474-.84-2.021-.22-.528-.445-.456-.612-.465-.157-.008-.34-.01-.523-.01s-.478.068-.73.34c-.252.272-.956.933-.956 2.274s.979 2.634 1.114 2.816c.137.183 1.928 2.943 4.68 4.125.655.283 1.164.453 1.562.578.656.208 1.252.18 1.723.109.525-.078 1.61-.656 1.838-1.29.229-.635.229-1.18.16-1.29-.068-.109-.25-.183-.523-.317z" />
  </svg>
);

const AssistiveTouchButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 10, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [menuDirection, setMenuDirection] = useState<'left' | 'right'>('right');
  const offset = useRef({ x: 0, y: 0 });

  const buttonSize = 50;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (position.x + 150 + 50 > screenWidth) {
        setMenuDirection('left');
      } else {
        setMenuDirection('right');
      }
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      let clientX = 0;
      let clientY = 0;

      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      setPosition({
        x: clientX - offset.current.x,
        y: clientY - offset.current.y,
      });
    };

    const handleEnd = () => {
      if (!isDragging) return;
      setIsDragging(false);

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let newX = position.x;
      let newY = position.y;

      if (position.x < screenWidth / 2) {
        newX = 10;
        setMenuDirection('right');
      } else {
        newX = screenWidth - buttonSize - 10;
        setMenuDirection('left');
      }

      const topLimit = 10;
      const bottomLimit = screenHeight - buttonSize - 10;
      if (newY < topLimit) newY = topLimit;
      if (newY > bottomLimit) newY = bottomLimit;

      setPosition({ x: newX, y: newY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, position]);

  const handleDragStart = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => {
    setIsDragging(true);

    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    offset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (link: string) => {
    window.open(link, '_blank');
    setIsMenuOpen(false);
  };

  const menuItems = [
    { icon: <Instagram className="w-5 h-5 text-pink-500" />, link: 'https://instagram.com' },
    { icon: <TwitterXIcon />, link: 'https://x.com' },
    { icon: <Facebook className="w-5 h-5 text-blue-600" />, link: 'https://facebook.com' },
    { icon: <WhatsAppIcon />, link: 'https://wa.me' },
  ];

  return (
    <div
      className="assistive-touch-container"
      style={{ left: position.x, top: position.y, position: 'fixed' }}
    >
      <button
        className="assistive-touch-button"
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onClick={handleButtonClick}
      >
        ⚪
      </button>

      {isMenuOpen && (
        <div className={`assistive-touch-menu ${menuDirection === 'left' ? 'open-left' : ''}`}>
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item" onClick={() => handleMenuItemClick(item.link)}>
              <span className="menu-icon">{item.icon}</span>
            </div>
          ))}
          <button className="menu-close-button" onClick={() => setIsMenuOpen(false)}>
            ✖️
          </button>
        </div>
      )}
    </div>
  );
};

export default AssistiveTouchButton;