import Button from "@/components/ui/Button"
import Image from "next/image"
import { CTA_DATA } from "@/data/cta"

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-[#003366] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              {CTA_DATA.title}
            </h2>
            <p className="text-white/90 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              {CTA_DATA.description}
            </p>
            <a href="https://docs.google.com/forms/d/1u91VlIjineqCjoktgjwDLlOCbIymuv-Xq4zrHhNMyoQ/edit" target="_blank" rel="noopener noreferrer">
              <Button
                variant="glass"
                className="border-2 border-white text-white hover:bg-white/10 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base"
              >
                {CTA_DATA.buttonText}
              </Button>
            </a>
          </div>

          <div className="relative h-48 md:h-80">
            <Image
              src={CTA_DATA.image}
              alt="Meeting with experts"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
