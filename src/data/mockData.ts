import { Project, ActivityItem, GalleryImage, OrgInfo } from '../types';

export const initialOrgInfo: OrgInfo = {
  name: "Young Welfare Society (YWS)",
  shortName: "YWS",
  establishedYear: 1992,
  registrationDate: "16 February 1995",
  registrationDetails: "Registered under the Social Welfare Department, Ordinance XLVI of 1961, Government of Punjab, Pakistan.",
  address: "Dhanot, Punjab, Pakistan",
  phonePrimary: "+92 300 8686046",
  phoneSecondary: "+92 300 8885072",
  email: "yws.lodhran@gmail.com",
  facebookUrl: "https://www.facebook.com/yws.pk/",
  mission: "To foster positive social change by empowering youth, uplifting underprivileged communities, promoting education, and championing sustainable community welfare with dedication, integrity, and volunteer spirit.",
  vision: "A resilient, educated, and self-reliant society where every individual has equal opportunities for growth, dignity, and active civic participation.",
  historySummary: "Established in 1992 by a dedicated group of visionary youth in Dhanot, Punjab, Young Welfare Society (YWS) began as a grassroots initiative to address local community challenges. Officially registered on February 16, 1995, under the Social Welfare Department, YWS has grown into a trusted non-profit, non-governmental, and non-political pillar of social development in the region."
};

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "Youth Leadership & Skill Development Program",
    category: "Youth",
    description: "Empowering young leaders through mentorship workshops, vocational guidance, and civic engagement training.",
    fullDescription: "This flagship initiative focuses on equipping young people in rural and semi-urban communities with essential soft skills, leadership training, and technical guidance. Through interactive seminars and mentorship circles, YWS enables youth to take constructive roles in community building and positive social transformation.",
    location: "Dhanot & Surrounding Areas, Punjab",
    date: "Ongoing Program",
    status: "Ongoing",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "1,500+ Youth Reached"
  },
  {
    id: "proj-2",
    title: "Community Education Support Initiative",
    category: "Education",
    description: "Providing educational supplies, tutoring support, and literacy awareness for children in underserved rural schools.",
    fullDescription: "Education is the cornerstone of sustainable development. This project supplies essential learning materials, stationery, and books to deserving students, while organizing community study circles and literacy awareness campaigns for families.",
    location: "Lodhran & Dhanot Region",
    date: "Active Academic Year",
    status: "Ongoing",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "800+ Students Supported"
  },
  {
    id: "proj-3",
    title: "Community Welfare & Social Support Drive",
    category: "Community",
    description: "Organizing social support distribution and community welfare camps for marginalized households.",
    fullDescription: "A compassionate community welfare drive designed to assist vulnerable families during seasonal hardships and economic challenges. YWS volunteers coordinate essential support distributions with utmost dignity and transparency.",
    location: "Dhanot, Punjab",
    date: "Seasonal & Monthly Cycles",
    status: "Ongoing",
    imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "500+ Families Assisted"
  },
  {
    id: "proj-4",
    title: "Social Awareness & Civic Health Campaign",
    category: "Awareness",
    description: "Public seminars and community dialogue sessions on health, environmental care, and social harmony.",
    fullDescription: "Creating grassroots awareness regarding community health, cleanliness, plantation drives, and social responsibility. Local elders, youth, and community members actively participate in dialogue sessions.",
    location: "Punjab, Pakistan",
    date: "Quarterly Campaigns",
    status: "Ongoing",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "Multiple Communities"
  },
  {
    id: "proj-5",
    title: "Emergency Relief & Community Resilience",
    category: "Relief",
    description: "Rapid response relief operations and humanitarian assistance during local emergencies and natural calamities.",
    fullDescription: "When floods or emergency situations impact local populations, YWS mobilizes its volunteer network to deliver emergency rations, clean drinking water, and temporary support to affected families.",
    location: "Punjab Region",
    date: "As Required / Disaster Response",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "Emergency Relief Reached"
  }
];

export const initialActivities: ActivityItem[] = [
  {
    id: "act-1",
    title: "Annual YWS Youth Convention & Community Meetup",
    category: "Event",
    date: "January 15, 2026",
    location: "Dhanot Community Hall",
    summary: "Bringing together local youth leaders, community elders, and volunteers to celebrate 34 years of community service.",
    content: "The annual YWS convention highlighted past achievements, recognized dedicated volunteer contributions, and outlined upcoming community development goals for the year. Distinguished community members and youth delegates shared inspiring insights on civic duty and social harmony.",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "act-2",
    title: "Community Plantation & Cleanliness Drive",
    category: "Campaign",
    date: "February 20, 2026",
    location: "Dhanot Main Boulevard & Schools",
    summary: "YWS volunteers and local students planted over 500 saplings to promote green environments and civic responsibility.",
    content: "Under the Green Dhanot initiative, volunteers, school children, and local residents joined hands to plant trees across public spaces and educational institutions. Awareness talks on environmental care were also conducted.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "act-3",
    title: "Vocational Guidance & Career Workshop for Youth",
    category: "Workshop",
    date: "March 10, 2026",
    location: "YWS Regional Center, Dhanot",
    summary: "Professional mentors guided young graduates on career planning, skill enhancement, and entrepreneurship opportunities.",
    content: "A full-day interactive workshop designed to bridge the gap between education and employment. Experts shared guidance on resume building, digital literacy, and starting local vocational ventures.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "act-4",
    title: "Social Welfare Distribution Camp",
    category: "Welfare",
    date: "April 05, 2026",
    location: "Dhanot Rural Union Council",
    summary: "Transparent distribution of necessary supplies to deserving families ahead of seasonal changes.",
    content: "YWS organized a well-coordinated community welfare camp where essential support packages were provided to registered deserving families with complete transparency and respect.",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
  }
];

export const initialGallery: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Youth Leadership Seminar",
    category: "Youth",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    caption: "Engaging young minds in leadership and community service discussions.",
    date: "January 2026"
  },
  {
    id: "gal-2",
    title: "Plantation Drive Participants",
    category: "Community",
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
    caption: "Volunteers planting trees during the Clean & Green community drive.",
    date: "February 2026"
  },
  {
    id: "gal-3",
    title: "Educational Materials Distribution",
    category: "Welfare",
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000",
    caption: "Supporting students with essential books and stationery.",
    date: "February 2026"
  },
  {
    id: "gal-4",
    title: "Skill Development Workshop",
    category: "Workshops",
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000",
    caption: "Youth participants attending vocational and career guidance sessions.",
    date: "March 2026"
  },
  {
    id: "gal-5",
    title: "Community Gathering & Meeting",
    category: "Events",
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000",
    caption: "Community elders and members discussing local welfare initiatives.",
    date: "January 2026"
  },
  {
    id: "gal-6",
    title: "Welfare Support Camp",
    category: "Welfare",
    url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
    caption: "Serving families with dignity during community welfare distribution.",
    date: "April 2026"
  }
];
