import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass'
  children: React.ReactNode
}

export default function Button({ variant = 'glass', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer"
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800",
    glass: "border border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 shadow-md hover:shadow-lg"
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
