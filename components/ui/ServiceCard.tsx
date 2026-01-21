import { ServiceCardProps } from "@/types/services"
import Button from "@/components/ui/Button"

export default function ServiceCard({ title, description, image, variant = 'small' }: ServiceCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-zinc-900 ${variant === 'large' ? 'md:col-span-2' : ''}`}>
      <div className={`flex ${variant === 'large' ? 'flex-col md:flex-row' : 'flex-col'}`}>
        {variant === 'large' && (
          <div className="p-8 md:p-12 flex flex-col justify-between flex-1 order-1 md:order-none">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {title}
              </h3>
              <p className="text-white text-sm md:text-base mb-8 max-w-sm">
                {description}
              </p>
            </div>
            <Button variant="glass" className="self-start">
              Get In Touch
            </Button>
          </div>
        )}
        <div className={`relative ${variant === 'large' ? 'md:w-1/2 h-48 md:h-80 order-2 md:order-none' : 'w-full h-48'}`}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        {variant === 'small' && (
          <div className="p-8 md:p-12 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {title}
              </h3>
              <p className="text-white text-sm md:text-base mb-8 max-w-sm">
                {description}
              </p>
            </div>
            <Button variant="glass" className="self-start">
              Get In Touch
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
