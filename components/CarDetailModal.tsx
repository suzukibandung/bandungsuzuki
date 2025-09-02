
import React, { useState } from 'react';
import { Car } from '../types';
import { WHATSAPP_BASE_URL } from '../constants';
import { CloseIcon, WhatsAppIcon } from './icons';

interface CarDetailModalProps {
  car: Car | null;
  onClose: () => void;
}

const CarDetailModal: React.FC<CarDetailModalProps> = ({ car, onClose }) => {
  const [enlargedImageUrl, setEnlargedImageUrl] = useState<string | null>(null);

  if (!car) return null;

  const formattedPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan mobil Suzuki ${car.name}. Bisa minta info lebih lanjut?`
  );
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${whatsappMessage}`;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'fade-in-scale 0.3s forwards' }}
        >
          <div className="relative">
            <img src={car.imageUrl} alt={car.name} className="w-full h-64 object-cover rounded-t-2xl" />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/50 p-2 rounded-full text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300"
              aria-label="Close modal"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl font-black text-gray-900 mb-2">{car.name}</h2>
            <p className="text-gray-500 mb-6">Harga OTR, Tipe Unit dan Pilihan Warna</p>

            <div className="space-y-4">
              {car.variants.map((variant) => (
                <div key={variant.name} className="bg-gray-100 p-4 rounded-lg transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">{variant.name}</span>
                    <span className="font-bold text-lg text-blue-600">{formattedPrice(variant.price)}</span>
                  </div>
                  {variant.colors && variant.colors.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-600 mb-3">Pilihan Warna:</h4>
                      <div className="overflow-x-auto pb-3 -mx-4 px-4">
                        <div className="flex flex-nowrap items-start gap-x-4">
                          {variant.colors.map((color) => (
                            <div 
                              key={color.name} 
                              className="group text-center w-24 flex-shrink-0 cursor-pointer"
                              onClick={() => setEnlargedImageUrl(color.imageUrl)}
                            >
                              <img 
                                src={color.imageUrl} 
                                alt={color.name} 
                                className="w-24 h-16 object-contain rounded-md transition-all duration-300 transform group-hover:scale-110 mx-auto"
                              />
                              <p className="text-xs text-gray-500 mt-2 group-hover:text-gray-900 transition-colors whitespace-normal">{color.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 text-lg font-bold bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                <WhatsAppIcon className="w-7 h-7" />
                Tanya via WhatsApp
              </a>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes fade-in-scale {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in-scale { animation: fade-in-scale 0.3s ease-out forwards; }
          .overflow-x-auto::-webkit-scrollbar {
            height: 6px;
          }
          .overflow-x-auto::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.05);
            border-radius: 10px;
          }
          .overflow-x-auto::-webkit-scrollbar-thumb {
            background: rgba(0,0,0,0.2);
            border-radius: 10px;
          }
          .overflow-x-auto::-webkit-scrollbar-thumb:hover {
            background: rgba(0,0,0,0.3);
          }
        `}</style>
      </div>

      {enlargedImageUrl && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60] animate-fade-in"
          onClick={() => setEnlargedImageUrl(null)}
        >
          <div className="relative transform transition-all duration-300 animate-fade-in-scale">
            <img
              src={enlargedImageUrl}
              alt="Enlarged color swatch"
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
            <button
              onClick={() => setEnlargedImageUrl(null)}
              className="absolute -top-4 -right-4 bg-white/50 p-2 rounded-full text-black hover:bg-red-500 hover:text-white transition-colors duration-300"
              aria-label="Close enlarged image view"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
           <style>{`
            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
          `}</style>
        </div>
      )}
    </>
  );
};

export default CarDetailModal;
