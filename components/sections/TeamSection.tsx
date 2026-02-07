import { TEAM_DATA } from "@/data/team"
import TeamMemberCard from "@/components/ui/TeamMemberCard"

export default function TeamSection() {
  return (
    <section id="team" className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 md:mb-4">
            {TEAM_DATA.title}
          </h2>
          <p className="text-gray-600 text-sm md:text-lg">
            {TEAM_DATA.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
          {TEAM_DATA.members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
