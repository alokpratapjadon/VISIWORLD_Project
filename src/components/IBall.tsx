import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { Facebook, Linkedin, X } from 'lucide-react';

// Redesigned Twitter X SVG
const TwitterXLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="16" fill="#000" />
    <path
      d="M10 10L22 22M22 10L10 22"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M12.5 10H19.5C21.5 10 22 11.5 22 13.5V19.5C22 21.5 21.5 22 19.5 22H12.5C10.5 22 10 21.5 10 19.5V13.5C10 11.5 10.5 10 12.5 10Z"
      stroke="#fff"
      strokeWidth="1.2"
      opacity="0.15"
    />
  </svg>
);

// WhatsApp SVG
const WhatsAppLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="16" fill="#25D366" />
    <path
      d="M16 8.5C11.3 8.5 7.5 12.3 7.5 17c0 1.3.4 2.5 1 3.6L7.5 24.5l4-1c1 0.7 2.2 1 3.5 1 4.7 0 8.5-3.8 8.5-8.5S20.7 8.5 16 8.5zm-1 14c-1.1 0-2.1-.3-3-1l-.3-.2-2.2.5.5-2.2-.2-.3c-.6-.9-.8-1.9-.8-3C9 12.9 12.4 9.5 16 9.5S23 12.9 23 16.5 19.6 23.5 16 23.5z"
      fill="#fff"
    />
  </svg>
);

const IBall = () => {
  const BALL_SIZE = 56;
  const EDGE_PADDING = 0;
  const NAVBAR_HEIGHT = 70;
  const MENU_RADIUS = 70;
  const MENU_ICON_SIZE = 40;

  const [position, setPosition] = useState({ x: EDGE_PADDING, y: NAVBAR_HEIGHT + 10 });
  const [side, setSide] = useState<'left' | 'right'>('left');
  const [isOpen, setIsOpen] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const shortcuts = [
    { icon: <WhatsAppLogo className="w-5 h-5" />, label: 'WhatsApp', link: '#home', color: 'hover:bg-green-500' },
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', link: 'https://facebook.com', color: 'hover:bg-blue-600' },
    { icon: <TwitterXLogo className="w-5 h-5" />, label: 'X', link: 'https://x.com', color: 'hover:bg-black' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', link: 'https://linkedin.com', color: 'hover:bg-blue-700' },
  ];

  const resetIdleTimer = () => {
    setIsIdle(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => setIsIdle(true), 5000);
  };

  const handleStop = (_: any, data: any) => {
    const middle = window.innerWidth / 2;
    const snapToLeft = data.x < middle;
    const x = snapToLeft ? EDGE_PADDING : window.innerWidth - BALL_SIZE - EDGE_PADDING;
    const y = Math.min(Math.max(data.y, NAVBAR_HEIGHT + 10), window.innerHeight - BALL_SIZE - 20);
    setPosition({ x, y });
    setSide(snapToLeft ? 'left' : 'right');
    setIsDragging(false);
    resetIdleTimer();
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
    resetIdleTimer();
  };

  const handleShortcutClick = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      const el = document.querySelector(link);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    resetIdleTimer();
  };

  useEffect(() => {
    resetIdleTimer();
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const maxX = window.innerWidth - BALL_SIZE - EDGE_PADDING;
      const maxY = window.innerHeight - BALL_SIZE - 20;
      setPosition(pos => ({
        x: Math.min(Math.max(pos.x, EDGE_PADDING), maxX),
        y: Math.min(Math.max(pos.y, NAVBAR_HEIGHT + 10), maxY),
      }));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const [startAngle, endAngle] = side === 'left' ? [-90, 90] : [180, 360];

  return (
    <Draggable
      nodeRef={nodeRef}
      axis="y"
      position={position}
      bounds={{
        top: NAVBAR_HEIGHT + 10,
        bottom: window.innerHeight - BALL_SIZE - 20
      }}
      onStart={() => { setIsDragging(true); resetIdleTimer(); }}
      onStop={handleStop}
    >
      <div
        ref={nodeRef}
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: BALL_SIZE,
          height: BALL_SIZE,
          zIndex: 9999,
          opacity: isIdle ? 0.6 : 1,
          transition: isDragging ? 'none' : 'opacity 0.5s',
          touchAction: 'none',
          userSelect: 'none',
        }}
        className="flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          {/* Radial Menu */}
          {isOpen && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="relative" style={{ width: MENU_RADIUS * 2, height: MENU_RADIUS * 2 }}>
                {shortcuts.map((item, idx) => {
                  const angle = startAngle + ((endAngle - startAngle) / (shortcuts.length - 1)) * idx;
                  const rad = (angle * Math.PI) / 180;
                  const x = MENU_RADIUS + MENU_RADIUS * Math.cos(rad) - MENU_ICON_SIZE / 2;
                  const y = MENU_RADIUS + MENU_RADIUS * Math.sin(rad) - MENU_ICON_SIZE / 2;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleShortcutClick(item.link)}
                      className={`absolute w-10 h-10 flex items-center justify-center bg-white text-gray-700 shadow-md rounded-full transform hover:scale-110 transition-all duration-300 ${item.color}`}
                      style={{
                        left: x,
                        top: y,
                        pointerEvents: 'auto',
                      }}
                      title={item.label}
                    >
                      {item.icon}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* iBall Main */}
          <button
            onClick={toggleMenu}
            className={`w-14 h-14 rounded-full border-4 border-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 ${
              isIdle ? 'bg-slate-200/60' : 'bg-black'
            } ${isOpen ? 'rotate-45' : 'rotate-0'}`}
            style={{
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease, opacity 0.5s',
            }}
            title="iBall Menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white transition-transform duration-300" />
            ) : (
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            )}
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default IBall;