import React, { useState } from 'react';
import { 
  Users, HeartHandshake, BookOpen, Globe, Lightbulb, UserCheck, ShieldAlert, Sparkles, 
  ChevronRight, Activity, Droplet, GraduationCap, ShieldAlert as AlertIcon, Award, Scale, HelpCircle, Heart, PhoneCall, HeartHandshake as HealthIcon
} from 'lucide-react';
import { PageTab } from '../types';

interface AreasOfWorkProps {
  setTab: (tab: PageTab) => void;
}

export const AreasOfWork: React.FC<AreasOfWorkProps> = ({ setTab }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'health' | 'education' | 'water' | 'advocacy' | 'relief'>('all');

  const areas = [
    {
      category: "health",
      icon: <Activity className="w-6 h-6 text-emerald-600" />,
      title: "Free Eye Medical Camps",
      duration: "1998 - 2011 (Annual)",
      partner: "Society for Prevention & Cure of Blindness Karachi",
      beneficiary: "2,550+ patients",
      details: "Organized 7-day annual free eye checkup, diagnostic, and cataract surgical camps across 6 Punjab districts: Lodhran, Bahawalpur, Vehari, Multan, Muzaffargarh, and Bahawalnagar."
    },
    {
      category: "health",
      icon: <HealthIcon className="w-6 h-6 text-emerald-600" />,
      title: "Ambulance & Emergency Rescue",
      duration: "2001 - Present",
      partner: "GRA Government of Japan",
      beneficiary: "22,000+ critical patients",
      details: "Equipped by a direct donation from the Government of Japan, this crucial transport service has safely transferred thousands of rural patients to urban medical hubs at highly subsidized rates."
    },
    {
      category: "health",
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      title: "Rehabilitation Center for Disabled (RCPD)",
      duration: "2001 - Present",
      partner: "Punjab Welfare Trust for Disabled & TVO",
      beneficiary: "500+ differently-abled children",
      details: "Established Dhanot's first dedicated physical rehabilitation center. The land was generously donated by Nawab Inam Ullah Khan (Founder Chairman YWS), and state-of-the-art construction was finalized in 2010."
    },
    {
      category: "health",
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "Young Free Dispensary",
      duration: "2007 - Present",
      partner: "Trust for Voluntary Organizations (TVO)",
      beneficiary: "7,000+ patients",
      details: "Provision of high-grade primary clinical diagnostics and completely free essential medication to underprivileged families in Faizabad, Dhanote, Nai Wala, and Mouza Kamal Pur."
    },
    {
      category: "education",
      icon: <GraduationCap className="w-6 h-6 text-emerald-600" />,
      title: "Non-Formal Basic Education (NFBE)",
      duration: "2002 - 2016",
      partner: "Punjab Literacy Commission (PLC) & NEF",
      beneficiary: "9,500+ registered students",
      details: "Operated 320 non-formal schools and Adult Literacy Centers (ALCs) across 6 Union Councils. Over 452 candidates successfully completed Grade-V standardized primary board examinations."
    },
    {
      category: "education",
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      title: "Vocational & Tailoring Center for Women",
      duration: "1996 - Present",
      partner: "Punjab Bait-ul-Maal & Social Services Board",
      beneficiary: "426+ female trainees",
      details: "Empowering rural girls and women with direct technical sewing, cutting, weaving, and embroidery training to foster home-based enterprise and economic self-reliance."
    },
    {
      category: "education",
      icon: <Lightbulb className="w-6 h-6 text-emerald-600" />,
      title: "Young Computer Literacy Center",
      duration: "2002 - 2003",
      partner: "Strengthening Participatory Organization (SPO)",
      beneficiary: "180+ youth certified",
      details: "A comprehensive one-year technology training course certifying male and female students in basic computer operation, document management, and office automation."
    },
    {
      category: "water",
      icon: <Droplet className="w-6 h-6 text-emerald-600" />,
      title: "Low-Cost Sanitation & Sewerage",
      duration: "2003 - Ongoing",
      partner: "Lodhran Pilot Project (LPP)",
      beneficiary: "Entire Dhanot Town & Basti Khanpur",
      details: "Completed complete mapping and sanitation construction on 9 critical streets. Resolved severe regional drainage and water contamination problems with durable sewer lines."
    },
    {
      category: "water",
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: "Water Conservation & Farmer Support",
      duration: "2001 - 2009",
      partner: "UNDP (MAWCD Project) & PCRWR",
      beneficiary: "1,250+ rural farmers/year",
      details: "Organized massive district-wide 'Farmer Days' and awareness workshops to demonstrate clean water conservation methods, modern agricultural tech, and soil health preservation."
    },
    {
      category: "advocacy",
      icon: <Scale className="w-6 h-6 text-emerald-600" />,
      title: "Punjab Child Rights Conventions",
      duration: "2003 - 2004",
      partner: "Farmer Development Organization (FDO)",
      beneficiary: "District-wide children/families",
      details: "Hosted the historic Child Rights Convention at Lodhran District Council Hall and Multan Conventional Hall, raising continuous public voices against child labor."
    },
    {
      category: "relief",
      icon: <AlertIcon className="w-6 h-6 text-emerald-600" />,
      title: "2005 Northern Pakistan Earthquake Relief",
      duration: "October 2005",
      partner: "Self-Funded & Community Mobilized",
      beneficiary: "3 fully loaded transport trucks",
      details: "Dispatched essential medical boxes, food packages, winterized tents, and blankets to remote earthquake zones, personally accompanied by a volunteer medical recovery team."
    },
    {
      category: "relief",
      icon: <ShieldAlert className="w-6 h-6 text-emerald-600" />,
      title: "2010 Flood Emergency Response",
      duration: "August 2010",
      partner: "National Joint Alliances",
      beneficiary: "Muzaffargarh & Rajanpur communities",
      details: "Distributed critical dry food bags, safety blankets, clinical diagnostic services, and on-ground volunteer aid to families stranded by the heavy Indus River flooding."
    }
  ];

  const filteredAreas = activeCategory === 'all' 
    ? areas 
    : areas.filter(a => a.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Core Introductory Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              Programmatic Scope & History
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Our Strategic Initiatives
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl font-light">
              We coordinate high-impact, transparent projects with global and state partners to empower vulnerable children, women, and rural farmers since 1992.
            </p>
          </div>

          {/* Quick Nav Category Filter buttons */}
          <div className="flex flex-wrap bg-gray-100 p-1.5 rounded-2xl gap-1 text-xs font-semibold shrink-0">
            {[
              { id: 'all', label: 'All Initiatives' },
              { id: 'health', label: 'Health & Rehab' },
              { id: 'education', label: 'Schools & Literacy' },
              { id: 'water', label: 'Water & Sewerage' },
              { id: 'advocacy', label: 'Child Advocacy' },
              { id: 'relief', label: 'Emergency Relief' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-2 rounded-xl capitalize transition-all ${activeCategory === cat.id ? 'bg-emerald-800 text-white shadow' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic, Highly Polished Responsive Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50/70 hover:bg-white border border-gray-100 hover:border-emerald-200 rounded-3xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Highlight bar inside card */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-800 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center group-hover:bg-emerald-900 group-hover:border-emerald-900 transition-all">
                    {React.cloneElement(area.icon, {
                      className: "w-5 h-5 text-emerald-700 group-hover:text-yellow-400 transition-colors"
                    })}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-200/50 px-2.5 py-1 rounded-full border border-gray-200">
                    {area.duration}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-950 group-hover:text-emerald-900 transition-colors leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {area.details}
                  </p>
                </div>
              </div>

              {/* Bottom stats inside the card directly from the PDF dataset */}
              <div className="mt-6 pt-4 border-t border-gray-200/60 space-y-2 text-[11px] text-gray-500">
                <div className="flex justify-between">
                  <span className="font-semibold text-emerald-900">Partner:</span>
                  <span className="font-light text-right">{area.partner}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-emerald-900">Beneficiaries:</span>
                  <span className="font-medium text-emerald-950">{area.beneficiary}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
