import React, { useState, useRef, useEffect } from 'react';
import './ball.css';
import { Instagram, Facebook, Twitter, MessageCircleX } from 'lucide-react';

const AssistiveTouchButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 10, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [menuDirection, setMenuDirection] = useState('right');
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

    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.current.x,
          y: e.clientY - offset.current.y,
        });
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
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
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, position]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (link) => {
    window.open(link, '_blank');
    setIsMenuOpen(false);
  };

  const menuItems = [
    { icon: <Instagram className="w-5 h-5 text-pink-500" />, link: 'https://instagram.com' },
    { icon: <Twitter className="w-5 h-5 text-blue-400" />, link: 'https://x.com' },
    { icon: <Facebook className="w-5 h-5 text-blue-600" />, link: 'https://facebook.com' },
    { icon: <MessageCircleX className="w-5 h-5 text-green-500" />, link: 'https://wa.me' },
  ];

  return (
    <div className="assistive-touch-container" style={{ left: position.x, top: position.y }}>
      <button
        className="assistive-touch-button"
        onMouseDown={handleMouseDown}
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