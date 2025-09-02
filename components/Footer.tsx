
import React from 'react';
import { UserIcon } from './icons';
import { WHATSAPP_BASE_URL } from '../constants';

const Footer: React.FC = () => {
    const whatsappMessage = encodeURIComponent('Halo, saya ingin bertanya tentang mobil Suzuki.');
    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${whatsappMessage}`;
    const instagramUrl = 'https://www.instagram.com/suzukibandung.co';
    const tiktokUrl = 'https://www.tiktok.com/@suzukibandung.co';

    const socialLinks = [
        {
            name: "WhatsApp",
            user: "+62 813-1890-2428",
            url: whatsappUrl,
            icon: <img src="https://i.pinimg.com/736x/6c/78/49/6c784972cbf5806215d46fbda8b0c46a.jpg" alt="WhatsApp Logo" className="w-10 h-10 object-cover rounded-lg" />,
            style: 'hover:border-green-500 hover:shadow-green-500/20'
        },
        {
            name: "Instagram",
            user: "@suzukibandung.co",
            url: instagramUrl,
            icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s" alt="Instagram Logo" className="w-10 h-10 object-cover rounded-lg" />,
            style: 'hover:border-pink-500 hover:shadow-pink-500/20'
        },
        {
            name: "TikTok",
            user: "@suzukibandung.co",
            url: tiktokUrl,
            icon: <img src="https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small/tiktok-icon-free-png.png" alt="TikTok Logo" className="w-10 h-10 object-cover rounded-lg" />,
            style: 'hover:border-cyan-400 hover:shadow-cyan-400/20'
        }
    ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 pb-32 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Sales Profile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-4">
              <UserIcon className="w-16 h-16 text-blue-400 p-2 border-2 border-blue-400 rounded-full" />
              <div>
                <h3 className="text-xl font-bold text-white">Dudee</h3>
                <p className="text-blue-400">Sales Consultant</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Siap membantu Anda menemukan mobil Suzuki yang tepat dengan penawaran terbaik di Bandung. Hubungi saya untuk konsultasi, test drive, atau simulasi kredit.
            </p>
          </div>

          {/* Contact & Socials */}
          <div className="w-full max-w-sm mx-auto md:mx-0 md:ml-auto">
            <h3 className="text-lg font-semibold text-center md:text-left mb-4 text-white">Hubungi atau Ikuti Kami</h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center p-4 rounded-lg bg-gray-900/60 border border-gray-700 shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${link.style}`}
                >
                  <div className="flex-shrink-0 mr-5">
                    {link.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-lg text-white">{link.name}</p>
                    <p className="text-sm text-gray-400 group-hover:text-white transition">{link.user}</p>
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
        </div>
        <div className="text-center text-gray-500 text-sm mt-12 pt-8 border-t border-gray-800">
          © {new Date().getFullYear()} Suzuki Bandung. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
