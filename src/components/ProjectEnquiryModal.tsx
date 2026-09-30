import React, { useState, useEffect } from 'react';
import { ProjectEnquiryData } from '../types';
import { Check, Copy, ExternalLink, Mail, X } from 'lucide-react';

interface ProjectEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const BUSINESS_TYPES = [
  'Local Business',
  'Restaurant',
  'Fitness',
  'Education',
  'Real Estate',
  'Creator / Personal Brand',
  'E-commerce',
  'Startup',
  'Other'
];

const SERVICES_NEEDED = [
  'New Website',
  'Landing Page',
  'Website Redesign',
  'E-commerce Website',
  'Website Maintenance',
  'Other'
];

const PAGE_COUNTS = [
  '1 Page',
  '2–5 Pages',
  '6–10 Pages',
  'Not Sure'
];

const BUDGET_RANGES = [
  'Under ₹5,000',
  '₹5,000–₹10,000',
  '₹10,000–₹25,000',
  '₹25,000+',
  'Not Sure'
];

const TIMELINES = [
  'ASAP',
  '1–2 Weeks',
  '2–4 Weeks',
  'Flexible'
];

export const ProjectEnquiryModal: React.FC<ProjectEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [formData, setFormData] = useState<ProjectEnquiryData>({
    name: '',
    email: '',
    businessName: '',
    businessType: 'Local Business',
    serviceNeeded: initialService || 'New Website',
    pageCount: '2–5 Pages',
    budget: '₹10,000–₹25,000',
    timeline: '2–4 Weeks',
    details: '',
    referenceUrl: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.businessName.trim()) {
      errs.businessName = 'Please enter your business or brand name';
    }
    if (!formData.details.trim()) {
      errs.details = 'Please briefly describe your vision or goals';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const getBriefSummaryText = () => {
    return `PROJECT BRIEF FOR LUVORA STUDIO
----------------------------------------
From: ${formData.name} (${formData.email})
Business: ${formData.businessName} [${formData.businessType}]
Service Requested: ${formData.serviceNeeded}
Scope: ${formData.pageCount}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}
Reference URL: ${formData.referenceUrl || 'None specified'}

Project Details:
${formData.details}
----------------------------------------
Sent to: rehan62062@gmail.com`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getBriefSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`Project Brief: ${formData.businessName} - ${formData.serviceNeeded}`);
    const body = encodeURIComponent(getBriefSummaryText());
    window.location.href = `mailto:rehan62062@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#090a0d] border border-white/10 rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col my-auto max-h-[94vh]">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090a0d]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-tight font-display text-white">Luvora Studio</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono-tech">Project Enquiry</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close enquiry modal"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-10">
          {!isSubmitted ? (
            <div className="space-y-8">
              {/* Heading */}
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
                  Let's Build Something Great.
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-body">
                  Tell us a little about your project and we'll get back to you.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-zinc-400">
                  <span>Direct Studio Desk:</span>
                  <a
                    href="mailto:rehan62062@gmail.com"
                    className="text-white hover:underline underline-offset-4 flex items-center gap-1 font-medium"
                  >
                    <span>rehan62062@gmail.com</span>
                    <Mail className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>

              {/* Enquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Basics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111218] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                    />
                    {errors.name && <p className="text-xs text-rose-400 font-mono-tech">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="julian@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#111218] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                    />
                    {errors.email && <p className="text-xs text-rose-400 font-mono-tech">{errors.email}</p>}
                  </div>
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                    Business / Brand Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vance Architecture or Luminary Coffee"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-[#111218] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                  />
                  {errors.businessName && <p className="text-xs text-rose-400 font-mono-tech">{errors.businessName}</p>}
                </div>

                {/* Business Type */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                    Business Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUSINESS_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, businessType: type })}
                        className={`px-3 py-1.5 text-xs font-mono-tech rounded-lg border transition-colors whitespace-nowrap ${
                          formData.businessType === type
                            ? 'bg-white text-zinc-950 border-white font-semibold shadow-sm'
                            : 'bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* What do you need? */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                    What do you need?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_NEEDED.map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => setFormData({ ...formData, serviceNeeded: svc })}
                        className={`px-3 py-1.5 text-xs font-mono-tech rounded-lg border transition-colors whitespace-nowrap ${
                          formData.serviceNeeded === svc
                            ? 'bg-white text-zinc-950 border-white font-semibold shadow-sm'
                            : 'bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/20'
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Number of Pages */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                    Number of Pages
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {PAGE_COUNTS.map((count) => (
                      <button
                        type="button"
                        key={count}
                        onClick={() => setFormData({ ...formData, pageCount: count })}
                        className={`px-3 py-2 text-xs font-mono-tech rounded-lg border text-center transition-colors ${
                          formData.pageCount === count
                            ? 'bg-white text-zinc-950 border-white font-semibold shadow-sm'
                            : 'bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/20'
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimated Budget */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                    Estimated Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_RANGES.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-3 py-1.5 text-xs font-mono-tech rounded-lg border transition-colors whitespace-nowrap ${
                          formData.budget === b
                            ? 'bg-white text-zinc-950 border-white font-semibold shadow-sm'
                            : 'bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/20'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Desired Timeline */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                    Desired Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIMELINES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`px-3 py-2 text-xs font-mono-tech rounded-lg border text-center transition-colors ${
                          formData.timeline === t
                            ? 'bg-white text-zinc-950 border-white font-semibold shadow-sm'
                            : 'bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-white hover:border-white/20'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tell us about your project */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-zinc-300">
                    Tell us about your project <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe what you are looking to achieve, your primary audience, and any unique aesthetic goals..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-[#111218] border border-white/10 rounded-lg p-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors leading-relaxed"
                  />
                  {errors.details && <p className="text-xs text-rose-400 font-mono-tech">{errors.details}</p>}
                </div>

                {/* Reference Website (Optional) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-zinc-400">
                    Reference Website <span className="text-zinc-500">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com"
                    value={formData.referenceUrl}
                    onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                    className="w-full bg-[#111218] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-mono-tech">
                    Direct reply within 24 business hours
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-zinc-950 font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-xl cursor-pointer"
                  >
                    <span>Send Project Brief ↗</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* After Submission State */
            <div className="py-8 space-y-6 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Check className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Project Brief Received.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-body leading-relaxed max-w-xl">
                  Thanks for reaching out to Luvora Studio. We'll review your project details and get back to you.
                </p>
              </div>

              {/* Direct email review box */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-4">
                <div className="text-xs font-mono-tech text-zinc-400 uppercase tracking-wider">
                  Summary of your brief
                </div>
                <div className="text-xs font-mono-tech text-zinc-300 whitespace-pre-wrap bg-[#07080a] p-4 rounded border border-white/[0.06] max-h-56 overflow-y-auto">
                  {getBriefSummaryText()}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={handleOpenMailto}
                    className="px-4 py-2.5 bg-white text-zinc-950 text-xs font-semibold rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email Client to rehan62062@gmail.com</span>
                  </button>
                  <button
                    onClick={handleCopyBrief}
                    className="px-4 py-2.5 bg-white/[0.06] text-white text-xs font-medium rounded-lg hover:bg-white/[0.12] transition-colors flex items-center gap-2 border border-white/10"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Brief Copied!' : 'Copy Brief to Clipboard'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex justify-between items-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-zinc-400 hover:text-white font-mono-tech"
                >
                  ← Edit Brief
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-mono-tech uppercase bg-white/10 text-white rounded hover:bg-white/20 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
