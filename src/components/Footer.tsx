import { Flame, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon, TwitterIcon, YouTubeIcon, LinkedInIcon } from './SocialIcons';
import { GYM_CONFIG, PROGRAMS } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gym-dark text-slate-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gym-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gym-accent to-gym-accentCrimson flex items-center justify-center shadow-lg shadow-gym-accent/40">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black tracking-wider text-white font-heading">
                TITAN<span className="text-gym-accent">FORGE</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The premier athletic club engineered for relentless progression. Featuring Olympic platforms, science-driven hypertrophy training, and five-star thermal recovery suites.
            </p>

            <div className="pt-2 text-xs space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gym-accent shrink-0" />
                <span>{GYM_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gym-accent shrink-0" />
                <a href={`tel:${GYM_CONFIG.cleanPhone}`} className="hover:text-white transition-colors">
                  {GYM_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gym-accent shrink-0" />
                <a href={`mailto:${GYM_CONFIG.email}`} className="hover:text-white transition-colors">
                  {GYM_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
                { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
                { icon: YouTubeIcon, href: 'https://youtube.com', label: 'YouTube' },
                { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-gym-card border border-gym-border hover:border-gym-accent flex items-center justify-center text-slate-300 hover:text-white hover:bg-gym-accent transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div>
            <h4 className="text-base font-bold text-white font-heading uppercase tracking-wider mb-4">
              Explore Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About Us', 'Membership Plans', 'Fitness Programs', 'Trainer Profiles', 'Gym Gallery', 'Facilities'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().split(' ')[0]}`}
                    className="hover:text-gym-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fitness Programs (Col 4) */}
          <div>
            <h4 className="text-base font-bold text-white font-heading uppercase tracking-wider mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PROGRAMS.slice(0, 6).map((prog) => (
                <li key={prog.id}>
                  <a href="#programs" className="hover:text-gym-accent transition-colors">
                    {prog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Memberships & Hours (Col 5) */}
          <div>
            <h4 className="text-base font-bold text-white font-heading uppercase tracking-wider mb-4">
              Hours of Operation
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              {GYM_CONFIG.hours.map((h, i) => (
                <div key={i} className="border-b border-white/5 pb-1.5">
                  <div className="font-semibold text-slate-300">{h.days}</div>
                  <div className="text-[11px] text-gym-accent">{h.time}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} TITAN FORGE ATHLETICS LLC. All Rights Reserved. Built for Peak Performance.</p>
          
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Safety Protocols</span>
            
            <button
              onClick={scrollToTop}
              className="ml-4 p-2 rounded-xl bg-gym-card hover:bg-gym-accent text-slate-300 hover:text-white border border-gym-border hover:border-gym-accent transition-all cursor-pointer flex items-center gap-1"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
