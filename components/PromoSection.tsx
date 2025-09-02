import React from 'react';
import { TagIcon, TestDriveIcon, ExchangeIcon, TruckIcon } from './icons';

const PromoSection: React.FC = () => {
    const promoItems = [
        {
            icon: <TagIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-4 text-blue-400" />,
            title: "Promo Terbaik",
            description: "Dapatkan penawaran dan hitungan harga terbaik untuk mobil Suzuki impian Anda."
        },
        {
            icon: <TestDriveIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-4 text-blue-400" />,
            title: "Test Drive di Rumah",
            description: "Kami siap datang ke lokasi Anda untuk sesi test drive gratis tanpa repot."
        },
        {
            icon: <ExchangeIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-4 text-blue-400" />,
            title: "Pembayaran Fleksibel",
            description: "Tersedia opsi cash, kredit, hingga tukar tambah dengan mobil dari semua merek."
        },
        {
            icon: <TruckIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-4 text-blue-400" />,
            title: "Layanan Komersial",
            description: "Melayani pembelian fleet, COP, custom box, hingga unit ambulans."
        }
    ];

    return (
        <section className="absolute inset-0 flex items-center justify-center p-4">
            <div className="container mx-auto px-4 sm:px-8 text-center bg-gray-900/50 backdrop-blur-sm py-8 sm:py-12 rounded-2xl border border-gray-700/50 max-w-6xl shadow-2xl shadow-black/50">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">PT. NUSANTARA JAYA SENTOSA</h2>
                <p className="text-base sm:text-lg text-blue-400 mb-8 sm:mb-12 font-semibold tracking-wider">Main Dealer Suzuki Jawa Barat</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                    {promoItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-4 sm:p-6 bg-black/30 rounded-xl border border-gray-700/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                            {item.icon}
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoSection;