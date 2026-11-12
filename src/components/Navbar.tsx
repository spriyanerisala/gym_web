import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Flame, PhoneCall, ChevronRight } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Membership', path: '/membership' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Offers', path: '/offers' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleJoinNow = () => {
    setMobileMenuOpen(false);
    navigate('/contact');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/95 via-black/60 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gym-accent to-gym-accentCrimson flex items-center justify-center shadow-lg shadow-gym-accent/40 group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-wider text-white font-heading">
                  TITAN<span className="text-gym-accent">FORGE</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-gym-accent/20 text-gym-accent border border-gym-accent/30 hidden sm:inline-block">
                  ATHLETICS
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold -mt-1 hidden sm:block">
                Elite Performance Club
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 bg-black/50 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gym-accent text-white shadow-md shadow-gym-accent/40 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${GYM_CONFIG.cleanPhone}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gym-accent" />
              <span>{GYM_CONFIG.phone}</span>
            </a>

            <button
              onClick={handleJoinNow}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-gym-accent to-gym-accentCrimson shadow-lg shadow-gym-accent/30 hover:shadow-gym-accent/60 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Join Now <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={handleJoinNow}
              className="px-3.5 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-gym-accent to-gym-accentCrimson shadow-md cursor-pointer sm:hidden"
            >
              Join
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gym-card border border-gym-border text-slate-200 hover:text-white hover:border-gym-accent/60 transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gym-accent" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-gym-dark/98 border-b border-white/10 backdrop-blur-2xl transition-all duration-300 animate-fadeIn px-6 py-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left px-3.5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-gym-accent text-white shadow-md'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 text-xs text-slate-400">
              <span>Front Desk Concierge</span>
              <a href={`tel:${GYM_CONFIG.cleanPhone}`} className="text-gym-accent font-bold hover:underline">
                {GYM_CONFIG.phone}
              </a>
            </div>

            <button
              onClick={handleJoinNow}
              className="w-full py-3.5 rounded-xl text-center font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-gym-accent to-gym-accentCrimson shadow-xl shadow-gym-accent/30 cursor-pointer"
            >
              Start 1-Day VIP Pass
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
