
import React from 'react';

export const Navigation: React.FC = () => {
  const links = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference p-6 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <a href="#hero" className="font-pixel text-2xl md:text-3xl text-[#FF007F] hover:text-white transition-colors">
          OT*
        </a>
      </div>
      <div className="flex gap-6 md:gap-12 pointer-events-auto">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xl md:text-2xl font-pixel tracking-widest text-white hover:text-[#FF007F] transition-all"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
