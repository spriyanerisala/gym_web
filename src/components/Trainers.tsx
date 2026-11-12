import { Award, ShieldCheck } from 'lucide-react';
import { InstagramIcon, TwitterIcon, LinkedInIcon, YouTubeIcon } from './SocialIcons';
import { TRAINERS } from '../data/gymData';

interface TrainersProps {
  onBookTrainer: (trainerName: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onBookTrainer }) => {
  return (
    <section id="trainers" className="py-24 bg-gym-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gym-accent/10 border border-gym-accent/20 text-gym-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Tier-3 Elite Coaches</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white font-heading uppercase tracking-tight mb-4">
            TRAIN UNDER <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-gym-accentCrimson">MASTER ATHLETES</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No generic floor attendants. Our coaches are decorated competitive athletes, sports scientists, and certified masters committed to your individual breakthroughs.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group bg-gym-card rounded-3xl overflow-hidden border border-gym-border hover:border-gym-accent/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-gym-accent/10"
            >
              <div>
                {/* Image Container with Social overlay */}
                <div className="relative h-80 overflow-hidden bg-gym-charcoal">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gym-card via-transparent to-transparent opacity-90" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-extrabold text-gym-accent border border-gym-accent/30 shadow-md">
                    {trainer.experience}
                  </div>

                  {/* Social Media floating icons */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-300">
                      {trainer.specialization}
                    </span>
                    <div className="flex items-center gap-2">
                      {trainer.social.instagram && (
                        <a
                          href={trainer.social.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-full bg-black/60 hover:bg-gym-accent text-white flex items-center justify-center transition-colors"
                          aria-label="Instagram"
                        >
                          <InstagramIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {trainer.social.twitter && (
                        <a
                          href={trainer.social.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-full bg-black/60 hover:bg-gym-accent text-white flex items-center justify-center transition-colors"
                          aria-label="Twitter"
                        >
                          <TwitterIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {trainer.social.linkedin && (
                        <a
                          href={trainer.social.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-full bg-black/60 hover:bg-gym-accent text-white flex items-center justify-center transition-colors"
                          aria-label="LinkedIn"
                        >
                          <LinkedInIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {trainer.social.youtube && (
                        <a
                          href={trainer.social.youtube}
                          target="_blank"
                          rel="noreferrer"
                          className="w-7 h-7 rounded-full bg-black/60 hover:bg-gym-accent text-white flex items-center justify-center transition-colors"
                          aria-label="YouTube"
                        >
                          <YouTubeIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Trainer Information */}
                <div className="p-6">
                  <div className="text-xs uppercase font-extrabold text-gym-accent tracking-wider mb-1">
                    {trainer.role}
                  </div>
                  <h3 className="text-2xl font-black text-white font-heading tracking-wide mb-3">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {trainer.bio}
                  </p>

                  {/* Certifications */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    {trainer.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-gym-accent shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookTrainer(trainer.name)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-gym-accent hover:text-white text-slate-300 border border-white/10 hover:border-gym-accent transition-all duration-200 cursor-pointer"
                >
                  Book 1-on-1 with {trainer.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
