import Image from "next/image"
import { TeamMember } from "@/types/team"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter, FaPhone } from "react-icons/fa6"

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-square mb-4 md:mb-6 overflow-hidden rounded-2xl">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="cursor-pointer object-center transition-transform duration-300 hover:scale-105"
       />
      </div>
      
      <div className="text-center">
        <h3 className="text-lg md:text-1xl font-bold text-black mb-1 md:mb-2">
          {member.name}
        </h3>
        <p className="text-gray-600 text-xs md:text-base mb-3 md:mb-4">
          {member.role}
        </p>
        
        <div className="flex items-center justify-center gap-3 md:gap-4">
          {member.instagram && (
            <a 
              href={member.instagram}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-700 text-sm" />
            </a>
          )}
          
          {member.linkedin && (
            <a 
              href={member.linkedin}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-gray-700 text-sm" />
            </a>
          )}
          {member.contact && (
            <a 
              href={`tel:${member.contact}`}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
            <FaPhone className="text-gray-700 text-sm" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
