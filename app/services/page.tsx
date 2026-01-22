import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ServicesSection from "@/components/sections/ServicesSection"

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}
