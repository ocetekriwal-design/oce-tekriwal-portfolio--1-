

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: 'WORK', id: 'work' },
    { name: 'ABOUT', id: 'about' },
    { name: 'CONTACT', id: 'contact' }
  ];

  const handleNav = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a subpage, navigate back home first
      navigate('/');
      // Delay scroll slightly to allow home page to mount
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference p-6 flex justify-between items-center">
      <div className="z-50">
        <button 
          onClick={() => handleNav('hero')}
          className="font-pixel text-2xl md:text-4xl text-[#FF007F] hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none"
        >
          OT*
        </button>
      </div>
      <div className="flex gap-6 md:gap-12 z-50">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNav(link.id)}
            className="text-2xl md:text-3xl font-pixel tracking-widest text-white hover:text-[#FF007F] transition-all cursor-pointer bg-transparent border-none outline-none"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};
