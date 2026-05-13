import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, DollarSign, MapPin, Cloud, Briefcase, Globe } from 'lucide-react'
import { features } from '../data/content'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, DollarSign, MapPin, Cloud, Briefcase, Globe,
}

export default function FeaturesSection({ isDark }: { isDark: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Features</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Everything you need to{' '}
            <span className="gradient-text">travel smarter</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            AI-powered features that turn complex travel planning into a 10-second conversation.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                  isDark ? 'bg-gray-900/50 border border-white/5 hover:border-brand-500/30' : 'bg-gray-50 border border-gray-200 hover:border-brand-400/50'
                } ${feature.large ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>

                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-500/20 transition-colors duration-300 pointer-events-none`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
