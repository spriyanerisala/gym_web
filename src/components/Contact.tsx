import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, ExternalLink, 
  Send, Sparkles, HelpCircle, ChevronDown, CheckCircle2 
} from 'lucide-react';
import { GYM_CONFIG, FAQS, MEMBERSHIP_PLANS, PROGRAMS } from '../data/gymData';
import type { EnquiryFormData } from '../types/gym';
import confetti from 'canvas-confetti';

interface ContactProps {
  prefilledPlan?: string;
  prefilledProgram?: string;
  prefilledOffer?: string;
}

export const Contact: React.FC<ContactProps> = ({ 
  prefilledPlan = '', 
  prefilledProgram = '', 
  prefilledOffer = '' 
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    gender: 'Male',
    plan: prefilledPlan || 'Standard Plan',
    program: prefilledProgram || 'Weight Loss & Shred',
    preferredDate: '',
    message: prefilledOffer ? `Claiming promo code: ${prefilledOffer}` : ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Keep synced if parent changes
  React.useEffect(() => {
    if (prefilledPlan) {
      setFormData((prev) => ({ ...prev, plan: prefilledPlan }));
    }
  }, [prefilledPlan]);

  React.useEffect(() => {
    if (prefilledProgram) {
      setFormData((prev) => ({ ...prev, program: prefilledProgram }));
    }
  }, [prefilledProgram]);

  React.useEffect(() => {
    if (prefilledOffer) {
      setFormData((prev) => ({
        ...prev,
        message: `Claiming promo code: ${prefilledOffer}. ${prev.message}`
      }));
    }
  }, [prefilledOffer]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Mobile Number is required';
    } else {
      const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        errs.phone = 'Please enter a valid 10-digit mobile number';
      }
    }

    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }

    if (!formData.age.trim()) {
      errs.age = 'Age is required';
    } else {
      const numAge = parseInt(formData.age, 10);
      if (isNaN(numAge) || numAge < 14 || numAge > 90) {
        errs.age = 'Age must be between 14 and 90';
      }
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please pick a preferred joining date';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Trigger festive confetti for successful frontend submission
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // fallback
      }
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      age: '',
      gender: 'Male',
      plan: 'Standard Plan',
      program: 'Weight Loss & Shred',
      preferredDate: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-gym-charcoal/30 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gym-accent/10 border border-gym-accent/20 text-gym-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Begin Your Journey</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white font-heading uppercase tracking-tight mb-4">
            CONTACT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-gym-accentCrimson">VIP ENQUIRY</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Drop by our downtown facility, request a callback, or submit your preferred start date for a complimentary 1-day pass.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-gym-card p-6 rounded-2xl border border-gym-border hover:border-gym-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gym-accent/15 text-gym-accent flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-heading uppercase mb-1">Our Location</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {GYM_CONFIG.address}
            </p>
          </div>

          {/* Card 2: Direct Phone & WhatsApp */}
          <div className="bg-gym-card p-6 rounded-2xl border border-gym-border hover:border-gym-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gym-accent/15 text-gym-accent flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-heading uppercase mb-1">Direct Call & WhatsApp</h4>
            <a href="tel:+918885023504" className="text-xs font-semibold text-gym-accent hover:underline block">
              +91 88850 23504
            </a>
            <a 
              href="https://wa.me/918885023504?text=Hello%20Titan%20Forge%20Gym!%20I%20am%20interested%20in%20joining.%20Please%20share%20details."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 mt-2"
            >
              <span>Chat on WhatsApp (+91 88850 23504) →</span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-gym-card p-6 rounded-2xl border border-gym-border hover:border-gym-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gym-accent/15 text-gym-accent flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-heading uppercase mb-1">Official Email</h4>
            <a href={`mailto:${GYM_CONFIG.email}`} className="text-xs font-semibold text-gym-accent hover:underline block">
              {GYM_CONFIG.email}
            </a>
            <span className="text-[11px] text-slate-500 mt-1 block">Replies within 2 hours</span>
          </div>

          {/* Card 4 */}
          <div className="bg-gym-card p-6 rounded-2xl border border-gym-border hover:border-gym-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-gym-accent/15 text-gym-accent flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white font-heading uppercase mb-1">Operating Hours</h4>
            <p className="text-xs text-slate-300">Mon - Fri: 5:00 AM - 11:00 PM</p>
            <p className="text-xs text-slate-400 mt-0.5">Sat - Sun: 6:00 AM - 10:00 PM</p>
          </div>
        </div>

        {/* Dual Column Layout: Form vs Map & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (7 cols): Online Membership Enquiry Form */}
          <div className="lg:col-span-7 bg-gym-card rounded-3xl p-6 sm:p-10 border border-gym-border shadow-2xl relative">
            <div className="mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gym-accent">
                Online Membership Application
              </span>
              <h3 className="text-3xl font-black text-white font-heading tracking-wide mt-1">
                SECURE YOUR PASS & SCHEDULE ONBOARDING
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the details below. Our team will prepare your pass and customized gym tour.
              </p>
            </div>

            {/* Success Notification View */}
            {isSubmitted ? (
              <div className="text-center py-12 px-4 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-black text-white font-heading">
                  ENQUIRY SUBMITTED SUCCESSFULLY!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-gym-accent font-bold">{formData.fullName}</span>! Your VIP pass request for the <span className="text-white font-semibold">{formData.plan}</span> has been confirmed.
                </p>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 max-w-sm mx-auto text-left text-xs text-slate-300 space-y-1">
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Program:</strong> {formData.program}</div>
                  <div><strong>Start Date:</strong> {formData.preferredDate}</div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gym-accent hover:bg-gym-accentHover text-white transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Marcus Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-gym-charcoal border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-gym-border focus:border-gym-accent'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-gym-charcoal border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gym-border focus:border-gym-accent'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 2: Email, Age, and Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                  <div className="sm:col-span-6">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-gym-charcoal border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-gym-border focus:border-gym-accent'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Age *
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 28"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-gym-charcoal border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.age ? 'border-red-500 focus:border-red-500' : 'border-gym-border focus:border-gym-accent'
                      }`}
                    />
                    {errors.age && <p className="text-[11px] text-red-400 mt-1">{errors.age}</p>}
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gym-charcoal border border-gym-border text-sm text-white focus:outline-none focus:border-gym-accent transition-colors"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer Not To Say">Prefer not to say</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Plan and Program Selections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Membership Plan *
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gym-charcoal border border-gym-border text-sm text-white focus:outline-none focus:border-gym-accent transition-colors"
                    >
                      {MEMBERSHIP_PLANS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} (${p.monthlyPrice}/mo)
                        </option>
                      ))}
                      <option value="Guest Assessment">Guest Assessment (Free)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Fitness Program Focus
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gym-charcoal border border-gym-border text-sm text-white focus:outline-none focus:border-gym-accent transition-colors"
                    >
                      {PROGRAMS.map((prog) => (
                        <option key={prog.id} value={prog.title}>
                          {prog.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Preferred Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Preferred Joining / Tour Date *
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-gym-charcoal border text-sm text-white focus:outline-none transition-colors ${
                      errors.preferredDate ? 'border-red-500 focus:border-red-500' : 'border-gym-border focus:border-gym-accent'
                    }`}
                  />
                  {errors.preferredDate && <p className="text-[11px] text-red-400 mt-1">{errors.preferredDate}</p>}
                </div>

                {/* Row 5: Additional Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Additional Message or Fitness Goals (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about previous injuries, training history, or any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gym-charcoal border border-gym-border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gym-accent transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-gym-accent to-gym-accentCrimson hover:from-gym-accentHover hover:to-red-700 shadow-xl shadow-gym-accent/30 hover:shadow-gym-accent/60 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Submit Membership Enquiry</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  🔒 We respect your privacy. No spam. You will only receive your onboarding invitation.
                </p>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Google Maps Embed & FAQs */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Google Maps Embed Card */}
            <div className="bg-gym-card rounded-3xl overflow-hidden border border-gym-border shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white font-heading uppercase">
                    Interactive Gym Location
                  </h4>
                  <p className="text-xs text-slate-400">Downtown Athletic District, CA 90210</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-gym-accent text-white text-xs font-bold uppercase transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="Gym Google Map Location"
                  src={GYM_CONFIG.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Free On-site Covered Member Parking</span>
                <span className="text-emerald-400 font-bold">● Open Today</span>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-gym-card rounded-3xl p-6 border border-gym-border shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-gym-accent" />
                <h4 className="text-xl font-bold text-white font-heading uppercase">
                  Frequently Asked Questions
                </h4>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-white/5 rounded-2xl overflow-hidden bg-gym-charcoal/40"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full p-3.5 text-left flex items-center justify-between text-xs font-bold text-slate-200 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-gym-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-2">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
