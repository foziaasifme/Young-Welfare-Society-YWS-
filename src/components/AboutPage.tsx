import React from 'react';
import { OrgInfo } from '../types';
import { ShieldCheck, Calendar, Award, Building2, CheckCircle2, Target, Eye, Sparkles } from 'lucide-react';

interface AboutPageProps {
  orgInfo: OrgInfo;
}

export const AboutPage: React.FC<AboutPageProps> = ({ orgInfo }) => {
  const timelineMilestones = [
    {
      year: "1992",
      title: "YWS Begins Grassroots Work",
      description: "Established in 1992 by a dedicated group of visionary youth in Dhanot, Punjab, aiming to foster community welfare and positive social change."
    },
    {
      year: "16 February 1995",
      title: "Official Registration",
      description: "Officially registered under the Social Welfare Department, Ordinance XLVI of 1961, Government of Punjab, Pakistan, cementing its legal and institutional status."
    },
    {
      year: "2000s - 2010s",
      title: "Expansion of Welfare & Education",
      description: "Scaled youth development programs, educational supply drives, and community health awareness across Punjab."
    },
    {
      year: "Today",
      title: "Continuing Community Commitment",
      description: "Over 34 years of continuous service, standing as a trusted non-profit, non-governmental, and non-political pillar of society."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-emerald-950 text-white py-16 sm:py-24 hero-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-emerald-300 font-semibold text-xs uppercase tracking-widest bg-emerald-800/80 px-3.5 py-1.5 rounded-full">
            Organization Profile & History
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About Young Welfare Society (YWS)
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto">
            Serving communities with unwavering dedication, integrity, and volunteer spirit since 1992.
          </p>
        </div>
      </div>

      {/* Overview & Registration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Established 1992
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              A Trusted Pillar of Community Welfare in Punjab
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {orgInfo.historySummary}
            </p>
            <div className="bg-emerald-50/70 border border-emerald-100 p-6 rounded-2xl space-y-3">
              <h4 className="font-bold text-emerald-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Statutory Registration Details
              </h4>
              <p className="text-sm text-emerald-900 leading-relaxed">
                {orgInfo.registrationDetails}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="bg-emerald-900 text-white rounded-3xl p-8 shadow-xl max-w-md w-full space-y-6">
              <div className="flex items-center gap-4 border-b border-emerald-800 pb-4">
                <img
                  src="https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/307522632_460965826068810_7436339115934143457_n.jpg?stp=dst-jpg_tt6&cstp=mx1112x1112&ctp=s1112x1112&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3gjekZfhkc4Q7kNvwEbybSr&_nc_oc=Adr7TsI1Q2HmEUUfzTO6TIdKNovVFJLGb1VUmJ3jbZjE7Kg7PRJ-igDbFxiRX5_QWTE&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=HCsxZewAkE1Ii4JDXmKnOA&_nc_ss=7a289&oh=00_AQHxw37gFYn2Id2tD5Ws5jdHKqcMr-ELZz9fdgO6n7n12A&oe=6A89B8E7"
                  alt="YWS Logo"
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-bold text-lg">YWS Fact Sheet</h3>
                  <p className="text-xs text-emerald-300">Dhanot, Punjab, Pakistan</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-emerald-100">
                <li className="flex justify-between border-b border-emerald-800/60 pb-2">
                  <span className="text-emerald-300">Established Year:</span>
                  <span className="font-semibold text-white">1992</span>
                </li>
                <li className="flex justify-between border-b border-emerald-800/60 pb-2">
                  <span className="text-emerald-300">Registration Date:</span>
                  <span className="font-semibold text-white">16 February 1995</span>
                </li>
                <li className="flex justify-between border-b border-emerald-800/60 pb-2">
                  <span className="text-emerald-300">Organization Type:</span>
                  <span className="font-semibold text-white">Non-Profit / NGO / Non-Political</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-emerald-300">Headquarters:</span>
                  <span className="font-semibold text-white">Dhanot, Punjab</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-100/70 px-3.5 py-1.5 rounded-full">
              Journey Through Time
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              YWS Milestone Timeline
            </h2>
            <p className="text-gray-600 mt-2 text-base">
              Tracing our growth from a grassroots youth initiative in 1992 to an established welfare society today.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-600/40 ml-4 sm:ml-32 space-y-12">
            {timelineMilestones.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-12 group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow"></div>
                
                <div className="absolute -left-36 sm:-left-32 top-1 hidden sm:block text-right w-28">
                  <span className="text-sm font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {item.year}
                  </span>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200/80 hover:shadow-md transition-shadow">
                  <span className="sm:hidden inline-block text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-2 border border-emerald-200">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision recap */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-50/60 border border-emerald-100 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-base">{orgInfo.mission}</p>
          </div>
          <div className="bg-emerald-50/60 border border-emerald-100 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-emerald-700 text-white rounded-xl flex items-center justify-center shadow">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-base">{orgInfo.vision}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
