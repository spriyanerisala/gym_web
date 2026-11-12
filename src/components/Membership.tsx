import React, { useState } from 'react';
import { Check, Flame, Sparkles, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';

interface MembershipProps {
  onSelectPlan: (planName: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="membership" className="py-24 relative overflow-hidden bg-gym-dark">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gym-accent/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gym-accent/10 border border-gym-accent/20 text-gym-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing • Zero Hidden Contracts</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white font-heading uppercase tracking-tight mb-4">
            INVEST IN YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-gym-accentCrimson">GREATEST ASSET</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Choose a tier engineered for your fitness aspirations. Upgrade, downgrade, or pause with no cancellation penalties.
          </p>

          {/* Billing Toggle (Monthly vs Annual with 20% discount badge) */}
          <div className="inline-flex items-center gap-3 p-1.5 mt-8 rounded-full bg-gym-card border border-gym-border">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gym-dark shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-gym-accent to-gym-accentCrimson text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-white font-extrabold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isPopular
                    ? 'bg-gradient-to-b from-gym-cardHover via-gym-card to-gym-charcoal border-2 border-gym-accent shadow-2xl shadow-gym-accent/20 scale-[1.03] lg:-translate-y-2'
                    : 'bg-gym-card/80 border border-gym-border hover:border-slate-600'
                } p-6 sm:p-7`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gym-accent to-gym-accentCrimson text-white text-[11px] font-extrabold uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Plan Title & Tagline */}
                  <div className="border-b border-white/10 pb-5 mb-5">
                    <h3 className="text-2xl font-bold text-white font-heading tracking-wide mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 min-h-[32px] leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-gym-accent">$</span>
                      <span className="text-5xl font-black text-white font-heading tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ month</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {billingCycle === 'annual' ? 'Billed annually ($' + (price * 12) + '/yr)' : 'Billed month-to-month, cancel anytime'}
                    </div>
                  </div>

                  {/* Facilities Included */}
                  <div className="space-y-3 mb-6">
                    <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                      Included Facilities:
                    </div>
                    {plan.facilities.map((facility, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-gym-accent shrink-0 mt-0.5" />
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                    <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                      Exclusive Perks:
                    </div>
                    {plan.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-gym-accent shrink-0 mt-1.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Join CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs uppercase font-extrabold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                    isPopular
                      ? 'bg-gradient-to-r from-gym-accent to-gym-accentCrimson text-white shadow-xl shadow-gym-accent/30 hover:shadow-gym-accent/60 hover:scale-[1.02]'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  }`}
                >
                  <span>Select {plan.name.replace(' Plan', '')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Free Assessment Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gym-card/40 border border-gym-border max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wide">
              Not sure which plan matches your goals?
            </h4>
            <p className="text-xs text-slate-400">
              Schedule a 100% free body composition scan and coach consultation.
            </p>
          </div>
          <button
            onClick={() => onSelectPlan('Guest Assessment')}
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-gym-accent border border-gym-accent/40 hover:bg-gym-accent hover:text-white transition-all shrink-0 cursor-pointer"
          >
            Claim Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
};
