import { motion } from 'framer-motion'
import { trustedBrands } from '../data/content'

export default function TrustedBy({ isDark }: { isDark: boolean }) {
  const doubled = [...trustedBrands, ...trustedBrands]

  return (
    <section className={`py-16 border-y ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <p className={`text-sm uppercase tracking-widest font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          Trusted by the world's leading travel companies
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <span
              key={i}
              className={`inline-flex items-center justify-center mx-10 text-xl font-bold transition-colors duration-200 hover:text-brand-400 ${
                isDark ? 'text-gray-600 hover:text-brand-400' : 'text-gray-300 hover:text-brand-500'
              }`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
