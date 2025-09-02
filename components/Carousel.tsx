
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (autoPlayInterval) {
      const slideInterval = setInterval(goToNext, autoPlayInterval);
      return () => clearInterval(slideInterval);
    }
  }, [goToNext, autoPlayInterval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="h-[70vh] min-h-[500px] w-full m-auto relative group" role="region" aria-roledescription="carousel">
        <div className="w-full h-full">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${image})` }}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Image ${index + 1} of ${images.length}`}
                />
            ))}
        </div>
      
      {/* Left Arrow */}
      <button 
        onClick={goToPrevious} 
        aria-label="Previous image"
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/40 hover:bg-black/60 text-white cursor-pointer transition-all items-center justify-center"
      >
        <ChevronLeftIcon className="w-8 h-8"/>
      </button>
      {/* Right Arrow */}
       <button 
        onClick={goToNext} 
        aria-label="Next image"
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/40 hover:bg-black/60 text-white cursor-pointer transition-all items-center justify-center"
      >
        <ChevronRightIcon className="w-8 h-8"/>
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-center py-2 space-x-3" role="group" aria-label="Slide controls">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
            aria-current={currentIndex === slideIndex}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
