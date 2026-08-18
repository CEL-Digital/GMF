const heroData = {
  badge: "Direito Criminal",
  title: "Defesa técnica especializada e acompanhamento em urgências criminais",
  subtitle:
    "Atuação firme, discreta e humanizada na preservação de garantias fundamentais, defesas em inquéritos, processos penais e prisões em flagrante.",
  whatsappMessage:
    "Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20consulta%20urgente%20sobre%20Direito%20Criminal.",
};

export function HeroCriminal() {
  return (
    <section id="criminal" className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold text-zinc-600 py-1.5">
          {heroData.badge}
        </span>

        <h1 className="font-news text-3xl md:text-5xl text-zinc-950 font-semibold mt-6 leading-tight">
          {heroData.title}
        </h1>

        <p className="text-zinc-600 text-base mt-6">{heroData.subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <a
            href={`https://wa.me/+5511914511407?text=${heroData.whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-8 py-4 bg-white text-zinc-950 font-semibold rounded-full text-xs shadow-md overflow-hidden group cursor-pointer"
          >
            <span className="absolute inset-0 bg-brand-dark-blue translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-400 z-0"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-400">
              Falar com Advogado Criminalista
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
