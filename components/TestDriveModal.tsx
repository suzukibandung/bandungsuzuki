
import React, { useState } from 'react';
import { Car } from '../types';
import { WHATSAPP_BASE_URL } from '../constants';
import { CloseIcon, WhatsAppIcon } from './icons';

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  cars: Car[];
}

const TestDriveModal: React.FC<TestDriveModalProps> = ({ isOpen, onClose, cars }) => {
  const [selectedUnit, setSelectedUnit] = useState<string>(cars[0]?.name || '');
  const [dateTime, setDateTime] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUnit || !dateTime || !address) {
      alert("Harap isi semua kolom.");
      return;
    }
    
    const message = `
FORMULIR TEST DRIVE
-------------------
PILIHAN UNIT: ${selectedUnit}
HARI, TANGGAL DAN WAKTU: ${dateTime}
ALAMAT: ${address}
    `.trim();

    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 text-gray-200 rounded-2xl shadow-xl w-full max-w-lg transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Formulir Test Drive</h2>
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
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              {cars.map(car => <option key={car.id} value={car.name}>{car.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="datetime" className="block mb-2 text-sm font-medium text-gray-400">HARI, TANGGAL DAN WAKTU</label>
            <input
              type="text"
              id="datetime"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              placeholder="Contoh: Sabtu, 28 Des 2024, 14:00"
              className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-400">ALAMAT LENGKAP</label>
            <textarea
              id="address"
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Masukkan alamat lengkap untuk test drive"
              required
            ></textarea>
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

export default TestDriveModal;