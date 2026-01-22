import { FOLLOW_JOURNEY_DATA } from "@/data/team"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function FollowJourneySection() {
  return (
    <section className="relative py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${FOLLOW_JOURNEY_DATA.backgroundImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-xl md:text-4xl font-bold text-white mb-6 md:mb-8">
          {FOLLOW_JOURNEY_DATA.title}
        </h2>
        
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <a 
            href={FOLLOW_JOURNEY_DATA.instagram}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-base md:text-xl" />
          </a>
          
          <a 
            href={FOLLOW_JOURNEY_DATA.twitter}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-white text-base md:text-xl" />
          </a>
          
          <a 
            href={FOLLOW_JOURNEY_DATA.linkedin}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-white text-base md:text-xl" />
          </a>
        </div>
      </div>
    </section>
  )
}
