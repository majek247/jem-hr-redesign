import { Link } from 'react-router-dom'
import { Globe, Briefcase, Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="text-paper py-16 md:py-24"
      style={{ backgroundColor: '#051d2e' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand block */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-coral flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl italic">j</span>
              </div>
              <span className="font-semibold text-2xl tracking-tight text-white">
                Jem<span className="text-coral">.</span>
              </span>
            </Link>
            <p className="text-paper/50 text-sm leading-relaxed max-w-xs mb-8">
              Africa's premier platform for the deskless workforce. Built for enterprise scale, designed for frontline simplicity.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
                <Briefcase className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Platform</h4>
            <ul className="space-y-4 text-sm text-paper/60">
              <li><a href="https://www.jemhr.com/connect/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Connect</a></li>
              <li><a href="https://www.jemhr.com/manage/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Manage</a></li>
              <li><a href="https://www.jemhr.com/reward/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Reward</a></li>
              <li><a href="https://www.jemhr.com/solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Industries</a></li>
            </ul>
          </div>

          {/* Stories */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Stories</h4>
            <ul className="space-y-4 text-sm text-paper/60">
              <li><a href="https://www.jemhr.com/insights/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">News</a></li>
              <li><a href="https://www.jemhr.com/customers/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Case studies</a></li>
              <li><a href="https://www.jemhr.com/testimonials/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="https://www.jemhr.com/deskless-pulse/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Deskless Pulse</a></li>
            </ul>
          </div>

          {/* General */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">General</h4>
            <ul className="space-y-4 text-sm text-paper/60">
              <li><a href="https://www.jemhr.com/about/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About Jem</a></li>
              <li><a href="https://www.jemhr.com/careers/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="https://www.jemhr.com/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://www.jemhr.com/jem-labs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Jem Labs</a></li>
              <li><a href="https://www.jemhr.com/security/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="https://www.jemhr.com/faqs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-paper/40 text-xs">
            © {new Date().getFullYear()} Jem HR. All rights reserved.
          </p>
          <p className="text-paper/40 text-xs flex items-center gap-1">
            Designed with precision <Zap className="w-3 h-3 text-coral" />
          </p>
        </div>

        {/* Attribution */}
        <div className="mt-4 text-center">
          
           <a href="https://www.seo-growup.com/?utm_source=jem-github&utm_medium=referral&utm_campaign=jem-case-study"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper/30 text-[11px] hover:text-paper/50 transition-colors"
          >
            Concept redesign by GrowUp · Not affiliated with Jem HR (Pty) Ltd.
          </a>
        </div>
      </div>
    </footer>
  )
}