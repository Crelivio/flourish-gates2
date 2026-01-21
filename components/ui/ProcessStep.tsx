import { ProcessStep as ProcessStepType } from "@/types/process"

interface ProcessStepProps {
  step: ProcessStepType
}

export default function ProcessStep({ step }: ProcessStepProps) {
  const Icon = step.icon
  
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">
          {step.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  )
}
