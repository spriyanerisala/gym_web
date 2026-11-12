import type { Program, MembershipPlan, Trainer, GalleryItem, Facility, Testimonial, SpecialOffer } from '../types/gym';

export const GYM_CONFIG = {
  name: "TITAN FORGE GYM",
  tagline: "Build Your Body. Build Your Confidence.",
  phone: "+1 (800) 848-2636", // Customizable
  cleanPhone: "18008482636",
  whatsappNumber: "15551234567", // Direct WhatsApp international format without +
  whatsappDefaultMsg: "Hello Titan Forge! I am interested in joining the gym. Please share membership details and schedule a free guest pass.",
  email: "contact@titanforgegym.com",
  address: "742 Evergreen Fitness Blvd, Downtown Athletic District, CA 90210",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105658.07925875249!2d-118.42398579999999!3d34.020478999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba7064d6e9d7%3A0xb376b53a0604a11b!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
  hours: [
    { days: "Monday - Friday", time: "05:00 AM - 11:00 PM" },
    { days: "Saturday", time: "06:00 AM - 10:00 PM" },
    { days: "Sunday", time: "07:00 AM - 08:00 PM" },
    { days: "Public Holidays", time: "08:00 AM - 06:00 PM" }
  ],
  stats: [
    { value: "15,000+", label: "Sq. Ft. Facility" },
    { value: "25+", label: "Master Coaches" },
    { value: "4,800+", label: "Active Members" },
    { value: "99.4%", label: "Satisfaction Rate" }
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: "weight-loss",
    title: "Weight Loss & Shred",
    category: "Fat Burn",
    tagline: "High-metabolic fat incineration and lean body sculpting",
    description: "Accelerate your fat loss journey with calibrated metabolic conditioning, HIIT, and guided nutritional frameworks engineered to burn max calories while preserving dense muscle.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    intensity: "High",
    caloriesBurn: "700 - 950 kcal/session",
    duration: "45 - 60 mins",
    features: ["Heart Rate Monitored Cardio", "Full Body Circuit Training", "Bi-Weekly Body Composition Scans", "Custom Nutrition Blueprint"]
  },
  {
    id: "muscle-building",
    title: "Muscle Building & Hypertrophy",
    category: "Strength",
    tagline: "Science-backed hypertrophy protocols for raw mass",
    description: "Maximize muscular hypertrophy and aesthetic symmetry using progressive mechanical overload, targeted isolation, and periodized volume training designed for measurable weekly gains.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    intensity: "Extreme",
    caloriesBurn: "500 - 750 kcal/session",
    duration: "60 - 75 mins",
    features: ["Targeted Hypertrophy Splits", "Compound Lift Form Mastery", "Custom Macros & Protein Guidance", "Recovery & Deload Cycles"]
  },
  {
    id: "cardio-training",
    title: "Elite Cardio & Endurance",
    category: "Endurance",
    tagline: "Elevate VO2 max, stamina, and cardiovascular longevity",
    description: "A combination of low-impact assault biking, curved treadmills, rowing ergs, and dynamic cadence drills to supercharge stamina, cardiovascular output, and everyday energy.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    intensity: "High",
    caloriesBurn: "600 - 850 kcal/session",
    duration: "50 mins",
    features: ["Skillmill & Woodway Treadmills", "Concept2 Rowers & SkiErgs", "Aerobic Threshold Conditioning", "Stamina Benchmarking"]
  },
  {
    id: "strength-training",
    title: "Powerlifting & Strength",
    category: "Power",
    tagline: "Build foundational power with heavy compound movements",
    description: "Master the barbell Squat, Bench Press, and Deadlift. Coached by certified strength athletes with competition calibrated Eleiko plates and specialized power cages.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    intensity: "Extreme",
    caloriesBurn: "450 - 650 kcal/session",
    duration: "75 - 90 mins",
    features: ["Eleiko Power Cages & Barbells", "1RM Max Testing Sessions", "Biomechanics & Belt Technique", "Chalk & Deadlift Platforms"]
  },
  {
    id: "crossfit",
    title: "CrossFit & MetCon",
    category: "Functional",
    tagline: "Forging elite functional fitness across broad time domains",
    description: "Constantly varied, functional movements executed at high intensity. Kettlebells, rope climbs, Olympic snatches, box jumps, and tire flips to test your grit every single day.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    intensity: "Extreme",
    caloriesBurn: "750 - 1000 kcal/session",
    duration: "60 mins",
    features: ["Daily WOD Programming", "Rope Climbs & Plyometric Boxes", "Olympic Weightlifting Guidance", "Community Leaderboard"]
  },
  {
    id: "yoga",
    title: "Vinyasa Yoga & Mobility",
    category: "Mind & Body",
    tagline: "Unlock joint mobility, postural alignment, and core stability",
    description: "Restore balance to high-intensity training. Flow through therapeutic breathwork, dynamic hip openers, spine decompression, and deep restorative stretching in our serene studio.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    intensity: "Medium",
    caloriesBurn: "300 - 450 kcal/session",
    duration: "60 mins",
    features: ["Heated & Non-Heated Sessions", "Myofascial Foam Rolling Integration", "Breathwork & Stress Decompression", "Joint Longevity Therapy"]
  },
  {
    id: "personal-training",
    title: "1-on-1 Personal Coaching",
    category: "Elite",
    tagline: "100% personalized roadmap engineered for guaranteed results",
    description: "Direct personal mentorship with our Tier-3 Master Coaches. Every rep, nutrition intake, recovery routine, and psychological barrier managed with surgical precision.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    intensity: "High",
    caloriesBurn: "Tailored to goals",
    duration: "60 mins",
    features: ["Dedicated Dedicated Master Coach", "Weekly 3D Body & Posture Scans", "Bespoke Meal & Supplement Stacks", "Direct 24/7 Coach Chat Access"]
  },
  {
    id: "functional-fitness",
    title: "Functional Agility & Athletics",
    category: "Athletics",
    tagline: "Train like a pro athlete with multi-planar movement",
    description: "Enhance athletic coordination, speed, reaction time, and core rotational power utilizing turf sprint tracks, sled pushes, battle ropes, and medicine ball slams.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    intensity: "High",
    caloriesBurn: "650 - 850 kcal/session",
    duration: "50 mins",
    features: ["50-Yard Indoor Sprint Turf", "Prowler Sleds & Battle Ropes", "Agility Ladder & Cone Drills", "Core Anti-Rotation Training"]
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    tagline: "Essential access for the committed fitness enthusiast",
    monthlyPrice: 39,
    annualPrice: 32,
    duration: "Month-to-Month",
    facilities: [
      "Full Gym Floor & Free Weights Access",
      "Locker Room & Standard Showers",
      "Standard Cardio Zone Access",
      "Free Titan Forge Mobile App Access",
      "1 Free Fitness Assessment"
    ],
    benefits: [
      "No long-term lock-in contract",
      "Free WiFi throughout facility",
      "Guest pass (1 every 60 days)"
    ],
    color: "from-slate-700 to-slate-900"
  },
  {
    id: "standard",
    name: "Standard Plan",
    tagline: "Our most balanced package for everyday progress",
    monthlyPrice: 69,
    annualPrice: 55,
    duration: "Month-to-Month",
    popular: true,
    facilities: [
      "All Basic Plan Amenities Included",
      "Unlimited Group Studio Classes (Cardio, HIIT, Yoga)",
      "Access to Olympic Lifting Platforms",
      "Steam Room & Luxury Sauna Access",
      "Monthly InBody 570 Composition Scans"
    ],
    benefits: [
      "Priority group class reservations",
      "2 Monthly Free Guest Passes",
      "15% Discount on Gym Apparel & Shake Bar",
      "Towel service included"
    ],
    color: "from-gym-accent to-orange-600"
  },
  {
    id: "premium",
    name: "Premium VIP Plan",
    tagline: "All-inclusive luxury experience with recovery suite",
    monthlyPrice: 109,
    annualPrice: 89,
    duration: "Annual Best Value",
    facilities: [
      "All Standard Plan Amenities Included",
      "24/7 VIP Keyless Biometric Access",
      "Cryotherapy & Cold Plunge Suite Access",
      "Theragun Percussive Massage Lounge",
      "Reserved Private Locker with Laundry Service"
    ],
    benefits: [
      "Unlimited guest passes with VIP privileges",
      "Complimentary Pre-Workout & Post-Protein shakes",
      "Quarterly 1-on-1 Trainer Alignment Check",
      "Exclusive Titan Forge Gold Member Bag"
    ],
    color: "from-gym-accentCrimson to-red-700"
  },
  {
    id: "personal-training",
    name: "Personal Training Plan",
    tagline: "Maximum transformation under world-class coaches",
    monthlyPrice: 199,
    annualPrice: 169,
    duration: "Personalized Program",
    facilities: [
      "Everything in Premium VIP Plan Included",
      "8 Dedicated 1-on-1 60-min Training Sessions / Mo",
      "Private VIP Training Zone & Assessment Lab",
      "Bi-Weekly Bloodwork & Hormonal Analysis Support",
      "Dedicated Registered Dietitian & Meal Prep Plan"
    ],
    benefits: [
      "Guaranteed measurable results or money back",
      "24/7 direct WhatsApp lifeline with head coach",
      "Custom programmed mobility & corrective exercise",
      "Complimentary Titan Forge wearable heart sensor"
    ],
    color: "from-amber-500 to-amber-700"
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "marcus-vance",
    name: "Marcus 'The Hammer' Vance",
    role: "Head Strength Coach & Co-Founder",
    specialization: "Powerlifting, Hypertrophy & Strongman",
    experience: "12+ Years",
    bio: "Former collegiate powerlifting champion and biomechanics researcher. Marcus specializes in helping lifters shatter plateaus and build dense, injury-free muscle mass.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    certifications: ["CSCS (NSCA)", "USA Powerlifting Senior Coach", "B.S. Exercise Kinesiology"],
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com"
    }
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Master HIIT & MetCon Director",
    specialization: "Fat Shred, Functional Agility & Kettlebells",
    experience: "9+ Years",
    bio: "Former Olympic gymnastics alternate turned high-intensity conditioning authority. Elena combines surgical mobility with relentless, high-calorie burn circuits.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80",
    certifications: ["CrossFit Level 3 Certified", "StrongFirst SFG II Kettlebell", "NASM-CPT"],
    social: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "darius-king",
    name: "Darius King",
    role: "Body Recomposition & Nutrition Specialist",
    specialization: "Contest Prep, Lean Bulking & Metabolic Fix",
    experience: "10+ Years",
    bio: "Darius has transformed over 600 clients ranging from corporate executives to competitive physique athletes through evidence-based dietary science and hypertrophy protocols.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    certifications: ["Precision Nutrition Level 2", "ISSA Elite Master Trainer", "FMS Functional Movement"],
    social: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "maya-lin",
    name: "Maya Lin",
    role: "Mobility & Yoga Flow Instructor",
    specialization: "Vinyasa, Athletic Flexibility & Decompression",
    experience: "8+ Years",
    bio: "Maya bridges the gap between intense heavy lifting and restorative athletic longevity. Her flows enhance recovery, deepen joint capacity, and sharpen mental resilience.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    certifications: ["E-RYT 500 Yoga Alliance", "FRC Mobility Specialist", "Breathwork Master Instructor"],
    social: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com"
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Olympic Lifting Platforms & Eleiko Racks",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    caption: "Championship-grade Eleiko bumpers and solid oak lifting platforms with calibrated barbell sets."
  },
  {
    id: "g2",
    title: "High-Energy Group MetCon Session",
    category: "workouts",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    caption: "Members pushing past limits during our signature 6:00 PM Titan Conditioning battle."
  },
  {
    id: "g3",
    title: "Main Free Weights & Dumbbell Alley",
    category: "interior",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    caption: "Dumbbells ranging from 5 lbs to 150 lbs, custom urethane grip plates and ergonomic benches."
  },
  {
    id: "g4",
    title: "Cardio Theater & Curved Treadmills",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    caption: "Woodway high-end curved non-motorized treadmills overlooking the city skyline."
  },
  {
    id: "g5",
    title: "90-Day Shred Transformation",
    category: "transformations",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    caption: "Client David S. dropped 24 lbs of fat and gained 8 lbs of muscle in 12 guided weeks."
  },
  {
    id: "g6",
    title: "Luxury Nordic Cedar Sauna & Plunge",
    category: "interior",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    caption: "Post-workout thermotherapy: 190°F dry rock Finnish sauna and 45°F cold plunge pools."
  },
  {
    id: "g7",
    title: "Heavy Barbell Squat Session",
    category: "workouts",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    caption: "Heavy compound lift execution under watchful coaching eyes."
  },
  {
    id: "g8",
    title: "Female Physique Transformation",
    category: "transformations",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    caption: "Sarah M. completely reshaped body composition and doubled her deadlift capacity."
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "f1",
    title: "Modern Cardio Theater",
    description: "Equipped with Woodway motorless curved treads, Concept2 Rowers, SkiErgs, and StairMasters with personal HD entertainment screens.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=80",
    specs: ["40+ Cardio Stations", "Heart-Rate Screen Sync", "Woodway Curve Tech"]
  },
  {
    id: "f2",
    title: "Heavy Strength & Machine Fleet",
    description: "Custom biomechanical selectorized & plate-loaded machines from Prime, Hammer Strength, and Arsenal Strength for targeted isolation.",
    iconName: "Dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    specs: ["Arsenal & Prime Machines", "Isolateral Ergonomics", "Zero Waiting Queues"]
  },
  {
    id: "f3",
    title: "Olympic Free Weights & Platforms",
    description: "10 dedicated Eleiko competition power cages with calibrated steel discs, chalk bowls, and heavy shock-absorbing rubber drop platforms.",
    iconName: "Award",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
    specs: ["Eleiko IWF Certified", "10 Power Cages", "150lb Dumbbell Sets"]
  },
  {
    id: "f4",
    title: "Private 1-on-1 Coaching Suite",
    description: "A closed-door, exclusive performance lab reserved strictly for personal training clients, mobility assessments, and video biomechanics analysis.",
    iconName: "Users",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
    specs: ["3D InBody Scanner", "Video Form Feedback", "Quiet Focused Space"]
  },
  {
    id: "f5",
    title: "Executive Luxury Locker Rooms",
    description: "Keyless digital lockers, rain showers with luxury organic bath amenities, grooming stations, hair dryers, and steam rooms.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
    specs: ["Digital Pin Lockers", "Rainfall Showers", "Fresh Fluffy Towels"]
  },
  {
    id: "f6",
    title: "Medical Air Filtration & Climate Control",
    description: "Hospital-grade HEPA-13 air filtration cycling 100% fresh air every 4 minutes. Kept at a crisp 67°F (19.4°C) for peak athletic performance.",
    iconName: "Wind",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
    specs: ["HEPA-13 Continuous Flow", "Constant 67°F Climate", "Zero Stale Odors"]
  }
];

