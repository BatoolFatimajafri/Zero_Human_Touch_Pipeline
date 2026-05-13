import { Plane, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

const navLinks = {
  Product: ['Features', 'Pricing', 'Destinations', 'API'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'GDPR'],
}

export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer className={`border-t ${isDark ? 'border-white/5 bg-gray-950' : 'border-gray-200 bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Plane className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">Voyana AI</span>
            </div>
            <p className={`text-sm leading-relaxed max-w-xs mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              AI-powered travel planning that turns your dream trip into a detailed, personalized itinerary in seconds.
            </p>
            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className={`flex-1 px-4 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-brand-500 ${isDark ? 'bg-gray-800 border-white/10 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`}
              />
              <button className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(navLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className={`font-semibold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className={`text-sm transition-colors hover:text-brand-400 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2025 Voyana AI. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className={`p-2 rounded-lg transition-colors hover:text-brand-400 ${isDark ? 'text-gray-500 hover:bg-white/5' : 'text-gray-400 hover:bg-gray-100'}`}
                aria-label={`Social link ${i + 1}`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
