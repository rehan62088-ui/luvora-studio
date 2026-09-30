export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  summary: string;
  theIdea: string;
  visualDirection: string;
  keyFeatures: string[];
  responsiveExperience: {
    desktopNotes: string;
    mobileNotes: string;
  };
  intendedResult: string;
  themeColor: string;
  accentHex: string;
  mockupType: 'desktop' | 'laptop' | 'dual' | 'editorial';
  metrics?: { label: string; value: string }[];
}

export interface Service {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProjectEnquiryData {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  serviceNeeded: string;
  pageCount: string;
  budget: string;
  timeline: string;
  details: string;
  referenceUrl: string;
}
