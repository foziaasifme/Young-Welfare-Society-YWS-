export type PageTab = 'home' | 'about' | 'work' | 'projects' | 'activities' | 'gallery' | 'get-involved' | 'contact' | 'admin';

export interface Project {
  id: string;
  title: string;
  category: 'Youth' | 'Education' | 'Community' | 'Relief' | 'Awareness';
  description: string;
  fullDescription?: string;
  location: string;
  date: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  imageUrl: string;
  beneficiaries?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: 'Event' | 'Workshop' | 'Campaign' | 'Welfare' | 'Announcement';
  date: string;
  location: string;
  summary: string;
  content: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Community' | 'Youth' | 'Workshops' | 'Events' | 'Welfare';
  url: string;
  caption: string;
  date: string;
}

export interface VolunteerSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  interests: string[];
  message: string;
  submittedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  sentAt: string;
}

export interface OrgInfo {
  name: string;
  shortName: string;
  establishedYear: number;
  registrationDate: string;
  registrationDetails: string;
  address: string;
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  facebookUrl: string;
  mission: string;
  vision: string;
  historySummary: string;
}
