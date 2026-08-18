import React, { useState } from 'react';
import { PageTab, OrgInfo } from '../types';
import { Menu, X, Phone, Mail, Facebook, Heart, ShieldCheck, Settings } from 'lucide-react';

interface NavbarProps {
  currentTab: PageTab;
  setTab: (tab: PageTab) => void;
  orgInfo: OrgInfo;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setTab, orgInfo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Our Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'activities', label: 'Activities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
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
                currentTab === 'admin' ? 'bg-emerald-700 text-white' : 'bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        <div 
          onClick={() => setTab('home')} 
          className="flex items-center gap-3 cursor-pointer group"
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

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 shadow-lg animate-in fade-in duration-200">
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
  );
};
