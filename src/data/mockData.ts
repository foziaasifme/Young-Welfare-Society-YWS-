import { Project, ActivityItem, GalleryImage, OrgInfo, FAQItem } from '../types';

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
    title: "4 days Free Eye Camp",
    category: "Community",
    description: "Free Eye surgical diagnosis, visual checks, and medical supplies setup for underprivileged families.",
    fullDescription: "An annual camp set up by YWS members and expert ophthalmologists to deliver direct vision screenings, diabetic retinopathy advice, and standard cataract removals on-site completely free.",
    location: "Yaqoob Hospital, Dhanote",
    date: "Every Year",
    status: "Ongoing",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "Annual Diagnostic Patient Camps",
    donorPartner: "Member’s Funding",
    totalBudget: "Self-Funded by Members"
  },
  {
    id: "proj-2",
    title: "COVID-19 Awareness",
    category: "Awareness",
    description: "Distribution of face protection kits, medical sanitation pamphlets, and sanitizers during the early pandemic outbreak.",
    fullDescription: "A self-funded rapid outreach session to spread hygiene education, safe distancing manuals, and free face mask distributions across remote street alleys of Union Council Dhanot.",
    location: "Dhanote and surroundings",
    date: "April 2020",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1584036561566-baf245fdb76c?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "Awareness Campaign",
    donorPartner: "Self-Funded",
    totalBudget: "11,200 Rs."
  },
  {
    id: "proj-3",
    title: "Tree Plantation Campaign",
    category: "Community",
    description: "Mass eco-awareness and tree plantation drive in Union Council Dhanote and surrounding locations.",
    fullDescription: "A direct seasonal environmental care campaign executed by our volunteer base, encouraging youth and local farmers to plant indigenous tree saplings.",
    location: "U/c Dhanote & its Surrounding Areas",
    date: "2018-2020",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "Campaign Reach",
    donorPartner: "Self-Funded",
    totalBudget: "17,550 Rs."
  },
  {
    id: "proj-4",
    title: "Ambulance Service + Hepatitis B Vaccination + Health Club",
    category: "Relief",
    description: "Ambulance shifting facilities, Hepatitis B vaccination drives, and fitness club installation for local youngsters.",
    fullDescription: "Supported by a direct vehicle donation from the Government of Japan, this comprehensive clinical protection project delivers low-cost medical transport and high-quality preventative vaccinations.",
    location: "Dhanote & Lodhran District",
    date: "1, Jul 2001 to 2021",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1587745423853-3c37dfd75e15?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "22,000 Ambulance / 320 Vaccinated / 700 Club members",
    donorPartner: "GRA Govt of Japan",
    totalBudget: "36,592 $ US Dollars = (2,329,942 Rs.)"
  },
  {
    id: "proj-5",
    title: "Participation in Dhanote Cricket League",
    category: "Youth",
    description: "Sponsoring local youth teams in sports tournaments to foster positive character development.",
    fullDescription: "Funding sports gear, uniform kits, and logistics for young athletic talents in the Dhanote Cricket League to promote active physical health and divert youth from negative social habits.",
    location: "Dhanote Cricket Stadium",
    date: "2018-2020",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "Local Youth Sports Teams",
    donorPartner: "Self-Funded",
    totalBudget: "10,000 Rs."
  },
  {
    id: "proj-6",
    title: "Non-Formal Basic Education Centers (NFBE)",
    category: "Education",
    description: "Primary home-based schools and adult literacy classes designed for rural dropouts.",
    fullDescription: "Operated 320 non-formal literacy schools focusing on a 'one teacher, one room' philosophy, successfully enabling remote children to enter the mainstream secondary education boards.",
    location: "District Lodhran",
    date: "12, Dec 2002 to 2015",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "9,500 Registered Students",
    donorPartner: "Punjab Literacy Commission (PLC), NEF",
    totalBudget: "Total 4,500,000 Rs."
  },
  {
    id: "proj-7",
    title: "Child Protection - Child Labor Day Advocacy",
    category: "Awareness",
    description: "Awareness rallies, public seminars, and legal lobbying to eradicate severe child labor practices.",
    fullDescription: "A long-term civic advocacy campaign designed to convince rural parents to prioritize educational enrollment over labor fields, in partnership with the Coalition Against Child Labor.",
    location: "District Lodhran & Multan",
    date: "2002-2014",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "250 Registered Campaigners",
    donorPartner: "Coalition Against Child Labor",
    totalBudget: "Awareness Walk"
  },
  {
    id: "proj-8",
    title: "7 Days Free Eye Camps",
    category: "Community",
    description: "Major annual free diagnostic and surgical ophthalmology camps for rural areas.",
    fullDescription: "Providing premium level ocular diagnostic checkups, medicine allocations, and cataract operations for poor individuals across 6 districts of Southern Punjab.",
    location: "Lodhran, Bahawalpur, Vehari, Multan, Muzaffargarh & Bahawalnagar",
    date: "2000-2011",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "2,550 Diagnostic & Surgical Patients",
    donorPartner: "Self Help & Society Provision",
    totalBudget: "0.5 Million Rs."
  },
  {
    id: "proj-9",
    title: "Construction of RCPD Rehab Infrastructure",
    category: "Relief",
    description: "Finishing physical infrastructure for Dhanot's specialized physical rehabilitation facility.",
    fullDescription: "Funding construction material and labor costs to finalize specialized wheelchair ramps, therapy rooms, and orthotic laboratories inside the RCPD complex.",
    location: "RCPD Site, Dhanote",
    date: "2009-2010",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1508847154043-be12a26c86c5?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "463 Differently-Abled Registered kids",
    donorPartner: "Punjab Welfare Trust for Disabled",
    totalBudget: "0.5 Million Rs."
  },
  {
    id: "proj-10",
    title: "Young Rehabilitation Center for Disabled",
    category: "Community",
    description: "Infrastructure mapping and establishment of physical therapy setups on YWS-owned land.",
    fullDescription: "Built on land generously donated by Nawab Inam Ullah Khan, this rehabilitation block serves as a cornerstone diagnostic facility for children with congenital deformities.",
    location: "Yaqoob Hospital Campus, Dhanote",
    date: "1, Mar 2008 to 30, Apr 2009",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "500 Physical Therapy Patients",
    donorPartner: "Trust for Voluntary Organizations (TVO)",
    totalBudget: "TVO: 956,748 Rs. / Total: 1,711,418 Rs."
  },
  {
    id: "proj-11",
    title: "YWS Primary Dispensary Setup",
    category: "Community",
    description: "Operational clinic offering basic diagnostics and free medicine bags.",
    fullDescription: "A crucial daily diagnostic station providing basic first aid, clinical diagnostics, and clean medical assistance to remote households around Dhanote, Nai Wala, and Kamal Pur.",
    location: "Dhanote, Nai Wala & Mouza Kamal Pur Jitial",
    date: "2007-2009",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "1,200 Poor Patients Treated",
    donorPartner: "Trust for Voluntary Organization",
    totalBudget: "1.5 Million Rs."
  },
  {
    id: "proj-12",
    title: "Vocational Training Center for Women",
    category: "Education",
    description: "Supplying sewing machines, fabric kits, and professional tutoring to empower rural girls.",
    fullDescription: "A designated training school delivering direct classes on industrial cutting, weaving, embroidery, and home business setups to secure household financial independent status.",
    location: "Basti Lail Pur, Basti Darbar Shah & Dhanote",
    date: "2006-2008",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "426 Rural Female Trainees",
    donorPartner: "Trust for Voluntary Organizations (TVO)",
    totalBudget: "Assets & Staff Salary by TVO"
  },
  {
    id: "proj-13",
    title: "Farmer’s Day & Water Conservation Seminars",
    category: "Community",
    description: "Capacity building workshops on soil fertility, water conservation, and agricultural tech.",
    fullDescription: "Conducted extensive village assemblies demonstrating low-cost sanitation methods and modern crop irrigation with the support of UN development blocks.",
    location: "District Lodhran Locations",
    date: "2001 to 2009",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "1,250 Farmers per Year",
    donorPartner: "UNDP, PCRWR & Young Welfare Society",
    totalBudget: "UNDP, PCRWR & MAWCD & Self"
  },
  {
    id: "proj-14",
    title: "Young Computer Literacy Center",
    category: "Youth",
    description: "Information technology training, document processing, and office software certifications.",
    fullDescription: "An intensive computer education school preparing young local graduates for administrative office roles and remote professional setups.",
    location: "SPO Center, Dhanote",
    date: "10, Nov 2002 to 9, Nov 2003",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "180 Certified Male & Female Students",
    donorPartner: "Strengthening Participatory Organization (SPO)",
    totalBudget: "SPO: 228,000 Rs. / Total: 315,200 Rs."
  },
  {
    id: "proj-15",
    title: "Establish Dispensary in Dhanote (Faizabad)",
    category: "Community",
    description: "EU-funded primary care medical outpost in Faizabad colony.",
    fullDescription: "Constructed and staffed an essential village dispensary equipped with clinical tools and vaccine storage kits to assist marginalized laborers.",
    location: "Faizabad Dhanote",
    date: "1, Jul 2002 to 30, Jun 2003",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "7,000 Local Residents",
    donorPartner: "Trust for Voluntary Organizations & EU Funded",
    totalBudget: "TVO: 402,700 Rs. / Total: 644,200 Rs."
  },
  {
    id: "proj-16",
    title: "ANF Day - Drug Prevention Drives",
    category: "Awareness",
    description: "Public marches, cricket matches, and school assemblies warning against narcotics usage.",
    fullDescription: "A persistent community protection drive in collaboration with the Anti-Narcotics Force (ANF) to raise awareness of substance abuse risks among school youngsters.",
    location: "Lodhran Public Parks",
    date: "2000-2010",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1461532251020-02c34bc769f6?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "Awareness Walk Campaigns",
    donorPartner: "Anti-Narcotics Force (ANF)",
    totalBudget: "3,000 + 5,000 Rupees"
  },
  {
    id: "proj-17",
    title: "State Vocational Center (Punjab Govt)",
    category: "Education",
    description: "Provincial Social Services Board skills and vocational workshop setup.",
    fullDescription: "Delivering fully funded female embroidery, weaving, and textile stitching certificates to remote women to alleviate rural poverty.",
    location: "Govt Social Center, Dhanote",
    date: "8, Dec 1997 to 20, Jul 2000",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "45 Certified Local Craftswomen",
    donorPartner: "Govt of Punjab Social Service Board",
    totalBudget: "30,000 Rs."
  },
  {
    id: "proj-18",
    title: "Vocational Center (Punjab Bait-ul-Mal)",
    category: "Education",
    description: "Tailoring empowerment school sponsored by the Bait-ul-Mal trust.",
    fullDescription: "An advanced vocational sewing and design school providing complete kits and direct cash stipends to marginalized female trainees.",
    location: "Bait-ul-Mal Center, Lodhran",
    date: "4, Nov 1996",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "215 Rural Women Trained",
    donorPartner: "Punjab Bait-ul-Mal",
    totalBudget: "0.1 Million Rs."
  },
  {
    id: "proj-19",
    title: "National Day & Independence Celebrations",
    category: "Community",
    description: "Annual Independence Day cricket tournaments and national flag rallies.",
    fullDescription: "Promoting social harmony, patriotism, and healthy community bonding through sports events and social gatherings on the 14th of August.",
    location: "Dhanote Public Grounds",
    date: "1997 to 2014",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=1000",
    beneficiaries: "Annual Civic Gathering Event",
    donorPartner: "Self-Funded",
    totalBudget: "0.1 Million Rs. Every Year"
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

export const initialFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "When was Young Welfare Society (YWS) established and registered?",
    answer: "YWS began its community service work in 1992 in Dhanot, Punjab, and was officially registered on February 16, 1995, under the Social Welfare Department, Ordinance XLVI of 1961, Government of Punjab, Pakistan.",
    category: "Registration"
  },
  {
    id: "faq-2",
    question: "How can I become a volunteer or member of YWS?",
    answer: "You can easily join our volunteer network by visiting the 'Get Involved' page on our website and filling out the Volunteer Registration Form. Our team will get in touch with you regarding upcoming community activities and orientation.",
    category: "Membership & Volunteering"
  },
  {
    id: "faq-3",
    question: "How are donations and community support utilized?",
    answer: "As a registered non-profit and non-political organization, YWS ensures that 100% of community contributions and support are transparently utilized for educational drives, youth vocational programs, and seasonal welfare relief camps.",
    category: "Donations & Support"
  },
  {
    id: "faq-4",
    question: "Where is YWS located and how can we contact the office?",
    answer: "Our main office is located in Dhanot, Punjab, Pakistan. You can contact us via phone at +92 300 8686046 / +92 300 8885072 or email us at yws.lodhran@gmail.com.",
    category: "General"
  },
  {
    id: "faq-5",
    question: "Does YWS collaborate with other organizations or institutions?",
    answer: "Yes! YWS actively collaborates with educational institutions, youth societies, and fellow community welfare organizations to maximize social impact and educational outreach across Punjab.",
    category: "General"
  }
];
