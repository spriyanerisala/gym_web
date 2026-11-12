import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Send, X, ChevronRight, Dumbbell } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  action?: {
    type: 'route';
    label: string;
    path: string;
  };
}

export const GymChatbot: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 'm1',
      sender: 'bot',
      text: `Hey! I'm your Titan Forge virtual assistant. What can I answer for you today? Ask about membership prices, free passes, coaches, timings, or workouts.`,
      timestamp: 'Just now'
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const quickQuestions = [
    "How much is the membership?",
    "Do you have a free guest pass?",
    "Who are the coaches?",
    "What are your gym hours?",
    "What facilities do you have?"
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Precise, direct response engine answering EXACTLY what was asked
  const generateAnswer = (query: string): { text: string; action?: Message['action'] } => {
    const q = query.toLowerCase().trim();

    // 1. Greetings / Small talk
    if (q === 'hi' || q === 'hello' || q === 'hey' || q === 'yo' || q.startsWith('good morning') || q.startsWith('good evening')) {
      return {
        text: `Hey! Welcome to Titan Forge. What would you like to know about our gym or website today?`
      };
    }
    if (q.includes('how are you') || q.includes('how r u')) {
      return {
        text: `I'm doing great, thank you! Ready to help you with gym memberships, timings, coaches, or facilities. What's on your mind?`
      };
    }
    if (q.includes('thank') || q.includes('thx')) {
      return {
        text: `You're very welcome! Let me know if you need any other information. See you on the training floor!`
      };
    }

    // 2. Pricing & Cost questions
    if (q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('how much') || q.includes('fee') || q.includes('membership cost')) {
      return {
        text: `Our memberships are:\n• Basic: $39/mo ($32/mo billed annually)\n• Standard: $69/mo ($55/mo billed annually) — Includes all studio classes & saunas\n• VIP: $109/mo ($89/mo billed annually) — 24/7 keyless biometric access & plunge\n• Personal Training: $199/mo ($169/mo billed annually) — Includes 8 monthly 1-on-1 PT sessions\n\nNo joining fees with current promos!`,
        action: {
          type: 'route',
          label: 'View Pricing Page',
          path: '/membership'
        }
      };
    }

    // 3. Free Pass / Trial / Demo / Visit
    if (q.includes('free') || q.includes('trial') || q.includes('guest pass') || q.includes('pass') || q.includes('visit') || q.includes('demo') || q.includes('tour')) {
      return {
        text: `Yes, we offer a 100% free 1-Day VIP Guest Pass for local residents! You get full floor access, Olympic racks, and the cedar sauna. You can pick your date and register in the form below.`,
        action: {
          type: 'route',
          label: 'Go To Free Pass Form',
          path: '/contact'
        }
      };
    }

    // 4. Hours / Timings / Opening / Closing / Sunday
    if (q.includes('hour') || q.includes('timing') || q.includes('time') || q.includes('when do you open') || q.includes('close') || q.includes('sunday') || q.includes('weekend')) {
      const hoursList = GYM_CONFIG.hours.map(h => `• ${h.days}: ${h.time}`).join('\n');
      return {
        text: `Our hours are:\n${hoursList}\n\nVIP members have 24/7 keyless biometric access.`
      };
    }

    // 5. Specific Coaches / Trainers
    if (q.includes('marcus')) {
      return {
        text: `Marcus "The Hammer" Vance is our Head Strength Coach & Co-Founder. 12+ years experience, CSCS certified, specializing in powerlifting and hypertrophy.`,
        action: { type: 'route', label: 'View Trainers Page', path: '/trainers' }
      };
    }
    if (q.includes('elena')) {
      return {
        text: `Elena Rostova is our Master HIIT & MetCon Director. 9+ years experience, CrossFit Level 3, specializing in high-intensity conditioning and mobility.`,
        action: { type: 'route', label: 'View Trainers Page', path: '/trainers' }
      };
    }
    if (q.includes('darius')) {
      return {
        text: `Darius King is our Nutrition & Body Recomposition Specialist with 10+ years experience in contest prep, macro calibration, and lean bulking.`,
        action: { type: 'route', label: 'View Trainers Page', path: '/trainers' }
      };
    }
    if (q.includes('maya')) {
      return {
        text: `Maya Lin leads Mobility & Vinyasa Yoga Flow (E-RYT 500, FRC Mobility Specialist) focusing on joint decompression and athletic recovery.`,
        action: { type: 'route', label: 'View Trainers Page', path: '/trainers' }
      };
    }
    if (q.includes('trainer') || q.includes('coach') || q.includes('pt') || q.includes('personal training')) {
      return {
        text: `We have 25+ certified master coaches led by Marcus Vance (Strength), Elena Rostova (CrossFit/HIIT), Darius King (Body Recomp), and Maya Lin (Mobility). 1-on-1 personal training packages are available with custom meal plans.`,
        action: {
          type: 'route',
          label: 'See All Coaches',
          path: '/trainers'
        }
      };
    }

    // 6. Specific Programs (Weight Loss, CrossFit, Yoga, etc.)
    if (q.includes('weight loss') || q.includes('fat burn') || q.includes('shred') || q.includes('diet') || q.includes('lose weight')) {
      return {
        text: `Our Weight Loss & Shred program uses high-metabolic conditioning and heart-rate monitored circuits burning 700-950 kcal/session, with bi-weekly 3D body scans.`,
        action: { type: 'route', label: 'View Programs Page', path: '/programs' }
      };
    }
    if (q.includes('crossfit') || q.includes('wod') || q.includes('metcon')) {
      return {
        text: `Our CrossFit & MetCon discipline features daily WODs, rope climbs, kettlebells, Olympic lifting, and community leaderboards with certified Level 3 coaches.`,
        action: { type: 'route', label: 'View Programs Page', path: '/programs' }
      };
    }
    if (q.includes('yoga') || q.includes('stretch') || q.includes('mobility')) {
      return {
        text: `Our Vinyasa Yoga & Mobility program offers heated and non-heated sessions focusing on joint longevity, hip openers, spine decompression, and foam rolling.`,
        action: { type: 'route', label: 'View Programs Page', path: '/programs' }
      };
    }
    if (q.includes('strength') || q.includes('powerlifting') || q.includes('deadlift') || q.includes('squat') || q.includes('bench')) {
      return {
        text: `Our Powerlifting & Strength program focuses on the big compound lifts (Squat, Bench, Deadlift) on competition Eleiko platforms with 1RM testing and form analysis.`,
        action: { type: 'route', label: 'View Programs Page', path: '/programs' }
      };
    }
    if (q.includes('cardio') || q.includes('treadmill') || q.includes('running') || q.includes('endurance')) {
      return {
        text: `Our Cardio program uses Woodway motorless curved treadmills, Concept2 rowers, and SkiErgs designed for VO2 max optimization and athletic stamina.`,
        action: { type: 'route', label: 'View Programs Page', path: '/programs' }
      };
    }
    if (q.includes('program') || q.includes('workout') || q.includes('class') || q.includes('classes')) {
      return {
        text: `We offer 8 programs:\n1. Weight Loss & Shred\n2. Muscle Building & Hypertrophy\n3. Elite Cardio & Endurance\n4. Powerlifting & Strength\n5. CrossFit & MetCon\n6. Vinyasa Yoga & Mobility\n7. 1-on-1 Personal Coaching\n8. Functional Agility & Athletics`,
        action: {
          type: 'route',
          label: 'Browse Programs Page',
          path: '/programs'
        }
      };
    }

    // 7. Facilities / Sauna / Cold Plunge / Showers / Lockers
    if (q.includes('sauna') || q.includes('cold plunge') || q.includes('plunge') || q.includes('recovery')) {
      return {
        text: `Yes! We have a luxury thermal recovery suite with 190°F Finnish cedar rock dry saunas and 45°F medical cold plunge tubs to cut muscle soreness and inflammation.`,
        action: { type: 'route', label: 'View Facilities Page', path: '/facilities' }
      };
    }
    if (q.includes('shower') || q.includes('locker') || q.includes('towel')) {
      return {
        text: `We have executive locker rooms with digital pin-code lockers, rainfall showers with luxury organic bath amenities, grooming stations, and free fresh towel service.`,
        action: { type: 'route', label: 'View Facilities Page', path: '/facilities' }
      };
    }
    if (q.includes('facility') || q.includes('facilities') || q.includes('equipment') || q.includes('machines') || q.includes('gym size')) {
      return {
        text: `Our 15,000 sq. ft. facility includes: 10 Eleiko Olympic platforms, Arsenal & Prime Strength machines, Woodway curved treadmills, cedar saunas, cold plunge tubs, and HEPA-13 air filtration at 67°F.`,
        action: {
          type: 'route',
          label: 'View Facilities Page',
          path: '/facilities'
        }
      };
    }

    // 8. Offers / Promo Codes / Student Discount
    if (q.includes('discount') || q.includes('offer') || q.includes('promo') || q.includes('coupon') || q.includes('code') || q.includes('deal') || q.includes('student')) {
      return {
        text: `Current promos:\n• Code "TITAN50": $0 enrollment fee + 50% off your 1st month\n• Code "STUDENT25": 25% flat discount for students & cadets\n• Code "TRAINTOGETHER": Bring a friend and both get 1 month free!`,
        action: {
          type: 'route',
          label: 'View Offers Page',
          path: '/offers'
        }
      };
    }

    // 9. Location / Address / Parking
    if (q.includes('where') || q.includes('location') || q.includes('address') || q.includes('city') || q.includes('parking') || q.includes('map') || q.includes('direction')) {
      return {
        text: `Address: ${GYM_CONFIG.address}.\n\nFree on-site covered parking is available for all members. There's an interactive Google Map with directions below.`,
        action: {
          type: 'route',
          label: 'View Contact & Map Page',
          path: '/contact'
        }
      };
    }

    // 10. Contact / Phone / Email
    if (q.includes('phone') || q.includes('contact') || q.includes('email') || q.includes('call') || q.includes('number')) {
      return {
        text: `Contact details:\n• Phone: ${GYM_CONFIG.phone}\n• Email: ${GYM_CONFIG.email}\n• Location: ${GYM_CONFIG.address}\n\nOur concierge desk is staffed every day during opening hours.`,
        action: {
          type: 'route',
          label: 'Open Contact Page',
          path: '/contact'
        }
      };
    }

    // 11. Cancellation / Contracts
    if (q.includes('cancel') || q.includes('contract') || q.includes('lock in') || q.includes('hidden') || q.includes('commitment')) {
      return {
        text: `No long-term locked contracts! All our memberships are month-to-month and can be paused or cancelled at any time with 14 days written notice. Zero cancellation fees.`
      };
    }

    // 12. About the Gym / Who are you
    if (q.includes('about') || q.includes('who are you') || q.includes('what is titan forge') || q.includes('story')) {
      return {
        text: `Titan Forge is a 15,000 sq. ft. athletic performance gym founded by coaches Marcus Vance and Elena Rostova. We combine Olympic lifting, CrossFit, and luxury recovery saunas with zero-ego community culture.`,
        action: {
          type: 'route',
          label: 'Read Full About Page',
          path: '/about'
        }
      };
    }

    // 13. Direct natural fallback - concise, not repetitive
    return {
      text: `Regarding "${query}": You can check our exact details on the website for memberships, 8 training programs, coaches, or facilities. Would you like me to take you to the programs, pricing, or registration form?`,
      action: {
        type: 'route',
        label: 'View Programs Page',
        path: '/programs'
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

    setMessages((prev: Message[]) => [...prev, userMsg]);
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
      setMessages((prev: Message[]) => [...prev, botMsg]);
      setIsTyping(false);
    }, 350);
  };

  const handleActionClick = (action: Message['action']) => {
    if (!action) return;
    setIsOpen(false);
    navigate(action.path);
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
            Ask Website AI
          </span>
        </button>
      </div>

      {/* Chat Window Modal */}
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
                  Titan Concierge
                </h4>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span>● Online</span>
                  <span className="text-slate-400">• Direct answers</span>
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
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((m: Message) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl whitespace-pre-line leading-relaxed shadow-md ${
                    m.sender === 'user'
                      ? 'bg-gym-accent text-white rounded-br-sm'
                      : 'bg-gym-charcoal/95 text-slate-200 border border-white/5 rounded-bl-sm'
                  }`}
                >
                  {m.text}

                  {m.action && (
                    <button
                      onClick={() => handleActionClick(m.action)}
                      className="mt-3 w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-gym-accent text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-white/10 cursor-pointer"
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
              placeholder="Ask a question..."
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
