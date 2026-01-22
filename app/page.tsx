import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ProcessSection from "@/components/sections/ProcessSection"
import MissionSection from "@/components/sections/MissionSection"
import LeadershipSection from "@/components/sections/LeadershipSection"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <MissionSection />
      <LeadershipSection />
      <Footer />
    </main>
  )
}
