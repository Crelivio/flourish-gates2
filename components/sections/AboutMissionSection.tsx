import Button from "@/components/ui/Button"
import { ABOUT_MISSION_DATA } from "@/data/aboutMission"

export default function AboutMissionSection() {
  return (
    <section className="relative bg-black py-12 md:py-16 px-4 md:px-6">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wider">
          {ABOUT_MISSION_DATA.heading}
        </p>
        
        <h2 className="text-xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
          {ABOUT_MISSION_DATA.title}
        </h2>
        
        <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
          {ABOUT_MISSION_DATA.description}
        </p>
        
        <Button 
          variant="primary" 
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base"
        >
          {ABOUT_MISSION_DATA.buttonText}
        </Button>
      </div>
    </section>
  )
}
