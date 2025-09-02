
import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { WHATSAPP_BASE_URL } from '../constants';
import { CloseIcon, WhatsAppIcon } from './icons';

interface CreditSimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  cars: Car[];
}

const CreditSimulationModal: React.FC<CreditSimulationModalProps> = ({ isOpen, onClose, cars }) => {
  const [selectedCarId, setSelectedCarId] = useState<string>(cars[0]?.id.toString() || '');
  const [selectedVariantName, setSelectedVariantName] = useState<string>('');
  const [downPayment, setDownPayment] = useState<string>('');
  const [tenor, setTenor] = useState<string>('1');

  const selectedCar = cars.find(car => car.id.toString() === selectedCarId);
  const variants = selectedCar ? selectedCar.variants : [];
  
  useEffect(() => {
    if (variants.length > 0) {
      setSelectedVariantName(variants[0].name);
    } else {
      setSelectedVariantName('');
    }
  }, [selectedCarId, cars]);

  if (!isOpen) return null;

  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value) {
        const numberValue = parseInt(value, 10);
        setDownPayment(new Intl.NumberFormat('id-ID').format(numberValue));
    } else {
        setDownPayment('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCarId || !selectedVariantName || !downPayment || !tenor) {
      alert("Harap isi semua kolom.");
      return;
    }
    
    const message = `
FORMULIR SIMULASI KREDIT
--------------------------
PILIHAN UNIT: ${selectedCar?.name}
PILIHAN TIPE: ${selectedVariantName}
DP: Rp ${downPayment}
TENOR: ${tenor} Tahun
    `.trim().replace(/\n/g, '%0A');

    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="credit-modal-title"
    >
      <div 
        className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 id="credit-modal-title" className="text-2xl font-bold text-white">Formulir Simulasi Kredit</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="unit" className="block mb-2 text-sm font-medium text-gray-400">PILIHAN UNIT</label>
            <select
              id="unit"
              value={selectedCarId}
              onChange={(e) => setSelectedCarId(e.target.value)}
              className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              {cars.map(car => <option key={car.id} value={car.id}>{car.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="tipe" className="block mb-2 text-sm font-medium text-gray-400">PILIHAN TIPE</label>
            <select
              id="tipe"
              value={selectedVariantName}
              onChange={(e) => setSelectedVariantName(e.target.value)}
              disabled={variants.length === 0}
              className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 disabled:opacity-50"
            >
              {variants.map(variant => <option key={variant.name} value={variant.name}>{variant.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="dp" className="block mb-2 text-sm font-medium text-gray-400">DP (Down Payment)</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">Rp</span>
                <input
                type="text"
                id="dp"
                value={downPayment}
                onChange={handleDownPaymentChange}
                placeholder="Contoh: 50.000.000"
                className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 pl-8"
                required
                inputMode="numeric"
                />
            </div>
          </div>
          <div>
            <label htmlFor="tenor" className="block mb-2 text-sm font-medium text-gray-400">PILIHAN TENOR</label>
            <select
              id="tenor"
              value={tenor}
              onChange={(e) => setTenor(e.target.value)}
              className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1} Tahun</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 text-lg font-bold bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            <WhatsAppIcon className="w-7 h-7" />
            Kirim via WhatsApp
          </button>
        </form>
      </div>
       <style>{`
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale { animation: fade-in-scale 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default CreditSimulationModal;