export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/here-bg.png')",
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Nigeria&apos;s{" "}
          <span className="text-orange-500">Most Trusted</span>
          <br />
          <span className="text-white">Construction Solutions</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A construction company focused on delivering comprehensive
          construction services that ensure innovation, durability, and
          affordability for all your building projects.
        </p>
      </div>
    </section>
  )
}
