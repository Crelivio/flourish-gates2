import { ProcessStep as ProcessStepType } from "@/types/process"

interface ProcessStepProps {
  step: ProcessStepType
}

export default function ProcessStep({ step }: ProcessStepProps) {
  const Icon = step.icon
  
  return (
    <div className="flex gap-3 md:gap-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
      <div>
        <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">
          {step.title}
        </h3>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  )
}
