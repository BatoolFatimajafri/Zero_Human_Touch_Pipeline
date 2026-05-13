import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { destinations } from '../data/content'

export default function Destinations({ isDark }: { isDark: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="destinations" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Destinations</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Most <span className="gradient-text">popular trips</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore the world's most-planned destinations. Every itinerary tailored to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer h-64 bg-gradient-to-br ${dest.color} border ${isDark ? 'border-white/10' : 'border-gray-200'} hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Emoji / image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                {dest.emoji}
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{dest.name}</h3>
                    <p className="text-gray-300 text-sm">{dest.country}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end mb-1">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-sm font-semibold">{dest.rating}</span>
                    </div>
                    <span className="text-brand-300 text-sm font-semibold">{dest.price}</span>
                  </div>
                </div>
              </div>

              {/* Hover CTA */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="glass rounded-xl px-3 py-1.5 flex items-center gap-1 text-sm text-white">
                  Plan trip <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
