import React, { useState } from 'react';
import { ActivityItem, PageTab } from '../types';
import { Calendar, MapPin, ArrowRight, X, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ActivitiesSectionProps {
  activities: ActivityItem[];
  setTab: (tab: PageTab) => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ activities, setTab }) => {
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const recent = activities.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              News & Community Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Recent Activities & Events
            </h2>
            <p className="text-gray-600 mt-2 text-base max-w-2xl">
              Stay updated with YWS workshops, community conventions, social welfare drives, and awareness campaigns.
            </p>
          </div>
          <button
            onClick={() => setTab('activities')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
          >
            <span>View All Activities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recent.map((act, idx) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedActivity(act)}
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-gray-200">
                  <img
                    src={act.imageUrl}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-900 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {act.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" /> {act.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" /> {act.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {act.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 mt-2">
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Community Event
                </span>
                <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                  <span>Read Full Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            <div className="relative h-64 bg-gray-900 shrink-0">
              <img
                src={selectedActivity.imageUrl}
                alt={selectedActivity.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-emerald-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {selectedActivity.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-emerald-600" /> {selectedActivity.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-600" /> {selectedActivity.location}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900">{selectedActivity.title}</h2>

              <p className="text-gray-700 text-base leading-relaxed">
                {selectedActivity.content}
              </p>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedActivity(null)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
