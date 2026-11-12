import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GymChatbot } from './components/GymChatbot';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { MembershipPage } from './pages/MembershipPage';
import { TrainersPage } from './pages/TrainersPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { OffersPage } from './pages/OffersPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gym-dark text-slate-100 flex flex-col font-sans selection:bg-gym-accent selection:text-white">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Interactive Gym AI Chatbot with multi-page navigation */}
        <GymChatbot />
      </div>
    </Router>
  );
};

export default App;
