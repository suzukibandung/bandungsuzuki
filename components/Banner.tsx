
import React from 'react';
import { WHATSAPP_BASE_URL } from '../constants';
import { WhatsAppIcon } from './icons';

const Banner: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    `Halo, saya ingin bertanya tentang mobil Suzuki yang tersedia.`
  );
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${whatsappMessage}`;

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out scale-105"
        style={{ backgroundImage: "url('https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2Fthree-six-zero%2Fexterior%2Fdesktop%2Feksteriorbannerdesktop_1748335564923.png&w=2048&q=75')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 p-4 animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-4 text-shadow-lg">
          Selamat Datang di Suzuki Bandung
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto text-shadow">
          Temukan mobil Suzuki impian Anda. Kualitas, inovasi, dan layanan terbaik menanti Anda.
        </p>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          <WhatsAppIcon className="w-6 h-6" />
          <span>Dapatkan Promonya</span>
        </a>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .text-shadow-lg { text-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); }
        .text-shadow { text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); }
      `}</style>
    </section>
  );
};

export default Banner;