import React, { useState, useEffect } from 'react';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-gym-dark relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gym-accent/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gym-accent/10 border border-gym-accent/20 text-gym-accent text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Real Results • Real Stories</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white font-heading uppercase tracking-tight mb-4">
            TRANSFORMATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-gym-accentCrimson">STORIES</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Read how athletes, busy professionals, and beginners transformed their bodies and unlocked elite self-confidence.
          </p>
        </div>

        {/* Testimonial Active Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gym-card via-gym-card to-gym-charcoal border border-gym-border hover:border-gym-accent/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative transition-all duration-500">
            {/* Top Stars & Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-1.5">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-300 ml-2">5.0 Verified Member</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gym-accent/15 border border-gym-accent/30 text-gym-accent text-xs font-extrabold uppercase">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{active.achievement}</span>
              </div>
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic mb-8">
              "{active.review}"
            </blockquote>

            {/* Author Profile Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-gym-accent shadow-md"
                />
                <div>
                  <h4 className="text-xl font-bold text-white font-heading tracking-wide">
                    {active.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {active.role} • Enrolled in <span className="text-gym-accent">{active.program}</span>
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white/5 hover:bg-gym-accent text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white/5 hover:bg-gym-accent text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? 'w-8 bg-gym-accent' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
