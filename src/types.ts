export type PageTab = 'home' | 'about' | 'work' | 'projects' | 'activities' | 'gallery' | 'get-involved' | 'contact' | 'faq' | 'admin';

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

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Donations & Support' | 'Membership & Volunteering' | 'Registration';
}

export interface KnowledgeDocument {
  id: string;
  sourceType: 'Page' | 'Project' | 'Activity' | 'FAQ' | 'Organization';
  sourceTitle: string;
  sourceUrl: string;
  contentHash: string;
  version: number;
  lastUpdated: string;
  status: 'Published' | 'Outdated' | 'Syncing';
}

export interface ChatbotMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: string[];
  isLocation?: boolean;
}

export interface ChatConversationRecord {
  id: string;
  userName: string;
  userPhone: string;
  status: 'Active' | 'Human Handoff' | 'Resolved';
  messagesCount: number;
  lastMessage: string;
  startedAt: string;
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


