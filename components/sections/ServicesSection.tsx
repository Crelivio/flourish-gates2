import ServiceCard from "@/components/ui/ServiceCard"
import { SERVICES_DATA, SERVICES_CONTENT } from "@/data/services"

export default function ServicesSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm mb-3">{SERVICES_CONTENT.heading}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {SERVICES_CONTENT.title.split(' ').slice(0, 2).join(' ')}
            <br />
            {SERVICES_CONTENT.title.split(' ').slice(2).join(' ')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {SERVICES_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
