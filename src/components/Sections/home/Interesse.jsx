import { Link } from "react-router-dom";

export function AlertSection() {
  return (
    <section className="relative w-full bg-zinc-100 text-zinc-900 py-24 px-6 md:px-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="font-news text-3xl md:text-5xl text-zinc-950 font-semibold mt-6 leading-tight">
            Você está vivenciando alguma destas <span className="text-zinc-600 italic">situações?</span>
          </h2>
          
          <p className="text-zinc-600 text-sm md:text-base mt-4">
            Muitas vezes, a violação de um direito começa de forma sutil. Identificar o cenário correto é o primeiro passo para reaver sua tranquilidade.
          </p>
        </div>

        {/* BENTO GRID (Estilo a imagem: cards assimétricos e encaixados) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          
          {/* COLUNA DA ESQUERDA (2 Cards Empilhados) - 6 Colunas */}
          <div className="lg:col-span-6 flex flex-col gap-2">
            
            {/* Card 1: Alto com destaque visual */}
            <div className="flex justify-center bg-white border border-zinc-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-white bg-brand-dark-blue px-3 py-1 rounded-full">
                    Trabalhista
                  </span>
                </div>                
                <h3 className="text-xl md:text-4xl font-news font-bold mb-3">
                  Horas extras não pagas ou desvio de função
                </h3>
                <p className="text-base text-zinc-600">
                  Cumprir jornadas exaustivas ou assumir tarefas superiores sem a devida contraprestação financeira gera acúmulo de prejuízo mês a mês.
                </p>
              </div>
            </div>

            {/* Card 2: Menor */}
            <div className="flex justify-center bg-white border border-zinc-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-white bg-brand-dark-blue px-3 py-1 rounded-full">
                    Consumidor & Cível
                  </span>
                </div>
                <h3 className="text-xl md:text-4xl font-news font-bold mb-3">
                  Negativação indevida e contratos abusivos
                </h3>
                <p className="text-base text-zinc-600">
                  Cobranças não reconhecidas ou nome inserido nos órgãos de proteção ao crédito geram direito à reparação por danos morais.
                </p>
              </div>
            </div>

          </div>

          {/* COLUNA DA DIREITA (2 Cards Empilhados em proporção diferente) - 6 Colunas */}
          <div className="lg:col-span-6 flex flex-col gap-2">
            
            {/* Card 3: Menor na parte superior */}
            <div className="flex justify-center bg-white border border-zinc-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-white bg-brand-dark-blue px-3 py-1 rounded-full">
                    Previdenciário
                  </span>
                </div>
                <h3 className="text-xl md:text-4xl font-news font-bold mb-3">
                  Benefício do INSS negado ou valor incorreto
                </h3>
                <p className="text-base text-zinc-600">
                  Decisões administrativas do INSS frequentemente omitem períodos de contribuição ou cálculos benéficos ao segurado.
                </p>
              </div>
            </div>

            {/* Card 4: Alto com destaque visual */}
            <div className="flex justify-center bg-white border border-zinc-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[280px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-white bg-brand-dark-blue px-3 py-1 rounded-full">
                    Família & Sucessões
                  </span>
                </div>
                <h3 className="text-xl md:text-4xl font-news font-bold mb-3">
                  Divórcio, partilha de bens ou pensão alimentícia
                </h3>
                <p className="text-base text-zinc-600">
                  A falta de formalização e estratégia em conflitos familiares pode resultar em perdas patrimoniais expressivas e desgaste emocional.
                </p>
              </div>
            </div>

          </div>

          {/* BASE: CARD "PLUS" (Ocupa as 12 colunas, igual o último bloco da sua imagem) */}
          <div className="lg:col-span-12 bg-white border border-zinc-200/80 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-left text-xl md:text-4xl font-news font-bold mb-3">
                Entre em contato com a GMF!
              </h3>
              <p className="text-base text-zinc-600 text-left">
                O tempo costuma ser um fator determinante no Direito. <br /> Quanto antes seu caso for analisado por um especialista, maiores são as chances de preservação dos seus direitos.
              </p>
            </div>
            <div>

            <a
              href="https://wa.me/+5511914511407?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20diagn%20%C3%B3stico%20do%20meu%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-4 bg-white text-black font-semibold rounded-full text-xs shadow-md overflow-hidden group cursor-pointer"
            >
              <span className="absolute inset-0 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-400 z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-400">
                Consultar Especialista Agora →
              </span>
            </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}