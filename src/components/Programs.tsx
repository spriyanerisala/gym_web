import React, { useState } from 'react';
import { Flame, Clock, Zap, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';
import type { Program } from '../types/gym';

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const categories = ['All', 'Fat Burn', 'Strength', 'Power', 'Functional', 'Endurance', 'Mind & Body', 'Elite'];

  const filteredPrograms = selectedCategory === 'All'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="py-24 bg-gym-charcoal/30 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gym-accent/10 border border-gym-accent/20 text-gym-accent text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Engineered For Every Athlete</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white font-heading uppercase tracking-tight">
              WORLD-CLASS <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-gym-accentCrimson">FITNESS PROGRAMS</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              From powerlifting mastery to high-velocity metabolic conditioning, choose from 8 specialized athletic disciplines.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap mt-6 md:mt-0 max-w-full overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gym-accent text-white shadow-md shadow-gym-accent/30'
                    : 'bg-gym-card text-slate-400 hover:text-white border border-gym-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="group bg-gym-card rounded-3xl overflow-hidden border border-gym-border hover:border-gym-accent/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-gym-accent/10"
            >
              <div>
                {/* Image & Intensity Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gym-card via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-white border border-white/10">
                    {prog.category}
                  </div>

                  {/* Intensity Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-gym-accent/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-white flex items-center gap-1 shadow-md">
                    <Flame className="w-3 h-3 fill-white" />
                    <span>{prog.intensity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-heading uppercase tracking-wide group-hover:text-gym-accent transition-colors mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {prog.description}
                  </p>

                  {/* Specs Pill */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 py-3 border-y border-white/5 font-semibold">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gym-accent" />
                      <span>{prog.duration}</span>
                    </div>
                    <div className="text-slate-300">{prog.caloriesBurn}</div>
                  </div>
                </div>
              </div>

              {/* Action Explore Footer */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <button
                  onClick={() => setActiveModalProgram(prog)}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onSelectProgram(prog.title)}
                  className="py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gym-accent hover:bg-gym-accentHover text-white transition-colors cursor-pointer"
                  title="Enquire for this program"
                >
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Quick View Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-gym-card rounded-3xl border border-gym-accent/40 shadow-2xl overflow-hidden p-6 sm:p-8">
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 mb-6">
              <img
                src={activeModalProgram.image}
                alt={activeModalProgram.title}
                className="w-full sm:w-56 h-48 sm:h-auto rounded-2xl object-cover shrink-0"
              />
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-gym-accent">
                  {activeModalProgram.category} Discipline
                </span>
                <h3 className="text-3xl font-black text-white font-heading mt-1">
                  {activeModalProgram.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {activeModalProgram.description}
                </p>

                <div className="flex items-center gap-4 mt-4 text-xs font-semibold text-slate-300">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Burn Rate</span>
                    {activeModalProgram.caloriesBurn}
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase">Session Length</span>
                    {activeModalProgram.duration}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 mb-6">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-300 mb-3">
                Key Curriculum & Benefits:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalProgram.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-gym-accent shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalProgram(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeModalProgram.title;
                  setActiveModalProgram(null);
                  onSelectProgram(title);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-gym-accent to-gym-accentCrimson text-white shadow-lg cursor-pointer"
              >
                Enroll in {activeModalProgram.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
