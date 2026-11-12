import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <Hero
        onOpenEnquiry={() => navigate('/contact')}
        onExplorePrograms={() => navigate('/programs')}
      />

      {/* Featured Highlights on Home */}
      <section className="py-20 bg-gym-charcoal/40 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Programs Preview */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-gym-accent">
                  Featured Disciplines
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase mt-1">
                  DISCOVER YOUR DISCIPLINE
                </h2>
              </div>
              <button
                onClick={() => navigate('/programs')}
                className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gym-accent hover:text-white transition-colors cursor-pointer"
              >
                <span>View All 8 Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROGRAMS.slice(0, 3).map((prog) => (
                <div
                  key={prog.id}
                  onClick={() => navigate('/programs')}
                  className="group rounded-3xl overflow-hidden bg-gym-card border border-gym-border hover:border-gym-accent/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gym-card via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 text-[10px] font-extrabold uppercase text-white border border-white/10">
                      {prog.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white font-heading uppercase mb-2 group-hover:text-gym-accent transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {prog.description}
                    </p>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-300 pt-3 border-t border-white/5">
                      <span>{prog.duration}</span>
                      <span className="text-gym-accent flex items-center gap-1">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Membership Preview */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-gym-card via-gym-card to-gym-charcoal border border-gym-border shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gym-accent">
                Flexible Monthly & Annual Plans
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white font-heading mt-1 mb-3">
                READY TO EXPERIENCE UNRIVALED STRENGTH?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Choose from our 4 tiers designed for pure progression. No lock-in contracts, 100% transparent pricing, and world-class recovery facilities.
              </p>
              
              <div className="flex items-center gap-6 mt-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-gym-accent" />
                  <span>Free Assessment</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => navigate('/membership')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-gym-accent to-gym-accentCrimson shadow-xl shadow-gym-accent/30 hover:scale-[1.02] transition-transform cursor-pointer"
              >
                Compare Membership Plans
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              >
                Book Free Guest Tour
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
