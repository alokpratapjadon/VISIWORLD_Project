import React, { useState, useRef, useEffect } from 'react';

interface EventDomainDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options?: { value: string; label: string }[];
}

const defaultOptions = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'travel', label: 'Travel' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'concert', label: 'Concert' },
  { value: 'other', label: 'Other' },
];

const EventDomainDropdown: React.FC<EventDomainDropdownProps> = ({
  value,
  onChange,
  options = defaultOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedLabel = options.find(opt => opt.value === value)?.label || 'Select Event Domain';

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleOpen}
        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-luxury-gold focus:outline-none text-gray-900 text-base md:text-lg font-prata px-4 py-3 flex justify-between items-center rounded-md transition-all duration-300"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedLabel}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <ul
          className="absolute z-50 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none"
          role="listbox"
          tabIndex={-1}
        >
          {options.map(opt => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              className={`cursor-pointer select-none relative py-2 pl-4 pr-4 hover:bg-luxury-gold hover:text-white ${
                value === opt.value ? 'font-semibold bg-luxury-gold text-white' : 'text-gray-900'
              }`}
              onClick={() => handleOptionClick(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventDomainDropdown;
