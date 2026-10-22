import BuyerSection from '../components/BuyerSection.jsx'
import CTA from '../components/CTA.jsx'
import CategorySection from '../components/CategorySection.jsx'
import Hero from '../components/Hero.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import MarketplacePreview from '../components/MarketplacePreview.jsx'
import SafetySection from '../components/SafetySection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <MarketplacePreview />
      <BuyerSection />
      <HowItWorks />
      <SafetySection />
      <CTA />
    </>
  )
}
