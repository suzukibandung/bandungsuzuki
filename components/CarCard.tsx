
import React from 'react';
import type { Car } from '../types';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative rounded-xl overflow-hidden cursor-pointer bg-gray-800 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 ease-in-out transform hover:-translate-y-2"
    >
      <img src={car.imageUrl} alt={car.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white tracking-wide">{car.name}</h3>
        <button className="mt-2 text-sm text-white font-semibold py-1 px-3 bg-blue-600/80 group-hover:bg-blue-500 rounded-full transition-colors duration-300">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default CarCard;