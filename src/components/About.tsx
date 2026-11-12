import React from 'react';
import { Target, Zap, Shield, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenEnquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiry }) => {
  const pillars = [
    {
      icon: Target,
      title: "Results-Driven Science",
      desc: "Every workout split and nutritional coaching blueprint is grounded in peer-reviewed exercise science, progressive overload, and bi-weekly 3D body scans."
    },
    {
      icon: Zap,
      title: "Championship Equipment",
      desc: "From Eleiko calibrated plates to Woodway curve treadmills and Hammer Strength machines, experience zero bottlenecks and uninterrupted training flow."
    },
    {
      icon: HeartPulse,
      title: "Full Thermal Recovery Suite",
      desc: "Recover 40% faster with on-demand Finnish cedar dry rock saunas, medical-grade cold plunge tubs (45°F), and Theragun percussive massage lounges."
    },
    {
      icon: Shield,
      title: "Zero-Intimidation Tribe",
      desc: "Whether you are pulling your first 135 lb deadlift or prepping for nationals, our culture thrives on collective encouragement, respect, and zero judgment."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gym-charcoal/50 relative overflow-hidden border-t border-b border-white/5">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gym-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80"
                  alt="Coaching in action"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-gym-accent text-white">
                    Established 2016
                  </span>
                  <h4 className="text-xl font-bold text-white mt-2 font-heading">
                    Over 10,000 Lives Transformed
                  </h4>
                  <p className="text-xs text-slate-300">Downtown’s premier athletic destination</p>
                </div>
              </div>

              {/* Floating Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-panel p-5 rounded-2xl border border-gym-accent/30 shadow-2xl max-w-xs animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gym-accent/20 border border-gym-accent flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-gym-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white font-heading">99.4%</div>
                    <div className="text-[11px] font-semibold text-slate-400">Client Goal Attainment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gym-accent/10 border border-gym-accent/20 text-gym-accent text-xs font-bold uppercase tracking-wider mb-4">
              <span>About Titan Forge Gym</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-heading uppercase tracking-tight leading-tight mb-6">
              MORE THAN A GYM. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-gym-accentCrimson">
                AN UNSTOPPABLE CULTURE.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Titan Forge was founded with a singular conviction: commercial gyms had become overcrowded, under-equipped warehouses that prioritize annual contracts over real human transformations.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              We engineered a space where world-class Olympic lifting, functional athletic turf, high-intensity group battles, and luxury thermal recovery coexist under one roof. Our coaches don’t just watch clocks—they build customized human performance systems.
            </p>

            {/* Why Choose Us Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gym-card/70 border border-gym-border hover:border-gym-accent/40 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gym-accent/15 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-gym-accent" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Link */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gym-accent hover:text-white transition-colors group cursor-pointer"
              >
                <span>Book a Guided Tour of Our 15,000 Sq. Ft. Facility</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
