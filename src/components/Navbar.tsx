import React, { useState } from 'react';
import { PageTab, OrgInfo, Project, ActivityItem } from '../types';
import { Menu, X, Phone, Mail, Facebook, Heart, ShieldCheck, Settings, Download, Smartphone, Check, Search, ArrowRight, ChevronDown, Lock, KeyRound } from 'lucide-react';

interface NavbarProps {
  currentTab: PageTab;
  setTab: (tab: PageTab) => void;
  orgInfo: OrgInfo;
  projects: Project[];
  activities: ActivityItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setTab, orgInfo, projects, activities }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);
  
  // Search Modal State (Search icon opens search window)
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Master Key Admin Protection State
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [masterKeyInput, setMasterKeyInput] = useState('');
  const [masterKeyError, setMasterKeyError] = useState(false);

  // Mega Menu Dropdown State for "Our Work" and "About / Who We Are"
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navLinks: { id: PageTab; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About', hasDropdown: true },
    { id: 'work', label: 'Our Work', hasDropdown: true },
    { id: 'contact', label: 'Contact' },
  ];

  // Global search matching results
  const searchResults = searchQuery.trim() === '' ? [] : [
    ...projects.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase())).map(p => ({ type: 'Project', title: p.title, tab: 'projects' as PageTab })),
    ...activities.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.summary.toLowerCase().includes(searchQuery.toLowerCase())).map(a => ({ type: 'Activity', title: a.title, tab: 'activities' as PageTab })),
    { type: 'Page', title: 'About Young Welfare Society', tab: 'about' as PageTab },
    { type: 'Page', title: 'Areas of Work & Scope', tab: 'work' as PageTab },
    { type: 'Page', title: 'Volunteer Registration', tab: 'get-involved' as PageTab },
  ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 6);

  const handleInstallApp = () => {
    setInstallSuccess(true);
    setTimeout(() => {
      setInstallSuccess(false);
      setInstallModalOpen(false);
    }, 2500);
  };

  const handleAdminKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (masterKeyInput.trim() === '8686046') {
      setMasterKeyError(false);
      setMasterKeyInput('');
      setAdminModalOpen(false);
      setTab('admin');
    } else {
      setMasterKeyError(true);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-emerald-100">
        {/* Top Bar */}
        <div className="bg-emerald-900 text-emerald-50 text-xs sm:text-sm py-2 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                Reg. 16 Feb 1995 (Social Welfare Dept) • Lodhran, Punjab
              </span>
              <a href={`tel:${orgInfo.phonePrimary}`} className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-300" />
                {orgInfo.phonePrimary}
              </a>
              <a href={`mailto:${orgInfo.email}`} className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors">
                <Mail className="w-3.5 h-3.5 text-emerald-300" />
                {orgInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              {/* App Installer Icon button */}
              <button
                onClick={() => setInstallModalOpen(true)}
                className="bg-emerald-800 hover:bg-emerald-700 px-2.5 py-1 rounded-full transition-colors text-white flex items-center gap-1 text-xs font-medium shadow-sm"
                title="Install YWS App"
              >
                <Smartphone className="w-3.5 h-3.5 text-emerald-300" />
                <span>Install App</span>
              </button>

              <a
                href={orgInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 hover:bg-emerald-700 p-1.5 rounded-full transition-colors text-white"
                title="YWS Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              {/* Protected Admin Icon button (Master key 8686046) */}
              <button
                onClick={() => setAdminModalOpen(true)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  currentTab === 'admin' ? 'bg-emerald-700 text-white' : 'bg-emerald-800 hover:bg-emerald-700 text-emerald-100'
                }`}
                title="Admin Portal (Protected)"
              >
                <Settings className="w-3.5 h-3.5" />
                Admin
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
          <div 
            onClick={() => setTab('home')} 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <img
              src={orgInfo.logoUrl || "/assets/aistudio/YWS__logo_bd6f5c5c.jpg"}
              alt="Young Welfare Society Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-contain bg-white p-0.5 border-2 border-emerald-600 shadow-sm group-hover:scale-105 transition-transform"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-emerald-950 tracking-tight leading-snug">
                Young Welfare Society
              </h1>
              <p className="text-xs text-emerald-700 font-medium">
                Lodhran, Punjab, Pakistan • (YWS)
              </p>
            </div>
          </div>

          {/* Desktop Nav with Mega Menu for About and Our Work */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0 relative">
            {navLinks.map((link) => {
              if (link.id === 'about') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setTab('about')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                        currentTab === 'about' || currentTab === 'about-leadership' || currentTab === 'about-staff' || currentTab === 'about-members'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* "Who We Are" Mega Submenu */}
                    {aboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-emerald-100 p-3 z-50 animate-in fade-in duration-200 space-y-1">
                        <div className="px-3 py-2 text-[11px] font-bold text-emerald-800 uppercase tracking-wider border-b border-gray-100 flex items-center justify-between">
                          <span>Who We Are</span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">About Mega Menu</span>
                        </div>

                        <button
                          onClick={() => {
                            setTab('about');
                            setAboutDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-950 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <span className="font-semibold text-gray-900 block group-hover:text-emerald-900">Who We Are Overview</span>
                            <span className="text-[11px] text-gray-500">Corporate profile, history & mission</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                          onClick={() => {
                            setTab('about-leadership');
                            setAboutDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-950 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <span className="font-semibold text-gray-900 block group-hover:text-emerald-900">Leadership & Board</span>
                            <span className="text-[11px] text-gray-500">Board of Directors & Executive Body</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                          onClick={() => {
                            setTab('about-staff');
                            setAboutDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-950 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <span className="font-semibold text-gray-900 block group-hover:text-emerald-900">Staff & Execution Team</span>
                            <span className="text-[11px] text-gray-500">Project managers, coordinators & staff</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                          onClick={() => {
                            setTab('about-members');
                            setAboutDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-950 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <span className="font-semibold text-gray-900 block group-hover:text-emerald-900">General Members & Volunteers</span>
                            <span className="text-[11px] text-gray-500">Community members & volunteer cadre</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.id === 'work') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setWorkDropdownOpen(true)}
                    onMouseLeave={() => setWorkDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setTab('work')}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                        currentTab === 'work' || currentTab === 'projects' || currentTab === 'activities'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Mega Menu Dropdown */}
                    {workDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-emerald-100 p-3 z-50 animate-in fade-in duration-200 space-y-1">
                        <div className="px-3 py-2 text-[11px] font-bold text-emerald-800 uppercase tracking-wider border-b border-gray-100">
                          Our Work & Activities
                        </div>
                        <button
                          onClick={() => {
                            setTab('work');
                            setWorkDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-950 transition-colors flex items-center justify-between"
                        >
                          <span>Areas of Work Overview</span>
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                        </button>
                        <button
                          onClick={() => {
                            setTab('projects');
                            setWorkDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-950 transition-colors flex items-center justify-between"
                        >
                          <div>
                            <span className="font-semibold text-gray-900 block">Projects</span>
                            <span className="text-[11px] text-gray-500">Active welfare initiatives</span>
                          </div>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-bold">{projects.length}</span>
                        </button>
                        <button
                          onClick={() => {
                            setTab('activities');
                            setWorkDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-950 transition-colors flex items-center justify-between"
                        >
                          <div>
                            <span className="font-semibold text-gray-900 block">Activities & News</span>
                            <span className="text-[11px] text-gray-500">Recent events & drives</span>
                          </div>
                          <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-bold">{activities.length}</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => setTab(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentTab === link.id
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Clickable Search Icon Button (opens search window modal) */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2.5 text-gray-700 hover:text-emerald-900 hover:bg-emerald-50 rounded-xl transition-colors ml-1"
              title="Global Search"
            >
              <Search className="w-5 h-5 text-emerald-700" />
            </button>

            <button
              onClick={() => setTab('get-involved')}
              className="ml-2 flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all hover:shadow"
            >
              <Heart className="w-4 h-4 fill-current text-rose-300" />
              Support Us
            </button>
          </nav>

          {/* Mobile Hamburger Toggle & Search Icon */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-lg"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTab('get-involved')}
              className="flex items-center gap-1 bg-emerald-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold"
            >
              <Heart className="w-3.5 h-3.5" /> Support
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-emerald-800 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-5 shadow-lg space-y-2 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === link.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Mobile Submenu Links for Who We Are */}
            <div className="pl-4 border-l-2 border-emerald-200 space-y-1 my-2 bg-emerald-50/50 p-2 rounded-r-xl">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">Who We Are Sections</span>
              <button
                onClick={() => { setTab('about-leadership'); setMobileMenuOpen(false); }}
                className="w-full text-left py-1.5 text-xs font-semibold text-emerald-900 hover:underline block"
              >
                → Leadership & Board
              </button>
              <button
                onClick={() => { setTab('about-staff'); setMobileMenuOpen(false); }}
                className="w-full text-left py-1.5 text-xs font-semibold text-emerald-900 hover:underline block"
              >
                → Staff & Execution Team
              </button>
              <button
                onClick={() => { setTab('about-members'); setMobileMenuOpen(false); }}
                className="w-full text-left py-1.5 text-xs font-semibold text-emerald-900 hover:underline block"
              >
                → General Members & Volunteers
              </button>
            </div>

            {/* Mobile Mega Menu Links for Work */}
            <div className="pl-4 border-l-2 border-emerald-200 space-y-1 my-1">
              <button
                onClick={() => { setTab('projects'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2 text-xs font-semibold text-emerald-900 hover:underline flex justify-between items-center"
              >
                <span>→ View Projects</span>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[10px] font-bold">{projects.length}</span>
              </button>
              <button
                onClick={() => { setTab('activities'); setMobileMenuOpen(false); }}
                className="w-full text-left py-2 text-xs font-semibold text-emerald-900 hover:underline flex justify-between items-center"
              >
                <span>→ View Activities & News</span>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-[10px] font-bold">{activities.length}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Window Modal (Shows ONLY when search icon is clicked) */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-5 border border-gray-200">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-700" />
                <h3 className="font-bold text-gray-900 text-lg">Search YWS Website</h3>
              </div>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search projects, activities, pages..."
                className="w-full bg-gray-50 border border-gray-300 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all font-medium"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3 text-gray-400 hover:text-gray-600 text-xs font-semibold bg-gray-200 px-2 py-1 rounded-lg"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results */}
            {searchQuery.trim() !== '' && (
              <div className="space-y-2 max-h-72 overflow-y-auto">
                <p className="text-xs text-gray-500 font-semibold px-1">
                  Found {searchResults.length} results:
                </p>
                {searchResults.length === 0 ? (
                  <div className="p-6 text-center text-sm text-gray-500 bg-gray-50 rounded-2xl">
                    No results found for "{searchQuery}". Try searching for projects or activities.
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {searchResults.map((res, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setTab(res.tab);
                          setSearchQuery('');
                          setSearchModalOpen(false);
                        }}
                        className="w-full text-left p-3.5 hover:bg-emerald-50 rounded-xl transition-colors flex items-center justify-between text-sm group"
                      >
                        <div>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded mr-2">
                            {res.type}
                          </span>
                          <span className="font-semibold text-gray-800 group-hover:text-emerald-950">{res.title}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Master Key PIN Modal for Admin Portal (Master key: 8686046) */}
      {adminModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 sm:p-8 shadow-2xl space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900">Admin Portal Access</h3>
              <p className="text-gray-600 text-xs mt-1">
                Enter the Master Key to unlock the YWS Content Management Portal.
              </p>
            </div>

            <form onSubmit={handleAdminKeySubmit} className="space-y-4">
              <div className="relative">
                <KeyRound className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  value={masterKeyInput}
                  onChange={(e) => {
                    setMasterKeyInput(e.target.value);
                    setMasterKeyError(false);
                  }}
                  placeholder="Enter Master Key"
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 tracking-widest text-center font-bold"
                  autoFocus
                  required
                />
              </div>

              {masterKeyError && (
                <p className="text-xs text-rose-600 font-semibold">
                  Incorrect Master Key. Please try again.
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setAdminModalOpen(false);
                    setMasterKeyInput('');
                    setMasterKeyError(false);
                  }}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl text-xs shadow transition-colors"
                >
                  Unlock Portal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* App Installer Modal */}
      {installModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl space-y-6 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Smartphone className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">Install Young Welfare Society App</h3>
              <p className="text-gray-600 text-sm mt-2">
                Add YWS to your mobile or desktop device for quick offline access, instant updates on welfare programs, and easy communication.
              </p>
            </div>

            {installSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-sm flex items-center justify-center gap-2 font-semibold">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>App successfully added to device!</span>
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={handleInstallApp}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-6 rounded-xl text-sm shadow transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Install Now</span>
                </button>
                <button
                  onClick={() => setInstallModalOpen(false)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 px-6 rounded-xl text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
