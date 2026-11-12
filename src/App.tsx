import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Membership } from './components/Membership';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { Gallery } from './components/Gallery';
import { Facilities } from './components/Facilities';
import { Offers } from './components/Offers';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('Standard Plan');
  const [selectedProgram, setSelectedProgram] = useState<string>('Weight Loss & Shred');
  const [selectedOffer, setSelectedOffer] = useState<string>('');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrograms = () => {
    const programsElem = document.getElementById('programs');
    if (programsElem) {
      programsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = (planName?: string) => {
    if (planName) {
      setSelectedPlan(planName);
    }
    scrollToContact();
  };

  const handleSelectProgram = (programName: string) => {
    setSelectedProgram(programName);
    scrollToContact();
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    scrollToContact();
  };

  const handleBookTrainer = (trainerName: string) => {
    setSelectedPlan('Personal Training Plan');
    setSelectedProgram(`1-on-1 with Coach ${trainerName}`);
    scrollToContact();
  };

  const handleClaimOffer = (offerCode: string) => {
    setSelectedOffer(offerCode);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-gym-dark text-slate-100 flex flex-col font-sans selection:bg-gym-accent selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 1. Home / Hero Section */}
      <Hero 
        onOpenEnquiry={() => handleOpenEnquiry()} 
        onExplorePrograms={scrollToPrograms} 
      />

      {/* 2. About Us Section */}
      <About onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 3. Membership Plans Section */}
      <Membership onSelectPlan={handleSelectPlan} />

      {/* 4. Fitness Programs Section */}
      <Programs onSelectProgram={handleSelectProgram} />

      {/* 5. Trainer Profiles Section */}
      <Trainers onBookTrainer={handleBookTrainer} />

      {/* 6. Gym Gallery Section with Lightbox */}
      <Gallery />

      {/* 7. Facilities & Equipment Section */}
      <Facilities />

      {/* 8. Offers & Discounts Section */}
      <Offers onClaimOffer={handleClaimOffer} />

      {/* 9. Customer Testimonials Section */}
      <Testimonials />

      {/* 10. Contact Us & Online Enquiry Form Section */}
      <Contact 
        prefilledPlan={selectedPlan}
        prefilledProgram={selectedProgram}
        prefilledOffer={selectedOffer}
      />

      {/* Professional Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
