import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import PromoSection from './components/PromoSection';
import CarCard from './components/CarCard';
import CarDetailModal from './components/CarDetailModal';
import BottomNavBar from './components/BottomNavBar';
import TestDriveModal from './components/TestDriveModal';
import CreditSimulationModal from './components/CreditSimulationModal';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import HandoverGallery from './components/HandoverGallery';
import { CAR_MODELS, HANDOVER_IMAGES } from './constants';
import type { Car } from './types';

const carouselImages = [
    'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2Fdetails%2Fdesktop%2Faksesorinewbannerdesktopvers_1748336857088.png&w=1920&q=75',
    'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2Fundefined%2Fdetails%2Fdesktop%2Fbannerexteriordesktopvers_1730454402824.png&w=1920&q=75',
    'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2Fundefined%2Fdetails%2Fdesktop%2FFrame16290_1714988122243.jpg&w=1920&q=75',
    'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2Fundefined%2Fdetails%2Fdesktop%2FGroup31392_1714986998100.jpg&w=1920&q=75'
];

const App: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isTestDriveModalOpen, setTestDriveModalOpen] = useState(false);
  const [isCreditModalOpen, setCreditModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseDetailModal = () => {
    setSelectedCar(null);
  };

  const handleOpenTestDriveModal = () => {
    setTestDriveModalOpen(true);
  };
  
  const handleCloseTestDriveModal = () => {
    setTestDriveModalOpen(false);
  };

  const handleOpenCreditModal = () => {
    setCreditModalOpen(true);
  };

  const handleCloseCreditModal = () => {
    setCreditModalOpen(false);
  };

  const handleOpenContactModal = () => {
    setContactModalOpen(true);
  };
  
  const handleCloseContactModal = () => {
    setContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Banner />
      <div className="relative">
        <Carousel images={carouselImages} />
        <PromoSection />
      </div>
      <main id="car-grid" className="container mx-auto px-4 sm:px-8 py-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAR_MODELS.map((car) => (
            <CarCard key={car.id} car={car} onClick={() => handleCarClick(car)} />
          ))}
        </div>
      </main>
      
      <HandoverGallery images={HANDOVER_IMAGES} />

      <Footer />

      <BottomNavBar 
        onTestDriveClick={handleOpenTestDriveModal} 
        onCreditSimulationClick={handleOpenCreditModal}
        onContactClick={handleOpenContactModal}
      />
      
      {selectedCar && (
        <CarDetailModal car={selectedCar} onClose={handleCloseDetailModal} />
      )}

      <TestDriveModal 
        isOpen={isTestDriveModalOpen}
        onClose={handleCloseTestDriveModal}
        cars={CAR_MODELS}
      />

      <CreditSimulationModal
        isOpen={isCreditModalOpen}
        onClose={handleCloseCreditModal}
        cars={CAR_MODELS}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
      />
    </div>
  );
};

export default App;
