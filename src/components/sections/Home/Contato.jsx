import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Monta a mensagem para enviar direto no WhatsApp do escritório
    const texto = `Olá! Me chamo ${form.nome}. ${form.mensagem}`;
    const url = `https://wa.me/+5511914511407?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full bg-zinc-950 py-28 px-6 md:px-12 overflow-hidden border-t border-zinc-900">
      {/* Luz de fundo sutil para efeito visual */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-blue-900/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 bg-zinc-900 px-4 py-1.5 rounded-full border border-zinc-800">
            Atendimento Exclusivo
          </span>
          <h2 className="font-news text-3xl md:text-5xl text-white font-semibold mt-6 leading-tight">
            Pronto para analisar o seu caso com <span className="text-zinc-400 italic">um especialista?</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-4 font-light">
            Entre em contato para agendar uma consulta presencial ou um atendimento 100% online e seguro.
          </p>
        </div>

        {/* Grid Principal: Cartões de Contato + Formulário Direto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUNA 1: Canais Diretos & Informações (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card Principal WhatsApp */}
            <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-900/40 border border-zinc-800 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 blur-2xl rounded-full group-hover:bg-green-500/20 transition-all" />
              
              <span className="inline-block p-3 bg-zinc-800/80 rounded-2xl text-green-400 mb-6">
                💬
              </span>
              <h3 className="text-xl text-white font-medium mb-2">Canal Direto no WhatsApp</h3>
              <p className="text-zinc-400 text-sm font-light mb-6">
                Resposta rápida para triagem de casos e agendamentos de consulta.
              </p>

              <a
                href="https://wa.me/+5511914511407?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20an%C3%A1lise%20de%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-950/40"
              >
                <span>Iniciar Conversa Agora</span>
                <span>→</span>
              </a>
            </div>

            {/* Cards Secundários (Localização / E-mail) */}
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 backdrop-blur-sm space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-xl">📍</span>
                <div>
                  <h4 className="text-white text-sm font-medium">Localização</h4>
                  <p className="text-zinc-400 text-xs mt-1 font-light leading-relaxed">
                    Atendimento presencial com hora marcada e cobertura digital nacional.
                  </p>
                </div>
              </div>

              <div className="border-t border-zinc-800/60 pt-6 flex items-start gap-4">
                <span className="text-xl">✉️</span>
                <div>
                  <h4 className="text-white text-sm font-medium">Atendimento Digital</h4>
                  <p className="text-zinc-400 text-xs mt-1 font-light">
                    contato@gmfadvogados.com.br
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* COLUNA 2: Formulário Inteligente Rápido (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 md:p-10 backdrop-blur-md">
              <h3 className="text-xl text-white font-medium mb-2">Envie uma mensagem rápida</h3>
              <p className="text-zinc-400 text-xs md:text-sm font-light mb-8">
                Preencha os dados abaixo e você será redirecionado para a nossa equipe com o seu histórico pronto.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Digite seu nome completo"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    Resumo do seu Caso
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Descreva brevemente o que aconteceu..."
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold rounded-full text-xs transition-all active:scale-[0.99] shadow-xl mt-2"
                >
                  Enviar dados via WhatsApp →
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}