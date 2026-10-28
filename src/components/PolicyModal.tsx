import React from 'react';
import { X, ShieldAlert, FileText, Accessibility, HelpCircle } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'accessibility';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType: PolicyType;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, initialType }) => {
  const [activeTab, setActiveTab] = React.useState<PolicyType>(initialType);

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialType);
    }
  }, [isOpen, initialType]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/80 backdrop-blur-sm animate-fade-in" id="policy-modal">
      <div className="bg-white rounded-3xl shadow-2xl border border-emerald-100 max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-scale-up">
        
        {/* Header Section */}
        <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl">
              {activeTab === 'privacy' && <ShieldAlert className="w-6 h-6" />}
              {activeTab === 'terms' && <FileText className="w-6 h-6" />}
              {activeTab === 'accessibility' && <Accessibility className="w-6 h-6" />}
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 tracking-tight">
                {activeTab === 'privacy' && "Privacy Policy"}
                {activeTab === 'terms' && "Terms of Use"}
                {activeTab === 'accessibility' && "Accessibility Policy"}
              </h2>
              <p className="text-xs text-gray-500 font-medium">Young Welfare Society Official Legal Center</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-gray-100 text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-4 text-center border-b-2 transition-colors ${
              activeTab === 'privacy' 
                ? 'border-emerald-600 text-emerald-950 bg-emerald-50/10' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50/50'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-4 text-center border-b-2 transition-colors ${
              activeTab === 'terms' 
                ? 'border-emerald-600 text-emerald-950 bg-emerald-50/10' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50/50'
            }`}
          >
            Terms of Use
          </button>
          <button
            onClick={() => setActiveTab('accessibility')}
            className={`flex-1 py-4 text-center border-b-2 transition-colors ${
              activeTab === 'accessibility' 
                ? 'border-emerald-600 text-emerald-950 bg-emerald-50/10' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50/50'
            }`}
          >
            Accessibility Policy
          </button>
        </div>

        {/* Content Body - Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-gray-600 leading-relaxed space-y-6">
          
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-emerald-950 text-xs font-light">
                <strong>Last Updated: August 18, 2026</strong>. This Policy describes how the Young Welfare Society (YWS), registered under the Social Welfare Department, Government of Punjab (Reg No. SL-1763), collects, stores, and handles the information of our volunteers, donors, newsletter subscribers, and community users.
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">1. Information We Collect</h3>
                <p className="text-xs font-light">
                  We collect information that you voluntarily provide to us when you interact with our digital platforms, including:
                </p>
                <ul className="list-disc pl-5 text-xs font-light space-y-1">
                  <li><strong>Volunteer Submissions:</strong> Full name, telephone number, email, residential city, and your specified welfare interest fields.</li>
                  <li><strong>Newsletter Sign-ups:</strong> Email address, first name, and last name.</li>
                  <li><strong>Contact Portals:</strong> Name, email address, phone number, and message inquiries regarding eye camps, medical assistance, or rehabilitation.</li>
                  <li><strong>Chatbot Conversations:</strong> Safe non-sensitive logs to assist you with automated answers regarding medical registries, active locations, and FAQs.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">2. How We Use Your Information</h3>
                <p className="text-xs font-light">
                  All collected data is utilized strictly for humanitarian, non-profit, and organizational purposes:
                </p>
                <ul className="list-disc pl-5 text-xs font-light space-y-1">
                  <li>To process and coordinate your active volunteer submissions for local social activities.</li>
                  <li>To send real-time alerts about upcoming free medical camps, cataract surgical drives, and community events.</li>
                  <li>To respond directly to inquiries and support requests (e.g. ambulance transport services or physical rehab appointments).</li>
                  <li>To keep our donors and supporters updated on the exact, transparent deployment of project budgets and beneficiary metrics.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">3. Absolute Protection & Sharing</h3>
                <p className="text-xs font-light">
                  YWS enforces a strict zero-sharing policy. <strong>We do not sell, rent, trade, or distribute your personal information</strong> to any third-party marketing companies, agencies, or external entities. Access to volunteer database records is restricted exclusively to authorized executive members of the YWS social team for on-ground project mobilization.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">4. Retention & Opt-Out Rights</h3>
                <p className="text-xs font-light">
                  We maintain your data for as long as necessary to fulfill voluntary services or until you ask us to remove it. You have the absolute right to request access to your records, correct inaccurate fields, or opt out of our registry at any time by emailing us at <a href="mailto:youngwelfare@outlook.com" className="text-emerald-700 underline font-medium">youngwelfare@outlook.com</a> or via our official WhatsApp help channel.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-emerald-950 text-xs font-light">
                <strong>Last Updated: August 18, 2026</strong>. By accessing the website, newsletter, chatbot widgets, and welfare services of the Young Welfare Society (YWS), you agree to comply with and be bound by the following Terms of Use.
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">1. Civic & Non-Commercial Use</h3>
                <p className="text-xs font-light">
                  This platform is created for humanitarian and civic welfare engagement. All content, historic project ledgers, donor partner lists, and educational materials are published to promote transparency and community participation in Punjab, Pakistan. Any unauthorized commercial exploitation, data mining, spamming, or fraudulent activity is strictly prohibited.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">2. Integrity of Volunteer & Contact Submissions</h3>
                <p className="text-xs font-light">
                  When applying to volunteer or requesting assistance through our portals, you agree to:
                </p>
                <ul className="list-disc pl-5 text-xs font-light space-y-1">
                  <li>Provide truthful, accurate, and current information.</li>
                  <li>Avoid presenting mock names, fake phone numbers, or misleading addresses.</li>
                  <li>Use the emergency ambulance contact lines strictly for genuine medical transport requests.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">3. Medical & Humanitarian Disclaimer</h3>
                <p className="text-xs font-light">
                  The Young Welfare Society (YWS) works alongside registered medical practitioners to coordinate diagnostic eye camps, dispensaries, and physical rehabilitation. However, information published on our platform regarding medical advice, public health guidelines, or transport schedules should not substitute for professional medical diagnoses. Always consult directly with certified doctors for emergency clinical decisions.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">4. Limitations of Liability</h3>
                <p className="text-xs font-light">
                  While we work to ensure high reliability for the emergency ambulance service and rehabilitation registrations, YWS shall not be held liable for delayed responses resulting from unexpected mechanical issues, regional cellular outages, or force majeure occurrences.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'accessibility' && (
            <div className="space-y-4">
              <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 text-emerald-950 text-xs font-light">
                <strong>Our Inclusion Mandate:</strong> At the Young Welfare Society (YWS), serving differently-abled individuals has been at the core of our mission since 1992. Just as our on-ground <strong>Rehabilitation Center for Disabled (RCPD)</strong> actively empowers hundreds of physical trainees, our digital channels are structured to be inclusive and accessible to everyone.
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">1. Digital Standards Goal</h3>
                <p className="text-xs font-light">
                  We strive to meet the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 Level AA conformance. Our digital platform is developed with accessibility-first design parameters to minimize visual and operational barriers.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">2. Key Accessibility Features Implemented</h3>
                <p className="text-xs font-light">
                  To achieve high inclusion, we have optimized our platform with the following core items:
                </p>
                <ul className="list-disc pl-5 text-xs font-light space-y-1">
                  <li><strong>High-Contrast Aesthetics:</strong> Utilizing high-contrast emerald and deep charcoal text pairings to guarantee readability for visually impaired users. No low-contrast gray-on-light color patterns.</li>
                  <li><strong>Responsive Screen Optimization:</strong> Fluid scaling from ultra-wide desktops to touch-first mobile interfaces with target sizes of at least 44px.</li>
                  <li><strong>Text Alternatives:</strong> All campaign illustrations, maps, and local photographs feature clean text descriptions for screen-reader tools.</li>
                  <li><strong>Standard Typography:</strong> Using mathematical spacing scales and legible line-heights (1.5–1.7) to ensure easy tracking of project descriptions and text data.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">3. On-Ground Accessibility Focus</h3>
                <p className="text-xs font-light">
                  Our physical headquarters and rehabilitation campuses in Dhanot are built with concrete access ramps, wide hallways, and specialized physical therapy equipment to ensure robust, dignified entry for physically disabled visitors.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">4. Accessibility Feedback Desk</h3>
                <p className="text-xs font-light">
                  If you encounter any operational barrier or feel that some content is not fully accessible to assistive technologies, please write to us at <a href="mailto:youngwelfare@outlook.com" className="text-emerald-700 underline font-medium">youngwelfare@outlook.com</a>. We are committed to refining our tools promptly to serve all members of society equally.
                </p>
              </section>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:justify-between items-center text-xs text-gray-500 font-light">
          <p className="flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Need further official assistance?</span>
          </p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="bg-emerald-900 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl transition-colors"
            >
              I Understand & Agree
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
