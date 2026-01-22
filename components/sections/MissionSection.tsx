import Button from "@/components/ui/Button"
import { MISSION_DATA } from "@/data/mission"

export default function MissionSection() {
  return (
    <section className="relative min-h-[600px] py-30 flex items-center justify-center px-6">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${MISSION_DATA.backgroundImage}')`,
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="text-gray-300 text-sm mb-4 uppercase tracking-wider">
          {MISSION_DATA.heading}
        </p>
        
        <h2 className="text-xl md:text-4xl font-bold text-white mb-6 leading-tight">
          {MISSION_DATA.title}
        </h2>
        
        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {MISSION_DATA.description}
        </p>
        
        <Button 
          variant="primary" 
          className="bg-orange-600 hover:bg-orange-700 px-8 py-3"
        >
          {MISSION_DATA.buttonText}
        </Button>
      </div>
    </section>
  )
}
