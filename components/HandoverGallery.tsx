import React from 'react';

interface HandoverGalleryProps {
  images: string[];
}

const HandoverGallery: React.FC<HandoverGalleryProps> = ({ images }) => {
  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="bg-gray-900 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white mb-4">
          Galeri Serah Terima
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Momen kebahagiaan para pelanggan setia Suzuki bersama mobil impiannya.
        </p>
      </div>
      <div className="w-full overflow-hidden relative group">
        <div 
          className="flex group-hover:[animation-play-state:paused] animate-infinite-scroll"
        >
          {duplicatedImages.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-1/4 sm:w-1/6 md:w-[12.5%] lg:w-[10%] xl:w-1/12 p-2">
              <div
                className="aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-gray-800 bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
                role="img"
                aria-label={`Handover moment ${index + 1}`}
              >
                {/* Image is now a background, preventing easy download */}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 pointer-events-none"></div>
      </div>
       <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HandoverGallery;