import React, { useState } from 'react';
import { VolunteerSubmission } from '../types';
import { Heart, UserPlus, Handshake, CheckCircle2, ShieldCheck, Sparkles, Send } from 'lucide-react';

interface GetInvolvedSectionProps {
  onAddVolunteer: (sub: Omit<VolunteerSubmission, 'id' | 'submittedAt'>) => void;
}

export const GetInvolvedSection: React.FC<GetInvolvedSectionProps> = ({ onAddVolunteer }) => {
  const [activeTab, setActiveTab] = useState<'volunteer' | 'support' | 'partner'>('volunteer');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Dhanot / Lodhran');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Youth Mentorship']);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    'Youth Mentorship',
    'Community Welfare',
    'Education Support',
    'Plantation & Environment',
    'Emergency Relief',
    'Event Organization'
  ];

  const handleInterestToggle = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    onAddVolunteer({
      fullName,
      email,
      phone,
      city,
      interests: selectedInterests,
      message
    });

    setSubmitted(true);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Be Part of Positive Change
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Get Involved with YWS
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Whether you want to volunteer your time, support community welfare initiatives, or partner on impactful projects, your participation matters.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => { setActiveTab('volunteer'); setSubmitted(false); }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'volunteer'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
              }`}
            >
              <UserPlus className="w-4 h-4" /> Become a Volunteer
            </button>
            <button
              onClick={() => { setActiveTab('support'); setSubmitted(false); }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'support'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
              }`}
            >
              <Heart className="w-4 h-4" /> Support Our Work
            </button>
            <button
              onClick={() => { setActiveTab('partner'); setSubmitted(false); }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'partner'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
              }`}
            >
              <Handshake className="w-4 h-4" /> Partner With Us
            </button>
          </div>
        </div>

        {/* Tab 1: Volunteer Form */}
        {activeTab === 'volunteer' && (
          <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Thank You for Volunteering!</h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm">
                  Your volunteer application has been received. Our team at Young Welfare Society will contact you shortly to coordinate upcoming activities.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Volunteer Registration Form</h3>
                  <p className="text-gray-600 text-sm mt-1">Join our active network of community volunteers in Dhanot and Punjab.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g., Muhammad Ali"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 300 0000000"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">City / Location</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Areas of Interest</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {interestOptions.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`p-3 rounded-xl text-xs sm:text-sm font-medium border text-left transition-colors flex items-center justify-between ${
                          selectedInterests.includes(interest)
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-emerald-50'
                        }`}
                      >
                        <span>{interest}</span>
                        {selectedInterests.includes(interest) && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Message or Skills</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your background, availability, or special skills..."
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 px-6 rounded-xl text-base shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Volunteer Application</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* Tab 2: Support / Donate Info */}
        {activeTab === 'support' && (
          <div className="max-w-3xl mx-auto bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-emerald-800 text-emerald-300 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Heart className="w-8 h-8 fill-current text-rose-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Support Community Welfare</h3>
              <p className="text-emerald-100 text-base max-w-xl mx-auto">
                Your contributions directly empower our educational support programs, youth welfare initiatives, and seasonal relief camps in Dhanot and surrounding regions.
              </p>
            </div>

            <div className="bg-emerald-950/70 border border-emerald-800 p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-lg text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Transparent & Direct Support
              </h4>
              <p className="text-sm text-emerald-200 leading-relaxed">
                As a registered non-profit organization under the Social Welfare Department (Ordinance XLVI of 1961), Young Welfare Society ensures that all contributions are utilized with utmost transparency and accountability for community betterment.
              </p>
              <div className="pt-4 border-t border-emerald-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                <div>
                  <p className="text-emerald-300 font-medium">Official Contact for Support:</p>
                  <p className="text-white font-bold">+92 300 8686046 / yws.lodhran@gmail.com</p>
                </div>
                <a
                  href="mailto:yws.lodhran@gmail.com?subject=Support%20Inquiry%20-%20Young%20Welfare%20Society"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow"
                >
                  Contact to Support
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Partner With Us */}
        {activeTab === 'partner' && (
          <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-200/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-bold text-gray-900">Partner With Young Welfare Society</h3>
              <p className="text-gray-600 text-sm mt-1">We collaborate with educational institutions, corporate CSR programs, and fellow NGOs for greater social impact.</p>
            </div>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                YWS welcomes partnerships for joint community awareness campaigns, educational drives, youth vocational seminars, and health welfare camps.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3">
                <h4 className="font-bold text-gray-900">Partnership Channels</h4>
                <ul className="list-disc list-inside space-y-1.5 text-gray-600">
                  <li>Educational institutions and student societies</li>
                  <li>Corporate Social Responsibility (CSR) collaborations</li>
                  <li>Community welfare coalitions and NGOs</li>
                  <li>Professional mentorship and vocational training experts</li>
                </ul>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:yws.lodhran@gmail.com?subject=Partnership%20Proposal%20-%20Young%20Welfare%20Society"
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Send Partnership Proposal</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
