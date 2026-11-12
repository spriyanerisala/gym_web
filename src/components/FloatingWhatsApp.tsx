import React from 'react';
import { MessageCircle } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export const FloatingWhatsApp: React.FC = () => {
  const handleOpenWhatsApp = () => {
    const encodedMsg = encodeURIComponent(GYM_CONFIG.whatsappDefaultMsg);
    const url = `https://wa.me/${GYM_CONFIG.whatsappNumber}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-gym-card/95 border border-emerald-500/30 text-white text-xs font-bold shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping" />
        <span>Chat on WhatsApp: +91 88850 23504</span>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/80 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Enquire on WhatsApp (+91 88850 23504)"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </button>
    </div>
  );
};
