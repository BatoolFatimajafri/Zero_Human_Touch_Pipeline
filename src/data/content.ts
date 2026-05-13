export const features = [
  {
    icon: 'Sparkles',
    title: 'AI Itinerary Generation',
    description: 'Get a complete day-by-day travel plan tailored to your interests in under 10 seconds.',
    gradient: 'from-violet-500 to-purple-600',
    large: true,
  },
  {
    icon: 'DollarSign',
    title: 'Budget Optimization',
    description: 'Smart cost breakdowns that stretch every dollar without compromising experience.',
    gradient: 'from-emerald-500 to-teal-600',
    large: false,
  },
  {
    icon: 'MapPin',
    title: 'Local Recommendations',
    description: 'Discover hidden gems curated by AI trained on millions of traveler reviews.',
    gradient: 'from-orange-500 to-rose-600',
    large: false,
  },
  {
    icon: 'Cloud',
    title: 'Weather-Aware Planning',
    description: 'Activities automatically adjusted for forecasted weather conditions.',
    gradient: 'from-sky-500 to-blue-600',
    large: false,
  },
  {
    icon: 'Briefcase',
    title: 'Smart Packing Tips',
    description: 'Destination-specific packing lists updated with real-time weather data.',
    gradient: 'from-amber-500 to-orange-600',
    large: false,
  },
  {
    icon: 'Globe',
    title: 'Multi-City Support',
    description: 'Plan complex multi-destination trips with optimized routing and transit.',
    gradient: 'from-pink-500 to-rose-600',
    large: false,
  },
]

export const destinations = [
  { name: 'Bali', country: 'Indonesia', price: '$1,200', rating: 4.9, emoji: '🌴', color: 'from-emerald-900 to-teal-800' },
  { name: 'Tokyo', country: 'Japan', price: '$2,100', rating: 4.8, emoji: '⛩️', color: 'from-rose-900 to-pink-800' },
  { name: 'Paris', country: 'France', price: '$1,800', rating: 4.9, emoji: '🗼', color: 'from-blue-900 to-indigo-800' },
  { name: 'Dubai', country: 'UAE', price: '$2,500', rating: 4.7, emoji: '🏙️', color: 'from-amber-900 to-orange-800' },
  { name: 'Switzerland', country: 'Europe', price: '$3,200', rating: 5.0, emoji: '🏔️', color: 'from-cyan-900 to-sky-800' },
  { name: 'Istanbul', country: 'Turkey', price: '$900', rating: 4.8, emoji: '🕌', color: 'from-violet-900 to-purple-800' },
]

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Travel Blogger',
    avatar: 'SC',
    rating: 5,
    text: 'Voyana AI planned my entire 2-week Japan trip in minutes. The itinerary was so detailed and perfectly paced — better than any travel agent I\'ve used.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Marcus Williams',
    role: 'Digital Nomad',
    avatar: 'MW',
    rating: 5,
    text: 'I\'ve been traveling full-time for 3 years. Voyana is the first tool that actually understands how to balance budget with experience. Game changer.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Priya Patel',
    role: 'Family Traveler',
    avatar: 'PP',
    rating: 5,
    text: 'Planning with kids used to be a nightmare. Voyana suggested family-friendly activities I never would have found on my own. Worth every penny.',
    color: 'from-orange-500 to-rose-600',
  },
  {
    name: 'Alex Rodriguez',
    role: 'Adventure Seeker',
    avatar: 'AR',
    rating: 5,
    text: 'Asked for an off-the-beaten-path Bali itinerary and got exactly that — zero tourist traps, all authentic experiences. Absolutely blown away.',
    color: 'from-sky-500 to-blue-600',
  },
]

export const pricingPlans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for casual travelers',
    features: ['3 itineraries per month', 'Basic AI suggestions', 'Popular destinations only', 'Email support'],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 19,
    description: 'For frequent travelers',
    features: ['Unlimited itineraries', 'Advanced AI with local insights', 'All 190+ destinations', 'Budget optimization', 'Weather-aware planning', 'Priority support'],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Team',
    monthlyPrice: 79,
    yearlyPrice: 59,
    description: 'For travel agencies & teams',
    features: ['Everything in Pro', 'Up to 10 team members', 'White-label exports', 'API access', 'Custom integrations', 'Dedicated account manager'],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export const faqs = [
  {
    q: 'How does the AI generate my itinerary?',
    a: 'Our AI is trained on millions of traveler reviews, local expert recommendations, and real-time data including weather, events, and prices. It combines your preferences with this data to craft a personalized plan.',
  },
  {
    q: 'Can I customize the generated itinerary?',
    a: 'Absolutely. Every itinerary is a starting point. You can swap activities, adjust timing, add restaurants, or completely regenerate any day with a single click.',
  },
  {
    q: 'How accurate is the pricing information?',
    a: 'Prices are estimates based on average costs updated weekly. We recommend checking final prices with booking platforms, but our estimates are typically within 10–15% accuracy.',
  },
  {
    q: 'Does Voyana AI book flights and hotels?',
    a: 'Currently Voyana focuses on planning — we generate the perfect itinerary and link you to our booking partners for flights, hotels, and experiences at the best rates.',
  },
  {
    q: 'What languages does Voyana AI support?',
    a: 'Voyana AI currently supports English, Spanish, French, German, Japanese, and Mandarin. More languages are being added based on user demand.',
  },
  {
    q: 'Is my travel data private?',
    a: 'Yes. We never sell your personal travel data to third parties. Your itineraries and preferences are encrypted and stored securely. You can delete all your data at any time.',
  },
]

export const stats = [
  { value: '2M+', label: 'Trips Planned' },
  { value: '190+', label: 'Destinations' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '98%', label: 'Satisfaction' },
]

export const trustedBrands = ['Airbnb', 'Booking.com', 'Expedia', 'Skyscanner', 'Tripadvisor', 'Kayak', 'Hostelworld', 'GetYourGuide']
