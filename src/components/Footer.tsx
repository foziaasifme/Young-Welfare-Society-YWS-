import React, { useState } from 'react';
import { PageTab, OrgInfo, NewsletterSubscriber } from '../types';
import { Phone, Mail, MapPin, Facebook, Heart, ShieldCheck, ChevronRight, Send, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface FooterProps {
  setTab: (tab: PageTab) => void;
  orgInfo: OrgInfo;
  onAddSubscriber: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setTab, orgInfo, onAddSubscriber }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    onAddSubscriber(emailInput);
    setSubscribed(true);
    setFirstName('');
    setLastName('');
    setEmailInput('');
  };

  return (
    <footer className="relative bg-emerald-950 text-emerald-100 pt-36 pb-12 mt-20">
      
      {/* 1. Stay Connected / Newsletter Form Card Overlaying Background Image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-6 z-20">
        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-emerald-100 grid grid-cols-1 lg:grid-cols-12 min-h-[220px]">
          
          {/* Left Block: Image of smiling children */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="absolute inset-0 bg-emerald-900/15 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600" 
              alt="Join Newsletter Community" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Block: Fully interactive newsletter sign up */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-[#fbfbf9] flex flex-col justify-center space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-emerald-950 tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                <span>Stay Connected, Join Our Newsletter.</span>
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">Get real-time updates of medical camps and welfare projects in Lodhran.</p>
            </div>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-emerald-800 text-sm flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! You have been subscribed to Young Welfare Society updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider block mb-1">First Name (Required)</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="e.g. Fozia"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-emerald-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider block mb-1">Last Name (Required)</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="e.g. Asif"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-emerald-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider block mb-1">Email (Required)</label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-emerald-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <button
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-400 text-emerald-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow flex items-center justify-center gap-1 shrink-0"
                    >
                      <span>Sign Me Up</span>
                      <span className="font-bold">+</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* 2. Main Footer Layout matching wesds.png */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 pt-10">
        
        {/* Logo and Quick Links block on the left */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <img
              src="https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/307522632_460965826068810_7436339115934143457_n.jpg?stp=dst-jpg_tt6&cstp=mx1112x1112&ctp=s1112x1112&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3gjekZfhkc4Q7kNvwEbybSr&_nc_oc=Adr7TsI1Q2HmEUUfzTO6TIdKNovVFJLGb1VUmJ3jbZjE7Kg7PRJ-igDbFxiRX5_QWTE&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=HCsxZewAkE1Ii4JDXmKnOA&_nc_ss=7a289&oh=00_AQHxw37gFYn2Id2tD5Ws5jdHKqcMr-ELZz9fdgO6n7n12A&oe=6A89B8E7"
              alt="YWS Logo"
              className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="font-extrabold text-white text-xl tracking-tight">Young Welfare Society</h3>
              <p className="text-xs text-yellow-400 font-medium tracking-wider">DHANOT • PUNJAB • PAKISTAN</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm font-light">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase block border-b border-emerald-800/60 pb-1">Quick Links</span>
              <button onClick={() => setTab('home')} className="hover:text-white flex items-center gap-1 transition-colors text-xs text-left w-full">
                <ChevronRight className="w-3 h-3 text-yellow-400" /> Home
              </button>
              <button onClick={() => setTab('about')} className="hover:text-white flex items-center gap-1 transition-colors text-xs text-left w-full">
                <ChevronRight className="w-3 h-3 text-yellow-400" /> About Our Mission
              </button>
              <button onClick={() => setTab('work')} className="hover:text-white flex items-center gap-1 transition-colors text-xs text-left w-full">
                <ChevronRight className="w-3 h-3 text-yellow-400" /> Areas of Work
              </button>
              <button onClick={() => setTab('projects')} className="hover:text-white flex items-center gap-1 transition-colors text-xs text-left w-full">
                <ChevronRight className="w-3 h-3 text-yellow-400" /> Welfare Projects
              </button>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase block border-b border-emerald-800/60 pb-1">Get Involved</span>
              <button onClick={() => setTab('get-involved')} className="hover:text-white flex items-center gap-1 transition-colors text-xs text-left w-full">
                <ChevronRight className="w-3 h-3 text-yellow-400" /> Become a Volunteer
              </button>
              <button onClick={() => setTab('faq')} className="hover:text-white flex items-center gap-1 transition-colors text-xs text-left w-full">
                <ChevronRight className="w-3 h-3 text-yellow-400" /> FAQs Help
              </button>
              <button onClick={() => setTab('gallery')} className="hover:text-white flex items-center gap-1 transition-colors text-xs text-left w-full">
                <ChevronRight className="w-3 h-3 text-yellow-400" /> Gallery & Events
              </button>
              <button onClick={() => setTab('contact')} className="hover:text-white flex items-center gap-1 transition-colors text-xs text-left w-full">
                <ChevronRight className="w-3 h-3 text-yellow-400" /> Direct Contact
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setTab('get-involved')}
              className="bg-yellow-500 hover:bg-yellow-400 text-emerald-950 font-bold px-5 py-2.5 rounded-full text-xs transition-colors flex items-center gap-1.5 shadow"
            >
              <span>DONATE</span>
              <Heart className="w-3.5 h-3.5 fill-current text-rose-600" />
            </button>

            <a
              href={`tel:${orgInfo.phonePrimary}`}
              className="bg-emerald-900 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-full text-xs transition-colors flex items-center gap-1.5 border border-emerald-700 shadow"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>CALL US</span>
            </a>
          </div>
        </div>

        {/* Contact and address block in center/right */}
        <div className="md:col-span-4 space-y-6">
          <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase block border-b border-emerald-800/60 pb-1">Contact Us</span>
          <div className="space-y-4 text-sm font-light">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-white">YWS Headquarters</p>
                <p className="text-xs text-emerald-200/80 leading-relaxed">{orgInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-white">Email Channels</p>
                <a href={`mailto:${orgInfo.email}`} className="text-xs text-emerald-200 hover:text-white transition-colors block">{orgInfo.email}</a>
                <a href="mailto:info@youngwelfare.org" className="text-xs text-emerald-300 hover:text-white transition-colors block">info@youngwelfare.org</a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-white">Phone Support</p>
                <p className="text-xs text-emerald-200">{orgInfo.phonePrimary} (Primary)</p>
                <p className="text-xs text-emerald-300">{orgInfo.phoneSecondary} (Emergency)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Badge and Facebook link */}
        <div className="md:col-span-3 space-y-6">
          <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase block border-b border-emerald-800/60 pb-1">Verified NGO</span>
          <div className="space-y-4">
            <div className="bg-emerald-900/50 border border-emerald-800 p-4 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-yellow-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Official Registry</span>
              </div>
              <p className="text-xs text-emerald-200 leading-relaxed font-light">
                Registered under the Social Welfare Dept, Govt of Punjab, Ordinance XLVI of 1961. Verified registration date: 16 Feb 1995.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={orgInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-900 hover:bg-emerald-800 p-3 rounded-full transition-colors text-white shadow-lg flex items-center justify-center border border-emerald-700"
                aria-label="YWS Facebook Community"
              >
                <Facebook className="w-5 h-5 text-yellow-400" />
              </a>
              <span className="text-xs text-emerald-300 font-light">Join 10,000+ members in our Facebook community update feed.</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Bottom footer copywrights bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-16 pt-8 border-t border-emerald-900/80 text-center text-[11px] text-emerald-400/70 flex flex-col sm:flex-row justify-between items-center gap-4 font-light">
        <p>© 2026 Young Welfare Society. All Rights Reserved. Reg: SL-1763.</p>
        <p className="flex items-center gap-1 flex-wrap justify-center">
          <span>Nonprofit Website Design built beautifully.</span>
          <span className="text-rose-500">❤️</span>
          <span className="mx-1">•</span>
          <span>Developed by <a href="https://mediaplus.ai.studio/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline font-medium transition-colors">Mediaplus Digital</a></span>
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Accessibility Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
};
