import React from 'react';
import { 
  Activity, Dumbbell, Award, Users, ShieldCheck, Wind, 
  CheckCircle2, Sparkles 
} from 'lucide-react';
import { FACILITIES } from '../data/gymData';

export const Facilities: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity': return Activity;
      case 'Dumbbell': return Dumbbell;
      case 'Award': return Award;
      case 'Users': return Users;
      case 'ShieldCheck': return ShieldCheck;
      case 'Wind': return Wind;
      default: return Sparkles;
    }
  };

  return (
    <section id="facilities" className="py-24 bg-gym-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gym-accent/10 border border-gym-accent/20 text-gym-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Olympic Quality Facilities</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white font-heading uppercase tracking-tight mb-4">
            PRECISION GEAR. <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-gym-accentCrimson">LUXURY AMENITIES.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every square foot is engineered for peak athletic output, hygienic excellence, and therapeutic recovery.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((facility) => {
            const Icon = getIcon(facility.iconName);
            return (
              <div
                key={facility.id}
                className="group bg-gym-card rounded-3xl overflow-hidden border border-gym-border hover:border-gym-accent/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-2xl"
              >
                <div>
                  {/* Facility Image with Icon Floating Badge */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gym-card via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-gym-dark/85 backdrop-blur-md border border-white/10 flex items-center justify-center text-gym-accent shadow-lg group-hover:bg-gym-accent group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-wide mb-2 group-hover:text-gym-accent transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {facility.description}
                    </p>

                    {/* Specifications */}
                    <div className="space-y-2 pt-3 border-t border-white/5">
                      {facility.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gym-accent shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
