import Button from "@/components/ui/Button"
import { LEADERSHIP_DATA } from "@/data/leadership"

export default function LeadershipSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6">
              {LEADERSHIP_DATA.title}
            </h2>
            <p className="text-gray-700 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              {LEADERSHIP_DATA.description}
            </p>
            <Button variant="primary" className="text-sm md:text-base px-6 py-2 md:px-8 md:py-3">
              {LEADERSHIP_DATA.buttonText}
            </Button>
          </div>

          <div className="relative h-64 md:h-96">
            <img 
              src={LEADERSHIP_DATA.image}
              alt="Leadership Team"
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
