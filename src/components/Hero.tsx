import { ChevronRight, ShieldCheck, Flame, Trophy, Award, ArrowUpRight } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

interface HeroProps {
  onOpenEnquiry: (planName?: string) => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExplorePrograms }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with Dark Multi-layer Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="Gym Hero Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gym-dark via-gym-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gym-dark via-gym-dark/50 to-transparent" />
        
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gym-accent/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-gym-accentCrimson/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-pulse-slow">
            <span className="flex h-2 w-2 rounded-full bg-gym-accent animate-ping" />
            <Flame className="w-4 h-4 text-gym-accent" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-200">
              New Season Enrollment Now Live • 50% Off First Month
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92] mb-6 text-white font-heading">
            BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent via-orange-400 to-gym-accentCrimson">BODY.</span>
            <br />
            BUILD YOUR <span className="text-white underline decoration-gym-accent decoration-wavy decoration-from-font">CONFIDENCE.</span>
          </h1>

          {/* Motivational description */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Step into the epicenter of elite strength and athletic performance. Equipped with Olympic Eleiko platforms, medical-grade recovery suites, and tier-3 master coaches committed to your unstoppable breakthrough.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-8 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-gym-accent to-gym-accentCrimson hover:from-gym-accentHover hover:to-red-700 shadow-xl shadow-gym-accent/40 hover:shadow-gym-accent/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Join Now – Free 1-Day Pass</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExplorePrograms}
              className="px-8 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore 8 Programs</span>
              <ArrowUpRight className="w-4 h-4 text-gym-accent group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>No Binding Annual Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>IWF Certified Eleiko Gear</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gym-accent" />
              <span>100% Certified Master Trainers</span>
            </div>
          </div>
        </div>

        {/* Counter Highlights Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
          {GYM_CONFIG.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl hover:border-gym-accent/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight group-hover:text-gym-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
