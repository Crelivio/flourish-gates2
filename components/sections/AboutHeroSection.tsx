import Button from "@/components/ui/Button"
import { ABOUT_HERO_DATA } from "@/data/about"

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-10">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${ABOUT_HERO_DATA.backgroundImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
        <p className="text-white text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-wider">
          {ABOUT_HERO_DATA.subtitle}
        </p>
        
        <h1 className="text-xl md:text-5xl font-bold text-white mb-8 md:mb-12 leading-tight max-w-6xl mx-auto">
          <div className="mb-2">{ABOUT_HERO_DATA.title.line1}</div>
          <div className="text-orange-500 mb-2">{ABOUT_HERO_DATA.title.line2}</div>
          <div>{ABOUT_HERO_DATA.title.line3}</div>
        </h1>
        
        <Button variant="glass" className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base">
          {ABOUT_HERO_DATA.buttonText}
        </Button>
      </div>
    </section>
  )
}
