import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection({ isDark }: { isDark: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
  }))

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 via-purple-900/30 to-pink-900/20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-400/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Start free, no credit card needed</span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
            Your next{' '}
            <span className="gradient-text">adventure</span>
            <br />
            starts here.
          </h2>

          <p className={`text-xl mb-10 max-w-lg mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Join over 2 million travelers who plan smarter with Voyana AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all duration-200 glow hover:scale-105">
              Start Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`glass font-bold px-10 py-4 rounded-2xl text-lg transition-all duration-200 hover:scale-105 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Book Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