export const OFFERS: SpecialOffer[] = [
  {
    id: "o1",
    badge: "LIMITED FLASH OFFER",
    title: "Zero Enrollment Fee + 1st Month 50% Off",
    discount: "Save $140",
    code: "TITAN50",
    description: "Sign up for any Standard or VIP annual membership this week and pay absolutely zero initiation fee plus half price on month one.",
    expiryNote: "Expires in 3 days. First 30 new sign-ups only.",
    highlightColor: "from-gym-accent to-orange-600"
  },
  {
    id: "o2",
    badge: "STUDENT & CADET DISCOUNT",
    title: "Flat 25% Off All Monthly Memberships",
    discount: "25% OFF",
    code: "STUDENT25",
    description: "Valid student or military/first-responder ID holders receive a permanent 25% price cut across all membership tiers.",
    expiryNote: "Always available with valid accredited ID.",
    highlightColor: "from-blue-600 to-indigo-700"
  },
  {
    id: "o3",
    badge: "REFER-A-BRO PROMO",
    title: "Bring a Friend, Get 1 Month Free",
    discount: "FREE MONTH",
    code: "TRAINTOGETHER",
    description: "Both you and your workout partner earn 30 days of free gym time when your referred friend joins on any standard or VIP plan.",
    expiryNote: "Unlimited referral stacks allowed.",
    highlightColor: "from-gym-accentCrimson to-red-600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Alexander Wright",
    role: "Senior Software Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review: "I've been in commercial gyms for 15 years, and nothing compares to Titan Forge. The equipment is spotless, coaches know their craft deeply, and the crowd is serious without being intimidating. Down 22 lbs in 4 months!",
    achievement: "Lost 22 lbs & Deadlifted 455 lbs",
    program: "Strength & Powerlifting"
  },
  {
    id: "t2",
    name: "Sophia Martinez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review: "The energy in Elena's 6 AM MetCon class is electric. You walk in exhausted and leave feeling unstoppable. The recovery sauna and cold plunge afterwards is pure luxury. Best investment in my health ever.",
    achievement: "Body Fat dropped from 28% to 19%",
    program: "CrossFit & MetCon"
  },
  {
    id: "t3",
    name: "Dr. Jonathan Hayes",
    role: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review: "From an anatomical standpoint, their biomechanical machines and coach form adjustments are superior. They care about joint longevity and spine health as much as raw weight. Outstanding facility.",
    achievement: "Rehabilitated herniated L5/S1 disc",
    program: "1-on-1 Personal Coaching"
  },
  {
    id: "t4",
    name: "Rachel Kim",
    role: "Marathon Runner & Triathlete",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    review: "The Woodway treadmills and cross-training platforms helped shave 14 minutes off my marathon PR. Plus, the community here cheers everyone on. No ego, just pure grit.",
    achievement: "Sub-3:15 Marathon Finish",
    program: "Elite Cardio & Endurance"
  }
];

export const FAQS = [
  {
    q: "Can I try the gym before committing to a membership?",
    a: "Yes! We offer a complimentary 1-Day VIP Guest Pass for local residents. Simply fill out our online enquiry form or WhatsApp our concierge, and we will prepare your pass immediately."
  },
  {
    q: "Are there any hidden joining fees or cancellation penalties?",
    a: "None. We pride ourselves on transparent, honest pricing. Month-to-month plans can be paused or cancelled anytime with 14 days written notice."
  },
  {
    q: "Is personal training included in standard memberships?",
    a: "Standard and VIP memberships include a comprehensive 1-on-1 fitness and InBody movement assessment. For dedicated ongoing weekly 1-on-1 coaching, check out our Personal Training Plan."
  },
  {
    q: "What are your peak hours, and does it get overcrowded?",
    a: "Our 15,000 sq. ft. layout with 10 power racks and multiple duplicate cable stacks ensures minimal wait times even during peak hours (5:30 PM - 7:30 PM). You can also monitor live capacity on our mobile app."
  }
];
