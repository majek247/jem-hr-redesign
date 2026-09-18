import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, ShieldCheck, CheckCircle2, 
  MessageSquare, Users, Wallet, ChevronRight, PlayCircle,
  FileText, Activity, Lock, ArrowUpRight, Check, Award,
  Globe, Zap, PieChart, Shield, Smartphone, ArrowDownToLine,
  Clock, Database, Briefcase, ChevronDown
} from 'lucide-react';

const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
    
    :root {
      --coral: #E05C4A;
      --coral-light: #FFECE9;
      --coral-dark: #C94636;
      --palm: #3A6B5D;
      --palm-light: #E8F2EF;
      --ink: #0F172A; /* slate-900 */
      --ink-light: #334155; /* slate-700 */
      --paper: #FAFAF9; /* stone-50 */
      --sand: #F5F5F4; /* stone-100 */
      --mist: #F1F5F9; /* slate-100 */
    }
    
    html {
      scroll-behavior: smooth;
    }

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--paper);
      color: var(--ink);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

  

    /* Complex Animations */
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-10px) rotate(1deg); }
      50% { transform: translateY(-20px) rotate(0deg); }
      75% { transform: translateY(-10px) rotate(-1deg); }
    }
    @keyframes float-delayed {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(-1deg); }
    }
    @keyframes float-fast {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes pulse-soft {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.05); }
    }
    @keyframes reveal-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slide-in-right {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    .animate-float { animation: float 8s ease-in-out infinite; }
    .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite 2s; }
    .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
    .animate-marquee { animation: marquee 35s linear infinite; }
    .animate-pulse-soft { animation: pulse-soft 8s ease-in-out infinite; }
    
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }

    .reveal-delay-1 { transition-delay: 100ms; }
    .reveal-delay-2 { transition-delay: 200ms; }
    .reveal-delay-3 { transition-delay: 300ms; }

    /* High-end Glassmorphism */
    .glass-panel {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 24px 48px -12px rgba(0, 0, 0, 0.08);
    }
    
    .glass-dark {
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .glass-chat-bubble {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(15, 23, 42, 0.04);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
    }

    /* Scrollbars */
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    /* Gradients */
    .text-gradient {
      background: linear-gradient(135deg, var(--ink) 0%, #475569 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .bg-grid-pattern {
      background-image: linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
      background-size: 40px 40px;
    }

    /* Utility to balance text wraps perfectly */
    .text-balance {
      text-wrap: balance;
    }
  `}} />
);

const siteData = {
  navigation: [
    { name: 'Platform', href: '#platform' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Customers', href: '#customers' },
    { name: 'Security', href: '#security' },
  ],
logos: [
  { name: 'Capital Hotel',      src: '/images/logos/capital-hotel-navy.png' },
  { name: 'City Logistics',     src: '/images/logos/city-logistics-navy.png' },
  { name: 'Defy',               src: '/images/logos/defy-navy.png' },
  { name: 'Edgars',             src: '/images/logos/edgars-navy.png' },
  { name: 'Illovo',             src: '/images/logos/illovo-navy.png' },
  { name: 'KFC',                src: '/images/logos/kfc-navy.png' },
  { name: 'Leroy Merlin',       src: '/images/logos/leroy-merlin-navy.png' },
  { name: 'Meridian',           src: '/images/logos/meridian-navy.png' },
  { name: 'Oryx',               src: '/images/logos/oryx-navy.png' },
  { name: 'Seattle Coffee',     src: '/images/logos/seattle-coffee-navy.png' },
  { name: 'Servest',            src: '/images/logos/servest-navy.png' },
  { name: 'Spier',              src: '/images/logos/spier-navy.png' },
  { name: 'Stallion Security',  src: '/images/logos/stallion-security-navy.png' },
  { name: 'Swissport',          src: '/images/logos/swissport-navy.png' },
  { name: 'Tharisa',            src: '/images/logos/tharisa-navy.png' },
  { name: 'Tiger Wheel & Tyre', src: '/images/logos/tiger-wheel-navy.png' },
  { name: 'Titanium Securitas', src: '/images/logos/titanium-securitas-navy.png' },
  { name: 'Truda',              src: '/images/logos/truda-navy.png' },
  { name: 'Twizza',             src: '/images/logos/twizza-navy.png' },
  { name: 'Wasteplan',          src: '/images/logos/wasteplan-navy.png' },

  // Duplicate set — required for seamless marquee loop
  { name: 'Capital Hotel',      src: '/images/logos/capital-hotel-navy.png' },
  { name: 'City Logistics',     src: '/images/logos/city-logistics-navy.png' },
  { name: 'Defy',               src: '/images/logos/defy-navy.png' },
  { name: 'Edgars',             src: '/images/logos/edgars-navy.png' },
  { name: 'Illovo',             src: '/images/logos/illovo-navy.png' },
  { name: 'KFC',                src: '/images/logos/kfc-navy.png' },
  { name: 'Leroy Merlin',       src: '/images/logos/leroy-merlin-navy.png' },
  { name: 'Meridian',           src: '/images/logos/meridian-navy.png' },
  { name: 'Oryx',               src: '/images/logos/oryx-navy.png' },
  { name: 'Seattle Coffee',     src: '/images/logos/seattle-coffee-navy.png' },
  { name: 'Servest',            src: '/images/logos/servest-navy.png' },
  { name: 'Spier',              src: '/images/logos/spier-navy.png' },
  { name: 'Stallion Security',  src: '/images/logos/stallion-security-navy.png' },
  { name: 'Swissport',          src: '/images/logos/swissport-navy.png' },
  { name: 'Tharisa',            src: '/images/logos/tharisa-navy.png' },
  { name: 'Tiger Wheel & Tyre', src: '/images/logos/tiger-wheel-navy.png' },
  { name: 'Titanium Securitas', src: '/images/logos/titanium-securitas-navy.png' },
  { name: 'Truda',              src: '/images/logos/truda-navy.png' },
  { name: 'Twizza',             src: '/images/logos/twizza-navy.png' },
  { name: 'Wasteplan',          src: '/images/logos/wasteplan-navy.png' },
],
  pillars: [
    {
      key: 'comm',
      title: 'Enterprise Communication',
      tagline: 'Total Workforce Reach',
      description: 'Bypass physical notice boards and untrackable SMS. Deliver critical company news, policy updates, and urgent alerts directly to the device in their pocket. Gain absolute certainty with rich media, read-receipts, and deep engagement analytics.',
      color: '#E05C4A',
      visual: 'broadcast',
      cta: { label: 'See communication in action', href: '#solutions' },
      points: [
        'Two-way targeted messaging by role, region, or shift', 
        'Automated multi-language translation for diverse workforces', 
        'Real-time engagement and read-receipt analytics', 
        'Multimedia broadcast capabilities (Video, PDF, Imagery)'
      ]
    },
    {
      key: 'hr',
      title: 'Automated HR Operations',
      tagline: 'Administrative Zero',
      description: 'Digitize the entire employee lifecycle without installing a single app. Distribute payslips securely, process leave requests automatically, and execute onboarding entirely over WhatsApp. Empower your workforce with self-service capabilities that drastically reduce inbound queries.',
      color: '#E05C4A',
      visual: 'payslip',
      cta: { label: 'Walk through the HR workflow', href: '#solutions' },
      points: [
        'Secure, automated digital payslip distribution', 
        'Self-service leave management and real-time balance checking', 
        'Shift scheduling coordination with instant feedback loops', 
        'Legally binding digital document signing via mobile'
      ]
    },
    {
      key: 'fin',
      title: 'Financial Wellness',
      tagline: 'Ethical Financial Access',
      description: 'Provide responsible Earned Wage Access (EWA) seamlessly through the chat interface. Help your team navigate mid-month emergencies without predatory payday loans, at absolute zero cost or cash-flow impact to your balance sheet.',
      color: '#E05C4A',
      visual: 'ewa',
      cta: { label: 'Model the EWA impact', href: '#solutions' },
      points: [
        'Instant Earned Wage Access directly to employee bank accounts', 
        'Zero impact on company cash flow or working capital', 
        'Automated payroll reconciliation via secure API integrations', 
        'Interactive financial literacy and savings modules'
      ]
    }
  ],

  execReasons: [
    {
      role: 'CHRO / Head of People',
      label: 'Engagement & Retention',
      icon: <Users className="w-5 h-5" />,
      headline: 'Stop guessing what the frontline thinks.',
      body: 'High turnover isn\'t just a cost of doing business; it\'s a symptom of disconnect. Jem bridges the gap between head office and the shop floor, turning invisible workers into engaged team members who stay longer and contribute more.',
      metrics: [
        { value: '42%', label: 'Reduction in HR queries' },
        { value: '3x', label: 'Faster policy rollout' },
        { value: '81%', label: 'Pulse survey response' }
      ],
      testimonials: [
        {
          quote: "10,000+ colleagues across hundreds of sites — most never had a company email. Weeks into launch we had 90% registered. For a People team responsible for this many people, that visibility is something we've never had before.",
          name: 'Lerato Ndoro',
          role: 'CPO, Servest'
        }
      ]
    },
    {
      role: 'CFO / Head of Finance',
      label: 'Efficiency & ROI',
      icon: <PieChart className="w-5 h-5" />,
      headline: 'Digitization that pays for itself in months.',
      body: 'Printing physical payslips, managing manual leave forms, and handling continuous HR admin queries represent massive hidden operational costs. Jem eliminates these inefficiencies overnight — with zero impact on working capital.',
      metrics: [
        { value: 'R1.2M+', label: 'Annual savings / 5k staff' },
        { value: 'Zero', label: 'Impact on working capital' },
        { value: 'Month 2', label: 'Typical break-even' }
      ],
      testimonials: [
        {
          quote: "I love Jem. We went from 100+ payslip queries every month to less than 2. The convenience is just great and our employees love it.",
          name: 'Nwabisa Mtonana',
          role: 'Payroll Administrator, Ceramic Industries'
        }
      ]
    },
    {
      role: 'COO / Head of Operations',
      label: 'Productivity & Agility',
      icon: <Activity className="w-5 h-5" />,
      headline: 'Operational agility at scale.',
      body: 'When policies change, shifts need covering, or critical safety updates must be deployed, you cannot rely on bulletin boards or word-of-mouth. Jem gives you a direct, trackable line to every single worker.',
      metrics: [
        { value: '100%', label: 'Workforce reachability' },
        { value: '< 3 min', label: 'Critical alert read time' },
        { value: '40%', label: 'More shifts filled internally' }
      ],
      testimonials: [
        {
          quote: "Our cleaners work across client sites so communicating was always a challenge. Jem allows us to communicate directly through WhatsApp — we've achieved over 90% registration, which we honestly did not expect so early.",
          name: 'Debbie Stanbury',
          role: 'CEO, Kusasa Cleaning'
        }
      ]
    },
    {
      role: 'CIO / Head of IT',
      label: 'Security & Implementation',
      icon: <Database className="w-5 h-5" />,
      headline: 'Zero deployment. Maximum security.',
      body: 'Rolling out a new mobile app to thousands of deskless workers is a nightmare of forgotten passwords, incompatible devices, and endless support tickets. Jem requires zero app installation and zero training because it lives inside WhatsApp.',
      metrics: [
        { value: '0', label: 'Apps to install or update' },
        { value: 'ISO 27001', label: 'Certified infrastructure' },
        { value: 'POPIA', label: '& GDPR compliant' }
      ],
      testimonials: [
        {
          quote: "They didn't just hand us technology; they guided us through concept, implementation, adoption and ongoing support. Responsive, solution-driven, and excellent value — I'd confidently recommend Jem HR to any organisation looking to modernise.",
          name: 'Marius Erasmus',
          role: 'CTO, Auto & Truck Tyres'
        }
      ]
    }
  ],
  stats: [
    { value: '200+', label: 'Enterprise Clients' },
    { value: '250k+', label: 'Active Workers' },
    { value: '15m+', label: 'Messages Sent' }
  ],
  steps: [
    {
      number: '01',
      title: 'Integrate your existing systems',
      description: 'We connect directly to your current HRIS and Payroll software (Sage, SAP, etc.) via secure API or simple SFTP file drops. No rip-and-replace required.'
    },
    {
      number: '02',
      title: 'Configure your workflows',
      description: 'Set up your approval chains, custom broadcast segments, and brand identity within our intuitive web dashboard. Establish specific access controls for regional managers.'
    },
    {
      number: '03',
      title: 'Launch via simple WhatsApp link',
      description: 'Employees simply scan a QR code or click a link to initiate a secure WhatsApp chat. Authentication is seamless, and adoption typically exceeds 80% in week one.'
    }
  ],
  caseStudy: {
    headline: 'From printed payslips to a fully engaged workforce.',
    sector: 'Deskless Retail & FMCG • 5,500+ Merchandisers',
    body: "Meridian's merchandisers were spread across South Africa — payslips printed and couriered at huge cost, with only 600 of 5,500 employees holding any digital access. Starting with payslips, Meridian rolled out every product: Earned Wage Access, Jem Mobile, Savings, Comms, and an EAP, reaching a workforce that had never felt heard.",
    metrics: [
      { value: '98%', label: 'Employee adoption' },
      { value: '10%', label: 'Jem Mobile uptake, 90 days' },
      { value: 'R300', label: 'Saved / employee / month' }
    ]
  },
  testimonial: {
    quote: "It's not just 5,500 people, it's 50,000 people. Jem has transformed the lives of not just Meridian employees, but their extended families too.",
    name: "Karen Hammond",
    role: "Group Head of People, Meridian Group"
  },
  securityBadges: [
    'ISO 27001 Certified Infrastructure',
    'Fully POPIA & GDPR Compliant',
    'Bank-grade AES-256 Encryption',
    'Role-Based Access Control (RBAC)',
    'Enterprise SLA & Dedicated Support'
  ]
};


// Per-audience "see it in action" preview panel content

const audienceVisuals = [
  {
    // CHRO
    title: 'Pulse Survey · Sandton Branch',
    subtitle: 'Q4 Frontline Sentiment',
    tag: 'Live',
    accent: '#E05C4A',
    headlineMetric: { value: '81%', label: 'Response rate' },
    rows: [
      { label: 'Feeling heard', value: 84 },
      { label: 'Shift satisfaction', value: 76 },
      { label: 'Manager support', value: 91 },
      { label: 'Would recommend', value: 79 }
    ],
    footerStats: [
      { value: '+12%', label: 'MoM change' },
      { value: '1,240', label: 'Responses' },
      { value: '92%', label: 'Coverage' }
    ]
  },
  {
    // CFO
    title: 'FY Cost Breakdown',
    subtitle: 'Per 5,000 deskless staff',
    tag: 'Updated today',
    accent: '#3A6B5D',
    headlineMetric: { value: 'R1.13M', label: 'Annual net saving' },
    costRows: [
      { label: 'Payslip printing & postage', before: 'R 720,000', after: 'R 0' },
      { label: 'SMS broadcast credits', before: 'R 340,000', after: 'R 96,000' },
      { label: 'HR admin overtime', before: 'R 210,000', after: 'R 42,000' }
    ]
  },
  {
    // COO
    title: 'Broadcast Composer',
    subtitle: 'Sandton · Night Shift · 248 recipients',
    tag: 'Sending',
    accent: '#E05C4A',
    message: 'Reminder: New safety protocol effective Monday. Please acknowledge by 6pm.',
    footerStats: [
      { value: '248', label: 'Sent' },
      { value: '241', label: 'Read' },
      { value: '97%', label: 'Acknowledged' }
    ]
  },
  {
    // CIO
    title: 'System Integrations',
    subtitle: 'All connections healthy',
    tag: 'Synced',
    accent: '#0F172A',
    statusItems: [
      { name: 'SAP SuccessFactors', status: 'Connected' },
      { name: 'Sage VIP Payroll', status: 'Connected' },
      { name: 'Workday HRIS', status: 'Connected' },
      { name: 'Azure AD / SSO', status: 'Connected' }
    ],
    certRow: ['AES-256', 'ISO 27001', 'POPIA', 'SOC 2']
  }
];


const AudiencePreview = ({ visual }) => {
  if (!visual) return null;
  const accent = visual.accent;

  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-white overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_48px_-24px_rgba(15,23,42,0.14)]">
      {/* Module header — labelled, no fake chrome */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-ink/[0.07]">
        <div className="min-w-0">
          <p className="text-[13px] font-bold text-ink truncate">{visual.title}</p>
          <p className="text-[11px] text-ink/45 truncate">{visual.subtitle}</p>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ color: accent, background: `${accent}14` }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
          {visual.tag}
        </span>
      </div>

      <div className="p-6">
        {/* CHRO — headline metric + bars */}
        {visual.rows && (
          <>
            {visual.headlineMetric && (
              <div className="flex items-end justify-between mb-6">
                <p className="text-[40px] font-bold tabular-nums leading-none text-ink">{visual.headlineMetric.value}</p>
                <span className="text-[12px] font-semibold text-ink/50 mb-1.5">{visual.headlineMetric.label}</span>
              </div>
            )}
            <div className="space-y-4">
              {visual.rows.map((row, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[12.5px] mb-1.5">
                    <span className="font-medium text-ink/70">{row.label}</span>
                    <span className="font-bold tabular-nums text-ink">{row.value}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-ink/[0.06] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${row.value}%`, background: accent }} />
                  </div>
                </div>
              ))}
            </div>
            {visual.footerStats && (
              <div className={`grid grid-cols-${visual.footerStats.length} gap-3 mt-6 pt-5 border-t border-ink/[0.07]`}>
                {visual.footerStats.map((s, i) => (
                  <div key={i}>
                    <p className="text-[18px] font-bold tabular-nums text-ink">{s.value}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-ink/45">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* CFO — cost table + net saving */}
        {visual.costRows && (
          <>
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 text-[10px] font-bold uppercase tracking-wide text-ink/40 pb-3 border-b border-ink/[0.07]">
              <span>Line item</span><span className="text-right">Before</span><span className="text-right">With Jem</span>
            </div>
            <div className="divide-y divide-ink/[0.06]">
              {visual.costRows.map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-x-3 items-center py-3.5">
                  <span className="text-[13px] font-medium text-ink/80">{row.label}</span>
                  <span className="text-[12px] text-ink/40 line-through tabular-nums">{row.before}</span>
                  <span className="text-[13px] font-bold tabular-nums" style={{ color: accent }}>{row.after}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl p-5 flex items-center justify-between" style={{ background: `${accent}0F` }}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-ink/50 mb-1">{visual.headlineMetric.label}</p>
                <p className="text-[28px] font-bold tabular-nums" style={{ color: accent }}>{visual.headlineMetric.value}</p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `${accent}20` }}>
                <PieChart className="w-5 h-5" style={{ color: accent }} />
              </div>
            </div>
          </>
        )}

        {/* COO — broadcast message + delivery stats */}
        {visual.message && (
          <>
            <div className="rounded-xl border border-ink/[0.07] bg-slate-50/70 p-4 mb-5">
              <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40 mb-2">Message</p>
              <p className="text-[14px] leading-relaxed text-ink font-medium">{visual.message}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {visual.footerStats.map((s, i) => (
                <div key={i} className="rounded-xl bg-white border border-ink/[0.07] p-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-ink/40 mb-1">{s.label}</p>
                  <p className="text-[22px] font-bold tabular-nums" style={{ color: accent }}>{s.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 h-2 rounded-full bg-ink/[0.06] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: '97%', background: accent }} />
            </div>
          </>
        )}

        {/* CIO — integration status + certs */}
        {visual.statusItems && (
          <>
            <div className="space-y-2.5 mb-6">
              {visual.statusItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-ink/[0.07] bg-white">
                  <div className="w-9 h-9 rounded-lg bg-palm/10 flex items-center justify-center shrink-0">
                    <Database className="w-4 h-4 text-palm" />
                  </div>
                  <span className="flex-1 text-[13px] font-semibold text-ink/80">{item.name}</span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-palm">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {item.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-ink/[0.07]">
              {visual.certRow.map((badge, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink text-white text-[10px] font-bold uppercase tracking-wide">
                  <ShieldCheck className="w-3 h-3" /> {badge}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};



// Hook for scroll animations
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
};

const Button = ({ children, variant = 'primary', className = '', icon, onClick, href }) => {
  const baseStyle = "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-out active:scale-95";
  
  const variants = {
    primary: "bg-coral text-white shadow-md hover:bg-coral-dark hover:shadow-lg hover:-translate-y-0.5",
    dark: "bg-ink text-white shadow-md hover:bg-ink-light hover:shadow-lg hover:-translate-y-0.5",
    outline: "border border-ink/20 text-ink bg-transparent hover:bg-ink/5 hover:border-ink/40",
    ghost: "bg-transparent text-ink hover:bg-ink/5",
    white: "bg-white text-ink shadow-md hover:bg-sand hover:shadow-lg hover:-translate-y-0.5",
  };

  const Element = href ? 'a' : 'button';

  return (
    <Element 
      href={href} 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon === 'arrow' && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
        {icon === 'play' && <PlayCircle className="w-4 h-4" />}
      </span>
    </Element>
  );
};

const Section = ({ children, className = '', bleed = false, id }) => (
  <section id={id} className={`py-20 md:py-32 ${className}`}>
    <div className={`${bleed ? '' : 'max-w-7xl mx-auto px-6 md:px-12 lg:px-24'}`}>
      {children}
    </div>
  </section>
);

const Badge = ({ children, className = '' }) => (
  <div className={`inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/50 px-3 py-1.5 text-xs font-medium text-ink/70 backdrop-blur-sm ${className}`}>
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-coral"></span>
    </span>
    {children}
  </div>
);

const ChatMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      {/* Soft ambient halo — single, not two competing */}
      <div className="absolute inset-0 -m-16 rounded-[3rem] bg-coral/[0.06] blur-[100px] pointer-events-none" />

      {/* Phone frame — single hairline, no glassmorphism, no float */}
      <div className="relative rounded-[2rem] bg-white border border-ink/[0.08] shadow-[0_24px_60px_-20px_rgba(15,23,42,0.18)] overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3">
          <span className="text-[10px] font-medium text-ink/40 tabular-nums">9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-2 rounded-sm border border-ink/25" />
            <span className="w-1.5 h-1 rounded-sm bg-ink/40" />
          </div>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-ink/[0.06]">
          <div className="relative">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-coral text-white font-serif text-base italic">
              j
            </span>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500" />
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-semibold text-ink leading-tight">Jem HR</p>
            <p className="text-[11px] text-ink/45">Verified Business</p>
          </div>
        </div>

        {/* Messages — three only, calm, no timestamps floating */}
        <div className="px-5 py-6 space-y-4 bg-sand/30">
          {/* Payslip */}
          <div className="max-w-[85%]">
            <div className="rounded-2xl rounded-tl-md bg-white border border-ink/[0.06] px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <p className="text-[13.5px] text-ink leading-snug">
                Hi Thabo 👋 Your <span className="font-medium">October payslip</span> is available.
              </p>
              <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-sand/60 px-3 py-2.5">
                <FileText className="w-4 h-4 text-palm shrink-0" strokeWidth={1.75} />
                <span className="text-[12px] font-medium text-ink/80 truncate flex-1">Oct_Payslip.pdf</span>
                <ArrowDownToLine className="w-3.5 h-3.5 text-ink/40" />
              </div>
            </div>
          </div>

          {/* Employee reply */}
          <div className="flex justify-end">
            <div className="max-w-[70%] rounded-2xl rounded-tr-md bg-[#D9FDD3] px-4 py-2.5">
              <p className="text-[13.5px] text-ink leading-snug">Got it, thanks! 🙏</p>
            </div>
          </div>

          {/* EWA */}
          <div className="max-w-[88%]">
            <div className="rounded-2xl rounded-tl-md bg-white border border-ink/[0.06] px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Wallet className="w-3.5 h-3.5 text-palm" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-palm">
                  Earned Wage Access
                </span>
              </div>
              <p className="text-[13.5px] text-ink leading-snug">
                <span className="font-semibold text-ink">R 850.00</span> available to withdraw.
              </p>
              <button className="mt-3 w-full rounded-xl bg-palm text-white text-[12.5px] font-semibold py-2.5 flex items-center justify-center gap-1.5">
                Withdraw to bank
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer input */}
        <div className="px-5 py-4 border-t border-ink/[0.06]">
          <div className="rounded-full bg-sand px-4 py-2.5 flex items-center gap-3">
            <span className="text-[13px] text-ink/40 flex-1">Type a message…</span>
            <MessageSquare className="w-3.5 h-3.5 text-coral" strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* ONE floating proof card — bottom-right, quiet */}
      <div className="absolute -bottom-6 -right-6 md:-right-10 hidden sm:flex items-center gap-3 rounded-2xl bg-white border border-ink/[0.08] shadow-[0_12px_32px_-12px_rgba(15,23,42,0.18)] px-4 py-3">
        <div className="w-8 h-8 rounded-full bg-palm/10 flex items-center justify-center">
          <Check className="w-4 h-4 text-palm" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-ink leading-tight">98% read rate</p>
          <p className="text-[10px] text-ink/45 leading-tight mt-0.5">across 250k workers</p>
        </div>
      </div>
    </div>
  );
};


const Hero = () => (
  <section
    id="hero"
    className="relative overflow-hidden"
    style={{ backgroundColor: '#051d2e' }}
  >
    {/* Subtle grid */}
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />

    {/* Single coral glow behind the phone */}
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-coral/[0.06] blur-[140px] pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-6 md:px-12">

      {/* Main hero grid */}
      <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center pt-10 md:pt-14 pb-10 md:pb-14">

        {/* LEFT — narrative */}
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="reveal inline-flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-coral" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-coral">
              Enterprise platform · Africa
            </span>
          </div>

          {/* Headline */}
          <h1 className="reveal font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-semibold tracking-[-0.03em] text-white leading-[1.04] text-balance">
            The platform for{' '}
            <span className="font-serif italic font-normal text-white/60">
              the deskless workforce.
            </span>
          </h1>

          {/* Sub */}
          <p className="reveal mt-6 text-lg md:text-xl text-white/60 leading-[1.6] font-light">
            Reach, engage, and reward every frontline worker — right inside WhatsApp. No app to download. Nothing to train.
          </p>

          {/* Actions */}
          <div className="reveal mt-10 flex flex-col sm:flex-row gap-3">
            <Button variant="primary" icon="arrow" className="text-base py-4 px-8">
              Book an executive demo
            </Button>
            <button className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white/85 hover:text-white border border-white/20 hover:border-white/40 transition-colors">
              <PlayCircle className="w-4 h-4" />
              See the product tour
            </button>
          </div>
        </div>

     {/* RIGHT — hero image */}
<div className="reveal reveal-delay-2 flex justify-center lg:justify-end items-center">
  <div className="relative w-full max-w-[640px] lg:max-w-none">
    <img
      src="/images/jemherogit.png"
      alt="Jem platform — enterprise workforce management"
      className="w-full h-auto block object-contain"
         style={{
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 4%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, #000 4%)',
      }}
      loading="eager"
      draggable={false}
    />
  </div>
</div>
      </div>

      {/* Bottom strip — logo marquee, on the dark bg */}
      <div className="reveal relative pt-12 md:pt-14 pb-20 md:pb-24 border-t border-white/[0.08]">

        {/* Logo marquee, inline on the dark bg */}
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 mb-6">
          Trusted by Africa's leading enterprises
        </p>
        <div className="relative overflow-hidden">
          {/* Edge fades on navy */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #051d2e, rgba(5,29,46,0))' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #051d2e, rgba(5,29,46,0))' }} />

        <div className="flex animate-marquee items-center gap-16 md:gap-24">
  {siteData.logos.map((logo, idx) => (
    <img
      key={idx}
      src={logo.src}
      alt={logo.name}
      className="h-6 md:h-8 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 shrink-0 invert brightness-0"
      loading="lazy"
      draggable={false}
    />
  ))}
</div>
        </div>
      </div>
    </div>
  </section>
);

const LogoMarquee = () => (
  <div className="py-12 border-y border-ink/5 bg-white relative overflow-hidden flex flex-col items-center">
    <p className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-8">Trusted by Africa's leading enterprises</p>
    <div className="flex whitespace-nowrap relative w-full max-w-[100vw]">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="flex animate-marquee items-center gap-16 md:gap-24 px-8">
        {siteData.logos.map((logo, idx) => (
          <span key={idx} className="text-xl md:text-2xl font-serif font-bold text-ink/20 hover:text-ink/60 transition-colors cursor-default">
            {logo}
          </span>
        ))}
      </div>
    </div>
  </div>
);
const ExecReasons = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = siteData.execReasons[activeTab];
  const visual = audienceVisuals[activeTab];

  return (
    <section className="bg-white relative scroll-mt-24 py-20 md:py-28" id="who-we-serve">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header — tighter, blacker, more editorial */}
        <div className="reveal max-w-3xl mb-14 md:mb-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-5 text-[#E05C4A]">
            Built for every executive
          </p>
          <h2 className="font-sans text-[40px] md:text-[52px] lg:text-[60px] font-semibold text-[#0A0A0A] tracking-[-0.03em] leading-[1.02] text-balance">
            Reasons for every executive to sign off.
          </h2>
          <p className="mt-6 text-[17px] md:text-[19px] text-[#0A0A0A]/55 leading-[1.55] max-w-xl font-light">
            See the value Jem brings to your people and business through the seat you sit in.
          </p>
        </div>

        {/* Tab strip — heavier weight, cleaner rhythm */}
        <div className="reveal reveal-delay-1 mb-12 md:mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10 md:gap-x-14">
            {siteData.execReasons.map((reason, i) => {
              const isActive = activeTab === i;
              const shortRole = reason.role.split(' / ')[0];
              return (
                <button
                  key={reason.role}
                  onClick={() => setActiveTab(i)}
                  className="group relative text-left pb-4"
                >
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0A0A0A]/[0.08]" />
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-1/3'
                    }`}
                    style={{ background: '#E05C4A' }}
                  />
                  <p
                    className={`text-[16px] md:text-[17px] font-bold tracking-[-0.01em] transition-colors duration-300 ${
                      isActive ? 'text-[#0A0A0A]' : 'text-[#0A0A0A]/35 group-hover:text-[#0A0A0A]/65'
                    }`}
                  >
                    For {shortRole}s
                  </p>
                  <p
                    className={`mt-1.5 text-[13px] md:text-[14px] font-normal transition-colors duration-300 ${
                      isActive ? 'text-[#0A0A0A]/60' : 'text-[#0A0A0A]/25 group-hover:text-[#0A0A0A]/45'
                    }`}
                  >
                    {reason.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content panel — split view */}
        <div className="reveal reveal-delay-2">
          <div className="relative rounded-2xl bg-white border border-[#0A0A0A]/[0.08] overflow-hidden shadow-[0_1px_2px_rgba(10,10,10,0.03),0_24px_60px_-32px_rgba(10,10,10,0.10)]">

            <div key={activeTab} className="relative animate-fade-in" style={{ animationDuration: '450ms' }}>
              <div className="grid lg:grid-cols-[1fr_1fr] gap-0">

                {/* LEFT — Narrative */}
                <div className="p-9 md:p-14 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2.5 mb-6">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0A0A0A] text-white">
                      {current.icon}
                    </span>
                    <div>
                      <p className="text-[13.5px] font-bold text-[#0A0A0A] leading-tight tracking-[-0.01em]">
                        {current.role}
                      </p>
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#E05C4A] mt-0.5">
                        {current.label}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-sans text-[28px] md:text-[34px] font-semibold text-[#0A0A0A] leading-[1.15] tracking-[-0.02em] text-balance">
                    {current.headline}
                  </h3>
                  <p className="mt-5 text-[15.5px] md:text-[16px] text-[#0A0A0A]/60 leading-[1.65] font-light">
                    {current.body}
                  </p>

                  {/* Metric row — no card boxes, just hairline separators */}
                  <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-[#0A0A0A]/[0.08]">
                    {current.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <p className="font-sans text-[26px] md:text-[30px] font-semibold text-[#0A0A0A] leading-none tracking-[-0.02em] tabular-nums">
                          {metric.value}
                        </p>
                        <p className="mt-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#0A0A0A]/45 leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT — Live product preview */}
                <div className="relative p-9 md:p-14 lg:p-16 flex items-center bg-[#FAFAF9] border-t lg:border-t-0 lg:border-l border-[#0A0A0A]/[0.08]">
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E05C4A]" />
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#0A0A0A]/50">
                        See it in action
                      </p>
                    </div>
                    <AudiencePreview visual={visual} />
                  </div>
                </div>
              </div>

              {/* Testimonial strip — refined, quiet, enterprise */}
              <div className="border-t border-[#0A0A0A]/[0.08] bg-white">
                {current.testimonials.map((t, idx) => (
                  <figure
                    key={idx}
                    className="grid md:grid-cols-[140px_1fr_auto] gap-6 md:gap-10 items-start px-9 md:px-14 lg:px-16 py-9 md:py-11"
                  >
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#0A0A0A]/40 pt-1">
                      In their words
                    </span>
                    <blockquote className="text-[16px] md:text-[17px] text-[#0A0A0A]/80 leading-[1.55] font-light text-balance">
                      "{t.quote}"
                    </blockquote>
                    <figcaption className="shrink-0 flex flex-col md:items-end text-[12.5px] whitespace-nowrap md:pt-1">
                      <span className="font-semibold tracking-[-0.01em] text-[#0A0A0A]">{t.name}</span>
                      <span className="text-[#0A0A0A]/45 mt-1">{t.role}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const PillarVisual = ({ type, color }) => {
  if (type === 'broadcast') {
    return (
   <div className="relative rounded-2xl border border-white/[0.10] overflow-hidden w-full max-w-md">
  <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg border border-white/[0.10] flex items-center justify-center">
        <MessageSquare className="w-3.5 h-3.5 text-white/55" />
      </div>
            <div>
              <p className="text-[12.5px] font-semibold text-white/90">Broadcast Composer</p>
              <p className="text-[10px] text-white/35">Sandton · Night Shift</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" /> Live
          </span>
        </div>

        <div className="p-5 space-y-4">
       <div className="rounded-xl border border-white/[0.08] p-4">
  <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-2">Message payload</p>
            <p className="text-[13px] text-white/65 leading-relaxed">
              Reminder: new safety protocol effective Monday. Please acknowledge by 6pm.
            </p>
          </div>
         
  <div className="space-y-3 pt-1">
  <div className="flex justify-between items-center pb-3 border-b border-white/[0.06]">
    <span className="text-[11px] text-white/45">Sent</span>
    <span className="text-[12px] font-mono text-white/70">248</span>
  </div>
  <div className="flex justify-between items-center pb-3 border-b border-white/[0.06]">
    <span className="text-[11px] text-white/45">Read</span>
    <span className="text-[12px] font-mono text-white/70">241</span>
  </div>
  <div className="flex justify-between items-center pt-1">
    <span className="text-[11px] font-semibold text-white/70">Acknowledged</span>
    <span className="text-[14px] font-bold font-mono" style={{ color }}>97%</span>
  </div>
</div>

          <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
            <div className="h-full rounded-full bg-white/30" style={{ width: '97%' }} />
          </div>
          <p className="text-[10px] text-white/30 text-center">Delivery in progress · est. completion 47s</p>
        </div>
      </div>
    );
  }

  if (type === 'payslip') {
    return (
      <div className="relative rounded-2xl border border-white/[0.12] overflow-hidden w-full max-w-md">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">
              <FileText className="w-3.5 h-3.5 text-white/55" />
            </div>
            <div>
              <p className="text-[12.5px] font-semibold text-white/90">Payslip Distribution</p>
              <p className="text-[10px] text-white/35">October 2026 cycle</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-white/40">
            <CheckCircle2 className="w-3 h-3 text-white/40" /> Complete
          </span>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">
                <FileText className="w-4 h-4 text-white/50" />
              </div>
              <div>
                <p className="text-[12.5px] font-medium text-white/85">Oct_Payslip.pdf</p>
                <p className="text-[10px] text-white/35">1.2 MB · Encrypted</p>
              </div>
            </div>
            <ArrowDownToLine className="w-3.5 h-3.5 text-white/30" />
          </div>
          <div className="space-y-3 pt-1">
            <div className="flex justify-between items-center pb-3 border-b border-white/[0.05]">
              <span className="text-[11px] text-white/45">Gross earnings</span>
              <span className="text-[12px] font-mono text-white/70">R 24,500.00</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-white/[0.05]">
              <span className="text-[11px] text-white/45">Deductions (PAYE, UIF)</span>
              <span className="text-[12px] font-mono text-white/50">− R 4,120.00</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-[11px] font-semibold text-white/70">Net pay</span>
              <span className="text-[14px] font-bold font-mono" style={{ color }}>R 20,380.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ewa') {
    return (
      <div className="relative rounded-2xl border border-white/[0.12] overflow-hidden w-full max-w-md">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center">
  <Wallet className="w-3.5 h-3.5 text-white/55" />
</div>
            <div>
              <p className="text-[12.5px] font-semibold text-white/90">Earned Wage Access</p>
              <p className="text-[10px] text-white/35">Available balance</p>
            </div>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">Zero cost</span>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center py-3">
            <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-2">Available to withdraw</p>
            <p className="font-serif text-5xl italic text-white/95">
              R 850<span className="text-2xl text-white/40">.00</span>
            </p>
          </div>
         <button className="w-full py-3.5 rounded-xl bg-transparent border border-white/[0.1] text-white/85 text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-white/[0.04] transition-colors">
  Withdraw to bank account <ArrowRight className="w-4 h-4 text-white/50" />
</button>
          <div className="flex items-center justify-center gap-2 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-white/25" />
            <p className="text-[10px] text-white/30">Secured by Jem · Zero interest</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};


const PillarsSection = () => {
  const [activePillar, setActivePillar] = useState(0);
  const pillar = siteData.pillars[activePillar];

  return (
    <section 
      id="product"
      className="relative py-24 md:py-32 scroll-mt-24" 
      style={{ backgroundColor: '#051d2e' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#E05C4A]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E05C4A]">The Platform Suite</span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.05] text-balance">
            One infrastructure. <br className="hidden md:block"/>
            <span className="font-serif italic font-normal text-white/50">Three enterprise pillars.</span>
          </h2>
        </div>

        {/* Main Split Layout */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
          
          {/* LEFT — Index (Tab Switcher) */}
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6 pl-4">Index</p>
              {siteData.pillars.map((p, idx) => {
                const isActive = activePillar === idx;
                return (
                  <button
                    key={p.key}
                    onClick={() => setActivePillar(idx)}
                    className="group w-full text-left py-4 pl-4 border-l-2 transition-all duration-500 flex flex-col gap-1"
                    style={{ borderColor: isActive ? p.color : 'rgba(255,255,255,0.08)' }}
                  >
                    <span className={`text-[10px] font-mono tracking-widest transition-colors duration-500 ${isActive ? 'text-white/50' : 'text-white/20'}`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-[15px] font-semibold tracking-tight transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                      {p.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Active Pillar (Single Panel) */}
          <div className="relative">
            <div className="w-full h-px bg-white/10 mb-10 md:mb-14" />

            <div key={pillar.key} className="animate-fade-in" style={{ animationDuration: '400ms' }}>
              {/* Header Row */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-mono tracking-widest text-white/30">
                    0{activePillar + 1} / 03
                  </span>
                  <h3 className="font-sans text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: pillar.color }}>
                    {pillar.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl mb-12">
                {pillar.description}
              </p>

              {/* Split into Copy (Left) and Premium Visual (Right) */}
              <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
                
                {/* Feature List */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-x-10 gap-y-1">
                  {pillar.points.map((point, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-4 py-4 border-b border-white/[0.06]"
                    >
                      <span 
                        className="mt-2 h-1 w-1 rounded-full shrink-0" 
                        style={{ backgroundColor: pillar.color }} 
                      />
                      <span className="text-[14px] text-white/70 leading-snug font-light">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Premium Product Visual */}
                <div className="relative w-full md:w-[420px] lg:w-[460px] shrink-0">
                  <PillarVisual type={pillar.visual} color={pillar.color} />
                </div>
              </div>

              {/* Quiet in-panel CTA — per-pillar, hairline, no box */}
              <a
                href={pillar.cta.href}
                className="group mt-14 pt-8 border-t border-white/[0.08] inline-flex items-center gap-3 text-[14px] font-semibold tracking-tight text-white/60 hover:text-white transition-colors duration-300"
              >
                <span
                  className="w-6 h-px transition-all duration-500 group-hover:w-10"
                  style={{ background: pillar.color }}
                />
                <span>{pillar.cta.label}</span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const IntegrationSteps = () => (
  <Section className="bg-white" bleed>
    <div className="max-w-7xl mx-auto px-6 md:px-12">

      {/* Editorial header — two columns so the eye travels horizontally */}
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-24 items-end mb-20 md:mb-28">
        <div className="reveal">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
            How it works
          </span>
          <h2 className="mt-5 font-sans text-4xl md:text-5xl lg:text-[72px] font-semibold tracking-[-0.03em] text-ink leading-[0.98] text-balance">
            Live in{' '}
            <span className="font-serif italic font-normal">
              three steps.
            </span>
          </h2>
        </div>
        <p className="reveal text-lg md:text-xl text-ink/70 leading-[1.6] max-w-md lg:pb-3">
          Import your people, switch on the modules you need, and go live — usually before your next payroll cycle.
        </p>
      </div>

      {/* Three steps — editorial, numbered, no icons, staggered */}
      <ol className="grid md:grid-cols-3 gap-y-20 md:gap-y-0 md:gap-x-12 lg:gap-x-20">
        {siteData.steps.map((step, idx) => (
          <li
            key={idx}
            className="reveal relative"
            style={{
              transitionDelay: `${idx * 100}ms`,
              transform: `translateY(${idx === 1 ? '2.5rem' : idx === 2 ? '5rem' : '0'})`,
            }}
          >
            {/* Hairline top + big serif numeral */}
            <div className="border-t border-ink/[0.12] pt-8">
              <div className="flex items-baseline gap-5 mb-8">
                <span className="font-serif italic text-[64px] md:text-[80px] text-ink/20 leading-none tabular-nums">
                  {step.number.replace('0', '')}
                </span>
                <span className="font-mono text-[10px] font-medium tracking-widest text-ink/35 pb-3">
                  / {step.number}
                </span>
              </div>

              <h3 className="font-sans text-xl md:text-[22px] font-semibold text-ink leading-snug mb-4 text-balance tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-[15px] text-ink/85 leading-[1.7]">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Closing strip — same treatment as before, but aligned to the new rhythm */}
      <div className="reveal mt-32 md:mt-40 pt-10 border-t border-ink/[0.12] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <p className="text-[15px] text-ink/75 leading-[1.7] max-w-2xl">
          Already running another platform? So were many of our clients. When{' '}
          <span className="text-ink font-medium">WastePlan</span> switched to a competitor, their employees brought Jem back within six weeks.
        </p>
        <Button
          variant="outline"
          icon="arrow"
          className="shrink-0 border-ink/15 hover:border-ink/30"
        >
          Book a meeting
        </Button>
      </div>
    </div>
  </Section>
);
const SocialProof = () => (
  <section id="customers" className="relative py-24 md:py-32" style={{ backgroundColor: '#051d2e' }}>
    {/* ambient glow, consistent with PillarsSection */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral/[0.06] blur-[100px] rounded-full pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

      {/* Section header — same treatment as "The Platform Suite" */}
      <div className="reveal max-w-3xl mb-20 md:mb-28">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-coral" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-coral">Client Stories</span>
        </div>
        <h2 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.05] text-balance">
          Proof, not promises. <br className="hidden md:block" />
          <span className="font-serif italic font-normal text-white/50">From the people who run it.</span>
        </h2>
      </div>

      {/* Split panel */}
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-0 border-t border-white/10">

        {/* LEFT — Testimonial */}
        <div className="reveal py-14 lg:py-16 lg:pr-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          <div>
            <span className="font-serif italic text-coral/40 text-7xl leading-none block mb-6">"</span>
            <p className="font-serif text-2xl md:text-[28px] italic text-white/90 leading-[1.5] text-balance">
              {siteData.testimonial.quote}
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4 pt-8 border-t border-white/10">
            <div className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/80 font-semibold text-sm">
              {siteData.testimonial.name.charAt(0)}
            </div>
            <div>
              <p className="text-[14px] font-semibold text-white">{siteData.testimonial.name}</p>
              <p className="text-[12px] text-white/45">{siteData.testimonial.role}</p>
            </div>
          </div>
        </div>

        {/* RIGHT — Case study */}
        <div className="reveal reveal-delay-1 py-14 lg:py-16 lg:pl-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/40">Featured Case Study</p>
          </div>

          <h3 className="font-sans text-3xl md:text-4xl font-semibold text-white leading-tight text-balance mb-5">
            {siteData.caseStudy.headline}
          </h3>

          <p className="inline-block px-3 py-1 bg-white/[0.05] rounded-md text-xs font-medium text-white/60 mb-7 border border-white/10">
            {siteData.caseStudy.sector}
          </p>

          <p className="text-[15px] leading-relaxed text-white/60 mb-12 max-w-xl">
            {siteData.caseStudy.body}
          </p>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {siteData.caseStudy.metrics.map((metric, idx) => (
              <div key={idx}>
                <p className="font-serif text-3xl md:text-4xl italic text-coral leading-none mb-2 tabular-nums">
                  {metric.value}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40 leading-snug">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          
           <a href="https://www.jemhr.com/customers/meridian-group/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-3 text-[14px] font-semibold tracking-tight text-white/60 hover:text-white transition-colors duration-300"
          >
            <span className="w-6 h-px bg-coral transition-all duration-500 group-hover:w-10" />
            <span>Read the full Meridian story</span>
            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  </section>
);



const WhyJemAndSecurity = () => (
  <Section id="about" bleed>
    <div className="max-w-7xl mx-auto px-6 md:px-12">

      {/* Part 1 — Mission. Editorial headline, tight body, one quiet stat. */}
      <div className="reveal grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-24 items-start mb-24 md:mb-32">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
            Why we exist
          </span>
          <h2 className="mt-6 font-sans text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-[-0.03em] text-ink leading-[1.02] text-balance">
            Three in four workers are invisible to enterprise software.{' '}
            <span className="font-serif italic font-normal">
              We built for them anyway.
            </span>
          </h2>
        </div>

        <div className="lg:pt-4">
          <p className="text-lg md:text-xl text-ink/75 leading-[1.65] max-w-xl">
            75% of South African workers are deskless. They're locked out of the tools built for office teams, and priced out of fair financial services. Jem meets them where they already are — and we're scaling that infrastructure across the continent.
          </p>
          <div className="mt-10">
            <Button variant="outline" icon="arrow">Read Our Full Story</Button>
          </div>
        </div>
      </div>

      {/* Part 2 — Credential rail. Hairline-separated facts, no cards, no shadows. */}
      <div id="security" className="reveal pt-16 md:pt-20 border-t border-ink/[0.12] scroll-mt-24">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24 items-start">

          {/* Left — title block */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Shield className="w-[18px] h-[18px] text-ink/60" strokeWidth={1.5} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                Enterprise security
              </span>
            </div>
            <h3 className="font-sans text-2xl md:text-3xl font-semibold text-ink leading-tight tracking-[-0.01em] text-balance">
              Infrastructure your board signs off on.
            </h3>
            <p className="mt-4 text-[15px] text-ink/55 leading-[1.7] max-w-sm">
              Bank-grade by default. Certified, compliant, and audited — for the two departments that worry most.
            </p>
          </div>

          {/* Right — credential rows, hairline-separated */}
          <ul className="divide-y divide-ink/[0.10] border-t border-ink/[0.10]">
            {siteData.securityBadges.map((badge, idx) => (
              <li
                key={idx}
                className="grid grid-cols-[40px_1fr_auto] items-center gap-6 py-6 group"
              >
                <span className="font-mono text-[11px] font-medium tracking-widest text-ink/35 group-hover:text-ink/60 transition-colors">
                  0{idx + 1}
                </span>
                <span className="font-sans text-[15px] md:text-base font-medium text-ink/85 group-hover:text-ink transition-colors">
                  {badge}
                </span>
                <CheckCircle2
                  className="w-4 h-4 text-ink/25 group-hover:text-palm transition-colors"
                  strokeWidth={1.75}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  </Section>
);

const CTA = () => (
  <section
    id="contact"
    className="relative overflow-hidden py-28 md:py-40"
    style={{ backgroundColor: '#051d2e' }}
  >
    <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">

      {/* Eyebrow — same hairline pattern as Pillars and SocialProof */}
      <div className="reveal inline-flex items-center gap-3 mb-8">
        <span className="w-8 h-px bg-coral" />
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-coral">
          Choose Jem
        </span>
        <span className="w-8 h-px bg-coral" />
      </div>

      {/* Headline — same editorial pattern used throughout the page */}
      <h2 className="reveal font-sans text-4xl md:text-5xl lg:text-[64px] font-semibold text-white tracking-[-0.03em] leading-[1.02] text-balance mb-8">
        Watch your frontline{' '}
        <span className="font-serif italic font-normal text-white/60">
          fall into place.
        </span>
      </h2>

      <p className="reveal text-lg md:text-xl text-white/55 leading-[1.65] font-light max-w-2xl mx-auto mb-12">
        Book a demo and we'll show you what's possible when you run your deskless teams with Jem.
      </p>

      {/* Action row */}
      <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="primary" icon="arrow" className="w-full sm:w-auto px-8 py-4 text-base">
          Book a demo
        </Button>
        <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white/85 hover:text-white border border-white/20 hover:border-white/40 transition-colors">
          <PlayCircle className="w-4 h-4" />
          See Jem in action
        </button>
      </div>
    </div>

    {/* Hairline divider separating CTA from footer */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-white/[0.08]" />
  </section>
);



export default function App() {
  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <>
      <CustomStyles />
      <div className="min-h-screen flex flex-col font-sans selection:bg-coral/20 selection:text-ink">
 
        <main className="flex-grow">
          <Hero />
          <ExecReasons />
          <PillarsSection />
          <IntegrationSteps />
          <SocialProof />
          <WhyJemAndSecurity />
          <CTA />
        </main>
        
      </div>
    </>
  );
}
