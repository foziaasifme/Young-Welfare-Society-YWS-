import React from 'react';
import { Users, HeartHandshake, BookOpen, Globe, Lightbulb, UserCheck, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';
import { PageTab } from '../types';

interface AreasOfWorkProps {
  setTab: (tab: PageTab) => void;
}

export const AreasOfWork: React.FC<AreasOfWorkProps> = ({ setTab }) => {
  const areas = [
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "Youth Development",
      description: "Supporting young people, mentoring future leaders, and encouraging positive participation in society."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
      title: "Community Welfare",
      description: "Working toward stronger, more resilient communities through mutual support and social care."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      title: "Education Support",
      description: "Promoting learning, educational supplies distribution, literacy awareness, and study support."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: "Social Development",
      description: "Supporting sustainable community development initiatives and grassroots welfare projects."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-emerald-600" />,
      title: "Community Awareness",
      description: "Promoting public awareness around health, cleanliness, environment, and social responsibilities."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-emerald-600" />,
      title: "Volunteerism",
      description: "Encouraging community members to contribute their time, skills, and resources for public good."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      title: "Women & Family Support",
      description: "Assisting vulnerable families and fostering empowering opportunities for women in the region."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-emerald-600" />,
      title: "Emergency & Relief",
      description: "Rapid response relief operations and humanitarian assistance during local emergencies and calamities."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Core Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Our Key Areas of Work
            </h2>
            <p className="text-gray-600 mt-2 text-base max-w-2xl">
              Since 1992, YWS has dedicated its efforts to multifaceted community welfare and social upliftment across Punjab.
            </p>
          </div>
          <button
            onClick={() => setTab('work')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-semibold text-sm group"
          >
            <span>View All Areas & Details</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50/80 hover:bg-emerald-50/40 border border-gray-100 hover:border-emerald-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                  {React.cloneElement(area.icon, {
                    className: "w-6 h-6 text-emerald-600 group-hover:text-white transition-colors"
                  })}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center text-xs font-semibold text-emerald-700">
                <span>Active Initiative</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
