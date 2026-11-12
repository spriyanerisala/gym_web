export interface Program {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  intensity: 'Medium' | 'High' | 'Extreme';
  caloriesBurn: string;
  duration: string;
  features: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  duration: string;
  popular?: boolean;
  facilities: string[];
  benefits: string[];
  color: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  certifications: string[];
  social: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'workouts' | 'equipment' | 'transformations';
  image: string;
  caption: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  specs: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
  achievement: string;
  program: string;
}

export interface SpecialOffer {
  id: string;
  badge: string;
  title: string;
  discount: string;
  code: string;
  description: string;
  expiryNote: string;
  highlightColor: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  plan: string;
  program: string;
  preferredDate: string;
  message: string;
}
