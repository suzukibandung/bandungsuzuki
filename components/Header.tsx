
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-8 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-700">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-4">
          <img 
            src="https://i.imghippo.com/files/vI4096mro.png" 
            alt="Suzuki Logo" 
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">
            SUZUKI BANDUNG
          </h1>
        </div>
        <p className="text-blue-500 mt-2 text-sm sm:text-base">PT.NUSANTARA JAYA SENTOSA</p>
      </div>
    </header>
  );
};

export default Header;