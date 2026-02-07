import Button from "@/components/ui/Button"
import { MISSION_DATA } from "@/data/mission"

export default function MissionSection() {
  return (
    <section className="relative min-h-[400px] md:min-h-[600px] py-16 md:py-30 flex items-center justify-center px-4 md:px-6">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${MISSION_DATA.backgroundImage}')`,
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wider">
          {MISSION_DATA.heading}
        </p>
        
        <h2 className="text-lg md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
          {MISSION_DATA.title}
        </h2>
        
        <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
          {MISSION_DATA.description}
        </p>
        
        <a href="https://docs.google.com/forms/d/1u91VlIjineqCjoktgjwDLlOCbIymuv-Xq4zrHhNMyoQ/edit" target="_blank" rel="noopener noreferrer">
          <Button
            variant="primary"
            className="bg-orange-600 hover:bg-orange-700 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base"
          >
            {MISSION_DATA.buttonText}
          </Button>
        </a>
      </div>
    </section>
  )
}
