import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingPlans } from '../data/content'

export default function PricingSection({ isDark }: { isDark: boolean }) {
  const [yearly, setYearly] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Pricing</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className={`text-lg max-w-xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Choose a plan that fits your travel frequency. No hidden fees, cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 glass rounded-2xl p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${!yearly ? 'bg-brand-600 text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`}
              aria-pressed={!yearly}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? 'bg-brand-600 text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`}
              aria-pressed={yearly}
            >
              Yearly
              <span className="bg-emerald-500 text-white text-xs px-1.5 py-0.5 rounded-full">-35%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-7 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-brand-600 to-brand-700 text-white glow scale-105'
                  : isDark ? 'bg-gray-900 border border-white/10 hover:border-brand-500/30' : 'bg-white border border-gray-200 shadow-lg hover:border-brand-400/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${plan.highlighted ? 'text-brand-200' : 'text-brand-400'}`}>
                {plan.name}
              </div>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-black">
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                {plan.monthlyPrice > 0 && (
                  <span className={`text-sm mb-2 ${plan.highlighted ? 'text-brand-200' : isDark ? 'text-gray-400' : 'text-gray-500'}`}>/mo</span>
                )}
              </div>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-brand-200' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {plan.description}
                {yearly && plan.monthlyPrice > 0 && (
                  <span className="block text-emerald-400 font-semibold mt-1">
                    Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                  </span>
                )}
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.highlighted ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-brand-200' : 'text-brand-400'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-white text-brand-700 hover:bg-brand-50'
                    : isDark ? 'bg-brand-600 hover:bg-brand-700 text-white' : 'bg-brand-600 hover:bg-brand-700 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
