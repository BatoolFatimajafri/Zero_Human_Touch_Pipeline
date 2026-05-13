import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PricingSection from '../sections/PricingSection'
import FAQSection from '../sections/FAQSection'
import TripBuilder from '../sections/TripBuilder'
import Navbar from '../components/Navbar'
import { pricingPlans, faqs } from '../data/content'

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...p }: any) => <div {...p}>{children}</div>,
    nav: ({ children, ...p }: any) => <nav {...p}>{children}</nav>,
    h2: ({ children, ...p }: any) => <h2 {...p}>{children}</h2>,
    p: ({ children, ...p }: any) => <p {...p}>{children}</p>,
    ul: ({ children, ...p }: any) => <ul {...p}>{children}</ul>,
    button: ({ children, ...p }: any) => <button {...p}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useInView: () => true,
}))

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar isDark={true} onToggleDark={() => {}} />)
    expect(screen.getByText('Voyana AI')).toBeInTheDocument()
  })

  it('calls onToggleDark when sun/moon button clicked', async () => {
    const toggle = vi.fn()
    render(<Navbar isDark={true} onToggleDark={toggle} />)
    const btn = screen.getByLabelText('Toggle dark mode')
    await userEvent.click(btn)
    expect(toggle).toHaveBeenCalledTimes(1)
  })
})

describe('PricingSection', () => {
  it('renders all three pricing plans', () => {
    render(<PricingSection isDark={true} />)
    pricingPlans.forEach(plan => {
      expect(screen.getByText(plan.name)).toBeInTheDocument()
    })
  })

  it('shows monthly prices by default', () => {
    render(<PricingSection isDark={true} />)
    expect(screen.getByText('Monthly')).toBeInTheDocument()
    // Pro monthly price = $29
    expect(screen.getByText('$29')).toBeInTheDocument()
  })

  it('shows yearly prices after toggling to yearly', async () => {
    render(<PricingSection isDark={true} />)
    const yearlyBtn = screen.getByText('Yearly', { exact: false })
    await userEvent.click(yearlyBtn)
    // Pro yearly price = $19
    expect(screen.getByText('$19')).toBeInTheDocument()
  })

  it('toggles between monthly and yearly correctly', async () => {
    render(<PricingSection isDark={true} />)
    const monthlyBtn = screen.getByRole('button', { name: 'Monthly' })
    const yearlyBtn = screen.getByRole('button', { name: /Yearly/ })

    // Monthly is default
    expect(monthlyBtn).toHaveAttribute('aria-pressed', 'true')

    // Switch to yearly
    await userEvent.click(yearlyBtn)
    expect(yearlyBtn).toHaveAttribute('aria-pressed', 'true')
    expect(monthlyBtn).toHaveAttribute('aria-pressed', 'false')
  })
})

describe('FAQSection', () => {
  it('renders all FAQ questions', () => {
    render(<FAQSection isDark={true} />)
    faqs.forEach(faq => {
      expect(screen.getByText(faq.q)).toBeInTheDocument()
    })
  })

  it('first FAQ is open by default', () => {
    render(<FAQSection isDark={true} />)
    expect(screen.getByText(faqs[0].a)).toBeInTheDocument()
  })

  it('clicking a closed FAQ opens it', async () => {
    render(<FAQSection isDark={true} />)
    const secondBtn = screen.getByRole('button', { name: new RegExp(faqs[1].q) })
    await userEvent.click(secondBtn)
    expect(screen.getByText(faqs[1].a)).toBeInTheDocument()
  })

  it('clicking an open FAQ closes it', async () => {
    render(<FAQSection isDark={true} />)
    // First is open — click it to close
    const firstBtn = screen.getByRole('button', { name: new RegExp(faqs[0].q) })
    await userEvent.click(firstBtn)
    expect(screen.queryByText(faqs[0].a)).not.toBeInTheDocument()
  })
})

describe('TripBuilder', () => {
  it('renders the form', () => {
    render(<TripBuilder isDark={true} />)
    expect(screen.getByPlaceholderText(/Bali, Tokyo, Paris/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Generate My Itinerary/ })).toBeInTheDocument()
  })

  it('shows validation error when destination is empty', async () => {
    render(<TripBuilder isDark={true} />)
    const btn = screen.getByRole('button', { name: /Generate My Itinerary/ })
    await userEvent.click(btn)
    expect(await screen.findByText('Destination is required')).toBeInTheDocument()
  })

  it('shows loading state and then result after valid submit', async () => {
    render(<TripBuilder isDark={true} />)
    const input = screen.getByPlaceholderText(/Bali, Tokyo, Paris/)
    await userEvent.type(input, 'Bali')
    const btn = screen.getByRole('button', { name: /Generate My Itinerary/ })
    await userEvent.click(btn)
    expect(await screen.findByText(/Generating your itinerary/)).toBeInTheDocument()
    expect(await screen.findByTestId('itinerary-result', {}, { timeout: 4000 })).toBeInTheDocument()
  }, 10000)
})
