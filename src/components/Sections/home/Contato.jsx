import { useState } from "react";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="relative w-full bg-zinc-950 py-28 px-6 md:px-12 overflow-hidden border-t border-zinc-900"
    >
      {/* Luz de fundo sutil para efeito visual */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-blue-900/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-news text-3xl md:text-5xl text-white font-semibold mt-6 leading-tight">
            Pronto para analisar o seu caso com{" "}
            <span className="text-zinc-400 italic">um especialista?</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-4">
            Entre em contato para agendar uma consulta presencial ou um
            atendimento 100% online e seguro.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-15 items-center">
          {/* COLUNA 1: Canais Diretos & Informações */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl text-white font-news font-bold text-center md:text-left">
                Canal Direto no WhatsApp
              </h3>
              <p className="text-zinc-400 text-sm mb-6 text-center md:text-left">
                Resposta rápida para triagem de casos e agendamentos de
                consulta.
              </p>

              <a
                href="https://wa.me/+5511914511407?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20an%C3%A1lise%20de%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-white hover:bg-green-600 text-zinc-900 hover:text-white font-semibold rounded-full text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-950/40"
              >
                <span>Iniciar Conversa Agora</span>
              </a>
            </div>

            {/* Localização */}
            <div className="py-4 border-t border-zinc-800/60">
              <div className="flex items-start">
                <div>
                  <h4 className="text-white text-2xl font-news font-semibold text-center md:text-left">
                    Localização
                  </h4>
                  <p className="text-zinc-400 text-sm mb-6 text-center md:text-left">
                    Venha conhecer nosso escritório localizado em{" "}
                    <strong>São Bernardo do Campo - São Paulo</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-full max-w-2xl mx-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.324468611793!2d-46.55690272462188!3d-23.700104378704737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4232c83568cf%3A0x2b5798134d93f0c0!2sR.%20Ruy%20Barbosa%2C%20133%20-%20Jardim%20Olavo%20Bilac%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009725-780!5e0!3m2!1spt-BR!2sbr!4v1786643995908!5m2!1spt-BR!2sbr"
                    className="w-full aspect-video border-0 rounded-2xl shadow-lg invert-[100%] hue-rotate-180 contrast-[95%]"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA 2: Formulário */}
          <div className="lg:col-span-7">
            <div className="relative px-8 md:px-10 py-4 space-y-6 border-white before:absolute before:inset-y-0 before:left-[2px] before:w-[2px] before:bg-white before:drop-shadow-[0_0_8px_rgba(255,255,255)]">
              <h3 className="text-2xl text-white font-medium mb-2 font-news">
                Envie uma mensagem rápida
              </h3>
              <p className="text-zinc-400 text-sm md:text-base mb-8">
                Preencha os dados abaixo e você será redirecionado para a nossa
                equipe com o seu histórico pronto.
              </p>

              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-news text-white font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Digite seu nome completo"
                    className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-800 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-news text-white font-medium mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-800 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-news text-white font-medium mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="email@email.com"
                    className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-800 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-news text-white font-medium mb-2">
                    Resumo do seu Caso
                  </label>
                  <textarea
                    placeholder="Descreva brevemente o que aconteceu..."
                    className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-800 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold rounded-full text-xs transition-all active:scale-[0.99] shadow-xl mt-2 cursor-pointer"
                >
                  Enviar dados via email →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
