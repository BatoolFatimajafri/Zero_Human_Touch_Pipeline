import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Loader2, Sparkles, MapPin, Clock, Utensils, Hotel, Car } from 'lucide-react'

interface TripForm {
  destination: string
  budget: string
  travelers: string
  duration: string
  style: string
}

const travelStyles = ['Adventure', 'Cultural', 'Relaxation', 'Foodie', 'Budget', 'Luxury']

const MOCK_ITINERARY = {
  destination: 'Bali, Indonesia',
  days: [
    { day: 1, title: 'Arrival & Ubud Exploration', activities: ['Check into eco-resort in Ubud', 'Visit Sacred Monkey Forest', 'Sunset at Tegallalang Rice Terraces', 'Dinner at local warung'] },
    { day: 2, title: 'Temples & Culture', activities: ['Sunrise at Mount Batur', 'Tirta Empul holy spring temple', 'Traditional Balinese cooking class', 'Kecak fire dance at Uluwatu'] },
    { day: 3, title: 'Beach & Adventure', activities: ['Surfing lessons at Seminyak', 'Snorkeling at Blue Lagoon', 'Spa treatment at riverside retreat', 'Rooftop dinner in Canggu'] },
  ],
}

export default function TripBuilder({ isDark }: { isDark: boolean }) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<typeof MOCK_ITINERARY | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const { register, handleSubmit, formState: { errors } } = useForm<TripForm>()

  const onSubmit = async (data: TripForm) => {
    setLoading(true)
    setResult(null)
    await new Promise(r => setTimeout(r, 1800))
    setResult({ ...MOCK_ITINERARY, destination: data.destination || 'Bali, Indonesia' })
    setLoading(false)
  }

  return (
    <section id="planner" className={`py-24 px-4 ${isDark ? 'bg-gray-900/30' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Try It Now</span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Build your <span className="gradient-text">perfect trip</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Fill in the details below and watch AI craft your personalized itinerary in seconds.
          </p>
        </motion.div>

        <div className={`rounded-3xl p-6 sm:p-8 ${isDark ? 'bg-gray-900 border border-white/10' : 'bg-white border border-gray-200 shadow-xl'}`}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              {/* Destination */}
              <div className="sm:col-span-2">
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Where do you want to go? *
                </label>
                <input
                  {...register('destination', { required: 'Destination is required' })}
                  placeholder="e.g. Bali, Tokyo, Paris..."
                  className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    isDark ? 'bg-gray-800 border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  } ${errors.destination ? 'border-red-500' : ''}`}
                />
                {errors.destination && <p className="text-red-400 text-xs mt-1">{errors.destination.message}</p>}
              </div>

              {/* Budget */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Budget (per person)</label>
                <select
                  {...register('budget')}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    isDark ? 'bg-gray-800 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'
                  }`}
                >
                  <option value="budget">Budget (under $1,000)</option>
                  <option value="mid">Mid-range ($1,000–$3,000)</option>
                  <option value="luxury">Luxury ($3,000+)</option>
                </select>
              </div>

              {/* Travelers */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Travelers</label>
                <select
                  {...register('travelers')}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    isDark ? 'bg-gray-800 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'
                  }`}
                >
                  {['Solo', '2 people', '3–4 people', 'Family (5+)'].map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Duration</label>
                <select
                  {...register('duration')}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    isDark ? 'bg-gray-800 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'
                  }`}
                >
                  {['Weekend (2–3 days)', '1 week', '2 weeks', '3+ weeks'].map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              {/* Travel style */}
              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Travel Style</label>
                <select
                  {...register('style')}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    isDark ? 'bg-gray-800 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'
                  }`}
                >
                  {travelStyles.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 glow hover:scale-[1.02] active:scale-100 text-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating your itinerary...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate My Itinerary
                </>
              )}
            </button>
          </form>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mt-8 rounded-2xl p-6 border ${isDark ? 'bg-gray-800/50 border-brand-500/20' : 'bg-brand-50 border-brand-200'}`}
                data-testid="itinerary-result"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{result.destination}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>AI-generated {result.days.length}-day itinerary</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {result.days.map((day) => (
                    <div key={day.day} className={`rounded-xl p-4 ${isDark ? 'bg-gray-700/50' : 'bg-white'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-brand-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">Day {day.day}</span>
                        <span className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{day.title}</span>
                      </div>
                      <ul className="space-y-1">
                        {day.activities.map((act, i) => (
                          <li key={i} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            <span className="text-brand-400 mt-0.5">•</span>
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
