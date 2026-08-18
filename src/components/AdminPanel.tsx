import React, { useState } from 'react';
import { Project, ActivityItem, VolunteerSubmission, ContactMessage, OrgInfo, NewsletterSubscriber, ChatConversationRecord } from '../types';
import { Settings, Plus, Trash2, Edit, CheckCircle, ShieldCheck, Mail, User, Phone, Calendar, Sparkles, Bot } from 'lucide-react';
import { ChatbotKnowledgeAdmin } from './ChatbotKnowledgeAdmin';

interface AdminPanelProps {
  orgInfo: OrgInfo;
  setOrgInfo: React.Dispatch<React.SetStateAction<OrgInfo>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  activities: ActivityItem[];
  setActivities: React.Dispatch<React.SetStateAction<ActivityItem[]>>;
  volunteers: VolunteerSubmission[];
  messages: ContactMessage[];
  subscribers: NewsletterSubscriber[];
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  orgInfo,
  setOrgInfo,
  projects,
  setProjects,
  activities,
  setActivities,
  volunteers,
  messages,
  subscribers
}) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'projects' | 'activities' | 'volunteers' | 'messages' | 'subscribers' | 'chatbot'>('mission');

  // Mission/Vision form state
  const [missionInput, setMissionInput] = useState(orgInfo.mission);
  const [visionInput, setVisionInput] = useState(orgInfo.vision);
  const [savedMissionNotice, setSavedMissionNotice] = useState(false);

  // New Project form state
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjCategory, setNewProjCategory] = useState<Project['category']>('Community');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [newProjLocation, setNewProjLocation] = useState('Dhanot, Punjab');
  const [newProjImage, setNewProjImage] = useState('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000');

  // New Activity form state
  const [newActTitle, setNewActTitle] = useState('');
  const [newActCategory, setNewActCategory] = useState<ActivityItem['category']>('Event');
  const [newActSummary, setNewActSummary] = useState('');
  const [newActDate, setNewActDate] = useState('May 2026');
  const [newActLocation, setNewActLocation] = useState('Dhanot');
  const [newActImage, setNewActImage] = useState('https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000');

  // Mock Active Chatbot Conversations for Admin
  const [conversations, setConversations] = useState<ChatConversationRecord[]>([
    {
      id: 'conv-1',
      userName: 'Muhammad Ali',
      userPhone: '+92 300 1234567',
      status: 'Active',
      messagesCount: 5,
      lastMessage: 'Asked about YWS registration and mission statement',
      startedAt: '18 Aug 2026, 09:30 AM'
    },
    {
      id: 'conv-2',
      userName: 'Ayesha Bibi',
      userPhone: '+92 301 9876543',
      status: 'Human Handoff',
      messagesCount: 8,
      lastMessage: 'Requested to speak with a representative regarding volunteer program',
      startedAt: '18 Aug 2026, 08:15 AM'
    }
  ]);

  const handleSaveMission = (e: React.FormEvent) => {
    e.preventDefault();
    setOrgInfo({
      ...orgInfo,
      mission: missionInput,
      vision: visionInput
    });
    setSavedMissionNotice(true);
    setTimeout(() => setSavedMissionNotice(false), 3000);
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjTitle || !newProjDesc) return;

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: newProjTitle,
      category: newProjCategory,
      description: newProjDesc,
      fullDescription: newProjDesc,
      location: newProjLocation,
      date: 'Active 2026',
      status: 'Ongoing',
      imageUrl: newProjImage,
      beneficiaries: 'Community Members'
    };

    setProjects([newProject, ...projects]);
    setNewProjTitle('');
    setNewProjDesc('');
    alert('Project added successfully! Chatbot RAG knowledge base automatically synced.');
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newActTitle || !newActSummary) return;

    const newActivity: ActivityItem = {
      id: `act-${Date.now()}`,
      title: newActTitle,
      category: newActCategory,
      date: newActDate,
      location: newActLocation,
      summary: newActSummary,
      content: newActSummary,
      imageUrl: newActImage
    };

    setActivities([newActivity, ...activities]);
    setNewActTitle('');
    setNewActSummary('');
    alert('Activity added successfully! Chatbot RAG knowledge base automatically synced.');
  };

  const handleDeleteActivity = (id: string) => {
    if (confirm('Are you sure you want to delete this activity?')) {
      setActivities(activities.filter(a => a.id !== id));
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-emerald-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <ShieldCheck className="w-4 h-4" /> Content Management System & AI Chatbot Hub
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold">YWS Admin Portal</h1>
            <p className="text-emerald-300 text-sm mt-1">Manage organization content, RAG knowledge sync, projects, activities, and volunteer submissions.</p>
          </div>
          <div className="bg-emerald-900/80 px-4 py-2 rounded-xl text-xs text-emerald-200 border border-emerald-700">
            <span>Status: <strong className="text-white">Active Session</strong></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        {/* Admin Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'mission' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            Mission & Vision
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'projects' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            Manage Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'activities' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            Manage Activities ({activities.length})
          </button>
          <button
            onClick={() => setActiveTab('chatbot')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'chatbot' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-emerald-900 hover:bg-emerald-50 border border-emerald-200'
            }`}
          >
            <Bot className="w-4 h-4" />
            WhatsApp AI & RAG Knowledge
          </button>
          <button
            onClick={() => setActiveTab('volunteers')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'volunteers' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            Volunteer Applications ({volunteers.length})
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'messages' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            Contact Messages ({messages.length})
          </button>
          <button
            onClick={() => setActiveTab('subscribers')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'subscribers' ? 'bg-emerald-700 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            Subscribers ({subscribers.length})
          </button>
        </div>

        {/* Tab 1: Mission & Vision */}
        {activeTab === 'mission' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80 max-w-3xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Edit Mission & Vision</h3>
            <p className="text-gray-600 text-sm mb-6">Update the core guiding statements of Young Welfare Society. Changes sync instantly with the website and WhatsApp RAG AI.</p>

            {savedMissionNotice && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Mission and Vision updated successfully and synced to WhatsApp AI!</span>
              </div>
            )}

            <form onSubmit={handleSaveMission} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Mission Statement
                </label>
                <textarea
                  rows={4}
                  value={missionInput}
                  onChange={(e) => setMissionInput(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Vision Statement
                </label>
                <textarea
                  rows={4}
                  value={visionInput}
                  onChange={(e) => setVisionInput(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md"
              >
                Save Changes & Sync AI
              </button>
            </form>
          </div>
        )}

        {/* Tab 2: Manage Projects */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            {/* Add New Project Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200/80">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Add New YWS Project</h3>
              <p className="text-gray-600 text-sm mb-6">New projects instantly populate the website projects list and the WhatsApp RAG knowledge base.</p>

              <form onSubmit={handleAddProject} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Project Title</label>
                  <input
                    type="text"
                    value={newProjTitle}
                    onChange={(e) => setNewProjTitle(e.target.value)}
                    placeholder="e.g. Clean Drinking Water Initiative"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Category</label>
                  <select
                    value={newProjCategory}
                    onChange={(e) => setNewProjCategory(e.target.value as any)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Youth">Youth</option>
                    <option value="Education">Education</option>
                    <option value="Community">Community</option>
                    <option value="Relief">Relief</option>
                    <option value="Awareness">Awareness</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Description</label>
                  <textarea
                    rows={3}
                    value={newProjDesc}
                    onChange={(e) => setNewProjDesc(e.target.value)}
                    placeholder="Provide project objectives and activities..."
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Location</label>
                  <input
                    type="text"
                    value={newProjLocation}
                    onChange={(e) => setNewProjLocation(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Image URL</label>
                  <input
                    type="text"
                    value={newProjImage}
                    onChange={(e) => setNewProjImage(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publish Project & Sync AI</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Existing Projects List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200/80">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Existing Projects ({projects.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-5 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                          {proj.category}
                        </span>
                        <span className="text-xs text-gray-500 font-medium">{proj.status}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-base">{proj.title}</h4>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{proj.description}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{proj.location}</span>
                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="text-rose-600 hover:text-rose-800 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Manage Activities */}
        {activeTab === 'activities' && (
          <div className="space-y-8">
            {/* Add Activity Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200/80">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Add New Activity / Event</h3>
              <p className="text-gray-600 text-sm mb-6">Activities are instantly made available to the WhatsApp assistant.</p>

              <form onSubmit={handleAddActivity} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Activity Title</label>
                  <input
                    type="text"
                    value={newActTitle}
                    onChange={(e) => setNewActTitle(e.target.value)}
                    placeholder="e.g. Youth Career Seminar"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Category</label>
                  <select
                    value={newActCategory}
                    onChange={(e) => setNewActCategory(e.target.value as any)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Event">Event</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Campaign">Campaign</option>
                    <option value="Welfare">Welfare</option>
                    <option value="Announcement">Announcement</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Summary</label>
                  <textarea
                    rows={3}
                    value={newActSummary}
                    onChange={(e) => setNewActSummary(e.target.value)}
                    placeholder="Summary of activity..."
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Date</label>
                  <input
                    type="text"
                    value={newActDate}
                    onChange={(e) => setNewActDate(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Location</label>
                  <input
                    type="text"
                    value={newActLocation}
                    onChange={(e) => setNewActLocation(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Publish Activity & Sync AI</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Existing Activities List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200/80">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Existing Activities ({activities.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activities.map((act) => (
                  <div key={act.id} className="p-5 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                          {act.category}
                        </span>
                        <span className="text-xs text-gray-500 font-medium">{act.date}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-base">{act.title}</h4>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{act.summary}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{act.location}</span>
                      <button
                        onClick={() => handleDeleteActivity(act.id)}
                        className="text-rose-600 hover:text-rose-800 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                        title="Delete activity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: WhatsApp AI & RAG Knowledge */}
        {activeTab === 'chatbot' && (
          <ChatbotKnowledgeAdmin
            conversations={conversations}
            onUpdateConversations={setConversations}
          />
        )}

        {/* Tab 5: Volunteer Applications */}
        {activeTab === 'volunteers' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Volunteer Applications ({volunteers.length})</h3>
            <p className="text-gray-600 text-sm mb-6">Submissions received via website form or the WhatsApp AI chatbot volunteer flow.</p>

            {volunteers.length === 0 ? (
              <p className="text-gray-500 text-sm py-8 text-center bg-gray-50 rounded-2xl">No volunteer applications received yet.</p>
            ) : (
              <div className="space-y-4">
                {volunteers.map((vol) => (
                  <div key={vol.id} className="p-6 rounded-2xl border border-gray-200 bg-gray-50 space-y-3">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-200 pb-3">
                      <div>
                        <h4 className="font-bold text-gray-900 text-base">{vol.fullName}</h4>
                        <div className="flex items-center gap-4 text-xs text-gray-600 mt-1 flex-wrap">
                          <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-emerald-600" /> {vol.phone}</span>
                          <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-emerald-600" /> {vol.email}</span>
                          <span className="font-semibold text-emerald-800">📍 {vol.city}</span>
                        </div>
                      </div>
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold">
                        Submitted: {vol.submittedAt}
                      </span>
                    </div>
                    {vol.interests && vol.interests.length > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-700">Skills/Interests:</span>
                        <div className="flex gap-1.5 flex-wrap">
                          {vol.interests.map((int, i) => (
                            <span key={i} className="bg-emerald-50 text-emerald-900 text-xs px-2.5 py-0.5 rounded-md font-medium border border-emerald-200">
                              {int}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {vol.message && (
                      <p className="text-xs text-gray-600 bg-white p-3 rounded-xl border border-gray-200">
                        "{vol.message}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 6: Contact Messages */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Messages ({messages.length})</h3>
            <p className="text-gray-600 text-sm mb-6">Inquiries submitted through the contact form.</p>

            {messages.length === 0 ? (
              <p className="text-gray-500 text-sm py-8 text-center bg-gray-50 rounded-2xl">No contact messages received yet.</p>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="p-6 rounded-2xl border border-gray-200 bg-gray-50 space-y-3">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-200 pb-3">
                      <div>
                        <h4 className="font-bold text-gray-900 text-base">{msg.name} <span className="text-xs font-normal text-gray-500">({msg.email})</span></h4>
                        <p className="text-xs font-semibold text-emerald-800 mt-0.5">Subject: {msg.subject}</p>
                      </div>
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
                        {msg.sentAt}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 bg-white p-4 rounded-xl border border-gray-200 leading-relaxed">
                      "{msg.message}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 7: Newsletter Subscribers */}
        {activeTab === 'subscribers' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Newsletter Subscribers ({subscribers.length})</h3>
            <p className="text-gray-600 text-sm mb-6">Email addresses captured from the footer newsletter form.</p>

            {subscribers.length === 0 ? (
              <p className="text-gray-500 text-sm py-8 text-center bg-gray-50 rounded-2xl">No newsletter subscribers yet.</p>
            ) : (
              <div className="space-y-3">
                {subscribers.map((sub) => (
                  <div key={sub.id} className="p-4 rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                        <Mail className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{sub.email}</h4>
                        <p className="text-xs text-gray-500">Subscribed on: {sub.subscribedAt}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-emerald-700 text-white px-3 py-1 rounded-full font-medium">
                      Active Subscriber
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
