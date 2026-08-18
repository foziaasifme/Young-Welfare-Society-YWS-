import React, { useState } from 'react';
import { OrgInfo, ContactMessage } from '../types';
import { Phone, Mail, MapPin, Facebook, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  orgInfo: OrgInfo;
  onAddMessage: (msg: Omit<ContactMessage, 'id' | 'sentAt'>) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ orgInfo, onAddMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    onAddMessage({
      name,
      email,
      phone,
      subject: subject || 'General Inquiry',
      message
    });

    setSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-100/70 px-3.5 py-1.5 rounded-full">
            Reach Out to Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Contact Young Welfare Society
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Have questions about our welfare projects, want to collaborate, or need assistance? Get in touch with our team in Dhanot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Map Link */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-emerald-900 text-white rounded-3xl p-8 shadow-sm space-y-6">
              <div className="border-b border-emerald-800 pb-4">
                <h3 className="text-xl font-bold">Office & Headquarters</h3>
                <p className="text-emerald-300 text-xs mt-1">Young Welfare Society (YWS), Dhanot, Punjab, Pakistan</p>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Address:</strong>
                    <span className="text-emerald-100">{orgInfo.address}</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Phone:</strong>
                    <a href={`tel:${orgInfo.phonePrimary}`} className="text-emerald-100 hover:text-white underline">
                      {orgInfo.phonePrimary} / {orgInfo.phoneSecondary}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Email:</strong>
                    <a href={`mailto:${orgInfo.email}`} className="text-emerald-100 hover:text-white underline">
                      {orgInfo.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Facebook className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Facebook Page:</strong>
                    <a
                      href={orgInfo.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-100 hover:text-white underline"
                    >
                      facebook.com/yws.pk
                    </a>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-emerald-800">
                <a
                  href="https://www.google.com/maps/place/Young+Welfare+Society,+Dhanote/data=!4m2!3m1!1s0x0:0x6638949d52c77a76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <MapPin className="w-4 h-4 text-emerald-300" />
                  <span>View Location on Google Maps</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm space-y-3">
              <h4 className="font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Statutory Information
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Registered on 16 February 1995 under the Social Welfare Department, Ordinance XLVI of 1961, Government of Punjab, Pakistan.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-200/80">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm">
                  Thank you for reaching out to Young Welfare Society. We have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-gray-100 pb-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Send Us a Message</h3>
                  <p className="text-gray-600 text-sm mt-1">We respond to all community inquiries promptly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Ahmed Khan"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 300 0000000"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="General Inquiry / Volunteering"
                      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3.5 px-6 rounded-xl text-base shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
