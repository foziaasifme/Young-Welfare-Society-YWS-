import React from 'react';
import { ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react';

export const TrustBanner: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Credibility & Registration
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
            Established on Trust, Dedicated to Community
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Young Welfare Society operates with complete transparency and adherence to statutory welfare standards in Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Working Since 1992</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Over three decades of grassroots community service, youth engagement, and social development.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Officially Registered</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Registered on 16 February 1995 under the Social Welfare Department, Ordinance XLVI of 1961.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Non-Profit & NGO</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Operating strictly as a non-governmental, non-profit organization dedicated to public welfare.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Non-Political</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Completely non-political organization focused solely on humanitarianism, education, and youth empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
