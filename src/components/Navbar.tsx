import React, { useState } from 'react';
import { PageTab, OrgInfo, Project, ActivityItem } from '../types';
import { Menu, X, Phone, Mail, Facebook, Heart, ShieldCheck, Settings, Download, Smartphone, Check, Search, ArrowRight } from 'lucide-react';

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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Our Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'activities', label: 'Activities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact' },
  ];

  // Global search matching results
  const searchResults = searchQuery.trim() === '' ? [] : [
    ...projects.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase())).map(p => ({ type: 'Project', title: p.title, tab: 'projects' as PageTab })),
    ...activities.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.summary.toLowerCase().includes(searchQuery.toLowerCase())).map(a => ({ type: 'Activity', title: a.title, tab: 'activities' as PageTab })),
    { type: 'Page', title: 'About Young Welfare Society', tab: 'about' as PageTab },
    { type: 'Page', title: 'Areas of Work & Scope', tab: 'work' as PageTab },
    { type: 'Page', title: 'Frequently Asked Questions (FAQ)', tab: 'faq' as PageTab },
    { type: 'Page', title: 'Volunteer Registration', tab: 'get-involved' as PageTab },
  ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5);

  const handleInstallApp = () => {
    setInstallSuccess(true);
    setTimeout(() => {
      setInstallSuccess(false);
      setInstallModalOpen(false);
    }, 2500);
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
                Est. 1992 | Reg. 16 Feb 1995 (Social Welfare Dept)
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
              {/* App Installer Icon button before Facebook icon */}
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

              <button
                onClick={() => setTab('admin')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  currentTab === 'admin' ? 'bg-emerald-700 text-white' : 'bg-emerald-800 hover:bg-emerald-700 text-emerald-100'
                }`}
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
              src="https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/307522632_460965826068810_7436339115934143457_n.jpg?stp=dst-jpg_tt6&cstp=mx1112x1112&ctp=s1112x1112&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3gjekZfhkc4Q7kNvwEbybSr&_nc_oc=Adr7TsI1Q2HmEUUfzTO6TIdKNovVFJLGb1VUmJ3jbZjE7Kg7PRJ-igDbFxiRX5_QWTE&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=HCsxZewAkE1Ii4JDXmKnOA&_nc_ss=7a289&oh=00_AQHxw37gFYn2Id2tD5Ws5jdHKqcMr-ELZz9fdgO6n7n12A&oe=6A89B8E7"
              alt="Young Welfare Society Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-emerald-600 shadow-sm group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-emerald-950 tracking-tight leading-snug">
                Young Welfare Society
              </h1>
              <p className="text-xs text-emerald-700 font-medium">
                Dhanot, Punjab, Pakistan • (YWS)
              </p>
            </div>
          </div>

          {/* Global Search Bar */}
          <div className="hidden md:block relative flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search projects, activities, pages..."
                className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 text-xs font-semibold bg-gray-200 px-1.5 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {searchQuery.trim() !== '' && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50">
                <div className="p-3 bg-emerald-900 text-white text-xs font-semibold flex justify-between items-center">
                  <span>Search Results</span>
                  <span>{searchResults.length} found</span>
                </div>
                {searchResults.length === 0 ? (
                  <div className="p-4 text-center text-xs text-gray-500">
                    No matching results found for "{searchQuery}".
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
                    {searchResults.map((res, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setTab(res.tab);
                          setSearchQuery('');
                        }}
                        className="w-full text-left p-3 hover:bg-emerald-50 transition-colors flex items-center justify-between text-xs sm:text-sm"
                      >
                        <div>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded mr-2">
                            {res.type}
                          </span>
                          <span className="font-semibold text-gray-800">{res.title}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
            {navLinks.map((link) => (
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
            ))}
            <button
              onClick={() => setTab('get-involved')}
              className="ml-2 flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all hover:shadow"
            >
              <Heart className="w-4 h-4 fill-current text-rose-300" />
              Support Us
            </button>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
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

        {/* Mobile Search & Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-5 shadow-lg space-y-3 animate-in fade-in duration-200">
            <div className="relative">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search website..."
                className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setTab(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentTab === link.id
                      ? 'bg-emerald-600 text-white'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setTab('admin');
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 ${
                  currentTab === 'admin' ? 'bg-emerald-800 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Settings className="w-4 h-4" /> Admin Portal
              </button>
            </div>
          </div>
        )}
      </header>

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
