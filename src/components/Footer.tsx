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
              <li><Link to="/product" className="hover:text-white transition-colors">Communication</Link></li>
              <li><Link to="/product" className="hover:text-white transition-colors">HR Operations</Link></li>
              <li><Link to="/product" className="hover:text-white transition-colors">Earned Wage Access</Link></li>
              <li><Link to="/product" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="/product" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-paper/60">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/customers" className="hover:text-white transition-colors">Customers</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-4 text-sm text-paper/60">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/paia" className="hover:text-white transition-colors">PAIA Manual</Link></li>
              <li><Link to="/security-policy" className="hover:text-white transition-colors">Security Policy</Link></li>
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
      </div>
    </footer>
  )
}