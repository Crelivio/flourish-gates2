import ServiceCard from "@/components/ui/ServiceCard"
import { SERVICES_DATA, SERVICES_CONTENT } from "@/data/services"

export default function ServicesSection() {
  return (
    <section className="bg-black py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-3">{SERVICES_CONTENT.heading}</p>
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            {SERVICES_CONTENT.title.split(' ').slice(0, 2).join(' ')}
            <br />
            {SERVICES_CONTENT.title.split(' ').slice(2).join(' ')}
          </h2>
          <p className="text-gray-400 text-xs md:text-base max-w-2xl mx-auto">
            {SERVICES_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              variant={service.variant}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
