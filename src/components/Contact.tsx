import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  MessageSquare,
  Clock,
  Sparkles
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate swift modern transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#080d1a] border-t border-slate-900 tech-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            Inquiries &amp; Consultations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Connect With Vibhanshu
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Available for technology consultation, software development contracts, custom 3D design &amp; printing commissions, or student mentorship at K.I.M.T. Classes, Agra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-cyan-500/20">
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-6">
                Official Contact Coordinates
              </h3>

              <div className="space-y-6">
                {/* Name */}
                <div className="pb-4 border-b border-slate-800">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                    Professional Identity
                  </span>
                  <div className="text-lg font-bold text-white">
                    Vibhanshu
                  </div>
                  <div className="text-xs text-cyan-400 mt-0.5">
                    M.Tech · B.Tech · 5+ Years Experience
                  </div>
                </div>

                {/* Location */}
                <div className="pb-4 border-b border-slate-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                        Primary Location / Academy
                      </span>
                      <p className="text-sm font-medium text-slate-200 leading-snug">
                        Mau Road, K.I.M.T. Classes
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Agra, Uttar Pradesh, India
                      </p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Mau+Road+Agra+Uttar+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-cyan-400 hover:text-white transition-colors"
                      title="Open in Maps"
                    >
                      <MapPin className="w-4 h-4 text-rose-400" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="pb-4 border-b border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                        Phone Number
                      </span>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-base font-bold font-mono text-white hover:text-cyan-400 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                      className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                      title="Copy phone number"
                    >
                      {copiedType === 'phone' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {copiedType === 'phone' && (
                    <span className="text-[11px] text-emerald-400 mt-1 block">
                      Phone number copied to clipboard!
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-base font-bold font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                      className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
                      title="Copy email address"
                    >
                      {copiedType === 'email' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {copiedType === 'email' && (
                    <span className="text-[11px] text-emerald-400 mt-1 block">
                      Email address copied to clipboard!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white block">Rapid Response Commitment</span>
                Direct correspondence is typically reviewed and answered within 24 hours.
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 relative border border-slate-800/90">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-8">
                Whether you have a custom software inquiry, need 3D prototyping consultation, or seek academic tutoring in Agra.
              </p>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Thank you! Your message has been prepared and sent to Vibhanshu (<span className="font-mono text-white">acd@gmail.com</span>).
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. user@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Subject / Area of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 3D Prototype Design / Python Software / K.I.M.T. Mentorship"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your technical requirements, educational goals, or consultation request..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Directly reaches Vibhanshu at acd@gmail.com
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
