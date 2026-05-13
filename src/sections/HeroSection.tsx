import { motion } from 'framer-motion'
import { ArrowRight, Play, MapPin, Calendar, Users, Star } from 'lucide-react'
import { stats } from '../data/content'

const floatingCards = [
  { icon: MapPin, label: 'Bali, Indonesia', sub: '7 days • $1,200', color: 'from-emerald-500/20 to-teal-500/20', delay: 0 },
  { icon: Calendar, label: 'Tokyo Adventure', sub: '10 days • $2,100', color: 'from-rose-500/20 to-pink-500/20', delay: 0.3 },
  { icon: Users, label: '2.4M travelers', sub: 'planned this month', color: 'from-violet-500/20 to-purple-500/20', delay: 0.6 },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function HeroSection({ isDark }: { isDark: boolean }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Rated #1 AI Travel Planner 2025</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
            Plan Your{' '}
            <span className="gradient-text">Dream Trip</span>
            <br />
            With AI
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={item} className={`text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Generate personalized itineraries in seconds based on your budget, style, and travel goals.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-200 glow hover:scale-105">
              Start Planning
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-200 glass hover:scale-105 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto mb-20">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
                <div className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Floating cards */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: card.delay, ease: 'easeInOut' }}
                className={`glass rounded-2xl px-5 py-3 flex items-center gap-3 bg-gradient-to-r ${card.color}`}
              >
                <card.icon className="w-5 h-5 text-brand-400" />
                <div className="text-left">
                  <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{card.label}</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{card.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${isDark ? 'border-white/30' : 'border-gray-400'}`}>
          <div className="w-1 h-3 bg-brand-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
