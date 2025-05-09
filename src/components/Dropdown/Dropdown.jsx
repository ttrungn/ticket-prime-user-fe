import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ className, buttonLabel, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-2xl bg-white px-3 py-2 font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={toggleDropdown}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-haspopup="true"
        >
          {buttonLabel}
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden ${
          isOpen ? 'transition-all transform opacity-100 scale-100' : 'transition-all transform opacity-0 scale-95'
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div role="none">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link || '#'}
              className="block px-4 py-2 hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id={`menu-item-${index}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-black">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
