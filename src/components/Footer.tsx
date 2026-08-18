import React from 'react';
import { PageTab, OrgInfo } from '../types';
import { Phone, Mail, MapPin, Facebook, Heart, ShieldCheck, ChevronRight } from 'lucide-react';

interface FooterProps {
  setTab: (tab: PageTab) => void;
  orgInfo: OrgInfo;
}

export const Footer: React.FC<FooterProps> = ({ setTab, orgInfo }) => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 pt-16 pb-12 border-t-4 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: About YWS */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/307522632_460965826068810_7436339115934143457_n.jpg?stp=dst-jpg_tt6&cstp=mx1112x1112&ctp=s1112x1112&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3gjekZfhkc4Q7kNvwEbybSr&_nc_oc=Adr7TsI1Q2HmEUUfzTO6TIdKNovVFJLGb1VUmJ3jbZjE7Kg7PRJ-igDbFxiRX5_QWTE&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=HCsxZewAkE1Ii4JDXmKnOA&_nc_ss=7a289&oh=00_AQHxw37gFYn2Id2tD5Ws5jdHKqcMr-ELZz9fdgO6n7n12A&oe=6A89B8E7"
              alt="YWS Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="font-bold text-white text-lg">Young Welfare Society</h3>
              <p className="text-xs text-emerald-300">Dhanot, Punjab, Pakistan</p>
            </div>
          </div>
          <p className="text-sm text-emerald-200/90 leading-relaxed">
            Working since 1992 and officially registered on February 16, 1995 under the Social Welfare Department, Ordinance XLVI of 1961. Dedicated to youth empowerment and community welfare.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={orgInfo.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-900 hover:bg-emerald-800 p-2 rounded-full transition-colors text-white"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <span className="text-xs bg-emerald-900/80 text-emerald-300 px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Non-Profit & Non-Political
            </span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-base border-b border-emerald-800 pb-2">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => setTab('home')} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Home
              </button>
            </li>
            <li>
              <button onClick={() => setTab('about')} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> About YWS
              </button>
            </li>
            <li>
              <button onClick={() => setTab('work')} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Our Work & Areas
              </button>
            </li>
            <li>
              <button onClick={() => setTab('projects')} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Projects
              </button>
            </li>
            <li>
              <button onClick={() => setTab('activities')} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Activities & News
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Get Involved */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-base border-b border-emerald-800 pb-2">Get Involved</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => setTab('get-involved')} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Become a Volunteer
              </button>
            </li>
            <li>
              <button onClick={() => setTab('get-involved')} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Support Our Work
              </button>
            </li>
            <li>
              <button onClick={() => setTab('get-involved')} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Partner With Us
              </button>
            </li>
            <li>
              <button onClick={() => setTab('gallery')} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Photo Gallery
              </button>
            </li>
            <li>
              <button onClick={() => setTab('contact')} className="hover:text-white flex items-center gap-1.5 transition-colors">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400" /> Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-base border-b border-emerald-800 pb-2">Contact YWS</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>{orgInfo.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`tel:${orgInfo.phonePrimary}`} className="hover:text-white transition-colors">
                {orgInfo.phonePrimary} / {orgInfo.phoneSecondary}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`mailto:${orgInfo.email}`} className="hover:text-white transition-colors">
                {orgInfo.email}
              </a>
            </li>
          </ul>
          <div className="pt-2">
            <button
              onClick={() => setTab('get-involved')}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow"
            >
              <Heart className="w-4 h-4 fill-current text-rose-200" /> Support Community Welfare
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 pt-6 border-t border-emerald-900 text-center text-xs text-emerald-400/80 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Young Welfare Society (YWS). All Rights Reserved.</p>
        <p className="flex items-center gap-1 text-emerald-300">
          <span>Working for Community Welfare Since 1992</span>
        </p>
      </div>
    </footer>
  );
};
