import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import TrustedBy from './sections/TrustedBy'
import FeaturesSection from './sections/FeaturesSection'
import TripBuilder from './sections/TripBuilder'
import Destinations from './sections/Destinations'
import Testimonials from './sections/Testimonials'
import PricingSection from './sections/PricingSection'
import FAQSection from './sections/FAQSection'
import CTASection from './sections/CTASection'
import Footer from './sections/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const cursorDot = useRef<HTMLDivElement>(null)
  const cursorRing = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorDot.current) {
        cursorDot.current.style.left = `${e.clientX}px`
        cursorDot.current.style.top = `${e.clientY}px`
      }
      if (cursorRing.current) {
        cursorRing.current.style.left = `${e.clientX}px`
        cursorRing.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
      />

      {/* Custom cursor (desktop only) */}
      <div ref={cursorDot} className="cursor-dot hidden md:block" />
      <div ref={cursorRing} className="cursor-ring hidden md:block" />

      <Navbar isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
      <main>
        <HeroSection isDark={isDark} />
        <TrustedBy isDark={isDark} />
        <FeaturesSection isDark={isDark} />
        <TripBuilder isDark={isDark} />
        <Destinations isDark={isDark} />
        <Testimonials isDark={isDark} />
        <PricingSection isDark={isDark} />
        <FAQSection isDark={isDark} />
        <CTASection isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  )
}
