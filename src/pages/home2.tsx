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
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
    
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
      font-family: 'Inter', sans-serif;
      background-color: var(--paper);
      color: var(--ink);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    .font-serif {
      font-family: 'Playfair Display', serif;
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
    "Shoprite", "Mr Price", "Nando's", "Woolworths", "TFG", "Spar", "Clicks", "Pick n Pay",
    "Shoprite", "Mr Price", "Nando's", "Woolworths", "TFG", "Spar", "Clicks", "Pick n Pay"
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
      points: [
        'Survey the frontline instantly with >80% response rates',
        'Digitize onboarding to get new hires productive faster',
        'Provide a modern employee experience without app fatigue',
        'Identify flight-risk locations through engagement metrics'
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
      points: [
        'Eliminate the cost of printing, distributing, and re-issuing payslips',
        'Reduce payroll errors with automated leave and shift tracking',
        'Consolidate disjointed SMS and point-solution budgets into one platform',
        'Free up HR headcount to focus on strategic initiatives over admin'
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
      points: [
        'Fill open shifts instantly with targeted broadcasts',
        'Ensure critical health & safety protocols are read and acknowledged',
        'Standardize operational training through micro-learning via chat',
        'Reduce downtime caused by miscommunication or outdated schedules'
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
      points: [
        'Plug-and-play integrations with SAP, Sage, VIP, and more',
        'Bank-grade encryption and fully POPIA/GDPR compliant',
        'Role-based access controls and comprehensive audit logs',
        'Zero burden on IT helpdesk for password resets or app issues'
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
    headline: 'How a top-tier retail giant digitized 15,000 store staff in under 3 weeks.',
    sector: 'Enterprise Retail • 15,000+ Employees',
    body: 'Faced with soaring printing costs and a complete inability to communicate urgent operational changes to floor staff, this national retailer deployed Jem. Within the first month, they entirely eliminated printed payslips, saw an 85% adoption rate without mandatory enforcement, and utilized the broadcast feature to fill 40% more open shifts internally.',
    metrics: [
      { value: '85%', label: 'Voluntary Adoption' },
      { value: 'R3M', label: 'Admin Savings/Yr' },
      { value: '100%', label: 'ROI in Month 2' }
    ]
  },
  testimonial: {
    quote: "Jem completely transformed how we interact with our store associates. It moved us from a fragmented, paper-heavy operation to a modern, agile organization overnight. The fact that it requires zero training is the real magic.",
    name: "Sarah Jenkins",
    role: "CHRO, Leading Retail Group"
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
    // CHRO — Engagement Dashboard
    kind: 'dashboard',
    title: 'Pulse Survey · Sandton Branch',
    subtitle: 'Q4 Frontline Sentiment',
    accent: '#E05C4A',
    stat: { value: '81%', label: 'Response rate' },
    bars: [
      { label: 'Feeling heard', value: 84 },
      { label: 'Shift satisfaction', value: 76 },
      { label: 'Manager support', value: 91 },
      { label: 'Would recommend', value: 79 }
    ],
    chips: ['+12% MoM', '1,240 responses', 'Live']
  },
  {
    // CFO — Cost breakdown
    kind: 'finance',
    title: 'FY Cost Breakdown',
    subtitle: 'Per 5,000 deskless staff',
    accent: '#3A6B5D',
    rows: [
      { label: 'Payslip printing & postage', before: 'R 720,000', after: 'R 0' },
      { label: 'SMS broadcast credits', before: 'R 340,000', after: 'R 96,000' },
      { label: 'HR admin overtime', before: 'R 210,000', after: 'R 42,000' }
    ],
    total: { value: 'R 1.13M', label: 'Annual net saving' }
  },
  {
    // COO — Broadcast composer
    kind: 'broadcast',
    title: 'Broadcast Composer',
    subtitle: 'Targeting: Sandton · Night Shift · 248 recipients',
    accent: '#E05C4A',
    message: '⚠️ Reminder: New safety protocol effective Monday. Please acknowledge by 6pm.',
    stats: [
      { value: '248', label: 'Sent' },
      { value: '241', label: 'Read' },
      { value: '97%', label: 'Acknowledged' }
    ]
  },
  {
    // CIO — Integration & security
    kind: 'security',
    title: 'System Integrations',
    subtitle: 'All connections healthy',
    accent: '#0F172A',
    integrations: [
      { name: 'SAP SuccessFactors', status: 'Connected' },
      { name: 'Sage VIP Payroll', status: 'Connected' },
      { name: 'Workday HRIS', status: 'Connected' },
      { name: 'Azure AD / SSO', status: 'Connected' }
    ],
    badges: ['AES-256', 'ISO 27001', 'POPIA', 'SOC 2']
  }
];

const AudiencePreview = ({ visual }) => {
  if (!visual) return null;

  // Each kind renders a distinct, enterprise-grade mockup panel
  return (
    <div className="relative">

      <div className="relative rounded-xl bg-white border border-ink/[0.10] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-16px_rgba(15,23,42,0.10)] overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-ink/[0.06] bg-white">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-ink/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-ink/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-ink/10" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-ink truncate">{visual.title}</p>
            <p className="text-[11px] text-ink/45 truncate">{visual.subtitle}</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-palm/10 text-[10px] font-bold uppercase tracking-wider text-palm">
            <span className="w-1.5 h-1.5 rounded-full bg-palm animate-pulse" /> Live
          </span>
        </div>

        {/* Body */}
        <div className="p-6 md:p-7">
          {/* CHRO — Pulse survey bars */}
          {visual.kind === 'dashboard' && (
            <div className="animate-fade-in">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-ink/40 mb-1">Overall sentiment</p>
                  <p className="font-serif text-4xl italic text-ink">{visual.stat.value}</p>
                </div>
                <p className="text-xs font-semibold text-ink/50">{visual.stat.label}</p>
              </div>
              <div className="space-y-4">
                {visual.bars.map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[12px] mb-1.5">
                      <span className="font-medium text-ink/70">{bar.label}</span>
                      <span className="font-bold text-ink tabular-nums">{bar.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-ink/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${bar.value}%`, background: visual.accent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {visual.chips.map((chip, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-[#FAF7F4] text-[11px] font-semibold text-ink/60">{chip}</span>
                ))}
              </div>
            </div>
          )}

          {/* CFO — Cost breakdown */}
          {visual.kind === 'finance' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 text-[10px] font-bold uppercase tracking-widest text-ink/40 pb-3 border-b border-ink/[0.06]">
                <span>Line item</span>
                <span className="text-right">Before</span>
                <span className="text-right">With Jem</span>
              </div>
              <div className="divide-y divide-ink/[0.05]">
                {visual.rows.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-x-3 items-center py-4">
                    <span className="text-[13px] font-medium text-ink/80">{row.label}</span>
                    <span className="text-[12px] text-ink/45 line-through tabular-nums">{row.before}</span>
                    <span className="text-[13px] font-bold tabular-nums" style={{ color: visual.accent }}>{row.after}</span>
                  </div>
                ))}
              </div>
              <div
                className="mt-4 rounded-xl p-5 flex items-center justify-between"
                style={{ background: `${visual.accent}0F` }}
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ink/50 mb-1">{visual.total.label}</p>
                  <p className="font-serif text-3xl italic tabular-nums" style={{ color: visual.accent }}>{visual.total.value}</p>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `${visual.accent}20` }}>
                  <PieChart className="w-5 h-5" style={{ color: visual.accent }} />
                </div>
              </div>
            </div>
          )}

          {/* COO — Broadcast composer */}
          {visual.kind === 'broadcast' && (
            <div className="animate-fade-in">
              <div className="rounded-xl border border-ink/[0.06] bg-slate-50/60 p-4 mb-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-2">Message</p>
                <p className="text-[14px] leading-relaxed text-ink">{visual.message}</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {visual.stats.map((s, i) => (
                  <div key={i} className="rounded-xl bg-white border border-ink/[0.06] p-4 text-center shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">{s.label}</p>
                    <p className="font-serif text-2xl italic tabular-nums" style={{ color: visual.accent }}>{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 h-1.5 rounded-full bg-ink/[0.06] overflow-hidden">
                <div className="h-full rounded-full" style={{ width: '97%', background: visual.accent }} />
              </div>
              <p className="text-[11px] text-ink/45 mt-2 text-center">Delivery in progress · est. completion 47s</p>
            </div>
          )}

          {/* CIO — Integrations */}
          {visual.kind === 'security' && (
            <div className="animate-fade-in">
              <div className="space-y-2.5 mb-6">
                {visual.integrations.map((int, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-ink/[0.06] bg-white hover:border-palm/20 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-palm/10 flex items-center justify-center shrink-0">
                      <Database className="w-4 h-4 text-palm" />
                    </div>
                    <span className="flex-1 text-[13px] font-semibold text-ink/80">{int.name}</span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-palm">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {int.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-ink/[0.06]">
                {visual.badges.map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink text-white text-[10px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3" /> {badge}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
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
    <div className="relative mx-auto w-full max-w-[340px] md:max-w-md perspective-1000">
      {/* Decorative ambient background glows */}
      <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-palm/20 blur-[60px] animate-pulse-soft" />
      <div className="absolute -bottom-16 -right-12 h-72 w-72 rounded-full bg-coral/20 blur-[60px] animate-pulse-soft" style={{ animationDelay: '2s' }} />

      {/* Main Phone/Chat Container */}
      <div className="relative rounded-[2.5rem] border-[6px] border-white/40 bg-white/60 p-2 shadow-2xl backdrop-blur-xl animate-float">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-white/40 rounded-b-2xl blur-[1px]"></div>
        
        <div className="relative h-[600px] w-full overflow-hidden rounded-[2rem] bg-sand/50 shadow-inner flex flex-col">
          
          {/* Chat Header */}
          <div className="flex items-center gap-3 bg-white/95 px-5 py-4 shadow-sm backdrop-blur-md border-b border-ink/5 z-10">
            <button className="text-ink/40 hover:text-ink transition-colors">
              <ChevronDown className="w-5 h-5 rotate-90" />
            </button>
            <div className="relative">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-coral text-lg font-serif font-bold italic text-white shadow-sm">
                j
              </span>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-semibold text-ink leading-tight">Jem HR</p>
              <p className="text-[11px] font-medium text-ink/50">Verified Business Account</p>
            </div>
          </div>

          {/* Chat Body - Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 hide-scrollbar bg-[#E5DCD5]/10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            
            {/* Date Indicator */}
            <div className="flex justify-center my-2">
              <span className="bg-white/80 text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full text-ink/50 shadow-sm">Today</span>
            </div>

            {/* Message 1: Payslip (From Jem) */}
            <div className="flex flex-col gap-1 items-start animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <div className="glass-chat-bubble max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 text-[14px] text-ink shadow-sm relative group">
                <p className="font-medium text-ink mb-1">Hi Thabo 👋</p>
                <p className="text-ink/80 leading-snug">Your payslip for <strong className="text-ink">October 2026</strong> is now available.</p>
                
                <div className="mt-3 rounded-xl border border-ink/5 bg-sand/50 p-3 flex items-center gap-3 cursor-pointer hover:bg-sand transition-colors">
                  <div className="bg-palm/10 p-2 rounded-lg">
                    <FileText className="w-5 h-5 text-palm" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] font-semibold">Oct_Payslip.pdf</p>
                    <p className="text-[11px] text-ink/50">1.2 MB</p>
                  </div>
                  <ArrowDownToLine className="w-4 h-4 text-ink/40" />
                </div>
                <span className="absolute bottom-1.5 right-2 text-[9px] text-ink/30">09:41</span>
              </div>
            </div>

            {/* Message 2: Employee Reply */}
            <div className="flex flex-col gap-1 items-end animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
              <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-[#D9FDD3] px-4 py-2.5 text-[14px] text-ink shadow-sm relative">
                <p>Got it, thanks! 🙏</p>
                <div className="flex items-center gap-1 mt-1 justify-end">
                  <span className="text-[9px] text-ink/40">09:45</span>
                  <CheckCircle2 className="w-3 h-3 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Message 3: Shift Feedback (From Jem) */}
            <div className="flex flex-col gap-1 items-start animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
              <div className="glass-chat-bubble max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-3 text-[14px] text-ink shadow-sm relative">
                <p className="font-medium text-coral flex items-center gap-1.5 mb-1"><Clock className="w-4 h-4"/> Shift Completed</p>
                <p className="text-ink/80 leading-snug">You just clocked out from the <strong>Sandton Branch</strong>. How was your shift today?</p>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="flex-1 bg-white border border-ink/10 rounded-lg py-2 text-[13px] font-medium hover:bg-palm/5 hover:border-palm/30 hover:text-palm transition-colors">👍 Great</button>
                  <button className="flex-1 bg-white border border-ink/10 rounded-lg py-2 text-[13px] font-medium hover:bg-yellow-500/5 hover:border-yellow-500/30 hover:text-yellow-600 transition-colors">😐 Okay</button>
                  <button className="flex-1 bg-white border border-ink/10 rounded-lg py-2 text-[13px] font-medium hover:bg-coral/5 hover:border-coral/30 hover:text-coral transition-colors">👎 Tough</button>
                </div>
                <span className="absolute bottom-1.5 right-2 text-[9px] text-ink/30">14:30</span>
              </div>
            </div>

            {/* Message 4: Financial Wellness (EWA) */}
            <div className="flex flex-col gap-1 items-start animate-fade-in" style={{ animationDelay: '3.5s', animationFillMode: 'both' }}>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-palm/20 bg-gradient-to-br from-palm/10 to-palm/5 px-4 py-3 text-[14px] text-ink shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-palm/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                <p className="font-medium text-palm flex items-center gap-1.5 mb-1"><Wallet className="w-4 h-4"/> Earned Wage Access</p>
                <p className="text-ink/80 leading-snug">You have <strong className="text-ink text-[15px]">R 850.00</strong> in available earned wages.</p>
                
                <button className="mt-3 w-full bg-palm text-white rounded-xl py-2.5 text-[13px] font-semibold flex justify-center items-center gap-2 hover:bg-palm/90 transition-colors shadow-md">
                  Withdraw to Bank <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="absolute bottom-1.5 right-2 text-[9px] text-palm/50">14:31</span>
              </div>
            </div>

          </div>

          {/* Chat Footer */}
          <div className="bg-white/95 px-4 py-3 border-t border-ink/5 backdrop-blur-md">
            <div className="bg-sand rounded-full px-4 py-2.5 flex items-center gap-3">
              <span className="text-ink/40 text-[14px] flex-1">Type a message...</span>
              <div className="w-7 h-7 rounded-full bg-coral/10 flex items-center justify-center cursor-pointer">
                <MessageSquare className="w-3.5 h-3.5 text-coral" />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Floating UI Elements for depth */}
      <div className="absolute -right-8 top-32 glass-panel p-3 rounded-2xl shadow-xl animate-float-delayed z-20 flex items-center gap-3">
        <div className="bg-green-100 p-2 rounded-full text-green-600"><Check className="w-4 h-4"/></div>
        <div>
          <p className="text-[11px] font-bold text-ink">98% Read Rate</p>
          <p className="text-[9px] text-ink/60">Across organization</p>
        </div>
      </div>
      
      <div className="absolute -left-6 bottom-40 glass-panel p-3 rounded-2xl shadow-xl animate-float-fast z-20 flex items-center gap-3 border-l-4 border-l-palm">
        <div>
          <p className="text-[11px] font-bold text-ink">Zero API Costs</p>
          <p className="text-[9px] text-ink/60">Direct payroll integration</p>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <Section className="pt-16 md:pt-24 pb-16 lg:pb-32 overflow-hidden relative" id="platform">
    {/* Background Grid */}
    <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
    
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center relative z-10">
      <div className="reveal">
        <Badge className="mb-6">The #1 Platform for Frontline Workers in Africa</Badge>
        
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink leading-[1.05] text-balance">
          Africa's deskless workforce, <span className="font-serif italic font-normal text-coral">finally seen.</span>
        </h1>
        
        <p className="mt-6 max-w-xl text-lg md:text-xl text-ink/65 leading-relaxed">
          Jem turns WhatsApp into an enterprise-grade HR and financial-wellbeing platform for the people who keep your business running. <strong>No app to download, nothing to train.</strong>
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button variant="primary" icon="arrow" className="text-base py-4 px-8">
            Book an Executive Demo
          </Button>
          <Button variant="white" icon="play" className="text-base py-4 px-8">
            See Product Tour
          </Button>
        </div>
        
        <div className="mt-12 flex items-center gap-6 pt-8 border-t border-ink/10">
          <div className="flex -space-x-3">
            {[1,2,3,4].map((i) => (
              <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-ink flex items-center justify-center shadow-sm z-[${10-i}]`}>
                <span className="text-white text-[10px] font-bold">HR</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-ink/60 max-w-[200px] leading-snug">
            Trusted by 200+ employers and <strong className="text-ink">250,000+ deskless workers</strong>.
          </p>
        </div>
      </div>

      <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end reveal reveal-delay-2">
        <ChatMockup />
      </div>
    </div>
  </Section>
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
    <Section className="bg-white relative" id="solutions">
      <div className="relative z-10">
        {/* Section header */}
        <div className="reveal max-w-3xl mb-14 md:mb-16 -mt-14">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#FF5A5F' }}>
            Built for every executive
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#0B0F19] tracking-[-0.02em] leading-[1.05] text-balance">
            Reasons for every executive to sign off.
          </h2>
          <p className="mt-5 text-lg md:text-xl text-[#0B0F19]/60 leading-relaxed -mb-8 max-w-2xl">
            See the value Jem brings to your people and business through the seat you sit in.
          </p>
        </div>

        {/* Tab strip — full-width underline style */}
        <div className="reveal reveal-delay-1 mb-14 md:mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-x-12">
            {siteData.execReasons.map((reason, i) => {
              const isActive = activeTab === i;
              const shortRole = reason.role.split(' / ')[0];
              return (
                <button
                  key={reason.role}
                  onClick={() => setActiveTab(i)}
                  className="group relative text-left pb-5"
                >
                  {/* Underline track */}
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-ink/[0.08] rounded-full" />
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] rounded-full transition-all duration-500 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-1/3'
                    }`}
                    style={{ background: '#FF5A5F' }}
                  />
                  <p
                    className={`text-[15px] md:text-base font-bold tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-[#0B0F19]' : 'text-[#0B0F19]/40 group-hover:text-[#0B0F19]/70'
                    }`}
                  >
                    For {shortRole}s
                  </p>
                  <p
                    className={`mt-1 text-[13px] md:text-sm font-normal transition-colors duration-300 ${
                      isActive ? 'text-[#0B0F19]/70' : 'text-[#0B0F19]/30 group-hover:text-[#0B0F19]/50'
                    }`}
                  >
                    {reason.label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content — split view: narrative on left, live preview on right */}
        <div className="reveal reveal-delay-2">
          <div className="relative rounded-2xl bg-white border border-ink/[0.07] overflow-hidden">

            <div key={activeTab} className="relative grid lg:grid-cols-[1.05fr_1fr] gap-0 animate-fade-in" style={{ animationDuration: '450ms' }}>
              {/* LEFT — Narrative */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-ink text-white">
                    {current.icon}
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-ink leading-tight">{current.role}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-coral">{current.label}</p>
                  </div>
                </div>

                <h3 className="font-sans text-2xl md:text-3xl font-semibold text-ink leading-tight text-balance">
                  {current.headline}
                </h3>
                <p className="mt-5 text-[15px] md:text-base text-ink/65 leading-relaxed">
                  {current.body}
                </p>

                {/* Metric cards — a row of three, enterprise style */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {current.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-ink/[0.06] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    >
                      <p className="font-serif text-2xl md:text-[28px] italic text-ink leading-none mb-2 tabular-nums">
                        {metric.value}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-ink/45 leading-tight">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="mt-8 space-y-3">
                  {current.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[14px] text-ink/75 leading-snug">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-palm/10 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-palm" strokeWidth={3} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT — Live product preview */}
              <div className="relative p-8 md:p-12 lg:p-14 flex items-center bg-white border-t lg:border-t-0 lg:border-l border-ink/[0.07]">
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink/50">
                      See it in action
                    </p>
                  </div>
                  <AudiencePreview visual={visual} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
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
      className="relative py-24 md:py-32" 
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
  <Section className="bg-white">
    <div className="max-w-7xl mx-auto">

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
  <Section className="bg-mist p-0" bleed id="customers">
    <div className="grid lg:grid-cols-2 min-h-[600px]">
      
      {/* Testimonial Side (Light) */}
      <div className="px-8 py-20 lg:p-24 flex flex-col justify-center relative overflow-hidden reveal">
        <div className="absolute top-12 left-12 text-ink/5 font-serif text-9xl leading-none">"</div>
        <div className="relative z-10">
          <Badge className="bg-white text-ink border-ink/10 mb-8">Client Voice</Badge>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-ink leading-relaxed mb-10 text-balance">
            "{siteData.testimonial.quote}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-ink rounded-full flex items-center justify-center text-white font-bold text-lg">
              {siteData.testimonial.name.charAt(0)}
            </div>
            <div>
              <p className="text-base font-bold text-ink">{siteData.testimonial.name}</p>
              <p className="text-sm font-medium text-ink/60">{siteData.testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Side (Dark) */}
      <div className="bg-ink text-paper px-8 py-20 lg:p-24 flex flex-col justify-center relative overflow-hidden reveal reveal-delay-2">
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-widest text-paper/50">Featured Case Study</p>
          </div>
          
          <h3 className="font-sans text-3xl md:text-4xl font-semibold mb-4 text-balance">{siteData.caseStudy.headline}</h3>
          <p className="inline-block px-3 py-1 bg-white/10 rounded-md text-xs font-medium text-paper/80 mb-6 border border-white/10">
            {siteData.caseStudy.sector}
          </p>
          
          <p className="text-base leading-relaxed text-paper/70 mb-10">
            {siteData.caseStudy.body}
          </p>
          
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {siteData.caseStudy.metrics.map((metric, idx) => (
              <div key={idx}>
                <p className="font-serif text-2xl md:text-3xl italic text-coral mb-1">{metric.value}</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-paper/40">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </Section>
);

const WhyJemAndSecurity = () => (
  <Section id="security">
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
      <div className="reveal">
        <Badge className="mb-4">Our Mission</Badge>
        <h2 className="font-sans text-4xl md:text-5xl font-semibold text-ink tracking-tight text-balance">
          Bridging the gap for the <span className="font-serif italic font-normal text-palm">unseen majority.</span>
        </h2>
        <p className="mt-6 text-lg text-ink/65 leading-relaxed max-w-xl">
          Three in four South African workers are deskless, yet almost zero enterprise software is built with them in mind. They're locked out of standard corporate tools, and often locked out of fair financial services too. Jem meets them exactly where they already are, on their terms—and we're scaling this infrastructure across the continent.
        </p>
        <div className="mt-10">
          <Button variant="outline" icon="arrow">Read Our Full Story</Button>
        </div>
      </div>

      <div className="relative reveal reveal-delay-2">
        <div className="absolute inset-0 bg-gradient-to-br from-sand to-mist rounded-[2.5rem] transform rotate-3 scale-105 opacity-50 border border-ink/5" />
        <div className="relative bg-white rounded-[2rem] p-10 shadow-xl border border-ink/5">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-ink rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-ink">Enterprise Security</h3>
              <p className="text-sm font-medium text-ink/50">Infrastructure your board signs off on.</p>
            </div>
          </div>
          
          <ul className="space-y-4">
            {siteData.securityBadges.map((badge, idx) => (
              <li key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-sand transition-colors">
                <div className="w-8 h-8 rounded-full bg-palm/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-palm" />
                </div>
                <span className="text-sm font-semibold text-ink/80">{badge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

const CTA = () => (
  <Section className="bg-coral py-24 md:py-32 relative overflow-hidden" bleed>
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ink/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
    
    <div className="max-w-4xl mx-auto text-center px-6 relative z-10 reveal">
      <h2 className="font-sans text-5xl md:text-6xl font-semibold text-white tracking-tight text-balance mb-8">
        Ready to watch your frontline <span className="font-serif italic font-normal text-ink">fall into place?</span>
      </h2>
      <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
        Join the 200+ enterprise companies transforming their operations, HR, and employee wellness with Jem today.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="dark" className="w-full sm:w-auto px-10 py-4 text-base">Book a Priority Demo</Button>
        <Button variant="ghost" className="w-full sm:w-auto px-10 py-4 text-base text-white hover:bg-white/10 border border-white/20 hover:border-white">Explore the Platform</Button>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="bg-ink text-paper py-16 md:py-24 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
      
      <div className="col-span-2 lg:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl italic">j</span>
          </div>
          <span className="font-semibold text-2xl tracking-tight text-white">Jem<span className="text-coral">.</span></span>
        </div>
        <p className="text-paper/50 text-sm leading-relaxed max-w-xs mb-8">
          Africa's premier platform for the deskless workforce. Built for enterprise scale, designed for frontline simplicity.
        </p>
        <div className="flex gap-4">
          {/* Social mock placeholders */}
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"><Globe className="w-5 h-5"/></div>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"><Briefcase className="w-5 h-5"/></div>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Platform</h4>
        <ul className="space-y-4 text-sm text-paper/60">
          <li><a href="#" className="hover:text-white transition-colors">Communication</a></li>
          <li><a href="#" className="hover:text-white transition-colors">HR Operations</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Earned Wage Access</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
        <ul className="space-y-4 text-sm text-paper/60">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Legal</h4>
        <ul className="space-y-4 text-sm text-paper/60">
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white transition-colors">PAIA Manual</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Security Policy</a></li>
        </ul>
      </div>

    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-paper/40 text-xs">© {new Date().getFullYear()} Jem HR. All rights reserved.</p>
      <p className="text-paper/40 text-xs flex items-center gap-1">Designed with precision <Zap className="w-3 h-3 text-coral"/></p>
    </div>
  </footer>
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
          <LogoMarquee />
          <ExecReasons />
          <PillarsSection />
          <IntegrationSteps />
          <SocialProof />
          <WhyJemAndSecurity />
          <CTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
}