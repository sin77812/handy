import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import PhilosophySection from '@/components/sections/PhilosophySection'
import ServicesSection from '@/components/sections/ServicesSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProcessSection from '@/components/sections/ProcessSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'
import StickyBottomBar from '@/components/shared/StickyBottomBar'

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <TrustSection />
        <PhilosophySection />
        <ServicesSection />
        <ExperienceSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <StickyBottomBar />
    </>
  )
}