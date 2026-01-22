import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import AboutHeroSection from "@/components/sections/AboutHeroSection"
import ProcessSection from "@/components/sections/ProcessSection"
import MissionSection from "@/components/sections/MissionSection"
import LeadershipSection from "@/components/sections/LeadershipSection"
import ServicesSection from "@/components/sections/ServicesSection"
import AboutMissionSection from "@/components/sections/AboutMissionSection"
import FollowJourneySection from "@/components/sections/FollowJourneySection"
import TeamSection from "@/components/sections/TeamSection"
import CTASection from "@/components/sections/CTASection"

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHeroSection />
      <AboutMissionSection />
      <ServicesSection />
      <ProcessSection />
      <FollowJourneySection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}
