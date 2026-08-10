import heroBackground from "../../../assets/heroBackground.webp";

export function HeroHome() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <img src={heroBackground} alt="" className="h-full w-full absolute inset-0 object-cover object-top" />
      
      <div className="relative flex max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="font-news text-3xl font-bold tracking-tighter text-white sm:text:5xl md:text-6xl lg:text-7xl">
          Transformando a complexidade do sistema jurídico em segurança e resultados
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-gray-400 sm:text-base md:text-lg">
          Defesa especializada com atendimento humanizado, ético e focado em proteger seus direitos, seu patrimônio e sua família.
        </p>
        
      </div>
    </div>
  )
}