
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  showTitle?: boolean;
  title?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '', showTitle = false, title }) => {
  return (
    <section id={id} className={`min-h-screen py-24 px-6 md:px-12 lg:px-24 relative flex flex-col ${className}`}>
      {showTitle && (
        <div className="mb-16 flex items-center gap-4">
          <div className="w-4 h-4 bg-[#FF007F]" />
          <h2 className="text-2xl font-pixel text-[#FF007F] uppercase tracking-tighter">
            {title || id}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
};
