import Button from "@/components/ui/Button"
import ProcessStep from "@/components/ui/ProcessStep"
import { PROCESS_DATA } from "@/data/process"

export default function ProcessSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96">
            <img 
              src={PROCESS_DATA.image}
              alt="Construction Process"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            {PROCESS_DATA.steps.map((step, index) => (
              <ProcessStep key={index} step={step} />
            ))}

            <div className="pt-4">
              <Button variant="glass">
                {PROCESS_DATA.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
