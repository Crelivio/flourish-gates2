import Button from "@/components/ui/Button"
import ProcessStep from "@/components/ui/ProcessStep"
import { PROCESS_DATA } from "@/data/process"

export default function ProcessSection() {
  return (
    <section className="bg-black py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="relative h-48 md:h-96">
            <img 
              src={PROCESS_DATA.image}
              alt="Construction Process"
              className="rounded-2xl md:rounded-3xl w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 md:space-y-8">
            {PROCESS_DATA.steps.map((step, index) => (
              <ProcessStep key={index} step={step} />
            ))}

            <div className="pt-2 md:pt-4">
              <a href="https://docs.google.com/forms/d/1u91VlIjineqCjoktgjwDLlOCbIymuv-Xq4zrHhNMyoQ/edit" target="_blank" rel="noopener noreferrer">
                <Button variant="glass" className="text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                  {PROCESS_DATA.buttonText}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
