import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (planName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = [
        'home', 'about', 'membership', 'programs', 
        'trainers', 'gallery', 'facilities', 'offers', 
        'testimonials', 'contact'
      ];

      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Membership', href: '#membership' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Offers', href: '#offers' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
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
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gym-accent text-white shadow-md shadow-gym-accent/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:18008482636"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gym-accent" />
              <span>(800) 848-2636</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
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
              onClick={() => onOpenEnquiry()}
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-gym-accent text-white shadow-md'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 text-xs text-slate-400">
              <span>Customer Desk</span>
              <a href="tel:18008482636" className="text-gym-accent font-bold hover:underline">
                +1 (800) 848-2636
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
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
