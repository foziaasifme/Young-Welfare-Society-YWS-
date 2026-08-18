import React, { useState } from 'react';
import { Project, ActivityItem, VolunteerSubmission, ContactMessage, OrgInfo } from '../types';
import { Settings, Plus, Trash2, Edit, CheckCircle, ShieldCheck, Mail, User, Phone, Calendar, Sparkles } from 'lucide-react';

interface AdminPanelProps {
  orgInfo: OrgInfo;
  setOrgInfo: React.Dispatch<React.SetStateAction<OrgInfo>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  activities: ActivityItem[];
  setActivities: React.Dispatch<React.SetStateAction<ActivityItem[]>>;
  volunteers: VolunteerSubmission[];
  messages: ContactMessage[];
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  orgInfo,
  setOrgInfo,
  projects,
  setProjects,
  activities,
  setActivities,
  volunteers,
  messages
}) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'projects' | 'activities' | 'volunteers' | 'messages'>('mission');

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
    alert('Project added successfully!');
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
    alert('Activity added successfully!');
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
              <ShieldCheck className="w-4 h-4" /> Content Management System
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold">YWS Admin Portal</h1>
            <p className="text-emerald-300 text-sm mt-1">Manage organization content, projects, activities, and submissions.</p>
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
        </div>

        {/* Tab 1: Mission & Vision */}
        {activeTab === 'mission' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80 max-w-3xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Edit Mission & Vision</h3>
            <p className="text-gray-600 text-sm mb-6">Update the core guiding statements of Young Welfare Society.</p>

            {savedMissionNotice && (
              <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Mission and Vision updated successfully!</span>
              </div>
            )}

            <form onSubmit={handleSaveMission} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Mission</label>
                <textarea
                  rows={4}
                  value={missionInput}
                  onChange={(e) => setMissionInput(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Vision</label>
                <textarea
                  rows={4}
                  value={visionInput}
                  onChange={(e) => setVisionInput(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}

        {/* Tab 2: Manage Projects */}
        {activeTab === 'projects' && (
          <div className="space-y-10">
            {/* Add Project Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-emerald-600" /> Add New Project
              </h3>
              <form onSubmit={handleAddProject} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Project Title</label>
                  <input
                    type="text"
                    required
                    value={newProjTitle}
                    onChange={(e) => setNewProjTitle(e.target.value)}
                    placeholder="e.g., Rural Clean Water Campaign"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                  <select
                    value={newProjCategory}
                    onChange={(e) => setNewProjCategory(e.target.value as any)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm"
                  >
                    <option value="Youth">Youth</option>
                    <option value="Education">Education</option>
                    <option value="Community">Community</option>
                    <option value="Relief">Relief</option>
                    <option value="Awareness">Awareness</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={3}
                    required
                    value={newProjDesc}
                    onChange={(e) => setNewProjDesc(e.target.value)}
                    placeholder="Short description of the project..."
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={newProjLocation}
                    onChange={(e) => setNewProjLocation(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
                  <input
                    type="url"
                    value={newProjImage}
                    onChange={(e) => setNewProjImage(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Publish Project
                  </button>
                </div>
              </form>
            </div>

            {/* Existing Projects List */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Existing Projects ({projects.length})</h3>
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-2xl border border-gray-200 gap-4">
                    <div className="flex items-center gap-4">
                      <img src={proj.imageUrl} alt={proj.title} className="w-16 h-16 rounded-xl object-cover shrink-0" referrerPolicy="no-referrer" />
                      <div>
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">{proj.category}</span>
                        <h4 className="font-bold text-gray-900 mt-1">{proj.title}</h4>
                        <p className="text-xs text-gray-500">{proj.location} • {proj.status}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="bg-rose-50 hover:bg-rose-100 text-rose-700 p-2.5 rounded-xl transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Manage Activities */}
        {activeTab === 'activities' && (
          <div className="space-y-10">
            {/* Add Activity Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-emerald-600" /> Add New Activity / News
              </h3>
              <form onSubmit={handleAddActivity} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Activity Title</label>
                  <input
                    type="text"
                    required
                    value={newActTitle}
                    onChange={(e) => setNewActTitle(e.target.value)}
                    placeholder="e.g., Youth Leadership Seminar"
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                  <select
                    value={newActCategory}
                    onChange={(e) => setNewActCategory(e.target.value as any)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm"
                  >
                    <option value="Event">Event</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Campaign">Campaign</option>
                    <option value="Welfare">Welfare</option>
                    <option value="Announcement">Announcement</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Summary / Content</label>
                  <textarea
                    rows={3}
                    required
                    value={newActSummary}
                    onChange={(e) => setNewActSummary(e.target.value)}
                    placeholder="Activity summary..."
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                  <input
                    type="text"
                    value={newActDate}
                    onChange={(e) => setNewActDate(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={newActLocation}
                    onChange={(e) => setNewActLocation(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Publish Activity
                  </button>
                </div>
              </form>
            </div>

            {/* Existing Activities List */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Existing Activities ({activities.length})</h3>
              <div className="space-y-4">
                {activities.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-2xl border border-gray-200 gap-4">
                    <div className="flex items-center gap-4">
                      <img src={item.imageUrl} alt={item.title} className="w-16 h-16 rounded-xl object-cover shrink-0" referrerPolicy="no-referrer" />
                      <div>
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">{item.category}</span>
                        <h4 className="font-bold text-gray-900 mt-1">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.date} • {item.location}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteActivity(item.id)}
                      className="bg-rose-50 hover:bg-rose-100 text-rose-700 p-2.5 rounded-xl transition-colors"
                      title="Delete Activity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Volunteers */}
        {activeTab === 'volunteers' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Volunteer Applications ({volunteers.length})</h3>
            <p className="text-gray-600 text-sm mb-6">List of community members who signed up to volunteer with YWS.</p>

            {volunteers.length === 0 ? (
              <p className="text-gray-500 text-sm py-8 text-center bg-gray-50 rounded-2xl">No volunteer submissions yet.</p>
            ) : (
              <div className="space-y-4">
                {volunteers.map((vol) => (
                  <div key={vol.id} className="p-6 rounded-2xl border border-gray-200 bg-gray-50 space-y-3">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-200 pb-3">
                      <div>
                        <h4 className="font-bold text-gray-900 text-base">{vol.fullName}</h4>
                        <p className="text-xs text-gray-500">{vol.city}</p>
                      </div>
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
                        {vol.submittedAt}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-600" /> {vol.phone}</p>
                      <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-600" /> {vol.email || 'Not provided'}</p>
                    </div>
                    <div>
                      <strong className="text-xs text-gray-500 block mb-1">Interests:</strong>
                      <div className="flex flex-wrap gap-1.5">
                        {vol.interests.map(i => (
                          <span key={i} className="text-xs bg-emerald-700 text-white px-2.5 py-0.5 rounded-md">{i}</span>
                        ))}
                      </div>
                    </div>
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

        {/* Tab 5: Contact Messages */}
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
      </div>
    </div>
  );
};
