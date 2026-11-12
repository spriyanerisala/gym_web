import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, ChevronRight, Dumbbell } from 'lucide-react';
import { GYM_CONFIG, MEMBERSHIP_PLANS, PROGRAMS, TRAINERS, OFFERS } from '../data/gymData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  action?: {
    type: 'whatsapp' | 'scroll';
    label: string;
    target?: string;
  };
}

export const GymChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 'm1',
      sender: 'bot',
      text: `Hey there! Welcome to Titan Forge. I'm Alex from member support. How can I help you crush your fitness goals today? Feel free to ask about our plans, coaches, class timings, or current discounts!`,
      timestamp: 'Just now'
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const quickQuestions = [
    "What are your membership prices?",
    "Tell me about the coaches",
    "What programs do you offer?",
    "Do you have a free trial pass?",
    "What are your gym timings?"
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const generateAnswer = (query: string): { text: string; action?: Message['action'] } => {
    const q = query.toLowerCase();

    // Pricing / Memberships
    if (q.includes('price') || q.includes('cost') || q.includes('membership') || q.includes('plan') || q.includes('fee')) {
      const plansList = MEMBERSHIP_PLANS.map(p => `• ${p.name}: $${p.monthlyPrice}/mo ($${p.annualPrice}/mo billed annually)`).join('\n');
      return {
        text: `Here are our current membership tiers (month-to-month or annual 20% off):\n\n${plansList}\n\nOur Standard Plan ($69/mo) is our most popular package and includes unlimited studio classes, saunas, and composition scans. Would you like to check them out?`,
        action: {
          type: 'scroll',
          label: 'View Membership Plans',
          target: '#membership'
        }
      };
    }

    // Free trial / Guest pass
    if (q.includes('trial') || q.includes('guest') || q.includes('free pass') || q.includes('visit') || q.includes('demo')) {
      return {
        text: `Yes! We provide a complimentary 1-Day VIP Guest Pass for local residents to experience our equipment, sauna, and meet our coaches. You can claim it online or text us on WhatsApp right away!`,
        action: {
          type: 'scroll',
          label: 'Claim Free 1-Day Pass',
          target: '#contact'
        }
      };
    }

    // Coaches / Trainers
    if (q.includes('trainer') || q.includes('coach') || q.includes('pt') || q.includes('personal train')) {
      const trainerList = TRAINERS.map(t => `• ${t.name} (${t.specialization})`).join('\n');
      return {
        text: `Our Tier-3 Master Coaches are certified athletes and sports scientists:\n\n${trainerList}\n\nYou can book 1-on-1 personalized coaching splits or form checks anytime!`,
        action: {
          type: 'scroll',
          label: 'Meet Our Trainers',
          target: '#trainers'
        }
      };
    }

    // Programs / Classes
    if (q.includes('program') || q.includes('workout') || q.includes('class') || q.includes('crossfit') || q.includes('yoga') || q.includes('cardio') || q.includes('fat loss')) {
      const progList = PROGRAMS.slice(0, 5).map(p => `• ${p.title} (${p.category})`).join('\n');
      return {
        text: `We offer 8 curated disciplines:\n\n${progList}\n...plus Powerlifting, Functional Athletics, and Personal Coaching! Every workout splits are tailored to your heart rate and VO2 targets.`,
        action: {
          type: 'scroll',
          label: 'Explore All Programs',
          target: '#programs'
        }
      };
    }

    // Hours / Timings
    if (q.includes('time') || q.includes('hour') || q.includes('open') || q.includes('close') || q.includes('sunday')) {
      const hoursList = GYM_CONFIG.hours.map(h => `• ${h.days}: ${h.time}`).join('\n');
      return {
        text: `Here are our regular gym hours:\n\n${hoursList}\n\nOur members on the VIP plan also enjoy 24/7 keyless biometric access!`
      };
    }

    // Offers / Promo codes
    if (q.includes('offer') || q.includes('discount') || q.includes('promo') || q.includes('coupon') || q.includes('deal')) {
      const offerList = OFFERS.map(o => `• ${o.title} (Code: ${o.code})`).join('\n');
      return {
        text: `We have great promotions running right now:\n\n${offerList}\n\nYou can apply TITAN50 to get $0 enrollment and 50% off your first month!`,
        action: {
          type: 'scroll',
          label: 'View Active Offers',
          target: '#offers'
        }
      };
    }

    // Facilities / Sauna / Locker
    if (q.includes('facility') || q.includes('sauna') || q.includes('shower') || q.includes('locker') || q.includes('equipment') || q.includes('plunge')) {
      return {
        text: `Our 15,000 sq. ft. facility features Olympic Eleiko lifting platforms, Arsenal Strength machines, Finnish cedar dry rock saunas, 45°F cold plunge tubs, and executive digital lockers with fresh towel service.`,
        action: {
          type: 'scroll',
          label: 'See Facilities & Gear',
          target: '#facilities'
        }
      };
    }

    // WhatsApp / Human Help / Phone
    if (q.includes('whatsapp') || q.includes('phone') || q.includes('call') || q.includes('human') || q.includes('talk') || q.includes('chat')) {
      return {
        text: `You can reach our concierge team directly on WhatsApp or phone at +91 88850 23504. We usually respond within minutes!`,
        action: {
          type: 'whatsapp',
          label: 'Open WhatsApp (+91 88850 23504)'
        }
      };
    }

    // Location / Address
    if (q.includes('where') || q.includes('location') || q.includes('address') || q.includes('map') || q.includes('direction')) {
      return {
        text: `We are located at: ${GYM_CONFIG.address}. Free covered member parking is provided on-site.`,
        action: {
          type: 'scroll',
          label: 'View On Google Maps',
          target: '#contact'
        }
      };
    }

    // Fallback natural answer
    return {
      text: `Got it! Whether you're aiming for fat shred, powerlifting, or general wellness, we'd love to help. You can also chat directly with our team on WhatsApp (+91 88850 23504) for quick personalized guidance!`,
      action: {
        type: 'whatsapp',
        label: 'Chat on WhatsApp'
      }
    };
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAnswer(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.text,
        timestamp: 'Just now',
        action: response.action
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action: Message['action']) => {
    if (!action) return;
    if (action.type === 'whatsapp') {
      const url = `https://wa.me/${GYM_CONFIG.whatsappNumber}?text=${encodeURIComponent(GYM_CONFIG.whatsappDefaultMsg)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (action.type === 'scroll' && action.target) {
      setIsOpen(false);
      const elem = document.querySelector(action.target);
      elem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Chat Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-gym-accent to-gym-accentCrimson text-white shadow-2xl shadow-gym-accent/40 hover:shadow-gym-accent/70 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Open Gym Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-gym-dark" />
          </div>
          <span className="text-xs font-black uppercase tracking-wider hidden sm:inline-block">
            Ask Gym AI
          </span>
        </button>
      </div>

      {/* Chat Window Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 sm:left-6 z-50 w-[92vw] sm:w-[390px] h-[520px] max-h-[80vh] bg-gym-card border border-gym-border rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn backdrop-blur-xl">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-gym-charcoal via-gym-card to-gym-dark border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-gym-accent to-gym-accentCrimson flex items-center justify-center text-white shadow-md">
                <Dumbbell className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-black" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white font-heading uppercase tracking-wide">
                  Titan Concierge AI
                </h4>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span>● Online</span>
                  <span className="text-slate-400">• Ready to help</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Chatbot"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl whitespace-pre-line leading-relaxed shadow-md ${
                    m.sender === 'user'
                      ? 'bg-gym-accent text-white rounded-br-sm'
                      : 'bg-gym-charcoal/90 text-slate-200 border border-white/5 rounded-bl-sm'
                  }`}
                >
                  {m.text}

                  {m.action && (
                    <button
                      onClick={() => handleActionClick(m.action)}
                      className="mt-3 w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-white/10 cursor-pointer"
                    >
                      <span>{m.action.label}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <span className="text-[9px] text-slate-500 mt-1 px-1">
                  {m.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-gym-charcoal/80 text-slate-400 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-gym-accent animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-gym-accent animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gym-accent animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="px-3 py-2 bg-black/40 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap no-scrollbar">
            {quickQuestions.map((qq, i) => (
              <button
                key={i}
                onClick={() => handleSend(qq)}
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/5 hover:bg-gym-accent hover:text-white text-slate-300 border border-white/5 transition-colors cursor-pointer shrink-0"
              >
                {qq}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-gym-charcoal border-t border-gym-border flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything about the gym..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-black/50 border border-gym-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gym-accent transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-gym-accent hover:bg-gym-accentHover disabled:opacity-40 disabled:hover:bg-gym-accent text-white transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
