import React, { useState, useEffect } from 'react';
import { PageTab, Project, ActivityItem, GalleryImage, VolunteerSubmission, ContactMessage, OrgInfo } from './types';
import { initialOrgInfo, initialProjects, initialActivities, initialGallery } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { MissionVision } from './components/MissionVision';
import { AreasOfWork } from './components/AreasOfWork';
import { ImpactStats } from './components/ImpactStats';
import { ProjectsSection } from './components/ProjectsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { GallerySection } from './components/GallerySection';
import { GetInvolvedSection } from './components/GetInvolvedSection';
import { ContactSection } from './components/ContactSection';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ActivitiesPage } from './components/ActivitiesPage';
import { GalleryPage } from './components/GalleryPage';
import { AdminPanel } from './components/AdminPanel';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [currentTab, setTab] = useState<PageTab>('home');

  // Persistent state with localStorage
  const [orgInfo, setOrgInfo] = useState<OrgInfo>(() => {
    const saved = localStorage.getItem('yws_org_info');
    return saved ? JSON.parse(saved) : initialOrgInfo;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('yws_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [activities, setActivities] = useState<ActivityItem[]>(() => {
    const saved = localStorage.getItem('yws_activities');
    return saved ? JSON.parse(saved) : initialActivities;
  });

  const [gallery] = useState<GalleryImage[]>(initialGallery);

  const [volunteers, setVolunteers] = useState<VolunteerSubmission[]>(() => {
    const saved = localStorage.getItem('yws_volunteers');
    return saved ? JSON.parse(saved) : [];
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('yws_messages');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage when updated
  useEffect(() => {
    localStorage.setItem('yws_org_info', JSON.stringify(orgInfo));
  }, [orgInfo]);

  useEffect(() => {
    localStorage.setItem('yws_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('yws_activities', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem('yws_volunteers', JSON.stringify(volunteers));
  }, [volunteers]);

  useEffect(() => {
    localStorage.setItem('yws_messages', JSON.stringify(messages));
  }, [messages]);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleAddVolunteer = (sub: Omit<VolunteerSubmission, 'id' | 'submittedAt'>) => {
    const newSub: VolunteerSubmission = {
      ...sub,
      id: `vol-${Date.now()}`,
      submittedAt: new Date().toLocaleDateString()
    };
    setVolunteers([newSub, ...volunteers]);
  };

  const handleAddMessage = (msg: Omit<ContactMessage, 'id' | 'sentAt'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      sentAt: new Date().toLocaleDateString()
    };
    setMessages([newMsg, ...messages]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-emerald-600 selection:text-white">
      <Navbar currentTab={currentTab} setTab={setTab} orgInfo={orgInfo} />

      <main className="flex-grow">
        {currentTab === 'home' && (
          <>
            <Hero setTab={setTab} />
            <TrustBanner />
            <MissionVision mission={orgInfo.mission} vision={orgInfo.vision} />
            <AreasOfWork setTab={setTab} />
            <ImpactStats />
            <ProjectsSection projects={projects} setTab={setTab} />
            <ActivitiesSection activities={activities} setTab={setTab} />
            <GallerySection gallery={gallery} setTab={setTab} />

            {/* CTA Banner */}
            <section className="bg-emerald-900 text-white py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-950/30"></div>
              <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
                <span className="bg-emerald-800 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Join Our Cause
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Be Part of Positive Change in Punjab
                </h2>
                <p className="text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto">
                  Volunteer with Young Welfare Society, support community welfare initiatives, or collaborate on impactful social development projects.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <button
                    onClick={() => setTab('get-involved')}
                    className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-current text-rose-600" />
                    <span>Become a Volunteer</span>
                  </button>
                  <button
                    onClick={() => setTab('contact')}
                    className="bg-emerald-800 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all border border-emerald-700"
                  >
                    <span>Contact YWS Team</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {currentTab === 'about' && <AboutPage orgInfo={orgInfo} />}

        {currentTab === 'work' && (
          <div className="bg-white">
            <div className="bg-emerald-950 text-white py-16 sm:py-24 hero-pattern text-center">
              <div className="max-w-7xl mx-auto px-4 space-y-4">
                <span className="text-emerald-300 font-semibold text-xs uppercase tracking-widest bg-emerald-800/80 px-3.5 py-1.5 rounded-full">
                  Our Scope of Action
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Areas of Work & Impact</h1>
                <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto">
                  Comprehensive community development, youth mentoring, education support, and social welfare since 1992.
                </p>
              </div>
            </div>
            <AreasOfWork setTab={setTab} />
            <ImpactStats />
          </div>
        )}

        {currentTab === 'projects' && <ProjectsPage projects={projects} />}

        {currentTab === 'activities' && <ActivitiesPage activities={activities} />}

        {currentTab === 'gallery' && <GalleryPage gallery={gallery} />}

        {currentTab === 'get-involved' && <GetInvolvedSection onAddVolunteer={handleAddVolunteer} />}

        {currentTab === 'contact' && <ContactSection orgInfo={orgInfo} onAddMessage={handleAddMessage} />}

        {currentTab === 'admin' && (
          <AdminPanel
            orgInfo={orgInfo}
            setOrgInfo={setOrgInfo}
            projects={projects}
            setProjects={setProjects}
            activities={activities}
            setActivities={setActivities}
            volunteers={volunteers}
            messages={messages}
          />
        )}
      </main>

      <Footer setTab={setTab} orgInfo={orgInfo} />
    </div>
  );
}
