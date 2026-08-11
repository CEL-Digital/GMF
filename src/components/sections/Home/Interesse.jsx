import { Link } from "react-router-dom";

// Lista de cenários/dores dos clientes
const cenarios = [
  {
    id: "01",
    tag: "Trabalhista",
    pergunta: "Trabalha além da jornada sem receber horas extras ou cumpre funções além do contrato?",
    consequencia: "A falta de registro adequado pode estar gerando perdas financeiras acumuladas mês a mês.",
  },
  {
    id: "02",
    tag: "Consumidor & Cível",
    pergunta: "Teve cobranças indevidas, nome negativado sem aviso ou contratos descumpridos?",
    consequencia: "Muitas vezes a reparação por danos morais e materiais é garantida por lei e negligenciada.",
  },
  {
    id: "03",
    tag: "Família & Sucessões",
    pergunta: "Enfrenta impasse em divórcio, pensão alimentícia ou partilha de bens familiar?",
    consequencia: "Adiar a formalização jurídica aumenta o desgaste emocional e o risco patrimonial.",
  },
  {
    id: "04",
    tag: "Previdenciário",
    pergunta: "Teve um benefício do INSS negado ou o valor da aposentadoria veio menor que o esperado?",
    consequencia: "Erros administrativos do órgão são comuns e podem ser corrigidos via judicial.",
  },
];

export function AlertSection() {
  return (
    <section className="relative w-full bg-zinc-950 py-24 px-6 md:px-12 overflow-hidden border-t border-zinc-800/50">
      
      {/* Efeito Artístico de Luz de Fundo (Glow Effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400 bg-zinc-900 px-4 py-1.5 rounded-full border border-zinc-800">
            Diagnóstico de Situação
          </span>
          
          <h2 className="font-news text-3xl md:text-5xl text-white font-semibold mt-6 leading-tight">
            Você está vivenciando alguma destas <span className="text-zinc-400 italic">situações?</span>
          </h2>
          
          <p className="text-sm text-gray-400 sm:text-base md:text-lg">
            Muitas vezes, a violação de um direito começa de forma sutil. Identificar o cenário correto é o primeiro passo para reaver sua tranquilidade.
          </p>
        </div>

        {/* Grid de Cards de Interesse/Instigação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cenarios.map((item) => (
            <div
              key={item.id}
              className="group relative bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700/80 rounded-3xl p-8 transition-all duration-500 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {item.id}
                  </span>
                  <span className="text-sm font-medium text-gray-400 bg-zinc-800/60 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl text-white font-medium mb-4 leading-snug group-hover:text-blue-200 transition-colors">
                  "{item.pergunta}"
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.consequencia}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800/50 flex items-center gap-2 text-xs text-zinc-400 group-hover:text-white transition-colors">
                <span>Precisa de orientação neste caso?</span>
                <span className="text-blue-400">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de Fechamento / Call to Action sutil */}
        <div className="mt-16 bg-gradient-to-r from-zinc-900/90 via-zinc-900/40 to-zinc-900/90 border border-zinc-800 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-md">
          <h4 className="text-2xl md:text-3xl text-white font-news font-semibold mb-3">
            Se identificou com algum dos cenários acima?
          </h4>
          <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-xl mx-auto">
            O tempo costuma ser um fator determinante no Direito. Quanto antes seu caso for analisado por um especialista, maiores são as chances de preservação dos seus direitos.
          </p>

          <a
            href="https://wa.me/+5511914511407?text=Ol%C3%A1!%20Identifiquei%20minha%20situa%C3%A7%C3%A3o%20no%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-200 transition-all active:scale-95 text-sm shadow-xl"
          >
            Analisar meu caso agora com o advogado
          </a>
        </div>

      </div>
    </section>
  );
}