import React, { useState, useEffect } from 'react';
import { Tag, Clock, Flame, ArrowRight, Copy, Check } from 'lucide-react';
import { OFFERS } from '../data/gymData';

interface OffersProps {
  onClaimOffer: (offerCode: string) => void;
}

export const Offers: React.FC<OffersProps> = ({ onClaimOffer }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Countdown timer mock state
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 32,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 48, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="offers" className="py-24 bg-gym-charcoal/50 relative overflow-hidden border-t border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gym-accentCrimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner with Flash Countdown */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-gym-accent/20 via-gym-card to-gym-accentCrimson/20 border-2 border-gym-accent/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gym-accent flex items-center justify-center text-white shadow-lg shadow-gym-accent/40 shrink-0 hidden sm:flex">
              <Flame className="w-8 h-8 fill-white animate-bounce" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gym-accent text-white text-[10px] font-black uppercase tracking-wider mb-2">
                <span>⚡ Flash Enrollment Window</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-wide">
                JOIN TODAY & GET $0 INITIATION + 50% OFF MONTH ONE
              </h3>
              <p className="text-xs text-slate-300">
                Use promo code <span className="text-gym-accent font-bold">TITAN50</span> at checkout or mention it to your onboarding coach.
              </p>
            </div>
          </div>

          {/* Live Mock Countdown Timer */}
          <div className="flex items-center gap-2 sm:gap-3 bg-black/60 px-5 py-3 rounded-2xl border border-white/10 shrink-0">
            <Clock className="w-5 h-5 text-gym-accent animate-pulse" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black text-white font-heading tracking-wider">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Hours</div>
            </div>
            <span className="text-xl font-bold text-slate-500">:</span>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black text-white font-heading tracking-wider">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Mins</div>
            </div>
            <span className="text-xl font-bold text-slate-500">:</span>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-black text-gym-accent font-heading tracking-wider">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Secs</div>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gym-accent/10 border border-gym-accent/20 text-gym-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Tag className="w-3.5 h-3.5" />
            <span>Special Incentives & Rebates</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white font-heading uppercase tracking-tight mb-4">
            MEMBERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-gym-accentCrimson">OFFERS & PERKS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Take advantage of seasonal student programs, corporate bundles, and referral perks.
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-gym-card rounded-3xl p-7 border border-gym-border hover:border-gym-accent/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl group"
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-white/10 text-gym-accent border border-white/5">
                    {offer.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    {offer.discount}
                  </span>
                </div>

                {/* Offer Title */}
                <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-wide mb-3 group-hover:text-gym-accent transition-colors">
                  {offer.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {offer.description}
                </p>

                {/* Coupon Code Block */}
                <div className="bg-black/50 p-3 rounded-xl border border-dashed border-gym-border flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Promo Code</span>
                    <span className="text-sm font-black text-white font-mono">{offer.code}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(offer.code)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-gym-accent text-slate-200 hover:text-white transition-colors cursor-pointer"
                    title="Copy Promo Code"
                  >
                    {copiedCode === offer.code ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <div className="text-[11px] text-slate-500 mb-4 italic">
                  {offer.expiryNote}
                </div>
                <button
                  onClick={() => onClaimOffer(offer.code)}
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-gym-accent hover:text-white text-slate-200 border border-white/10 hover:border-gym-accent transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply This Offer</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
