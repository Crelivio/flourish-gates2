import { ProcessSectionData } from "@/types/process"
import { MdOutlineEditNote } from "react-icons/md"
import { FaTools } from "react-icons/fa"
import { HiMiniWrenchScrewdriver } from "react-icons/hi2"

export const PROCESS_DATA: ProcessSectionData = {
  image: "/Image/process.png",
  steps: [
    {
      icon: MdOutlineEditNote,
      title: "Initial Consultation",
      description: "Meet with our experts to discuss your vision, requirements, and project scope."
    },
    {
      icon: FaTools,
      title: "Project Planning",
      description: "Develop a comprehensive strategy tailored to your specific construction needs."
    },
    {
      icon: HiMiniWrenchScrewdriver,
      title: "Project Execution",
      description: "Implement the plan with precision, transparency, and professional management."
    }
  ],
  buttonText: "Request For Consultation"
}
