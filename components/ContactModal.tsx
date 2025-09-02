
import React from 'react';
import { CloseIcon } from './icons';
import { WHATSAPP_BASE_URL } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contacts = [
    {
      name: 'WhatsApp',
      icon: <img src="https://i.pinimg.com/736x/6c/78/49/6c784972cbf5806215d46fbda8b0c46a.jpg" alt="WhatsApp Logo" className="w-10 h-10 object-cover rounded-lg" />,
      url: `${WHATSAPP_BASE_URL}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang mobil Suzuki.')}`,
      user: '+62 813-1890-2428',
      style: 'hover:border-green-500 hover:shadow-green-500/20'
    },
    {
      name: 'Instagram',
      icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s" alt="Instagram Logo" className="w-10 h-10 object-cover rounded-lg" />,
      url: 'https://www.instagram.com/suzukibandung.co',
      user: '@suzukibandung.co',
      style: 'hover:border-pink-500 hover:shadow-pink-500/20'
    },
    {
      name: 'TikTok',
      icon: <img src="https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small/tiktok-icon-free-png.png" alt="TikTok Logo" className="w-10 h-10 object-cover rounded-lg" />,
      url: 'https://www.tiktok.com/@suzukibandung.co',
      user: '@suzukibandung.co',
      style: 'hover:border-cyan-400 hover:shadow-cyan-400/20'
    },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 text-gray-200 rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Hubungi Kami</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center p-4 rounded-lg bg-gray-900/60 border border-gray-700 shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${contact.style}`}
            >
              <div className="flex-shrink-0 mr-5">
                {contact.icon}
              </div>
              <div className="flex-grow">
                <p className="font-bold text-lg text-white">{contact.name}</p>
                <p className="text-sm text-gray-400 group-hover:text-white transition">{contact.user}</p>
              </div>
               <div className="flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-gray-500 group-hover:text-white transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </a>
          ))}
        </div>
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

export default ContactModal;
