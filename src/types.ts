export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'expertise'
  | 'projects'
  | 'news'
  | 'careers'
  | 'contact'
  | 'verification';

export type Sector =
  | 'all'
  | 'commercial'
  | 'industrial'
  | 'institutional'
  | 'multi-residential';

export type ContractType =
  | 'construction-management'
  | 'turnkey'
  | 'fixed-price';

export interface Project {
  id: string;
  title: string;
  sector: 'commercial' | 'industrial' | 'institutional' | 'multi-residential';
  location: string;
  year: string;
  contractType: string;
  scope: string;
  featured: boolean;
  heroImage: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  keyStats: {
    label: string;
    value: string;
  }[];
  tags: string[];
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  advantages: string[];
  bestFor: string;
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  heroImage: string;
}

export interface ExpertiseItem {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  keyAspects: string[];
  deliverables: string[];
  heroImage: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  category: 'founding' | 'expansion' | 'certification' | 'governance' | 'innovation';
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  heroImage: string;
  highlight?: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: 'Montréal (Brossard)' | 'Toronto (Concord)' | 'Hybrid / On-Site';
  type: 'Full-time' | 'Permanent';
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface OfficeLocation {
  city: string;
  role: string;
  address: string[];
  phone: string;
  email: string;
  hours: string;
  mapCoords: {
    lat: number;
    lng: number;
  };
}
