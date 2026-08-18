import React, { useState } from 'react';
import { OrgInfo } from '../types';
import { 
  ShieldCheck, Calendar, Award, Building2, CheckCircle2, Target, Eye, Sparkles, 
  Users, Landmark, Compass, Heart, Scale, Users2, FileSpreadsheet, Briefcase, 
  Search, Check, Coins, BookOpen, Shield, Globe, MapPin, Handshake, ChevronRight, UserCheck
} from 'lucide-react';

interface AboutPageProps {
  orgInfo: OrgInfo;
}

export const AboutPage: React.FC<AboutPageProps> = ({ orgInfo }) => {
  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'values' | 'board' | 'policies' | 'partners'>('profile');

  const boardOfDirectors = [
    {
      name: "Dr. Shaukat Ali Ijaz",
      designation: "President",
      details: "Ex Medical Superintendent, DHQ Hospital Lodhran. Senior clinical leader with 30+ years of healthcare direction."
    },
    {
      name: "Muhammad Islam Shakir",
      designation: "Vice President - I",
      details: "Graduate educationalist & highly experienced teacher guiding institutional and academic literacy programs."
    },
    {
      name: "Malik Muhammad Nasir Vance",
      designation: "Vice President - II",
      details: "Homeo Doctor focusing on community public health networks, remote clinic designs, and primary relief."
    },
    {
      name: "Shamshad Ahmad",
      designation: "General Secretary",
      details: "Graduate educational strategist overseeing administrative frameworks, youth records, and general body operations."
    },
    {
      name: "Nasrudin",
      designation: "Joint Secretary",
      details: "Experienced Dispenser managing logistics for free medical/diabetic/eye camp specs and local first-responder services."
    },
    {
      name: "Muhammad Asif Anwar",
      designation: "Finance Secretary",
      details: "Masters in Business Administration (MBA). Ex Manager Finance AWS & Lodhran Pilot Project (LPP). 20+ years of financial transparency management."
    },
    {
      name: "Muhammad Alim Shakir",
      designation: "Press Secretary",
      details: "Graduate Journalist managing media correspondence, public relations, project visibility, and social publications."
    }
  ];

  const coreValues = [
    {
      title: "Innovation",
      desc: "Creating unchartered opportunities and creative solutions. We identify and explore strategic avenues for sustainable community growth and risk mitigation."
    },
    {
      title: "Respect",
      desc: "Serving with unconditional respect, honoring the diverse communities, partners, and beneficiaries we serve daily without compromising their self-respect."
    },
    {
      title: "Relentless Pursuit of Results",
      desc: "We assume personal responsibility for achieving ambitious, measurable, and highly transparent outcomes under our strategic vision in the face of challenges."
    },
    {
      title: "Sense of Possibility",
      desc: "We approach complicated social and development work with absolute optimism, think boldly, and greet new progressive solutions openly."
    },
    {
      title: "Disciplined Thought",
      desc: "Thinking critically and strategically in search of best practices. Drawing concrete lessons from previous project data to build deep-rooted positive impacts."
    },
    {
      title: "Integrity & Transparency",
      desc: "Operating with consistency, accountability, and complete financial clarity in all projects. We actively safeguard the honor and safety of our community members."
    }
  ];

  const ywsObjectives = [
    "Promotion and protection of human rights with a dedicated focus on Child Rights Protection through continuous advocacy and lobbying.",
    "Provisions of secure social services, medical camps, safe water accessibility, and literacy assistance directly at the community doorstep.",
    "Empowering marginalized communities to reduce poverty through vocational training, technical education, and enterprise/livelihood setups.",
    "Promoting communal harmony and healthy, cooperative fellowship among people of different religious and political denominations.",
    "Active rapid-response relief and rehabilitation support for families stranded in natural disaster or conflict situations."
  ];

  const standardProcedures = [
    { category: "Standard Operating Procedures (SOPs)", items: ["Admin Policy and Procedures Manual", "Procurement Policies and Guidelines", "Human Resource Policies and Codes", "Financial Policies and Accounting Controls", "Miscellaneous Safety & Security Manuals"] },
    { category: "Programmatic Strategies & Policies", items: ["Five Year Strategic Planning Framework", "CPI Implementation Strategy", "Non-Formal Basic Education Strategy", "Health Service & Hygiene Promotion Strategy", "Livelihood & Women Vocational Strategy", "Social Mobilization Strategy"] }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      
      {/* Immersive Header matching the newly designed aesthetic */}
      <div className="bg-emerald-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 to-emerald-900/95 z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-600/40 px-4 py-1.5 rounded-full text-emerald-200 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Official NGO Corporate Profile Booklet</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            About Young Welfare Society
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed">
            Registered Non-Profit, Non-Governmental, and Non-Political organization established in 1992 working for human rights, health initiatives, water sanitation, and livelihood development in District Lodhran, Punjab, Pakistan.
          </p>
        </div>
      </div>

      {/* Profile Document Tab Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 overflow-x-auto scrollbar-none flex gap-1.5 py-3">
          {[
            { id: 'profile', label: 'Company Profile', icon: Landmark },
            { id: 'values', label: 'Mission & Core Values', icon: Compass },
            { id: 'board', label: 'Board of Directors', icon: Users },
            { id: 'policies', label: 'Standard Policies & SOPs', icon: FileSpreadsheet },
            { id: 'partners', label: 'Partners & Linkages', icon: Handshake }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
                  activeSubTab === tab.id
                    ? 'bg-emerald-900 text-white shadow'
                    : 'text-gray-600 hover:text-emerald-900 hover:bg-emerald-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeSubTab === tab.id ? 'text-yellow-400' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12">
        <div className="space-y-12">

          {/* Sub Tab: COMPANY PROFILE */}
          {activeSubTab === 'profile' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Basic overview and legal registrations */}
              <div className="lg:col-span-7 space-y-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  Operational Legal Status
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                  Established 1992 in Dhanot, Lodhran
                </h2>
                
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                  <p>
                    Young Welfare Society (YWS) is an active, licensed non-profit, non-governmental, and humanitarian organization established by an enthusiastic group of progressive doctors, engineers, lawyers, teachers, and social activists dedicated to elevating remote segments of the population.
                  </p>
                  <p>
                    Starting operations in the limited Union Council Dhanot and adjacent rural areas, YWS successfully scaled its programs to the entire District Lodhran within a couple of years. The society has over three decades of core on-ground experience in managing localized socioeconomic challenges and emergency situations.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-4">
                  <h3 className="font-bold text-emerald-950 text-base flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-700" />
                    <span>Statutory Registrations</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl">
                      <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider mb-1">Voluntary Social Welfare Agencies Act</p>
                      <p className="text-xs font-semibold text-emerald-950">Registration No. DDSW (MD)/219</p>
                      <p className="text-xs text-emerald-800 mt-1">Licensed on 16th February 1995 under Voluntary Social Welfare Agencies Ordinance, 1961.</p>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl">
                      <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider mb-1">Punjab Charity Commission Registration</p>
                      <p className="text-xs font-semibold text-emerald-950">Registration No. PB-LDH-2466847115725985</p>
                      <p className="text-xs text-emerald-800 mt-1">Licensed on 25th August 2020 under the Punjab Charity Act, 2018.</p>
                    </div>
                  </div>
                </div>

                {/* Geographical Focus block exactly from the PDF page 6 */}
                <div className="border-t border-gray-100 pt-6 space-y-3">
                  <h3 className="font-bold text-emerald-950 text-base flex items-center gap-2">
                    <Globe className="w-5 h-5 text-emerald-700" />
                    <span>Geographical Focus & Outreach</span>
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    YWS is headquartered in Dhanot, District Lodhran, Southern Punjab, Pakistan. The active outreach includes major districts in the Multan Division:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-semibold">
                    <div className="bg-gray-100 p-2.5 rounded-xl text-emerald-900 border border-gray-200">✓ District Lodhran</div>
                    <div className="bg-gray-100 p-2.5 rounded-xl text-emerald-900 border border-gray-200">✓ District Multan</div>
                    <div className="bg-gray-100 p-2.5 rounded-xl text-emerald-900 border border-gray-200">✓ District Vehari</div>
                    <div className="bg-gray-100 p-2.5 rounded-xl text-emerald-900 border border-gray-200">✓ District Khanewal</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Fast stats & Chief Executive Details */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Chief Executive Officer details Card (PDF Page 5) */}
                <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-800 rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-emerald-800/80 pb-4">
                      <div className="w-12 h-12 bg-yellow-400 text-emerald-950 rounded-xl flex items-center justify-center font-bold">
                        <UserCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-yellow-300 uppercase tracking-widest block">Chief Executive Officer</span>
                        <h4 className="font-extrabold text-base text-white">Barkat Ali Riaz</h4>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs leading-relaxed text-emerald-100">
                      <div className="flex items-start gap-2">
                        <span className="text-yellow-400 font-bold">•</span>
                        <span><strong>Engineering Expertise:</strong> BSC Civil Engineer, Professional Engineer (PE).</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-yellow-400 font-bold">•</span>
                        <span><strong>Public Leadership:</strong> Ex Director of Community Development & Trainings, LG&CD Government of Punjab.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-yellow-400 font-bold">•</span>
                        <span><strong>Development Record:</strong> Ex Chief Operating Officer (COO) of Lodhran Pilot Project (LPP).</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-yellow-400 font-bold">•</span>
                        <span><strong>Social Footprint:</strong> Highly respected progressive farmer promoting local community mobilization.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Organizational Capacity list (PDF Page 4) */}
                <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm space-y-4">
                  <h3 className="font-bold text-gray-900 text-base">Organizational Capacity</h3>
                  <div className="space-y-2 text-xs text-gray-600 leading-relaxed">
                    {[
                      "Structured Democratic Governance and legal adherence.",
                      "Diversified Financial Sustainability models with Zero-Overhead administrative leakage.",
                      "High caliber, technically trained, and local community-based Volunteer Cadre.",
                      "Continuous on-ground lessons and data-driven project modifications.",
                      "Extensive institutional links with provincial and federal Government networks."
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Sub Tab: MISSION & CORE VALUES */}
          {activeSubTab === 'values' && (
            <div className="space-y-8 animate-fade-in">
              
              {/* Mission and Vision Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Vision Box */}
                <div className="bg-[#fbfbf9] rounded-[32px] p-8 border border-emerald-100 space-y-4 relative">
                  <div className="w-14 h-14 bg-yellow-400 text-emerald-950 rounded-2xl flex items-center justify-center shadow-sm">
                    <Eye className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Our Strategic Vision</h3>
                  <p className="text-gray-700 text-base leading-relaxed font-light">
                    "A Sustainable, Effective and trusted humanitarian organization serving present and future generations."
                  </p>
                </div>

                {/* Mission Box */}
                <div className="bg-[#fbfbf9] rounded-[32px] p-8 border border-emerald-100 space-y-4 relative">
                  <div className="w-14 h-14 bg-emerald-900 text-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Our Dedicated Mission</h3>
                  <p className="text-gray-700 text-base leading-relaxed font-light">
                    "To bring about positive changes in policies and institutions for sustainable socioeconomic development by mobilizing and empowering youth, Children & Women, and other marginalized groups of the society."
                  </p>
                </div>

              </div>

              {/* Six Core Values Section */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-200/80 shadow-sm space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">Our Operational Core Values</h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    These foundational values reflect how we operate, guide our internal work culture, and represent our path toward community growth:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coreValues.map((val, index) => (
                    <div key={index} className="bg-emerald-50/50 border border-emerald-100 p-6 rounded-2xl space-y-2 hover:bg-emerald-50 transition-colors">
                      <h4 className="font-extrabold text-emerald-950 text-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span>{val.title}</span>
                      </h4>
                      <p className="text-xs text-emerald-900/90 leading-relaxed font-light">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Objectives */}
              <div className="bg-emerald-900 text-white rounded-[32px] p-8 shadow-sm space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-yellow-400">Objectives of YWS</h3>
                  <p className="text-xs sm:text-sm text-emerald-100 font-light">
                    Key pillars established by the general body to measure long-term project impacts:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ywsObjectives.map((obj, i) => (
                    <div key={i} className="flex gap-3 bg-emerald-800/40 p-4 rounded-xl border border-emerald-700/50">
                      <span className="font-bold text-yellow-400 text-sm shrink-0">0{i+1}.</span>
                      <p className="text-xs text-emerald-100/90 leading-relaxed">{obj}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Sub Tab: BOARD OF DIRECTORS */}
          {activeSubTab === 'board' && (
            <div className="space-y-8 animate-fade-in">
              
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
                <div className="max-w-2xl space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Board of Directors</h2>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    YWS’s Board of Directors is responsible to oversee the development, funding allocation, and implementation of the five-year strategic plan. The Board consists of highly committed, qualified, and locally active leaders.
                  </p>
                </div>

                {/* Table Layout for Desktop and Card Grid for Mobile */}
                <div className="hidden md:block overflow-hidden border border-gray-200 rounded-2xl">
                  <table className="w-full text-left text-sm text-gray-700 border-collapse">
                    <thead className="bg-emerald-50 text-emerald-950 font-bold border-b border-gray-200">
                      <tr>
                        <th className="py-4 px-6 text-xs uppercase tracking-wider">Sr #</th>
                        <th className="py-4 px-6 text-xs uppercase tracking-wider">Board Director Name</th>
                        <th className="py-4 px-6 text-xs uppercase tracking-wider">Designation</th>
                        <th className="py-4 px-6 text-xs uppercase tracking-wider">Qualification & Background</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {boardOfDirectors.map((member, i) => (
                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-6 font-bold text-emerald-800">{i+1}</td>
                          <td className="py-4 px-6 font-semibold text-gray-900">{member.name}</td>
                          <td className="py-4 px-6">
                            <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-emerald-200">
                              {member.designation}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">{member.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Card Layout for Mobile */}
                <div className="grid grid-cols-1 gap-4 md:hidden">
                  {boardOfDirectors.map((member, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-200 p-5 rounded-2xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-800">Director 0{i+1}</span>
                        <span className="bg-emerald-100 text-emerald-900 text-[9px] font-bold uppercase px-2.5 py-0.5 rounded-full">
                          {member.designation}
                        </span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-base">{member.name}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed font-light">{member.details}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Sub Tab: POLICIES, AUDITS, PROCEDURES */}
          {activeSubTab === 'policies' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
              
              {/* Left Column: Financial Integrity & Auditing details */}
              <div className="lg:col-span-8 space-y-6 bg-white rounded-[32px] p-6 sm:p-8 border border-gray-200/80 shadow-sm">
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    Financial Integrity Standards
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">Financial Management & Auditing</h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  <div className="bg-[#fbfbf9] p-5 rounded-2xl border border-gray-100 space-y-2">
                    <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                      <Scale className="w-4 h-4 text-emerald-600" />
                      <span>Accounting & Regulatory Alignment</span>
                    </h4>
                    <p>
                      YWS operates finances in absolute alignment with the <em>Voluntary Social Welfare Agencies Act 1961</em>, the <em>Income Tax Ordinance 2001</em>, and <strong>International Accounting Standards (IAS) for NGOs</strong> recommended by the Institute of Chartered Accountants of Pakistan (ICAP).
                    </p>
                  </div>

                  <div className="bg-[#fbfbf9] p-5 rounded-2xl border border-gray-100 space-y-2">
                    <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>Peachtree Accounting System & Control</span>
                    </h4>
                    <p>
                      YWS uses fully licensed, customized Peachtree Accounting Software. Independent and segregated books of accounts are maintained for each donor-funded project. No personal accounts are allowed, and all official accounts are jointly operated by designated signatories with pre-approvals.
                    </p>
                  </div>

                  <div className="bg-[#fbfbf9] p-5 rounded-2xl border border-gray-100 space-y-2">
                    <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>Quarterly Auditing Mechanisms</span>
                    </h4>
                    <p>
                      Financial logs are audited quarterly by our qualified internal auditor. Annual audits are completed and published by an internationally recognized, well-reputed chartered accountancy firm to ensure absolute transparency.
                    </p>
                  </div>
                </div>

                {/* Procurement mechanism section PDF page 8 */}
                <div className="border-t border-gray-100 pt-6 space-y-3">
                  <h4 className="font-bold text-gray-900 text-base">Procurement & Hiring Mechanisms</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    YWS follows transparent open-bidding and recruitment steps to secure fair valuations and expert personnel:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-600">
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/50">
                      <p className="font-bold text-emerald-950 mb-1">Procurement Tenders</p>
                      <p>Quotations are obtained above Rs. 10,000. Purchases exceeding Rs. 500,000 undergo open-bidding via newspaper and digital channels managed by our dedicated Procurement Committee.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/50">
                      <p className="font-bold text-emerald-950 mb-1">Staff Recruitment</p>
                      <p>Vacancies are published in national and local media channels. Applications are received and screened electronically on our secure portals and filtered via physical test matrices.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Standard Manuals & Documentation Checklists (PDF Page 4) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-emerald-900 text-white rounded-[32px] p-6 sm:p-8 space-y-6 shadow-sm">
                  <h3 className="font-bold text-yellow-300 text-base border-b border-emerald-800 pb-3">Operational Manuals</h3>
                  
                  {standardProcedures.map((proc, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-200">{proc.category}</h4>
                      <ul className="space-y-2 text-xs">
                        {proc.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-emerald-100/90 font-light">
                            <span className="text-yellow-400 font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Sub Tab: PARTNERS & LINKAGES */}
          {activeSubTab === 'partners' && (
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-8 animate-fade-in">
              <div className="max-w-2xl space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Linkages & Partnerships</h2>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Over the past three decades, YWS has partnered with diverse international development agencies, federal trust commissions, state departments, and humanitarian organizations to coordinate welfare projects:
                </p>
              </div>

              {/* Grid of Partner Logo Placeholders or Details */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 text-center">
                {[
                  { name: "Embassy of Japan", type: "International Donor" },
                  { name: "TVO (Trust for Voluntary Orgs)", type: "Federal Trust" },
                  { name: "SPO (Strengthening Participatory Org)", type: "National Partner" },
                  { name: "UNDP / PCRWR", type: "United Nations Program" },
                  { name: "Punjab Literacy Commission", type: "Provincial Authority" },
                  { name: "National Education Foundation (NEF)", type: "Federal Council" },
                  { name: "Punjab Welfare Trust for Disabled", type: "Provincial Trust" },
                  { name: "USAID / World Health Organization", type: "International Agency" },
                  { name: "LPP (Lodhran Pilot Project)", type: "District Strategic Alliance" },
                  { name: "Akhuwat Foundation", type: "Microfinance Partner" },
                  { name: "Punjab Charity Commission", type: "Regulatory Licensing Authority" },
                  { name: "Child Right Advocacy Network (CRAN)", type: "National Alliance Member" }
                ].map((partner, index) => (
                  <div key={index} className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 flex flex-col justify-center items-center gap-1.5 hover:shadow-sm transition-all group">
                    <span className="font-extrabold text-sm text-emerald-950 group-hover:text-emerald-800 transition-colors">{partner.name}</span>
                    <span className="bg-yellow-400 text-emerald-950 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                      {partner.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

    </div>
  );
};
