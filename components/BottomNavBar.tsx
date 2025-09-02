
import React from 'react';
import { TestDriveIcon, CalculatorIcon, ContactIcon } from './icons';

interface BottomNavBarProps {
  onTestDriveClick: () => void;
  onCreditSimulationClick: () => void;
  onContactClick: () => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ onTestDriveClick, onCreditSimulationClick, onContactClick }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-lg border-t border-gray-700 z-40">
      <div className="container mx-auto flex justify-around items-stretch h-20">
        <button
          onClick={onCreditSimulationClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 text-gray-300 hover:text-white hover:bg-gray-800 font-semibold transition-all duration-300 text-sm"
          aria-label="Open credit simulation form"
        >
          <CalculatorIcon className="w-7 h-7" />
          <span>Simulasi Kredit</span>
        </button>
        <div className="w-px bg-gray-700 my-3"></div>
        <button
          onClick={onTestDriveClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 text-gray-300 hover:text-white hover:bg-gray-800 font-semibold transition-all duration-300 text-sm"
          aria-label="Open test drive form"
        >
          <TestDriveIcon className="w-7 h-7" />
          <span>Test Drive</span> 
        </button>
        <div className="w-px bg-gray-700 my-3"></div>
        <button
          onClick={onContactClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 text-gray-300 hover:text-white hover:bg-gray-800 font-semibold transition-all duration-300 text-sm"
          aria-label="Open contact information"
        >
          <ContactIcon className="w-7 h-7" />
          <span>Kontak</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavBar;
